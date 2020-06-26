/*
 * Copyright (c) 2020  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * MEEP Model
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package model

// Network deployment object
type Deployment struct {
	NetChar *NetworkCharacteristics `json:"netChar,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar latency
	InterDomainLatency int32 `json:"interDomainLatency,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar latencyVariation
	InterDomainLatencyVariation int32 `json:"interDomainLatencyVariation,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar throughputUl and throughputDl
	InterDomainThroughput int32 `json:"interDomainThroughput,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar packetLoss
	InterDomainPacketLoss float64 `json:"interDomainPacketLoss,omitempty"`
	// Key/Value Pair Map (string, string)
	Meta map[string]string `json:"meta,omitempty"`
	// Key/Value Pair Map (string, string)
	UserMeta map[string]string `json:"userMeta,omitempty"`
	Domains  []Domain          `json:"domains,omitempty"`
}
