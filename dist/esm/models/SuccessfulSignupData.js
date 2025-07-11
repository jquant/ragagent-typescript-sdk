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
/**
 * Check if a given object implements the SuccessfulSignupData interface.
 */
export function instanceOfSuccessfulSignupData(value) {
    if (!('phoneNumberId' in value) || value['phoneNumberId'] === undefined)
        return false;
    if (!('wabaId' in value) || value['wabaId'] === undefined)
        return false;
    if (!('businessId' in value) || value['businessId'] === undefined)
        return false;
    return true;
}
export function SuccessfulSignupDataFromJSON(json) {
    return SuccessfulSignupDataFromJSONTyped(json, false);
}
export function SuccessfulSignupDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'phoneNumberId': json['phone_number_id'],
        'wabaId': json['waba_id'],
        'businessId': json['business_id'],
    };
}
export function SuccessfulSignupDataToJSON(json) {
    return SuccessfulSignupDataToJSONTyped(json, false);
}
export function SuccessfulSignupDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'phone_number_id': value['phoneNumberId'],
        'waba_id': value['wabaId'],
        'business_id': value['businessId'],
    };
}
