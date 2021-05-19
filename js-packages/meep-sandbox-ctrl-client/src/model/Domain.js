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
    define(['ApiClient', 'model/CellularDomainConfig', 'model/NetworkCharacteristics', 'model/Zone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CellularDomainConfig'), require('./NetworkCharacteristics'), require('./Zone'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeSandboxControllerRestApi) {
      root.AdvantEdgeSandboxControllerRestApi = {};
    }
    root.AdvantEdgeSandboxControllerRestApi.Domain = factory(root.AdvantEdgeSandboxControllerRestApi.ApiClient, root.AdvantEdgeSandboxControllerRestApi.CellularDomainConfig, root.AdvantEdgeSandboxControllerRestApi.NetworkCharacteristics, root.AdvantEdgeSandboxControllerRestApi.Zone);
  }
}(this, function(ApiClient, CellularDomainConfig, NetworkCharacteristics, Zone) {
  'use strict';

  /**
   * The Domain model module.
   * @module model/Domain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Domain</code>.
   * Operator domain object
   * @alias module:model/Domain
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Domain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Domain} obj Optional instance to populate.
   * @return {module:model/Domain} The populated <code>Domain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('netChar'))
        obj.netChar = NetworkCharacteristics.constructFromObject(data['netChar']);
      if (data.hasOwnProperty('interZoneLatency'))
        obj.interZoneLatency = ApiClient.convertToType(data['interZoneLatency'], 'Number');
      if (data.hasOwnProperty('interZoneLatencyVariation'))
        obj.interZoneLatencyVariation = ApiClient.convertToType(data['interZoneLatencyVariation'], 'Number');
      if (data.hasOwnProperty('interZoneThroughput'))
        obj.interZoneThroughput = ApiClient.convertToType(data['interZoneThroughput'], 'Number');
      if (data.hasOwnProperty('interZonePacketLoss'))
        obj.interZonePacketLoss = ApiClient.convertToType(data['interZonePacketLoss'], 'Number');
      if (data.hasOwnProperty('meta'))
        obj.meta = ApiClient.convertToType(data['meta'], {'String': 'String'});
      if (data.hasOwnProperty('userMeta'))
        obj.userMeta = ApiClient.convertToType(data['userMeta'], {'String': 'String'});
      if (data.hasOwnProperty('cellularDomainConfig'))
        obj.cellularDomainConfig = CellularDomainConfig.constructFromObject(data['cellularDomainConfig']);
      if (data.hasOwnProperty('zones'))
        obj.zones = ApiClient.convertToType(data['zones'], [Zone]);
    }
    return obj;
  }

  /**
   * Unique domain ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Domain name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Domain type
   * @member {module:model/Domain.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {module:model/NetworkCharacteristics} netChar
   */
  exports.prototype.netChar = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar latency
   * @member {Number} interZoneLatency
   */
  exports.prototype.interZoneLatency = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar latencyVariation
   * @member {Number} interZoneLatencyVariation
   */
  exports.prototype.interZoneLatencyVariation = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar throughputUl and throughputDl
   * @member {Number} interZoneThroughput
   */
  exports.prototype.interZoneThroughput = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar packetLoss
   * @member {Number} interZonePacketLoss
   */
  exports.prototype.interZonePacketLoss = undefined;

  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} meta
   */
  exports.prototype.meta = undefined;

  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} userMeta
   */
  exports.prototype.userMeta = undefined;

  /**
   * @member {module:model/CellularDomainConfig} cellularDomainConfig
   */
  exports.prototype.cellularDomainConfig = undefined;

  /**
   * @member {Array.<module:model/Zone>} zones
   */
  exports.prototype.zones = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "OPERATOR"
     * @const
     */
    OPERATOR: "OPERATOR",

    /**
     * value: "OPERATOR-CELLULAR"
     * @const
     */
    OPERATOR_CELLULAR: "OPERATOR-CELLULAR",

    /**
     * value: "PUBLIC"
     * @const
     */
    PUBLIC: "PUBLIC"
  };

  return exports;

}));