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
/**
 * Encrypted flow data from WhatsApp webhook.
 * @export
 * @interface RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData
 */
export interface RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData {
    /**
     *
     * @type {string}
     * @memberof RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData
     */
    encryptedFlowData: string;
    /**
     *
     * @type {string}
     * @memberof RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData
     */
    encryptedAesKey: string;
    /**
     *
     * @type {string}
     * @memberof RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData
     */
    initialVector: string;
}
/**
 * Check if a given object implements the RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData interface.
 */
export declare function instanceOfRagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData(value: object): value is RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData;
export declare function RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowDataFromJSON(json: any): RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData;
export declare function RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData;
export declare function RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowDataToJSON(json: any): RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData;
export declare function RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowDataToJSONTyped(value?: RagagentRagatangaFlowsFlowWebhookHandlerEncryptedFlowData | null, ignoreDiscriminator?: boolean): any;
