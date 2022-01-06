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
Example:
```lua
AddEventHandler('npwd:PhotoModeStarted', function()
    LocalPlayer.state:set('pictureMode', true, true)
    DisplayRadar(false)
    RemoveMultiplayerHudCash()
    RemoveMultiplayerBankCash()
    TriggerEvent('your-hide-hud-event')
end)
```

### `npwd:PhotoModeEnded`

This event is the ending equivalent of `npwd:PhotoModeStarted`, it will be triggered upon the player exiting the camera. 
It can be useful for toggling UI components on again.

Example:
```lua
AddEventHandler('npwd:PhotoModeEnded', function ()
    LocalPlayer.state:set('pictureMode', false, true)
    if IsPedInAnyVehicle(PlayerPedId(), false) then
        DisplayRadar(true)
    end
    TriggerEvent('your-show-hud-event')
end)
```

