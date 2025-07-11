"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Ragagent MCP Gateway
 * Advanced AI-powered conversation management system
 *
 * The version of the OpenAPI document: 0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappFlowsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class WhatsappFlowsApi extends runtime.BaseAPI {
    /**
     * Webhook endpoint for WhatsApp Flow Frequencia Premiada.  This implementation is for development and testing purposes. It doesn\'t actually decrypt the data, but returns valid responses.
     * Frequencia Premiada Webhook
     */
    frequenciaPremiadaWebhookFlowsFrequenciaPremiadaWebhookPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/flows/frequencia-premiada/webhook`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowDataToJSON)(requestParameters['ragagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData']),
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Webhook endpoint for WhatsApp Flow Frequencia Premiada.  This implementation is for development and testing purposes. It doesn\'t actually decrypt the data, but returns valid responses.
     * Frequencia Premiada Webhook
     */
    frequenciaPremiadaWebhookFlowsFrequenciaPremiadaWebhookPost() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.frequenciaPremiadaWebhookFlowsFrequenciaPremiadaWebhookPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.WhatsappFlowsApi = WhatsappFlowsApi;
