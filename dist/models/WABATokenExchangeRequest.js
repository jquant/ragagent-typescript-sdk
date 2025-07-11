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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfWABATokenExchangeRequest = instanceOfWABATokenExchangeRequest;
exports.WABATokenExchangeRequestFromJSON = WABATokenExchangeRequestFromJSON;
exports.WABATokenExchangeRequestFromJSONTyped = WABATokenExchangeRequestFromJSONTyped;
exports.WABATokenExchangeRequestToJSON = WABATokenExchangeRequestToJSON;
exports.WABATokenExchangeRequestToJSONTyped = WABATokenExchangeRequestToJSONTyped;
/**
 * Check if a given object implements the WABATokenExchangeRequest interface.
 */
function instanceOfWABATokenExchangeRequest(value) {
    if (!('clientId' in value) || value['clientId'] === undefined)
        return false;
    if (!('clientSecret' in value) || value['clientSecret'] === undefined)
        return false;
    if (!('code' in value) || value['code'] === undefined)
        return false;
    return true;
}
function WABATokenExchangeRequestFromJSON(json) {
    return WABATokenExchangeRequestFromJSONTyped(json, false);
}
function WABATokenExchangeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'clientId': json['client_id'],
        'clientSecret': json['client_secret'],
        'code': json['code'],
        'redirectUri': json['redirect_uri'] == null ? undefined : json['redirect_uri'],
    };
}
function WABATokenExchangeRequestToJSON(json) {
    return WABATokenExchangeRequestToJSONTyped(json, false);
}
function WABATokenExchangeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'client_id': value['clientId'],
        'client_secret': value['clientSecret'],
        'code': value['code'],
        'redirect_uri': value['redirectUri'],
    };
}
