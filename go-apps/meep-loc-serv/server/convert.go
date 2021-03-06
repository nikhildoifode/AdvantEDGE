/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package server

import (
	"encoding/json"

	log "github.com/InterDigitalInc/AdvantEDGE/go-packages/meep-logger"
)

func convertJsonToUserInfo(jsonInfo string) *UserInfo {

	var userInfo UserInfo
	err := json.Unmarshal([]byte(jsonInfo), &userInfo)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &userInfo
}

func convertJsonToZoneInfo(jsonInfo string) *ZoneInfo {

	var zoneInfo ZoneInfo
	err := json.Unmarshal([]byte(jsonInfo), &zoneInfo)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &zoneInfo
}

func convertJsonToAccessPointInfo(jsonInfo string) *AccessPointInfo {

	var apInfo AccessPointInfo
	err := json.Unmarshal([]byte(jsonInfo), &apInfo)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &apInfo
}

func convertUserInfoToJson(userInfo *UserInfo) string {

	jsonInfo, err := json.Marshal(*userInfo)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertZoneInfoToJson(zoneInfo *ZoneInfo) string {

	jsonInfo, err := json.Marshal(*zoneInfo)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertAccessPointInfoToJson(apInfo *AccessPointInfo) string {

	jsonInfo, err := json.Marshal(*apInfo)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertZoneStatusSubscriptionToJson(zonalSubs *ZoneStatusSubscription) string {

	jsonInfo, err := json.Marshal(*zonalSubs)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertJsonToZoneStatusSubscription(jsonInfo string) *ZoneStatusSubscription {

	var zonal ZoneStatusSubscription
	err := json.Unmarshal([]byte(jsonInfo), &zonal)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &zonal
}

func convertZonalSubscriptionToJson(zonalSubs *ZonalTrafficSubscription) string {

	jsonInfo, err := json.Marshal(*zonalSubs)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertJsonToZonalSubscription(jsonInfo string) *ZonalTrafficSubscription {

	var zonal ZonalTrafficSubscription
	err := json.Unmarshal([]byte(jsonInfo), &zonal)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &zonal
}

func convertUserSubscriptionToJson(userSubs *UserTrackingSubscription) string {

	jsonInfo, err := json.Marshal(*userSubs)
	if err != nil {
		log.Error(err.Error())
		return ""
	}

	return string(jsonInfo)
}

func convertJsonToUserSubscription(jsonInfo string) *UserTrackingSubscription {

	var user UserTrackingSubscription
	err := json.Unmarshal([]byte(jsonInfo), &user)
	if err != nil {
		log.Error(err.Error())
		return nil
	}
	return &user
}

func convertStringToOperationStatus(opStatus string) OperationStatus {

	switch opStatus {
	case "Serviceable":
		return SERVICEABLE
	case "Unserviceable":
		return UNSERVICEABLE
	default:
		return OPSTATUS_UNKNOWN
	}
}

func convertStringToConnectionType(conType string) ConnectionType {

	switch conType {
	case "Femto":
		return FEMTO
	case "LTE-femto":
		return LTE_FEMTO
	case "Smallcell":
		return SMALLCELL
	case "LTE-smallcell":
		return LTE_SMALLCELL
	case "Wifi":
		return WIFI
	case "Pico":
		return PICO
	case "Micro":
		return MICRO
	case "Macro":
		return MACRO
	case "Wimax":
		return WIMAX
	default:
		return CONTYPE_UNKNOWN
	}
}
