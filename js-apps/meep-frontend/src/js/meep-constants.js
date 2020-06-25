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

// export const HOST_PATH = location.origin;
export const HOST_PATH = 'http://10.3.16.105';

// MEEP types
export const TYPE_CFG = 'CFG';
export const TYPE_EXEC = 'EXEC';

export const PAGE_CONFIGURE = 'PAGE_CONFIGURE';
export const PAGE_EXECUTE = 'PAGE_EXECUTE';
export const PAGE_MONITOR = 'PAGE_MONITOR';
export const PAGE_SETTINGS = 'PAGE_SETTINGS';

// Help URLs
export const MEEP_HELP_PAGE_CFG_URL = 'https://github.com/InterDigitalInc/AdvantEDGE/wiki/configuration-view';
export const MEEP_HELP_PAGE_EXEC_URL = 'https://github.com/InterDigitalInc/AdvantEDGE/wiki/execution-view';
export const MEEP_HELP_PAGE_MON_URL = 'https://github.com/InterDigitalInc/AdvantEDGE/wiki/monitoring-view';
export const MEEP_HELP_PAGE_SET_URL = 'https://github.com/InterDigitalInc/AdvantEDGE/wiki/settings-view';

// MEEP IDs
export const MEEP_TAB_CFG = 'meep-tab-cfg';
export const MEEP_TAB_EXEC = 'meep-tab-exec';
export const MEEP_TAB_MON = 'meep-tab-mon';
export const MEEP_TAB_SET = 'meep-tab-set';
export const MEEP_LBL_SCENARIO_NAME = 'meep-lbl-scenario-name';
export const MEEP_BTN_CANCEL = 'meep-btn-cancel';
export const MEEP_BTN_APPLY = 'meep-btn-apply';

// Dialog IDs
export const MEEP_DLG_NEW_SANDBOX = 'meep-dlg-new-sandbox';
export const MEEP_DLG_NEW_SANDBOX_NAME = 'meep-dlg-new-sandbox-name';
export const MEEP_DLG_DELETE_SANDBOX = 'meep-dlg-delete-sandbox';
export const MEEP_DLG_NEW_SCENARIO = 'meep-dlg-new-scenario';
export const MEEP_DLG_NEW_SCENARIO_NAME = 'meep-dlg-new-scenario-name';
export const MEEP_DLG_SAVE_SCENARIO = 'meep-dlg-save-scenario';
export const MEEP_DLG_SAVE_REPLAY = 'meep-dlg-save-replay';
export const MEEP_DLG_OPEN_SCENARIO = 'meep-dlg-open-scenario';
export const MEEP_DLG_OPEN_SCENARIO_SELECT = 'meep-dlg-open-scenario-select';
export const MEEP_DLG_DEL_SCENARIO = 'meep-dlg-del-scenario';
export const MEEP_DLG_INVALID_SCENARIO = 'meep-dlg-invalid-scenario';
export const MEEP_DLG_EXPORT_SCENARIO = 'meep-dlg-export-scenario';
export const MEEP_DLG_DEPLOY_SCENARIO = 'meep-dlg-deploy-scenario';
export const MEEP_DLG_DEPLOY_SCENARIO_SELECT =
  'meep-dlg-deploy-scenario-select';
export const MEEP_DLG_TERMINATE_SCENARIO = 'meep-dlg-terminate-scenario';
export const MEEP_DLG_CONFIRM = 'meep-dlg-confirm';

