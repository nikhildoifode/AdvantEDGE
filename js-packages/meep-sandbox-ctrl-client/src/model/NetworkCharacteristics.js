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
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeSandboxControllerRestApi) {
      root.AdvantEdgeSandboxControllerRestApi = {};
    }
    root.AdvantEdgeSandboxControllerRestApi.NetworkCharacteristics = factory(root.AdvantEdgeSandboxControllerRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworkCharacteristics model module.
   * @module model/NetworkCharacteristics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetworkCharacteristics</code>.
   * Network characteristics object
   * @alias module:model/NetworkCharacteristics
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworkCharacteristics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkCharacteristics} obj Optional instance to populate.
   * @return {module:model/NetworkCharacteristics} The populated <code>NetworkCharacteristics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('latency'))
        obj.latency = ApiClient.convertToType(data['latency'], 'Number');
      if (data.hasOwnProperty('latencyVariation'))
        obj.latencyVariation = ApiClient.convertToType(data['latencyVariation'], 'Number');
      if (data.hasOwnProperty('latencyDistribution'))
        obj.latencyDistribution = ApiClient.convertToType(data['latencyDistribution'], 'String');
      if (data.hasOwnProperty('throughput'))
        obj.throughput = ApiClient.convertToType(data['throughput'], 'Number');
      if (data.hasOwnProperty('throughputDl'))
        obj.throughputDl = ApiClient.convertToType(data['throughputDl'], 'Number');
      if (data.hasOwnProperty('throughputUl'))
        obj.throughputUl = ApiClient.convertToType(data['throughputUl'], 'Number');
      if (data.hasOwnProperty('packetLoss'))
        obj.packetLoss = ApiClient.convertToType(data['packetLoss'], 'Number');
    }
    return obj;
  }

  /**
   * Latency in ms
   * @member {Number} latency
   */
  exports.prototype.latency = undefined;

  /**
   * Latency variation in ms
   * @member {Number} latencyVariation
   */
  exports.prototype.latencyVariation = undefined;

  /**
   * Latency distribution. Can only be set in the Scenario Deployment network characteristics, ignored otherwise. Latency distribution is set for the whole network and applied to every end-to-end traffic flows. Default value is 'Normal' distribution.
   * @member {module:model/NetworkCharacteristics.LatencyDistributionEnum} latencyDistribution
   */
  exports.prototype.latencyDistribution = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by throughputUl and throughputDl
   * @member {Number} throughput
   */
  exports.prototype.throughput = undefined;

  /**
   * Downlink throughput limit in Mbps
   * @member {Number} throughputDl
   */
  exports.prototype.throughputDl = undefined;

  /**
   * Uplink throughput limit in Mbps
   * @member {Number} throughputUl
   */
  exports.prototype.throughputUl = undefined;

  /**
   * Packet loss percentage
   * @member {Number} packetLoss
   */
  exports.prototype.packetLoss = undefined;


  /**
   * Allowed values for the <code>latencyDistribution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LatencyDistributionEnum = {
    /**
     * value: "Normal"
     * @const
     */
    normal: "Normal",

    /**
     * value: "Pareto"
     * @const
     */
    pareto: "Pareto",

    /**
     * value: "Paretonormal"
     * @const
     */
    paretonormal: "Paretonormal",

    /**
     * value: "Uniform"
     * @const
     */
    uniform: "Uniform"
  };

  return exports;

}));