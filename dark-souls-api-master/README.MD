# Dark Souls Api

## Project Description:

The Dark Souls Weapons API is a RESTful web service designed to provide detailed information about weapons from the Dark Souls series. This API allows developers to access data about various weapons, including their attributes, descriptions, and usage details, enabling the creation of apps, websites, or tools that enhance the Dark Souls gaming experience.

## Run

```bash
npm start
```

## Routes

*Root https://localhost:8080/api/weapon*

Retrieve a complete list of weapons from Dark Souls

## Endpoint Structure:

```javascript
/{component}?value={search_value}
```


## Usage Examples:

```javascript
/name?value=Dagger 
```
Returns all daggers.
```javascript
/atl/physical?value=100 
```
Returns all weapons with physical attack greater than 100.

### Notes:

For some components like aotaOnly, specifying a value is not required.
The endpoint accepts all components and subcomponents of weapons, responding based on its internal logic.
When searching by weight, it returns weapons with weight less than the parameter value, as players typically seek the maximum weight fitting their build.
When searching by offensive parameters, the list returns weapons considering the passed parameter as the minimum requirement.
       
## Parameters

+ Limit Parameter

Define the limit of items returned by specifying a numerical value.

Example:

```javascript
/weapons?limit=10
```

This endpoint will return a maximum of 10 weapons.

+ Order Parameter

Orders the list based on the specified value. If ordering by the given parameter is not possible, it defaults to ordering by name.

Example:

```javascript
/weapons?order=physical
```
This endpoint will order the weapons list by physical attack. If a weapon lacks a physical attack value, it will sort by name.

*Other*

```javascript
 /weapons/random
 ```
This endpoint retrieves a random weapon, useful for scenarios such as randomized gameplay runs.