// Dialog Types
// CFG
export const IDC_DIALOG_OPEN_SCENARIO = 'IDC_DIALOG_OPEN_SCENARIO';
export const IDC_DIALOG_NEW_SCENARIO = 'IDC_DIALOG_NEW_SCENARIO';
export const IDC_DIALOG_SAVE_SCENARIO = 'IDC_DIALOG_SAVE_SCENARIO';
export const IDC_DIALOG_DELETE_SCENARIO = 'IDC_DIALOG_DELETE_SCENARIO';
export const IDC_DIALOG_EXPORT_SCENARIO = 'IDC_DIALOG_EXPORT_SCENARIO';
// EXEC
export const IDC_DIALOG_NEW_SANDBOX = 'IDC_DIALOG_NEW_SANDBOX';
export const IDC_DIALOG_DELETE_SANDBOX = 'IDC_DIALOG_DELETE_SANDBOX';
export const IDC_DIALOG_DEPLOY_SCENARIO = 'IDC_DIALOG_DEPLOY_SCENARIO';
export const IDC_DIALOG_TERMINATE_SCENARIO = 'IDC_DIALOG_TERMINATE_SCENARIO';
export const IDC_DIALOG_SAVE_REPLAY = 'IDC_DIALOG_SAVE_REPLAY';
// MONITORING
export const IDC_DIALOG_DELETE_DASHBOARD_LIST = 'IDC_DIALOG_DELETE_DASHBOARD_LIST';
// SETTINGS
export const IDC_DIALOG_CLEAR_UI_CACHE = 'IDC_DIALOG_CLEAR_UI_CACHE';

// Configuration page states
export const CFG_STATE_IDLE = 'IDLE';
export const CFG_STATE_NEW = 'NEW';
export const CFG_STATE_LOADED = 'LOADED';

// Configuration page views
export const CFG_VIEW_NETWORK = 'Network';
export const CFG_VIEW_MAP = 'Map';

// Configuration page IDs
export const CFG_VIS = 'cfg-vis';

export const CFG_VIEW_TYPE = 'cfg-view-type';

export const CFG_BTN_NEW_SCENARIO = 'cfg-btn-new-scenario';
export const CFG_BTN_OPEN_SCENARIO = 'cfg-btn-open-scenario';
export const CFG_BTN_SAVE_SCENARIO = 'cfg-btn-save-scenario';
export const CFG_BTN_DEL_SCENARIO = 'cfg-btn-del-scenario';
export const CFG_BTN_IMP_SCENARIO = 'cfg-btn-imp-scenario';
export const CFG_BTN_EXP_SCENARIO = 'cfg-btn-exp-scenario';
export const CFG_BTN_NEW_ELEM = 'cfg-btn-new-elem';
export const CFG_BTN_DEL_ELEM = 'cfg-btn-del-elem';
export const CFG_BTN_CLONE_ELEM = 'cfg-btn-clone-elem';
export const CFG_BTN_SAVE_ELEM = 'cfg-btn-save-elem';

