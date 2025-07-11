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
 * Check if a given object implements the WABASignupSessionRequest interface.
 */
export function instanceOfWABASignupSessionRequest(value) {
    if (!('tenantId' in value) || value['tenantId'] === undefined)
        return false;
    return true;
}
export function WABASignupSessionRequestFromJSON(json) {
    return WABASignupSessionRequestFromJSONTyped(json, false);
}
export function WABASignupSessionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'tenantId': json['tenant_id'],
        'redirectUri': json['redirect_uri'] == null ? undefined : json['redirect_uri'],
        'featureType': json['feature_type'] == null ? undefined : json['feature_type'],
    };
}
export function WABASignupSessionRequestToJSON(json) {
    return WABASignupSessionRequestToJSONTyped(json, false);
}
export function WABASignupSessionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'tenant_id': value['tenantId'],
        'redirect_uri': value['redirectUri'],
        'feature_type': value['featureType'],
    };
}
