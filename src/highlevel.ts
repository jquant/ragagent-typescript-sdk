/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 High-level convenience wrapper built on top of the auto-generated REST
 client.  It exposes the small subset of methods and types currently used by
 the ragauai frontend so that we can migrate incrementally without having to
 refactor the entire UI in one go.

 NOTE:  This file is *hand-written* (i.e. **not** overwritten by the OpenAPI
 generator) therefore it must live outside of the generator’s output tree and
 must be explicitly exported from `src/index.ts`.
*/

import { Configuration } from './runtime';
import { UiEventsApi } from './apis/index';

//--------------------------------------------------
// Generic helper utilities
//--------------------------------------------------

function buildBaseUrl(url?: string): string {
  // Normalise base url – strip trailing slashes so we can safely append path
  if (!url) {
    return 'http://localhost:8000/mcp-server/mcp';
  }
  return url.replace(/\/+$/, '');
}

function jsonFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  return fetch(input, init).then(async (resp) => {
    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Request failed (${resp.status}): ${text}`);
    }
    return (await resp.json()) as T;
  });
}

//--------------------------------------------------
// Minimal type surface expected by ragauai
//--------------------------------------------------

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant' | string;
  content: any;
  timestamp?: Date | string;
  [key: string]: any;
}

export interface ChatActionResponse {
  success: boolean;
  conversationId?: string;
  mcpSessionId?: string;
  message?: string;
  error?: string;
}

export interface ChatResponse {
  message: any;
  messageId?: string;
}

export interface Tool {
  name: string;
  description?: string;
  parameters?: Record<string, any>;
  [key: string]: any;
}

export interface ToolListResponse {
  success: boolean;
  tools?: Tool[];
  error?: string;
}

// Backwards-compatibility alias – legacy code refers to `ToolInfo`.
export type ToolInfo = Tool;

export interface ToolExecutionResponse {
  success: boolean;
  response?: any;
  error?: string;
}

export interface AgentDetail {
  id: string;
  name?: string;
  [key: string]: any;
}

export interface ConversationSummary {
  id: string;
  startedAt?: string;
  [key: string]: any;
}

export interface HistoricalMessage extends ChatMessage {}

//--------------------------------------------------
// High-level RagAgentClient wrapper (compat shim)
//--------------------------------------------------

export class RagAgentClient {
  private baseUrl: string;
  private config: Configuration;

  constructor(opts: { baseUrl?: string } = {}) {
    this.baseUrl = buildBaseUrl(opts.baseUrl);
    this.config = new Configuration({ basePath: this.baseUrl });
  }

  //----------------------------------------------
  // Tools
  //----------------------------------------------

  /**
   * List all gateway tools – convenience wrapper around
   * POST /api/v1/tools/list_all_tools.
   */
  async listTools(): Promise<{ tools: Tool[]; [key: string]: any }> {
    const url = `${this.baseUrl}/api/v1/tools/list_all_tools`;
    // Some gateways expect POST, others GET – try POST first then fallback.
    try {
      return await jsonFetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return await jsonFetch(url, { method: 'GET' });
    }
  }

  /**
   * Execute a specific MCP tool.
   */
  async callTool(params: { name: string; arguments?: Record<string, any> }): Promise<any> {
    const url = `${this.baseUrl}/api/v1/tools/${encodeURIComponent(params.name)}`;
    return jsonFetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ arguments: params.arguments ?? {} }),
    });
  }

  //----------------------------------------------
  // Resources
  //----------------------------------------------

  async listResources(): Promise<any> {
    const url = `${this.baseUrl}/api/v1/resources/list`;
    return jsonFetch(url, { method: 'GET' });
  }

  async readResource(params: { uri: string }): Promise<any> {
    // There is not yet a formal REST endpoint for reading arbitrary resources.
    // As a temporary solution we proxy the call through the generic `read_resource`
    // tool if it exists; otherwise we throw a clear error so callers can handle
    // the missing functionality gracefully.
    try {
      return await this.callTool({ name: 'read_resource', arguments: { uri: params.uri } });
    } catch (err) {
      throw new Error('readResource() is not supported by the gateway');
    }
  }

  //----------------------------------------------
  // Agent / UI-events helpers
  //----------------------------------------------

  /**
   * Wrapper over POST /ui-events/chat.  It is intentionally lightweight: the
   * caller is responsible for constructing the `userPrompt`.
   */
  async agentDirectMessageTool(params: {
    tenantId: string;
    userPrompt: string;
    conversationId?: string;
    source?: string;
  }): Promise<any> {
    const api = new UiEventsApi(this.config);
    return api.handleUiChatEventUiEventsChatPost({
      uIEventRequest: {
        tenant_id: params.tenantId,
        user_prompt: params.userPrompt,
        conversation_id: params.conversationId ?? '',
        source: params.source ?? 'ui',
      } as any,
    });
  }
}

//--------------------------------------------------
// Convenience helper functions (mirroring legacy SDK)
//--------------------------------------------------

export async function initializeChatSession({
  tenantId,
}: {
  tenantId: string;
}): Promise<ChatActionResponse> {
  const client = new RagAgentClient();
  try {
    // The backend will create / return a conversation id when we send the INIT
    // system command.
    const resp = await client.agentDirectMessageTool({
      tenantId,
      userPrompt: 'SYSTEM_COMMAND: INIT_CHAT_SESSION',
      source: 'init_chat_session',
    });

    return {
      success: true,
      conversationId: resp.conversation_id ?? undefined,
      mcpSessionId: resp.request_id ?? undefined,
      message: 'Chat session initialized',
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message ?? String(err),
    };
  }
}

export async function sendChatMessage({
  message,
  conversationId,
  tenantId,
}: {
  message: string;
  conversationId: string;
  tenantId: string;
}): Promise<ChatResponse> {
  const client = new RagAgentClient();
  const resp = await client.agentDirectMessageTool({
    tenantId,
    conversationId,
    userPrompt: message,
    source: 'ui',
  });

  return {
    message: resp.agent_response ?? resp.content ?? resp.reply ?? '',
    messageId: resp.request_id ?? undefined,
  };
}

export async function listGatewayTools({
  tenantId,
  conversationId,
}: {
  tenantId: string;
  conversationId?: string;
}): Promise<ToolListResponse> {
  const client = new RagAgentClient();
  try {
    const toolsResp = await client.listTools();
    // The new REST wrapper returns the full API response; we unwrap the
    // `result` field if it exists.
    const tools: Tool[] = (toolsResp.result?.tools ?? toolsResp.tools ?? []) as Tool[];
    return { success: true, tools };
  } catch (err: any) {
    return { success: false, error: err?.message ?? String(err) };
  }
}

//--------------------------------------------------
// Aggregated exports to match legacy barrel structure
//--------------------------------------------------