export const CFG_ELEM_TYPE = 'cfg-elem-type';
export const CFG_ELEM_NAME = 'cfg-elem-name';
export const CFG_ELEM_PARENT = 'cfg-elem-parent';
export const CFG_ELEM_IMG = 'cfg-elem-img';
export const CFG_ELEM_GROUP = 'cfg-elem-group';
export const CFG_ELEM_ENV = 'cfg-elem-env';
export const CFG_ELEM_PORT = 'cfg-elem-port';
export const CFG_ELEM_EXT_PORT = 'cfg-elem-ext-port';
export const CFG_ELEM_PROT = 'cfg-elem-prot';
export const CFG_ELEM_GPU_COUNT = 'cfg-elem-gpu-count';
export const CFG_ELEM_GPU_TYPE = 'cfg-elem-gpu-type';
export const CFG_ELEM_PLACEMENT_ID = 'cfg-elem-placement-id';
export const CFG_ELEM_CMD = 'cfg-elem-cmd';
export const CFG_ELEM_ARGS = 'cfg-elem-args';
export const CFG_ELEM_EXTERNAL_CHECK = 'cfg-elem-external-check';
export const CFG_ELEM_MNC = 'cfg-elem-mnc';
export const CFG_ELEM_MCC = 'cfg-elem-mcc';
export const CFG_ELEM_DEFAULT_CELL_ID = 'cfg-elem-default-cell-id';
export const CFG_ELEM_CELL_ID = 'cfg-elem-cell-id';
export const CFG_ELEM_GEO_LOCATION = 'cfg-elem-location';
export const CFG_ELEM_GEO_RADIUS = 'cfg-elem-radius';
export const CFG_ELEM_GEO_PATH = 'cfg-elem-path';
export const CFG_ELEM_GEO_EOP_MODE = 'cfg-elem-eop-mode';
export const CFG_ELEM_GEO_VELOCITY = 'cfg-elem-velocity';
export const CFG_ELEM_CHART_CHECK = 'cfg-elem-chart-check';
export const CFG_ELEM_CHART_LOC = 'cfg-elem-chart-loc';
export const CFG_ELEM_CHART_GROUP = 'cfg-elem-chart-group';
export const CFG_ELEM_CHART_ALT_VAL = 'cfg-elem-chart-alt-val';
export const CFG_ELEM_LATENCY = 'cfg-elem-latency';
export const CFG_ELEM_LATENCY_VAR = 'cfg-elem-latency-var';
export const CFG_ELEM_PKT_LOSS = 'cfg-elem-pkt-loss';
export const CFG_ELEM_THROUGHPUT = 'cfg-elem-throughput';
export const CFG_ELEM_INGRESS_SVC_MAP = 'cfg-elem-ingress-svc-map';
export const CFG_ELEM_EGRESS_SVC_MAP = 'cfg-elem-egress-svc-map';

// Execution page states
export const EXEC_STATE_IDLE = 'IDLE';
export const EXEC_STATE_DEPLOYED = 'DEPLOYED';

// Execution page IDs
export const EXEC_SELECT_SANDBOX = 'exec-select-sandbox';

export const EXEC_BTN_NEW_SANDBOX = 'exec-btn-new-sandbox';
export const EXEC_BTN_DELETE_SANDBOX = 'exec-btn-delete-sandbox';
export const EXEC_BTN_DEPLOY = 'exec-btn-deploy';
export const EXEC_BTN_SAVE_SCENARIO = 'exec-btn-save-scenario';
export const EXEC_BTN_TERMINATE = 'exec-btn-terminate';
export const EXEC_BTN_EVENT = 'exec-btn-event';
export const EXEC_BTN_CONFIG = 'exec-btn-config';
export const EXEC_BTN_MANUAL_REPLAY = 'exec-btn-manual-replay';
export const EXEC_BTN_AUTOMATION = 'exec-btn-automation';
export const EXEC_BTN_AUTO_REPLAY = 'exec-btn-auto-replay';
export const EXEC_BTN_SAVE_REPLAY = 'exec-btn-save-replay';
export const EXEC_BTN_REPLAY_START = 'exec-btn-replay-start';
export const EXEC_BTN_REPLAY_STOP = 'exec-btn-replay-stop';

export const EXEC_EVT_TYPE = 'exec-evt-type';
export const EXEC_EVT_MOB_TARGET = 'exec-evt-mob-target';
export const EXEC_EVT_MOB_DEST = 'exec-evt-mob-dest';
export const EXEC_EVT_NC_TYPE = 'exec-evt-nc-type';
export const EXEC_EVT_NC_NAME = 'exec-evt-nc-name';
export const EXEC_EVT_REPLAY_FILES = 'exec-evt-replay-files';

// Trivia
export const NO_SCENARIO_NAME = 'NO_SCENARIO_NAME_12Q(*&HGHG___--9098';

