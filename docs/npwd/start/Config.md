---
id: config_reference
title: Additional Configuration
sidebar_label: Additional Config
---

NPWD includes a `config.json` file in the root directory that allows for further customization of phone
behavior. This file is what allows for us to offer framework-agnostic compatibility as well as for multitude
of configuration options depending on your needs.

### PhoneAsItem
- `enabled`
  - If you want to enable the phone as an item.
  - `default`: **false**
- `exportResource`
  - The resource where you have an exported function to check for items.
- `exportFunction`
  - The exported function from the `exportResource` resource.


### General

- `useResourceIntegration`
  - Set this to `true` you're running a framework that handles character details (identifier, name, etc) independent.
  - `default`: **false**

### Database

- `useIdentifierPrefix`
  - If you're using a prefix such as `license:` or `discord:` with the identifier.
  - `default`: **false**
- `playerTable`
  - The database table where you store players/characters used with the phone.
  - `default`: **users**
- `identifierColumn`
  - The identifier column from the `playerTable` table.
  - `default`: **identifier**
- `phoneNumberColumn`
  - The phone number column from the `playerTable` table.
  - `default`: **phone_number**

### Twitter
- `showNotifications`
  - Whether to show notifications from Twitter or not.
  - `default`: **true**
- `generateProfileNameFromUsers`:
  - If you want to generate profiles for the players when the phone is initialized.
  - `default`: **true**
- `allowEditableProfileName`
  - If you want to allow players to edit their profile name.
  - `default`: **true**
- `allowDeleteTweets`: 
  - Allow players to delete their tweets.
  - `default`: **true**
- `allowReportTweets`
  - Allow players to report tweets.
  - `default`: **true**
- `characterLimit`
  - The number of characters allowed in a tweet.
  - `default`: **160**
- `newLineLimit`: 
  - How many new lines a tweet can contain.
  - `default`: **10**
- `enableAvatars`
  - If players should be able to change their avatar.
  - `default`: **true**
- `enableEmojis`
  - Whether to allow emojis in tweets or not.
  - `default`: **true**
- `enableImages`
  - Whether to allow images/media in tweets or not.
  - `default`: **true**
- `maxImages`
  - The max amount of images allowed in a tweet.
  - `default`: **true**

### Match
- `generateProfileNameFromUsers`
  - If you want to generate profiles for the players when the phone is initialized.
  - `default`: **true**
- `allowEditableProfileName`
  - If you want to allow players to edit their profile name.
  - `default`: **true**

:::warning
This documentation is not yet complete, refer to source for more information.
:::

