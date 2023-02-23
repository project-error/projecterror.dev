---
id: qb-core
title: QB-Core Integration
sidebar_label: QB-Core Integration
---

## Dependencies
Below are a list of dependencies, outside of the standard installation, for *NPWD* to work with a *QB-Core* server.
- [qb-npwd](https://github.com/qbcore-framework/qb-npwd)
    - Required for *NPWD* to work with `QB-Core` using the `newPlayer` export.
    - Pre-configured phone as an item.
- [QB-Core](https://github.com/qbcore-framework/qb-core)

### Initial Setup
The following steps are required for `qb-npwd` to function correctly with *NPWD* and `qb-core`. Follow each step exactly as shown.

:::warning 
Failure to adhere to these instructions will result in *NPWD* not working correctly.
:::

1. Adjust the [config.json](https://github.com/project-error/npwd/blob/master/config.json) file in *NPWD* to match the example below.
```json
  "PhoneAsItem": {
    "enabled": true,
    "exportResource": "qb-npwd",
    "exportFunction": "HasPhone"
  },
  "general": {
    "useResourceIntegration": true,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultlanguage": "en"
  },
  "database": {
    "useIdentifierPrefix": false,
    "playerTable": "players",
    "identifierColumn": "citizenid",
    "identifierType": "license",
    "profileQueries": true,
    "phoneNumberColumn": "phone_number"
  },
```
2. Run the `patch.sql`, located in `qb-npwd`, on your database. This will add the `phone_number` column to the `players` table.
3. Verify your resource start order in your `server.cfg` resembles the example found within the [installation](../start/installation#example-final-config) page. 

### Configuration
By default, only the `phone` item in your inventory will allow you to open the phone. You can add/remove phone items in the `config.lua` in `qb-npwd`. 

### Final Notes
 As a reminder, `qb-npwd` will not support any non official versions of [QB-Core](https://github.com/qbcore-framework/qb-core). 
