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
import * as runtime from '../runtime';
import type { WABASignupCompleteRequest, WABASignupCompleteResponse, WABASignupSessionRequest, WABASignupSessionResponse, WABATokenExchangeRequest, WABATokenExchangeResponse } from '../models/index';
export interface CompleteWabaSignupWabaSignupCompletePostRequest {
    wABASignupCompleteRequest: WABASignupCompleteRequest;
}
export interface ExchangeTokenWabaSignupExchangeTokenPostRequest {
    wABATokenExchangeRequest: WABATokenExchangeRequest;
}
export interface InitiateWabaSignupWabaSignupInitiatePostRequest {
    wABASignupSessionRequest: WABASignupSessionRequest;
}
export interface WabaSignupDemoWabaSignupDemoGetRequest {
    tenantId?: string;
}
/**
 *
 */
export declare class WabaSignupApi extends runtime.BaseAPI {
    /**
     * Complete WABA signup process and update tenant configuration.  This endpoint processes the signup completion, exchanges tokens, and updates the tenant configuration with the new WABA credentials.
     * Complete Waba Signup
     */
    completeWabaSignupWabaSignupCompletePostRaw(requestParameters: CompleteWabaSignupWabaSignupCompletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WABASignupCompleteResponse>>;
    /**
     * Complete WABA signup process and update tenant configuration.  This endpoint processes the signup completion, exchanges tokens, and updates the tenant configuration with the new WABA credentials.
     * Complete Waba Signup
     */
    completeWabaSignupWabaSignupCompletePost(requestParameters: CompleteWabaSignupWabaSignupCompletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WABASignupCompleteResponse>;
    /**
     * Exchange authorization code for access token.  This endpoint handles the OAuth token exchange with Facebook\'s Graph API.
     * Exchange Token
     */
    exchangeTokenWabaSignupExchangeTokenPostRaw(requestParameters: ExchangeTokenWabaSignupExchangeTokenPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WABATokenExchangeResponse>>;
    /**
     * Exchange authorization code for access token.  This endpoint handles the OAuth token exchange with Facebook\'s Graph API.
     * Exchange Token
     */
    exchangeTokenWabaSignupExchangeTokenPost(requestParameters: ExchangeTokenWabaSignupExchangeTokenPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WABATokenExchangeResponse>;
    /**
     * Initiate WABA signup session.  This endpoint creates a signup session URL for Meta\'s WABA signup flow. It uses the Facebook App configuration to generate the session parameters.
     * Initiate Waba Signup
     */
    initiateWabaSignupWabaSignupInitiatePostRaw(requestParameters: InitiateWabaSignupWabaSignupInitiatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WABASignupSessionResponse>>;
    /**
     * Initiate WABA signup session.  This endpoint creates a signup session URL for Meta\'s WABA signup flow. It uses the Facebook App configuration to generate the session parameters.
     * Initiate Waba Signup
     */
    initiateWabaSignupWabaSignupInitiatePost(requestParameters: InitiateWabaSignupWabaSignupInitiatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WABASignupSessionResponse>;
    /**
     * Serve a demo page for testing WABA Embedded Signup.  This endpoint provides a complete HTML page with the Facebook SDK integration for testing the embedded signup flow.
     * Waba Signup Demo
     */
    wabaSignupDemoWabaSignupDemoGetRaw(requestParameters: WabaSignupDemoWabaSignupDemoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Serve a demo page for testing WABA Embedded Signup.  This endpoint provides a complete HTML page with the Facebook SDK integration for testing the embedded signup flow.
     * Waba Signup Demo
     */
    wabaSignupDemoWabaSignupDemoGet(requestParameters?: WabaSignupDemoWabaSignupDemoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Handle webhook events from Facebook WABA Embedded Signup.  This endpoint receives message events and other notifications from the embedded signup flow.
     * Waba Signup Webhook
     */
    wabaSignupWebhookWabaSignupWebhookPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Handle webhook events from Facebook WABA Embedded Signup.  This endpoint receives message events and other notifications from the embedded signup flow.
     * Waba Signup Webhook
     */
    wabaSignupWebhookWabaSignupWebhookPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
}
