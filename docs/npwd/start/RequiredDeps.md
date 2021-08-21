---
id: requiredDeps
title: NPWD Dependencies
sidebar_label: Dependencies
---

:::warning

These dependencies are not **final** and only represent the current state.

:::

### Resource Dependencies
Below are the required **resource** dependencies. They must be installed alongside NPWD for full functionality.

1. [screenshot-basic](https://github.com/project-error/screenshot-basic) - **Make sure to use the exact version, as linked.**
2. [pma-voice](https://github.com/AvarianKnight/pma-voice) - Support for other VOIP resources is planned (`toko-voip`) etc


:::note
NPWD has standardized pma-voice as our default voice system for the phone. We encourage everyone to do such.

Adapting **NPWD** to your custom framework may not be very difficult. You can read more about it at **Installation**

:::

### Prerequisites for Pre-Launch Testing

In order to be able to effectively test the phone as it is developed, you must 
have these pre-requisites installed. These will ***not*** be required at launch when we begin
to produce *webpacked* releases.

1. Basic understanding of how to interact with a terminal 
   (i.e, how to open one and execute commands). For most users, we recommend **Windows Powershell**
1. [Git for Windows](https://git-scm.com/download/win) - To easily clone the repository
1. [NodeJS > v12](https://nodejs.org/en/about/releases/) - To provide package management and env tools
1. [yarn](https://yarnpkg.com/) - The `yarn` package manager which can easily be installed like this.
   ```shell
   npm install yarn --global
   ```
   
1. Fully Functional FXServer - As setup [here](https://docs.fivem.net/docs/server-manual/setting-up-a-server/)
1. [Imgur Token](https://api.imgur.com/oauth2/addclient) - 
   Your app registration should look like [this](https://i.imgur.com/yO7L431.png). 
   When you register your app, you will received a `Client ID`. This should be set as a replicated convar in 
   `the server.cfg` as shown below: 
   
   ```
   setr SCREENSHOT_BASIC_TOKEN Client_ID
   ```
