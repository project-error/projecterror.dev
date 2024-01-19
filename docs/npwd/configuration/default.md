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
  "customPhoneNumber": {
    "enabled": false,
    "exportResource": "number-generator-resource",
    "exportFunction": "generateNumber"
  },
  "general": {
    "useResourceIntegration": false,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en",
    "showId": false,
    "phoneNumberFormat": "/(\\d{3})(\\d{3})(\\d{4})/"
  },
  "contacts": {
    "frameworkPay": false,
    "payResource": "my-core-resource",
    "payFunction": "myCheckerFunction"
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
    "url": "https://api.fivemanage.com/api/image",
    "type": "image",
    "imageEncoding": "webp",
    "contentType": "multipart/form-data",
    "useContentType": false,
    "authorizationHeader": "Authorization",
    "authorizationPrefix": "",
    "useAuthorization": true,
    "returnedDataIndexes": ["url"]
  },
  "imageSafety": {
    "filterUnsafeImageUrls": true,
    "embedUnsafeImages": false,
    "embedUrl": "https://i.example.com/embed",
    "safeImageUrls": [
      "i.imgur.com",
      "i.file.glass",
      "dropbox.com",
      "c.tenor.com",
      "discord.com",
      "cdn.discordapp.com",
      "media.discordapp.com",
      "media.discordapp.net",
      "upload.wikipedia.org",
      "i.projecterror.dev",
      "upcdn.io",
      "i.fivemanage.com",
      "api.fivemanage.com",
      "r2.fivemanage.com"
    ]
  },
  "profanityFilter": {
    "enabled": false,
    "badWords": ["esx"]
  },
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
    "maxImages": 1,
    "resultsLimit": 25
  },
  "match": {
    "generateProfileNameFromUsers": true,
    "allowEditableProfileName": true
  },
  "marketplace": {
    "persistListings": false
  },
  "browser": {
    "homepageUrl": "https://docs.fivemanage.com"
  },
  "debug": {
    "level": "error",
    "enabled": true,
    "sentryEnabled": true
  },
  "defaultContacts": [],
  "disabledApps": [],
  "apps": [],
  "voiceMessage": {
    "enabled": false,
    "authorizationHeader": "Authorization",
    "url": "https://api.fivemange/api/audio",
    "returnedDataIndexes": ["url"]
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

### Voice Messages

```json
{
  "voiceMessage": {
    "enabled": false,
    "authorizationHeader": "Authorization",
    "url": "",
    "returnedDataIndexes": ["url"]
  }
}
```

- `"voiceMessage"`
  - Enable if you want people to be able to send voice notes
- `"url"`
  - URL of the API service you're uploading sound clips to, for example "https://api.fivemanage.com/api/audio"
- `"authorizationHeader"`
  - Name of the API header for authorisation
- `"returnedDataIndexes"` 
  - Path of the returned file URL

### Word Filtering

```json
{
  "profanityFilter": {
    "enabled": false,
    "badWords": ["esx", "chip"]
  },
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

### Marketplace
```json
{
  "marketplace": {
    "persistListings": false
  }
}
```
- `"persistListings"`
  - If you want marketplace listings to persist after restarts

### Apps

```json
{
  "apps": [],
  "disabledApps": []
}
```

- `"apps"`
  - List of external apps you want NPWD to load
- `"disabledApps"`
  - List of apps you want to be disabled

### Main configuration

:::info
More information regarding the main config can be found at [Main configuration](/docs/npwd/configuration/main).
:::
