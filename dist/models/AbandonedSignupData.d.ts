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
 * Data structure for abandoned WABA signup flow.
 * @export
 * @interface AbandonedSignupData
 */
export interface AbandonedSignupData {
    /**
     * Screen where customer abandoned the flow
     * @type {string}
     * @memberof AbandonedSignupData
     */
    currentStep: string;
}
/**
 * Check if a given object implements the AbandonedSignupData interface.
 */
export declare function instanceOfAbandonedSignupData(value: object): value is AbandonedSignupData;
export declare function AbandonedSignupDataFromJSON(json: any): AbandonedSignupData;
export declare function AbandonedSignupDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbandonedSignupData;
export declare function AbandonedSignupDataToJSON(json: any): AbandonedSignupData;
export declare function AbandonedSignupDataToJSONTyped(value?: AbandonedSignupData | null, ignoreDiscriminator?: boolean): any;
