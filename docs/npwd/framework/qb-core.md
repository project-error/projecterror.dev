---
id: qb-core
title: QB-Core Integration
sidebar_label: QB-Core Integration
---

## Dependencies
Below are a list of depdencies, outside of the standard installation, for *NPWD* to work with *QB-Core*
- [qb-npwd](https://github.com/qbcore-framework/qb-npwd)
    - Required for the resource to work with the framework.
    - Uses the `newPlayer` export.
- [QB-Core](https://github.com/qbcore-framework/qb-core)

### Configuration
You will need to adjust the `config.json` file to match the example below. This is required for `qb-npwd` to function correctly. This is located within the root of your `npwd` folder. See [here](https://github.com/project-error/npwd/blob/master/config.json).

```json
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

### Final Notes
Be sure your `server.cfg` resembled the example found within the [installation](../start/installation#example-final-config) page. As a reminder, `qb-npwd` will not support any non official versions of [QB-Core](https://github.com/qbcore-framework/qb-core). 
