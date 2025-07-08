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
export interface HistoricalMessage extends ChatMessage {
}
export declare class RagAgentClient {
    private baseUrl;
    private config;
    constructor(opts?: {
        baseUrl?: string;
    });
    /**
     * List all gateway tools – convenience wrapper around
     * POST /api/v1/tools/list_all_tools.
     */
    listTools(): Promise<{
        tools: Tool[];
        [key: string]: any;
    }>;
    /**
     * Execute a specific MCP tool.
     */
    callTool(params: {
        name: string;
        arguments?: Record<string, any>;
    }): Promise<any>;
    listResources(): Promise<any>;
    readResource(params: {
        uri: string;
    }): Promise<any>;
    /**
     * Wrapper over POST /ui-events/chat.  It is intentionally lightweight: the
     * caller is responsible for constructing the `userPrompt`.
     */
    agentDirectMessageTool(params: {
        tenantId: string;
        userPrompt: string;
        conversationId?: string;
        source?: string;
    }): Promise<any>;
}
export declare function initializeChatSession({ tenantId, }: {
    tenantId: string;
}): Promise<ChatActionResponse>;
export declare function sendChatMessage({ message, conversationId, tenantId, }: {
    message: string;
    conversationId: string;
    tenantId: string;
}): Promise<ChatResponse>;
export declare function listGatewayTools({ tenantId, conversationId, }: {
    tenantId: string;
    conversationId?: string;
}): Promise<ToolListResponse>;
