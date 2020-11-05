/*
 * AdvantEDGE Radio Network Information Service REST API
 *
 * Radio Network Information Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC012 RNI API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/012/02.01.01_60/gs_MEC012v020101p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-rnis](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-rnis) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about radio conditions in the network <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package server

type AllOfbodyNotificationSubscription struct {
	Links *CaReconfSubscriptionLinks `json:"_links,omitempty"`
	// URI selected by the service consumer, to receive notifications on the subscribed RNIS information. This shall be included in the request and response.
	CallbackReference string `json:"callbackReference"`

	ExpiryDeadline *TimeStamp `json:"expiryDeadline,omitempty"`

	FilterCriteriaQci *RabModSubscriptionFilterCriteriaQci `json:"filterCriteriaQci"`
	// Shall be set to \"S1BearerSubscription\".
	SubscriptionType string `json:"subscriptionType"`

	FilterCriteriaAssocTri *MeasRepUeSubscriptionFilterCriteriaAssocTri `json:"filterCriteriaAssocTri"`

	FilterCriteriaNrMrs *NrMeasRepUeSubscriptionFilterCriteriaNrMrs `json:"filterCriteriaNrMrs"`

	FilterCriteriaAssoc *CaReconfSubscriptionFilterCriteriaAssoc `json:"filterCriteriaAssoc"`

	S1BearerSubscriptionCriteria *S1BearerSubscriptionS1BearerSubscriptionCriteria `json:"S1BearerSubscriptionCriteria"`
	// Description of the subscribed event. The event is included both in the request and in the response. \\nFor the eventType, the following values are currently defined: 0 = RESERVED. 1 = S1_BEARER_ESTABLISH. 2 = S1_BEARER_MODIFY. 3 = S1_BEARER_RELEASE.
	EventType []string `json:"eventType"`

	FilterCriteriaAssocHo *CellChangeSubscriptionFilterCriteriaAssocHo `json:"filterCriteriaAssocHo"`
}
