---
id: esx
title: ESX Integration
sidebar_label: ESX Integration
---

:::warning
ESX is **very** end of life and shouldn't be used. However, if you insist on doing so please use Overextended's [ESX](https://github.com/overextended/es_extended). NPWD is already integrated with it and it's actively maintained. The original repository has no active maintainers and this is the most reliable fork to date.
:::

## Dependencies
Below are a list of dependencies, outside of the standard installation, for *NPWD* to work with *QB-Core*
- [esx-npwd](https://github.com/overextended/esx-npwd)
    - Required for the resource to work with the framework.
    - Uses the `newPlayer` export.
- [ESX](https://github.com/overextended/es_extended)
    - While `esx-npwd` may work on other esx versions, this is the best version to use.

### Configuration
You will need to adjust the `config.json` file to match the example below. This is required for `esx-npwd` to function correctly. This is located within the root of your `npwd` folder. See [here](https://github.com/project-error/npwd/blob/master/config.json).

```json
  "general": {
    "useResourceIntegration": true,
    "toggleKey": "f1",
    "toggleCommand": "phone"
  },
  "database": {
    "useIdentifierPrefix": false,
    "playerTable": "users",
    "identifierColumn": "identifier",
    "identifierType": "license",
    "profileQueries": true,
    "phoneNumberColumn": "phone_number"
  },
```

### Final Notes
Be sure your `server.cfg` resembled the example found within the [installation](../start/installation#example-final-config) page. As a reminder, `esx-npwd` may not work on older versions so be sure to use Overextended's [ESX](https://github.com/overextended/es_extended).
