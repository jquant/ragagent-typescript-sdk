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
export interface WebhookVerifyWhatsappWebhookGetRequest {
    hubMode?: string | null;
    hubVerifyToken?: string | null;
    hubChallenge?: string | null;
}
export interface WebhookWhatsappWebhookPostRequest {
    xHubSignature256?: string | null;
}
/**
 *
 */
export declare class WhatsAppApi extends runtime.BaseAPI {
    /**
     * Webhook verification endpoint for WhatsApp.
     * Webhook Verify
     */
    webhookVerifyWhatsappWebhookGetRaw(requestParameters: WebhookVerifyWhatsappWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Webhook verification endpoint for WhatsApp.
     * Webhook Verify
     */
    webhookVerifyWhatsappWebhookGet(requestParameters?: WebhookVerifyWhatsappWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Webhook endpoint to receive WhatsApp messages and flow data.
     * Webhook
     */
    webhookWhatsappWebhookPostRaw(requestParameters: WebhookWhatsappWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Webhook endpoint to receive WhatsApp messages and flow data.
     * Webhook
     */
    webhookWhatsappWebhookPost(requestParameters?: WebhookWhatsappWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
}
