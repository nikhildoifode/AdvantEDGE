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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdvantEdgeGisEngineRestApi);
  }
}(this, function(expect, AdvantEdgeGisEngineRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdvantEdgeGisEngineRestApi.AutomationApi();
  });

  describe('(package)', function() {
    describe('AutomationApi', function() {
      describe('getAutomationState', function() {
        it('should call getAutomationState successfully', function(done) {
          // TODO: uncomment getAutomationState call and complete the assertions
          /*

          instance.getAutomationState(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgeGisEngineRestApi.AutomationStateList);
            {
              let dataCtr = data.states;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(AdvantEdgeGisEngineRestApi.AutomationState);
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.active).to.be.a('boolean');
                expect(data.active).to.be(false);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAutomationStateByName', function() {
        it('should call getAutomationStateByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getAutomationStateByName call and complete the assertions
          /*
          var type = "type_example";

          instance.getAutomationStateByName(type, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgeGisEngineRestApi.AutomationState);
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.active).to.be.a('boolean');
            expect(data.active).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('setAutomationStateByName', function() {
        it('should call setAutomationStateByName successfully', function(done) {
          // TODO: uncomment, update parameter values for setAutomationStateByName call
          /*
          var type = "type_example";
          var run = true;

          instance.setAutomationStateByName(type, run, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));