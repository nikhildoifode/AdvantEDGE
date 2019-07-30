/*
 * MEEP Metrics Engine Service REST API
 *
 * Copyright (c) 2019 InterDigital Communications, Inc. All rights reserved. The information provided herein is the proprietary and confidential information of InterDigital Communications, Inc.
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

type LogResponse struct {

	// Pod where the log message is taken from
	Dest string `json:"dest"`

	// Pod where the log message is taken from
	DataType string `json:"dataType"`

	// Pod that originated the metrics logged in the message
	Src string `json:"src"`

	// System time at which the metric was logged
	Timestamp string `json:"timestamp"`

	Data *LogResponseData `json:"data,omitempty"`
}
