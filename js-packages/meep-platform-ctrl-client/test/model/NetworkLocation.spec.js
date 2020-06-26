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
 * AdvantEDGE Platform Controller REST API
 * This API is the main Platform Controller API for scenario configuration & sandbox management <p>**Micro-service**<br>[meep-pfm-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-platform-ctrl) <p>**Type & Usage**<br>Platform main interface used by controller software to configure scenarios and manage sandboxes in the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdvantEdgePlatformControllerRestApi);
  }
}(this, function(expect, AdvantEdgePlatformControllerRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NetworkLocation', function() {
      beforeEach(function() {
        instance = new AdvantEdgePlatformControllerRestApi.NetworkLocation();
      });

      it('should create an instance of NetworkLocation', function() {
        // TODO: update the code to test NetworkLocation
        expect(instance).to.be.a(AdvantEdgePlatformControllerRestApi.NetworkLocation);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property netChar (base name: "netChar")', function() {
        // TODO: update the code to test the property netChar
        expect(instance).to.have.property('netChar');
        // expect(instance.netChar).to.be(expectedValueLiteral);
      });

      it('should have the property terminalLinkLatency (base name: "terminalLinkLatency")', function() {
        // TODO: update the code to test the property terminalLinkLatency
        expect(instance).to.have.property('terminalLinkLatency');
        // expect(instance.terminalLinkLatency).to.be(expectedValueLiteral);
      });

      it('should have the property terminalLinkLatencyVariation (base name: "terminalLinkLatencyVariation")', function() {
        // TODO: update the code to test the property terminalLinkLatencyVariation
        expect(instance).to.have.property('terminalLinkLatencyVariation');
        // expect(instance.terminalLinkLatencyVariation).to.be(expectedValueLiteral);
      });

      it('should have the property terminalLinkThroughput (base name: "terminalLinkThroughput")', function() {
        // TODO: update the code to test the property terminalLinkThroughput
        expect(instance).to.have.property('terminalLinkThroughput');
        // expect(instance.terminalLinkThroughput).to.be(expectedValueLiteral);
      });

      it('should have the property terminalLinkPacketLoss (base name: "terminalLinkPacketLoss")', function() {
        // TODO: update the code to test the property terminalLinkPacketLoss
        expect(instance).to.have.property('terminalLinkPacketLoss');
        // expect(instance.terminalLinkPacketLoss).to.be(expectedValueLiteral);
      });

      it('should have the property meta (base name: "meta")', function() {
        // TODO: update the code to test the property meta
        expect(instance).to.have.property('meta');
        // expect(instance.meta).to.be(expectedValueLiteral);
      });

      it('should have the property userMeta (base name: "userMeta")', function() {
        // TODO: update the code to test the property userMeta
        expect(instance).to.have.property('userMeta');
        // expect(instance.userMeta).to.be(expectedValueLiteral);
      });

      it('should have the property cellularPoaConfig (base name: "cellularPoaConfig")', function() {
        // TODO: update the code to test the property cellularPoaConfig
        expect(instance).to.have.property('cellularPoaConfig');
        // expect(instance.cellularPoaConfig).to.be(expectedValueLiteral);
      });

      it('should have the property geoData (base name: "geoData")', function() {
        // TODO: update the code to test the property geoData
        expect(instance).to.have.property('geoData');
        // expect(instance.geoData).to.be(expectedValueLiteral);
      });

      it('should have the property physicalLocations (base name: "physicalLocations")', function() {
        // TODO: update the code to test the property physicalLocations
        expect(instance).to.have.property('physicalLocations');
        // expect(instance.physicalLocations).to.be(expectedValueLiteral);
      });

    });
  });

}));
