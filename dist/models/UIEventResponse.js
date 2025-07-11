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
exports.instanceOfUIEventResponse = instanceOfUIEventResponse;
exports.UIEventResponseFromJSON = UIEventResponseFromJSON;
exports.UIEventResponseFromJSONTyped = UIEventResponseFromJSONTyped;
exports.UIEventResponseToJSON = UIEventResponseToJSON;
exports.UIEventResponseToJSONTyped = UIEventResponseToJSONTyped;
/**
 * Check if a given object implements the UIEventResponse interface.
 */
function instanceOfUIEventResponse(value) {
    if (!('requestId' in value) || value['requestId'] === undefined)
        return false;
    if (!('conversationId' in value) || value['conversationId'] === undefined)
        return false;
    if (!('tenantId' in value) || value['tenantId'] === undefined)
        return false;
    if (!('agentResponse' in value) || value['agentResponse'] === undefined)
        return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function UIEventResponseFromJSON(json) {
    return UIEventResponseFromJSONTyped(json, false);
}
function UIEventResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requestId': json['request_id'],
        'conversationId': json['conversation_id'],
        'tenantId': json['tenant_id'],
        'agentResponse': json['agent_response'],
        'timestamp': json['timestamp'],
        'status': json['status'],
    };
}
function UIEventResponseToJSON(json) {
    return UIEventResponseToJSONTyped(json, false);
}
function UIEventResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'request_id': value['requestId'],
        'conversation_id': value['conversationId'],
        'tenant_id': value['tenantId'],
        'agent_response': value['agentResponse'],
        'timestamp': value['timestamp'],
        'status': value['status'],
    };
}
