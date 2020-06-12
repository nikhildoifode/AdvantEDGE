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
 * AdvantEDGE GIS Engine REST API
 * This API allows to control geo-spatial behavior and simulation. <p>**Micro-service**<br>[meep-gis-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-gis-engine) <p>**Type & Usage**<br>Platform runtime interface to control geo-spatial behavior and simulation <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/GeoData', 'model/LineString', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoData'), require('./LineString'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeGisEngineRestApi) {
      root.AdvantEdgeGisEngineRestApi = {};
    }
    root.AdvantEdgeGisEngineRestApi.GeoDataAsset = factory(root.AdvantEdgeGisEngineRestApi.ApiClient, root.AdvantEdgeGisEngineRestApi.GeoData, root.AdvantEdgeGisEngineRestApi.LineString, root.AdvantEdgeGisEngineRestApi.Point);
  }
}(this, function(ApiClient, GeoData, LineString, Point) {
  'use strict';

  /**
   * The GeoDataAsset model module.
   * @module model/GeoDataAsset
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GeoDataAsset</code>.
   * List of geospatial data
   * @alias module:model/GeoDataAsset
   * @class
   * @implements module:model/GeoData
   */
  var exports = function() {
    GeoData.call(this);
  };

  /**
   * Constructs a <code>GeoDataAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoDataAsset} obj Optional instance to populate.
   * @return {module:model/GeoDataAsset} The populated <code>GeoDataAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      GeoData.constructFromObject(data, obj);
      if (data.hasOwnProperty('assetName'))
        obj.assetName = ApiClient.convertToType(data['assetName'], 'String');
      if (data.hasOwnProperty('assetType'))
        obj.assetType = ApiClient.convertToType(data['assetType'], 'String');
      if (data.hasOwnProperty('subType'))
        obj.subType = ApiClient.convertToType(data['subType'], 'String');
    }
    return obj;
  }

  /**
   * Name of geospatial asset
   * @member {String} assetName
   */
  exports.prototype.assetName = undefined;

  /**
   * Asset type
   * @member {module:model/GeoDataAsset.AssetTypeEnum} assetType
   */
  exports.prototype.assetType = undefined;

  /**
   * Asset sub-type
   * @member {module:model/GeoDataAsset.SubTypeEnum} subType
   */
  exports.prototype.subType = undefined;

  // Implement GeoData interface:
  /**
   * @member {module:model/Point} location
   */
  exports.prototype.location = undefined;

  /**
   * Optional - Radius (in meters) around the location
   * @member {Number} radius
   */
  exports.prototype.radius = undefined;

  /**
   * @member {module:model/LineString} path
   */
  exports.prototype.path = undefined;

  /**
   * End-of-Path mode: <li>LOOP: When path endpoint is reached, start over from the beginning <li>REVERSE: When path endpoint is reached, return on the reverse path
   * @member {module:model/GeoData.EopModeEnum} eopMode
   */
  exports.prototype.eopMode = undefined;

  /**
   * Speed of movement along path in m/s
   * @member {Number} velocity
   */
  exports.prototype.velocity = undefined;


  /**
   * Allowed values for the <code>assetType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AssetTypeEnum = {
    /**
     * value: "UE"
     * @const
     */
    UE: "UE",

    /**
     * value: "POA"
     * @const
     */
    POA: "POA",

    /**
     * value: "COMPUTE"
     * @const
     */
    COMPUTE: "COMPUTE"
  };


  /**
   * Allowed values for the <code>subType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubTypeEnum = {
    /**
     * value: "UE"
     * @const
     */
    UE: "UE",

    /**
     * value: "POA"
     * @const
     */
    POA: "POA",

    /**
     * value: "POA-CELLULAR"
     * @const
     */
    POA_CELLULAR: "POA-CELLULAR",

    /**
     * value: "EDGE"
     * @const
     */
    EDGE: "EDGE",

    /**
     * value: "FOG"
     * @const
     */
    FOG: "FOG",

    /**
     * value: "CLOUD"
     * @const
     */
    CLOUD: "CLOUD"
  };

  return exports;

}));
