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
 * Data structure for successful WABA signup completion.
 * @export
 * @interface SuccessfulSignupData
 */
export interface SuccessfulSignupData {
    /**
     * Customer's business phone number ID
     * @type {string}
     * @memberof SuccessfulSignupData
     */
    phoneNumberId: string;
    /**
     * Customer's WhatsApp Business Account ID
     * @type {string}
     * @memberof SuccessfulSignupData
     */
    wabaId: string;
    /**
     * Customer's business portfolio ID
     * @type {string}
     * @memberof SuccessfulSignupData
     */
    businessId: string;
}
/**
 * Check if a given object implements the SuccessfulSignupData interface.
 */
export declare function instanceOfSuccessfulSignupData(value: object): value is SuccessfulSignupData;
export declare function SuccessfulSignupDataFromJSON(json: any): SuccessfulSignupData;
export declare function SuccessfulSignupDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessfulSignupData;
export declare function SuccessfulSignupDataToJSON(json: any): SuccessfulSignupData;
export declare function SuccessfulSignupDataToJSONTyped(value?: SuccessfulSignupData | null, ignoreDiscriminator?: boolean): any;
