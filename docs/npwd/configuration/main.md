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

### Custom Phone Number
```json
{
  "customPhoneNumber": {
    "enabled": false,
    "exportResource": "number-generator-resource",
    "exportFunction": "generateNumber"
  }
}
```
- `"customPhoneNumber"` 
  - If you want to use your own custom defined phone number generation this needs to be enabled
- `"exportResource"`
  - Resource which has the export
- `"exportFunction"`
  - This export needs to return a unique phone number as a string. NPWD Does not check for duplicate custom phone numbers

### General

```json
{
  "general": {
    "useResourceIntegration": false,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en"
    "showId": false
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
- `"showId"`
  - Show the source of the player in the notifiation bar

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
  - This _should_ be a [unique](https://www.mysqltutorial.org/mysql-unique-constraint/) column
- `"identifierType"`
  - Ranges from the following: `steam`, `license`, `xbl`, `ip`, `discord` and `live`.
- `"profileQueries"`
  - Provides useful debug information about the time it took to get data from the database.
- `"phoneNumberColumn"`
  - The column where phone numbers are stored.
  - As of v1.03, you need to create this yourself. See the [sql file](https://github.com/project-error/npwd/blob/13335e98d55ea7a082bf08c7c17f24866658a2d1/import.sql#L3) for an example query.

### Default contacts

```json
{
  "defaultContacts": [
    { "display": "Contact", "number": "xxx-xxx", "avatar": "somelink.com" },
    { "display": "911", "number": "911" }
  ]
}
```

Contains an array of contacts which will be prepended to every request to parse user contacts.

:::caution
This includes any apps that parse user contacts, if you experience any inconveniences please do not use this option.
:::

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
