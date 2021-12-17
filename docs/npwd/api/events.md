---
id: npwd-events
title: Resource Events
sidebar_label: Events
---

NPWD will sometimes emit events for third-party resource integration.

## Client Events

### `npwd:PhotoModeStarted`

This event is emitted when a player first enters the camera mode. It can be useful for toggling UI components while the
camera is active.

### `npwd:PhotoModeEnded`

This event is the ending equivalent of `npwd:PhotoModeStarted`, it will be triggered upon the player exiting the camera. 
It can be useful for toggling UI components while the camera is active.