export const DOMAIN_TYPE_STR = 'OPERATOR';
export const DOMAIN_CELL_TYPE_STR = 'OPERATOR-CELLULAR';
export const PUBLIC_DOMAIN_TYPE_STR = 'PUBLIC';
export const ZONE_TYPE_STR = 'ZONE';
export const COMMON_ZONE_TYPE_STR = 'COMMON';
export const NL_TYPE_STR = 'POA';
export const POA_TYPE_STR = 'POA';
export const POA_CELL_TYPE_STR = 'POA-CELLULAR';
export const DEFAULT_NL_TYPE_STR = 'DEFAULT';
export const UE_TYPE_STR = 'UE';
export const FOG_TYPE_STR = 'FOG';
export const EDGE_TYPE_STR = 'EDGE';
export const CN_TYPE_STR = 'CN';
export const DC_TYPE_STR = 'DC';
export const MEC_SVC_TYPE_STR = 'MEC-SVC';
export const UE_APP_TYPE_STR = 'UE-APP';
export const EDGE_APP_TYPE_STR = 'EDGE-APP';
export const CLOUD_APP_TYPE_STR = 'CLOUD-APP';

export const ELEMENT_TYPE_SCENARIO = 'SCENARIO';
export const ELEMENT_TYPE_OPERATOR = 'OPERATOR';
export const ELEMENT_TYPE_OPERATOR_GENERIC = 'OPERATOR GENERIC';
export const ELEMENT_TYPE_OPERATOR_CELL = 'OPERATOR CELLULAR';
export const ELEMENT_TYPE_ZONE = 'ZONE';
export const ELEMENT_TYPE_POA = 'POA';
export const ELEMENT_TYPE_POA_GENERIC = 'POA GENERIC';
export const ELEMENT_TYPE_POA_CELL = 'POA CELLULAR';
export const ELEMENT_TYPE_DC = 'DISTANT CLOUD';
export const ELEMENT_TYPE_CN = 'CORE NETWORK';
export const ELEMENT_TYPE_EDGE = 'EDGE';
export const ELEMENT_TYPE_FOG = 'FOG';
export const ELEMENT_TYPE_UE = 'UE';
export const ELEMENT_TYPE_MECSVC = 'MEC SERVICE';
export const ELEMENT_TYPE_UE_APP = 'UE APPLICATION';
export const ELEMENT_TYPE_EDGE_APP = 'EDGE APPLICATION';
export const ELEMENT_TYPE_CLOUD_APP = 'CLOUD APPLICATION';

// Default latencies per physical location type
export const DEFAULT_LATENCY_INTER_DOMAIN = 50;
export const DEFAULT_LATENCY_JITTER_INTER_DOMAIN = 10;
export const DEFAULT_THROUGHPUT_INTER_DOMAIN = 1000;
export const DEFAULT_PACKET_LOSS_INTER_DOMAIN = 0;
export const DEFAULT_LATENCY_INTER_ZONE = 6;
export const DEFAULT_LATENCY_JITTER_INTER_ZONE = 2;
export const DEFAULT_THROUGHPUT_INTER_ZONE = 1000;
export const DEFAULT_PACKET_LOSS_INTER_ZONE = 0;
export const DEFAULT_LATENCY_INTRA_ZONE = 5;
export const DEFAULT_LATENCY_JITTER_INTRA_ZONE = 1;
export const DEFAULT_THROUGHPUT_INTRA_ZONE = 1000;
export const DEFAULT_PACKET_LOSS_INTRA_ZONE = 0;
export const DEFAULT_LATENCY_TERMINAL_LINK = 1;
export const DEFAULT_LATENCY_JITTER_TERMINAL_LINK = 1;
export const DEFAULT_THROUGHPUT_TERMINAL_LINK = 1000;
export const DEFAULT_PACKET_LOSS_TERMINAL_LINK = 0;
export const DEFAULT_LATENCY_LINK = 0;
export const DEFAULT_LATENCY_JITTER_LINK = 0;
export const DEFAULT_THROUGHPUT_LINK = 1000;
export const DEFAULT_PACKET_LOSS_LINK = 0;
export const DEFAULT_LATENCY_APP = 0;
export const DEFAULT_LATENCY_JITTER_APP = 0;
export const DEFAULT_THROUGHPUT_APP = 1000;
export const DEFAULT_PACKET_LOSS_APP = 0;
export const DEFAULT_LATENCY_DC = 0;

