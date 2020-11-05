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
 * AdvantEDGE Radio Network Information Service Subscription Notifications REST API
 *
 * Radio Network Information Service Subscription Notification is AdvantEDGE's implementation of [ETSI MEC ISG MEC012 RNI API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/012/02.01.01_60/gs_MEC012v020101p.pdf) notifications. <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-rnis](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-rnis) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about radio conditions in the network <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client
// Trigger : As defined in Ref ETSI TS 136 331 [i.7] <p>0 = NOT_AVAILABLE <p>1 = PERIODICAL_REPORT_STRONGEST_CELLS <p>2 = PERIODICAL_REPORT_STRONGEST_CELLS_FOR_SON <p>3 = PERIODICAL_REPORT_CGI <p>4 = INTRA_PERIODICAL_REPORT_STRONGEST_CELLS <p>5 = INTRA_PERIODICAL_REPORT_CGI <p>10 = EVENT_A1 <p>11 = EVENT_A2 <p>12 = EVENT_A3 <p>13 = EVENT_A4 <p>14 = EVENT_A5 <p>15 = EVENT_A6 <p>20 = EVENT_B1 <p>21 = EVENT_B2 <p>20 = EVENT_B1-NR <p>21 = EVENT_B2-NR <p>30 = EVENT_C1 <p>31 = EVENT_C2 <p>40 = EVENT_W1 <p>41 = EVENT_W2 <p>42 = EVENT_W3 <p>50 = EVENT_V1 <p>51 = EVENT_V2 <p>60 = EVENT_H1 <p>61 = EVENT_H2
type Trigger string

// List of Trigger
const (
	_0__Trigger Trigger = "0"
	_1__Trigger Trigger = "1"
	_2__Trigger Trigger = "2"
	_3__Trigger Trigger = "3"
	_4__Trigger Trigger = "4"
	_5__Trigger Trigger = "5"
	_10__Trigger Trigger = "10"
	_11__Trigger Trigger = "11"
	_12__Trigger Trigger = "12"
	_13__Trigger Trigger = "13"
	_14__Trigger Trigger = "14"
	_15__Trigger Trigger = "15"
	_20__Trigger Trigger = "20"
	_21__Trigger Trigger = "21"
	_20nr__Trigger Trigger = "20"
	_21nr_Trigger Trigger = "21"
	_30__Trigger Trigger = "30"
	_31__Trigger Trigger = "31"
	_40__Trigger Trigger = "40"
	_41__Trigger Trigger = "41"
	_42__Trigger Trigger = "42"
	_50__Trigger Trigger = "50"
	_51__Trigger Trigger = "51"
	_60__Trigger Trigger = "60"
	_61__Trigger Trigger = "61"
)
