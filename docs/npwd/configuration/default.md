---
id: defaults
title: Default configuration settings
sidebar_label: Defaults
---

## All available settings

Here you can find all the available options to configurate NPWD to your liking. Camera, Twitter, Match and more.

### Default configuration

```json
{
  "PhoneAsItem": {
    "enabled": false,
    "exportResource": "my-core-resource",
    "exportFunction": "myCheckerFunction"
  },
  "general": {
    "useResourceIntegration": false,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en",
    "showId": false
  },
  "database": {
    "useIdentifierPrefix": false,
    "playerTable": "users",
    "identifierColumn": "identifier",
    "identifierType": "license",
    "profileQueries": true,
    "phoneNumberColumn": "phone_number"
  },
  "images": {
    "url": "https://api.imgur.com/3/image",
    "type": "imgur",
    "imageEncoding": "jpg",
    "contentType": "multipart/form-data",
    "authorizationPrefix": "Client-ID",
    "useAuthorization": true,
    "returnedDataIndexes": ["data", "link"]
  },
  "imageSafety": {
    "filterUnsafeImageUrls": true,
    "embedUnsafeImages": false,
    "embedUrl": "https://i.example.com/embed",
    "safeImageUrls": [
      "imgur.com",
      "file.glass",
      "dropbox.com",
      "tenor.com",
      "discord.com",
      "discordapp.com",
      "wikipedia.org"
    ]
  },
  "profanityFilter": {
    "enabled": false,
    "badWords": ["esx"]
  },
  "defaultContacts": [],
  "twitter": {
    "showNotifications": true,
    "generateProfileNameFromUsers": true,
    "allowEditableProfileName": true,
    "allowDeleteTweets": true,
    "allowReportTweets": true,
    "allowRetweet": true,
    "characterLimit": 160,
    "newLineLimit": 10,
    "enableAvatars": true,
    "enableEmojis": true,
    "enableImages": true,
    "maxImages": 3
  },
  "match": {
    "generateProfileNameFromUsers": true,
    "allowEditableProfileName": true
  },
  "debug": {
    "level": "error",
    "enabled": true,
    "sentryEnabled": true
  }
}
```

## Configuration explanations

Configuration options explained.

### Images

```json
{
  "images": {
    "url": "https://api.imgur.com/3/image",
    "type": "imgur",
    "imageEncoding": "jpg",
    "contentType": "multipart/form-data",
    "authorizationPrefix": "Client-ID",
    "useAuthorization": true,
    "returnedDataIndexes": ["data", "link"]
  }
}
```

- `"url"`
  - Images taken by camera are uploaded to
- `"type"`
  - Valid values: `imgur`, `unknown`
- `"imageEncoding"`
  - Example values: `jpg`, `png`
- `"contentType"`
  - Sets contentType for request header
- `"authorizationPrefix"`
  - Prefix the Authorization header token
- `"useAuthorization"`
  - Send Authorization header
- `"returnedDataIndexes"`
  - TODO: Explain

### Image safety

```json
{
  "imageSafety": {
    "filterUnsafeImageUrls": true,
    "embedUnsafeImages": false,
    "embedUrl": "https://i.example.com/embed",
    "safeImageUrls": [
      "imgur.com",
      "file.glass",
      "dropbox.com",
      "tenor.com",
      "discord.com",
      "discordapp.com",
      "wikipedia.org"
    ]
  }
}
```

- `"filterUnsafeImageUrls"`: `boolean`
  - Filter out unsafe images
- `"embedUnsafeImages"`: `boolean`
  - Should wrap unsafe images
- `"embedUrl"`: `string`
  - Url to wrap unsafe images with
- `"safeImageUrls"`: `string[]`
  - List of safe urls.

### Word Filtering

```json
{
  "profanityFilter": {
    "enabled": false,
    "badWords": ["esx", "chip"]
  }
}
```

- `"enabled"`: `boolean`
  - Enable the profanity filtering
- `"badWords"`: `string[]`
  - List of banned words which will be filtered

### Twitter

```json
{
  "twitter": {
    "showNotifications": true,
    "generateProfileNameFromUsers": true,
    "allowEditableProfileName": true,
    "allowDeleteTweets": true,
    "allowReportTweets": true,
    "allowRetweet": true,
    "characterLimit": 160,
    "newLineLimit": 10,
    "enableAvatars": true,
    "enableEmojis": true,
    "enableImages": true,
    "maxImages": 3
  }
}
```

- `showNotifications`: `boolean`
  - Whether to show notifications from Twitter or not.
- `generateProfileNameFromUsers`: `boolean`
  - If you want to generate profiles for the players when the phone is initialized.
- `allowEditableProfileName`: `boolean`
  - If you want to allow players to edit their profile name.
- `allowDeleteTweets`: `boolean`
  - Allow players to delete their tweets.
- `allowReportTweets`: `boolean`
  - Allow players to report tweets.
- `allowRetweet`: `boolean`
  - Allow tweets to be retweeted.
- `characterLimit`: `number`
  - The number of characters allowed in a tweet.
- `newLineLimit`: `number`
  - How many new lines a tweet can contain.
- `enableAvatars`: `boolean`
  - If players should be able to change their avatar.
- `enableEmojis`: `boolean`
  - Whether to allow emojis in tweets or not.
- `enableImages`: `boolean`
  - Whether to allow images/media in tweets or not.
- `maxImages`: `number`
  - The max amount of images allowed in a tweet.

### Match

```json
{
  "match": {
    "generateProfileNameFromUsers": true,
    "allowEditableProfileName": true
  }
}
```

- `generateProfileNameFromUsers`: `boolean`
  - If you want to generate profiles for the players when the phone is initialized.
- `allowEditableProfileName`: `boolean`
  - If you want to allow players to edit their profile name.

### Main configuration

#### Default contacts

```json
{
  "defaultContacts": [
    {
      "id": 1,
      "display": "Police",
      "number": "911",
      "avatar": "avatar_url"
    }
  ]
}
```

You can then use the `onMessage` or `onCall` export to listen to actions towards the `number` value.

:::info
More information regarding the main config can be found at [Main configuration](/docs/npwd/configuration/main).
:::
