
---
id: qb-core
title: QB-Core Integration
sidebar_label: QB-Core Integration
---

## Dependencies
Below are a list of dependencies, outside of the standard installation, for *NPWD* to work with a *QB-Core* server.
- [qb-npwd](https://github.com/qbcore-framework/qb-npwd)
    - Required for `npwd` to work with the `QB-Core` using the `newPlayer` export
    - PhoneAsItem support
- [QB-Core](https://github.com/qbcore-framework/qb-core)

### Initial Setup
The following steps are required for `qb-npwd` to function correctly with `npwd` and `qb-core`. Follow each step exactly as shown.

1. Adjust the `config.json` file in `npwd` to match the example below *exactly*.
```json
  "PhoneAsItem": {
    "enabled": true,
    "exportResource": "qb-npwd",
    "exportFunction": "HasPhone"
  },
  "general": {
    "useResourceIntegration": true,
    "toggleKey": "f1",
    "toggleCommand": "phone"
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
2. Run the `patch.sql` on your database. This will add the `phone_number` column to the `players` table.
3. Verify your resource start order in your `server.cfg` resembles the example found within the [installation](../start/installation#example-final-config) page. 

### Configuration
By default, only the `phone` item in your inventory will allow you to open the phone. You can add/remove phone items in the `config.lua` in `qb-npwd`. 

### Final Notes
 As a reminder, `qb-npwd` will not support any non official versions of [QB-Core](https://github.com/qbcore-framework/qb-core). 
