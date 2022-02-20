---
id: config_reference
title: Advanced Configuration
sidebar_label: Advanced Configuration
---

NPWD includes a `config.json` file in the root directory that allows for further customization of phone
behavior. This file is what allows for us to offer framework-agnostic compatibility as well as for multitude
of configuration options depending on your needs. IF you followed the [installation instructions](../start/installation#basic-configuration) , we went over the basic configuration already and has been abstracted from this page.

## Export Configuration
To keep the resource as framework agnostic as possible, we occassionally use exports to do certain things for us that would normally require framework dependency.
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

## Word Filtering / Blacklisting

Block / filter banned words in some apps like twitter, messaging and marketplace.

Set enabled to true and add blacklisted words to the array like so:

```json
{
  "profanityFilter": {
    "enabled": true,
    "badWords": ["sus", "amogus"]
  }
}
```
This will block these words with asterisks so a message would appear as "\*\*\*sy" instead of "sussy"

## App Configuration
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
This documentation is not yet complete, refer to source code for more information.
:::