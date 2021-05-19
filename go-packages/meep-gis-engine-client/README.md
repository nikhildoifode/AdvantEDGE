# Go API client for client

This API allows to control geo-spatial behavior and simulation. <p>**Micro-service**<br>[meep-gis-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-gis-engine) <p>**Type & Usage**<br>Platform runtime interface to control geo-spatial behavior and simulation <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```golang
import "./client"
```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/sandboxname/gis/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AutomationApi* | [**GetAutomationState**](docs/AutomationApi.md#getautomationstate) | **Get** /automation | Get automation state
*AutomationApi* | [**GetAutomationStateByName**](docs/AutomationApi.md#getautomationstatebyname) | **Get** /automation/{type} | Get automation state
*AutomationApi* | [**SetAutomationStateByName**](docs/AutomationApi.md#setautomationstatebyname) | **Post** /automation/{type} | Set automation state
*GeospatialDataApi* | [**DeleteGeoDataByName**](docs/GeospatialDataApi.md#deletegeodatabyname) | **Delete** /geodata/{assetName} | Delete geospatial data
*GeospatialDataApi* | [**GetAssetData**](docs/GeospatialDataApi.md#getassetdata) | **Get** /geodata | Get geospatial data
*GeospatialDataApi* | [**GetGeoDataByName**](docs/GeospatialDataApi.md#getgeodatabyname) | **Get** /geodata/{assetName} | Get geospatial data
*GeospatialDataApi* | [**UpdateGeoDataByName**](docs/GeospatialDataApi.md#updategeodatabyname) | **Post** /geodata/{assetName} | Create/Update geospatial data


## Documentation For Models

 - [AutomationState](docs/AutomationState.md)
 - [AutomationStateList](docs/AutomationStateList.md)
 - [GeoData](docs/GeoData.md)
 - [GeoDataAssetList](docs/GeoDataAssetList.md)
 - [LineString](docs/LineString.md)
 - [Point](docs/Point.md)
 - [GeoDataAsset](docs/GeoDataAsset.md)


## Documentation For Authorization
 Endpoints do not require authorization.


## Author

AdvantEDGE@InterDigital.com
