---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ  
---

# Common Issues

## Crashes

### My Phone crashed after a settings update!

This can sometimes happen after we change the structure of our client stored setting data. As the phone is in the beta stage, these changes can happen but are not expected to be numerous. If you experience issues after a settings update and you have previously used the phone, please follow the guide below.

- Press F8 and paste `nui_devtools` then press enter
- On the header, click `application`. 
- On the side bar under `Storage` expand local storage [as such](https://i.imgur.com/1hvb8Fk.png).
- Find `https://cfx-nui-npwd`
- Right click and select `Clear`
- Restart the resource, using `ensure npwd `

## Errors

### Event playerJoining was not safe for net

You need to update your artifacts to a version beyond `3622`. Don’t know your artifact version? Type `version` into your console. 

Click [here](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/?) to download the latest.

### No such export isPhoneVisible

You downloaded the source code and didn’t build.

Please download from the [release tab](https://github.com/project-error/npwd/releases) and **be sure** you download the `npwd.zip` as this is the built version.

If you want to modify the source code please see the [documentation page](dev/DevelopmentBootstrap.md) for building.

### No such export: newPlayer in resource npwd

This export is only available when the `useResourceIntegration` is set to true. See [here](https://github.com/project-error/npwd/blob/fc2a905f0fd85db797b716053b8f0d4398b8bd61/config.json#L8).

### Cannot read properties of undefined (reading 'phone_number')
The error would look like [this](https://i.imgur.com/IIM0vEd.png)

This is usually caused by:
- You did not configure the `config.json` properly.
    - Please follow the configuration [documentation](start/installation#basic-configuration) again.
- You do not have a users table where you store player's identifiers. 
    - As of v1.04, *NPWD* doesn't generate one. 
    - You will need to install [pe-core](https://github.com/project-error/pe-core).
- You do not have a `phone_number` column. 
    - See the [sql file](https://github.com/project-error/npwd/blob/13335e98d55ea7a082bf08c7c17f24866658a2d1/import.sql#L3) for an example query.

### Failed to upload photo, Column 'image' cannot be null
Ensure you installed the correct version of [screenshot-basic](https://github.com/project-error/screenshot-basic) and have followed the documentation for generating an *imgur* [token](start/installation#setting-up-camera-functionality). If you have done so, then imgur may be blocked in your country. We're working on alternatives for this issue.

### Illegal mix of collations (utf8mb4_unicode_ci,IMPLICIT) and (utf8mb4_general_ci,IMPLICIT) for operation '='
You need to set your database collation to `utf8_unicode_ci`. In future releases, we'll specify this ourselves. You can also try using this query to resolve the issue:
```sql
ALTER TABLE npwd_messages CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE npwd_messages_conversationsCONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```
This error will make it so emojis show as a question mark on twitter as well.

## Basic Questions

### How do I open the phone?

By default, the phone opens with `F1`. You can adjust it within the [config.json](https://github.com/project-error/npwd/blob/20b7ca34416a8a428b0c4e39c1da80c8e96f5b0f/config.json#L9). 

**Note:** Once this is set, you will need to restart the server for the best results.

### How do I use the phone to send a gps location to ambulance job?

We currently don’t have this functionality. We have plans to create an export to send a message so this will be possible.

### How do I change the command to open the phone?

You can do so [here](https://github.com/project-error/npwd/blob/20b7ca34416a8a428b0c4e39c1da80c8e96f5b0f/config.json#L10). Just restart the resource after.

### How do I set the default language?

As of v1.0.4, the only way to set the default language is by setting it [here](https://github.com/project-error/npwd/blob/20b7ca34416a8a428b0c4e39c1da80c8e96f5b0f/phone/src/config/default.json#L3) and rebuilding the phone. We are working on abstracting this to a config so this isn't required.