// GPU Types
export const GPU_TYPE_NVIDIA = 'NVIDIA';

// End-of-path modes
export const GEO_EOP_MODE_LOOP = 'LOOP';
export const GEO_EOP_MODE_REVERSE = 'REVERSE';

// Monitoring Page IDs
export const MON_DASHBOARD_SELECT = 'mon-dashboard-select';
export const MON_DASHBOARD_IFRAME = 'mon-dashboard-iframe';

// Settings Page IDs
export const SET_EXEC_REFRESH_CHECKBOX = 'set-exec-refresh-checkbox';
export const SET_EXEC_REFRESH_INT = 'set-exec-refresh-int';
export const SET_VIS_CFG_CHECKBOX = 'set-vis-cfg-checkbox';
export const SET_VIS_CFG_LABEL = 'VIS Configuration Mode';
export const SET_DASHBOARD_CFG_CHECKBOX = 'set-dashboard-cfg-checkbox';
export const SET_DASHBOARD_CFG_LABEL = 'Show Dashboard Config (Experimental)';
export const SET_RESET_SETTINGS_BUTTON = 'set-reset-settings-btn';

// Logical Scenario types
export const TYPE_SCENARIO = 0;
export const TYPE_DOMAIN = 1;
export const TYPE_ZONE = 2;
export const TYPE_NET_LOC = 3;
export const TYPE_PHY_LOC = 4;
export const TYPE_PROCESS = 5;

// NC Group Prefixes
export const PREFIX_INT_DOM = 'Inter-Domain';
export const PREFIX_INT_ZONE = 'Inter-Zone';
export const PREFIX_INTRA_ZONE = 'Intra-Zone';
export const PREFIX_TERM_LINK = 'Terminal Link';
export const PREFIX_LINK = 'Link';
export const PREFIX_APP = 'Application';

// Types of layout for components
export const MEEP_COMPONENT_TABLE_LAYOUT = 'MEEP_COMPONENT_TABLE_LAYOUT';
export const MEEP_COMPONENT_SINGLE_COLUMN_LAYOUT =
  'MEEP_COMPONENT_SINGLE_COLUMN_LAYOUT';

export const id = label => {
  return '#' + label;
};

export const VIEW_NAME_NONE = 'None';
export const MAP_VIEW = 'Map View';
export const NET_TOPOLOGY_VIEW = 'Network Topology';

export const MOBILITY_EVENT = 'MOBILITY';
export const NETWORK_CHARACTERISTICS_EVENT = 'NETWORK-CHARACTERISTICS-UPDATE';

// Default Map Values
export const DEFAULT_MAP_LATITUDE = 43.73752;
export const DEFAULT_MAP_LONGITUDE = 7.42892;
export const DEFAULT_MAP_ZOOM = 15;

// Default Dashboard list
export const DEFAULT_DASHBOARD_OPTIONS = [
  {
    label: 'None',
    value: ''
  },
  {
    label: 'Network Metrics Point-to-Point',
    value: HOST_PATH + '/grafana/d/1/metrics-dashboard?orgId=1&var-datasource=meep-influxdb&refresh=1s&theme=light<exec><vars>'
  },
  {
    label: 'Network Metrics Aggregation',
    value: HOST_PATH + '/grafana/d/2/metrics-dashboard?orgId=1&var-datasource=meep-influxdb&refresh=1s&theme=light<exec><vars>'
  },
  {
    label: 'Http REST API Logs Aggregation',
    value: HOST_PATH + '/grafana/d/3/metrics-dashboard?orgId=1&var-datasource=meep-influxdb&refresh=1s&theme=light'
  },
  {
    label: 'Http REST API Single Detailed Log',
    value: HOST_PATH + '/grafana/d/4/metrics-dashboard?orgId=1&var-datasource=meep-influxdb&refresh=1d&theme=light'
  }
];
