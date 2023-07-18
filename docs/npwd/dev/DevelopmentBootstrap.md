---
id: dev_bootstrap
title: Setting Up for Development
sidebar_label: Bootstrap Development
---

Setting up NPWD for development requires a few steps and some familiarity with the scripts.
This short guide will help you get your development environment bootstrapped and ready.

React code and game code will be reffered to as `apps`.

## Environment Setup

Please make sure you have the following dependencies installed within your development environment.

#### Prerequisites

- [Git](https://git-scm.com/)
- [Node > 16.x](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

## Installing Dependencies & Setup

**Step 1**

Clone the repository into your `resources` folder with the name `npwd`. Make sure it is not within a [subfolder] like this.

```sh
git clone https://github.com/project-error/npwd.git
```

**Step 2**

Navigate to cloned folder and install dependencies for both NUI and game scripts (This will automatically install dependencies in
all the apps and packages)

```sh
cd npwd && pnpm
```

## Build Phase

#### Building all of NPWD

To build the whole project (NUI & game-scripts), run the following command in the repository root. This will build all apps and packages.

```sh
pnpm build
```

#### Building NUI

To build **only** the NUI package, navigate to the `apps/phone` folder and run the `build` script as shown.

```sh
cd apps/phone && pnpm build
```

#### Building Game Scripts

To build **only** the game scripts package, navigate to the `apps/game` folder and run the `build` script as shown.

```sh
cd apps/game && pnpm build
```

#### Watching files

If you don't want to rebuild all the time, you can also watch files which will write to disk.

```sh
pnpm dev
```
To watch individual components use the following in each package
```sh
pnpm dev:game
```

:::note

### Common issues

#### Media files are not loaded when running `pnpm dev:game`:

You most likely forgot to build the phone first. Building the phone will place the media files in `/dist/html`

:::
