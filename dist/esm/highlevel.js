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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Configuration } from './runtime';
import { UiEventsApi } from './apis/index';
//--------------------------------------------------
// Generic helper utilities
//--------------------------------------------------
function buildBaseUrl(url) {
    // Normalise base url – strip trailing slashes so we can safely append path
    if (!url) {
        return 'http://localhost:8000/mcp-server/mcp';
    }
    return url.replace(/\/+$/, '');
}
function jsonFetch(input, init) {
    return fetch(input, init).then((resp) => __awaiter(this, void 0, void 0, function* () {
        if (!resp.ok) {
            const text = yield resp.text();
            throw new Error(`Request failed (${resp.status}): ${text}`);
        }
        return (yield resp.json());
    }));
}
//--------------------------------------------------
// High-level RagAgentClient wrapper (compat shim)
//--------------------------------------------------
export class RagAgentClient {
    constructor(opts = {}) {
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
    listTools() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/api/v1/tools/list_all_tools`;
            // Some gateways expect POST, others GET – try POST first then fallback.
            try {
                return yield jsonFetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' } });
            }
            catch (err) {
                return yield jsonFetch(url, { method: 'GET' });
            }
        });
    }
    /**
     * Execute a specific MCP tool.
     */
    callTool(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = `${this.baseUrl}/api/v1/tools/${encodeURIComponent(params.name)}`;
            return jsonFetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ arguments: (_a = params.arguments) !== null && _a !== void 0 ? _a : {} }),
            });
        });
    }
    //----------------------------------------------
    // Resources
    //----------------------------------------------
    listResources() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/api/v1/resources/list`;
            return jsonFetch(url, { method: 'GET' });
        });
    }
    readResource(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // There is not yet a formal REST endpoint for reading arbitrary resources.
            // As a temporary solution we proxy the call through the generic `read_resource`
            // tool if it exists; otherwise we throw a clear error so callers can handle
            // the missing functionality gracefully.
            try {
                return yield this.callTool({ name: 'read_resource', arguments: { uri: params.uri } });
            }
            catch (err) {
                throw new Error('readResource() is not supported by the gateway');
            }
        });
    }
    //----------------------------------------------
    // Agent / UI-events helpers
    //----------------------------------------------
    /**
     * Wrapper over POST /ui-events/chat.  It is intentionally lightweight: the
     * caller is responsible for constructing the `userPrompt`.
     */
    agentDirectMessageTool(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const api = new UiEventsApi(this.config);
            return api.handleUiChatEventUiEventsChatPost({
                uIEventRequest: {
                    tenant_id: params.tenantId,
                    user_prompt: params.userPrompt,
                    conversation_id: (_a = params.conversationId) !== null && _a !== void 0 ? _a : '',
                    source: (_b = params.source) !== null && _b !== void 0 ? _b : 'ui',
                },
            });
        });
    }
}
//--------------------------------------------------
// Convenience helper functions (mirroring legacy SDK)
//--------------------------------------------------
export function initializeChatSession(_a) {
    return __awaiter(this, arguments, void 0, function* ({ tenantId, }) {
        var _b, _c, _d;
        const client = new RagAgentClient();
        try {
            // The backend will create / return a conversation id when we send the INIT
            // system command.
            const resp = yield client.agentDirectMessageTool({
                tenantId,
                userPrompt: 'SYSTEM_COMMAND: INIT_CHAT_SESSION',
                source: 'init_chat_session',
            });
            return {
                success: true,
                conversationId: (_b = resp.conversation_id) !== null && _b !== void 0 ? _b : undefined,
                mcpSessionId: (_c = resp.request_id) !== null && _c !== void 0 ? _c : undefined,
                message: 'Chat session initialized',
            };
        }
        catch (err) {
            return {
                success: false,
                error: (_d = err === null || err === void 0 ? void 0 : err.message) !== null && _d !== void 0 ? _d : String(err),
            };
        }
    });
}
export function sendChatMessage(_a) {
    return __awaiter(this, arguments, void 0, function* ({ message, conversationId, tenantId, }) {
        var _b, _c, _d, _e;
        const client = new RagAgentClient();
        const resp = yield client.agentDirectMessageTool({
            tenantId,
            conversationId,
            userPrompt: message,
            source: 'ui',
        });
        return {
            message: (_d = (_c = (_b = resp.agent_response) !== null && _b !== void 0 ? _b : resp.content) !== null && _c !== void 0 ? _c : resp.reply) !== null && _d !== void 0 ? _d : '',
            messageId: (_e = resp.request_id) !== null && _e !== void 0 ? _e : undefined,
        };
    });
}
export function listGatewayTools(_a) {
    return __awaiter(this, arguments, void 0, function* ({ tenantId, conversationId, }) {
        var _b, _c, _d, _e;
        const client = new RagAgentClient();
        try {
            const toolsResp = yield client.listTools();
            // The new REST wrapper returns the full API response; we unwrap the
            // `result` field if it exists.
            const tools = ((_d = (_c = (_b = toolsResp.result) === null || _b === void 0 ? void 0 : _b.tools) !== null && _c !== void 0 ? _c : toolsResp.tools) !== null && _d !== void 0 ? _d : []);
            return { success: true, tools };
        }
        catch (err) {
            return { success: false, error: (_e = err === null || err === void 0 ? void 0 : err.message) !== null && _e !== void 0 ? _e : String(err) };
        }
    });
}
//--------------------------------------------------
// Aggregated exports to match legacy barrel structure
//--------------------------------------------------
