---
id: main
title: Main configuration
sidebar_label: Configuration file
---

### Introduction to configurating NPWD

This contains the main config for customizing NPWD. Below you will find **main** configuration options. The config options are displayed with their default values.

If you're using a older version than the latest some of these might not be in your config yet. You can just add them manually.

:::info
You can find a lot more available configuration options under [defaults](/docs/npwd/configuration/defaults).
:::

### PhoneAsItem

```json
{
  "PhoneAsItem": {
    "enabled": false,
    "exportResource": "my-core-resource",
    "exportFunction": "myCheckerFunction"
  }
}
```

- `"PhoneAsItem"`
  - If you want to enable the phone as an item. This export needs to return ether true or false
- `"exportResource"`
  - Resource which has the export
- `"exportFunction"`
  - This export needs to return ether true or false

### General

```json
{
  "general": {
    "useResourceIntegration": false,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en"
  }
}
```

- `"useResourceIntegration"`
  - If you are using a framework. `esx` / `qb-core`
- `"toggleKey"`
  - Key to open / close the phone
- `"toggleCommand"`
  - Command to open / close the phone
- `"defaultLanguage"`
  - Initial language for the phone. This can be changed by the user

### Database

```json
{
  "database": {
    "useIdentifierPrefix": false,
    "playerTable": "users",
    "identifierColumn": "identifier",
    "identifierType": "license",
    "profileQueries": true,
    "phoneNumberColumn": "phone_number"
  }
}
```

- `"useIdentifierPrefix"`
  - The prefix is referring to the text before the colon when obtaining identifiers.
  - If your database uses license:XXXXXXXXXXXXXXXXXXXXXXXXXXX set this to true. Otherwise, set it to false.
  - This is only used when "useResourceIntegration" is set to false.
- `"playerTable"`
  - The table in which your user information is stored.
  - REQUIRED COLUMNS: id, identifier, phone_number
- `"identifierColumn"`
  - Identifier can't be the ID column.
- `"identifierType"`
  - Ranges from the following: `steam`, `license`, `xbl`, `ip`, `discord` and `live`.
- `"profileQueries"`
  - Provides useful debug information about the time it took to get data from the database.
- `"phoneNumberColumn"`
  - The column where phone numbers are stored.
  - As of v1.03, you need to create this yourself. See the [sql file](https://github.com/project-error/npwd/blob/13335e98d55ea7a082bf08c7c17f24866658a2d1/import.sql#L3) for an example query.

### Debug

```json
{
  "debug": {
    "level": "error",
    "enabled": true,
    "sentryEnabled": true
  }
}
```

- `"level"`
  - Valid values: `error`, `silly`
- `"enabled"`
  - Valid values: `true`, `false`
- `"sentryEnabled"`
  - Valid values: `true`, `false`

:::info
Check out the [default](/docs/npwd/configuration/defaults) configuration options.
:::
