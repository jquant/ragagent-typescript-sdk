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

import { mapValues } from '../runtime';
/**
 * Request model for tool execution
 * @export
 * @interface ToolExecutionRequest
 */
export interface ToolExecutionRequest {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ToolExecutionRequest
     */
    arguments?: { [key: string]: any; };
}

/**
 * Check if a given object implements the ToolExecutionRequest interface.
 */
export function instanceOfToolExecutionRequest(value: object): value is ToolExecutionRequest {
    return true;
}

export function ToolExecutionRequestFromJSON(json: any): ToolExecutionRequest {
    return ToolExecutionRequestFromJSONTyped(json, false);
}

export function ToolExecutionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ToolExecutionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'arguments': json['arguments'] == null ? undefined : json['arguments'],
    };
}

export function ToolExecutionRequestToJSON(json: any): ToolExecutionRequest {
    return ToolExecutionRequestToJSONTyped(json, false);
}

export function ToolExecutionRequestToJSONTyped(value?: ToolExecutionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'arguments': value['arguments'],
    };
}

