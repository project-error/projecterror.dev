---
id: config_reference
title: Advanced Configuration
sidebar_label: Advanced Configuration
---

NPWD includes a `config.json` file in the root directory that allows for further customization of phone
behaviour. This file is what allows for us to offer framework-agnostic compatibility as well as for multitude
of configuration options depending on your needs. IF you followed the [installation instructions](../start/installation#basic-configuration) , we went over the basic configuration already and has been abstracted from this page.

:::info
Note that all changes to the `config.json` requires a restart of NPWD.
:::

## Export Configuration
To keep the resource as framework agnostic as possible, we occasionally use exports to do certain things for us that would normally require framework dependency.
### PhoneAsItem
Default Configuration:
```json
  {
  "PhoneAsItem": {
    "enabled": false,
    "exportResource": "my-core-resource",
    "exportFunction": "myCheckerFunction"
  },
```
- `"enabled"`
  - If you want to enable the phone as an item. This export needs to return ether `true` or `false`.
- `exportResource`
  - The resource where you have an exported function to check for items.
- `exportFunction`
  - The exported function from the `exportResource` resource.

Example Export:
```lua
exports('myCheckerFunction', function()
    -- Now determine whether NPWD can be opened
    -- True Indicates that NPWD can be opened, if it returns false then NPWD cant be opened.
    return true
end)
```

## Custom phone number format
```json
 "general": {
    "useResourceIntegration": false,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en",
    "showId": false,
    "phoneNumberFormat": "/(\\d{3})(\\d{3})(\\d{4})/"
  },
```

If you wish to change the format of the phone number you can do so with the `phoneNumberFormat`

### Examples
```json
"phoneNumberFormat": "/(\\d{3})(\\d{3})(\\d{4})/"
// Result: 233-134-9533
```
```json
"phoneNumberFormat": "/(\\d{8})"
// Result: 34256475
```