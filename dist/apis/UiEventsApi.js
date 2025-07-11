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
exports.UiEventsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class UiEventsApi extends runtime.BaseAPI {
    /**
     * Handle UI chat events via service
     * Handle Ui Chat Event
     */
    handleUiChatEventUiEventsChatPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['uIEventRequest'] == null) {
                throw new runtime.RequiredError('uIEventRequest', 'Required parameter "uIEventRequest" was null or undefined when calling handleUiChatEventUiEventsChatPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/ui-events/chat`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.UIEventRequestToJSON)(requestParameters['uIEventRequest']),
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
     * Handle UI chat events via service
     * Handle Ui Chat Event
     */
    handleUiChatEventUiEventsChatPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.handleUiChatEventUiEventsChatPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.UiEventsApi = UiEventsApi;
