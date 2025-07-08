"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappFlowsApi = exports.WhatsappFlowApi = exports.Whatsapp0Api = exports.WhatsAppApi = void 0;
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AgentApi"), exports);
__exportStar(require("./CicApi"), exports);
__exportStar(require("./HealthApi"), exports);
__exportStar(require("./MCPApi"), exports);
__exportStar(require("./McpApiApi"), exports);
__exportStar(require("./RootApi"), exports);
__exportStar(require("./UiEventsApi"), exports);
__exportStar(require("./WabaSignupApi"), exports);
// Export WhatsApp APIs with aliases to avoid conflicts
var WhatsAppApi_1 = require("./WhatsAppApi");
Object.defineProperty(exports, "WhatsAppApi", { enumerable: true, get: function () { return WhatsAppApi_1.WhatsAppApi; } });
var Whatsapp0Api_1 = require("./Whatsapp0Api");
Object.defineProperty(exports, "Whatsapp0Api", { enumerable: true, get: function () { return Whatsapp0Api_1.WhatsappApi; } });
var WhatsappFlowApi_1 = require("./WhatsappFlowApi");
Object.defineProperty(exports, "WhatsappFlowApi", { enumerable: true, get: function () { return WhatsappFlowApi_1.WhatsappFlowApi; } });
var WhatsappFlowsApi_1 = require("./WhatsappFlowsApi");
Object.defineProperty(exports, "WhatsappFlowsApi", { enumerable: true, get: function () { return WhatsappFlowsApi_1.WhatsappFlowsApi; } });
