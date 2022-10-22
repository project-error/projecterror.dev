---
id: roadmap
title: Update Roadmap
sidebar_label: Update Roadmap
---

We push any major changes to the develop branch of the resource. So

### Version 1.1.0

- [x] [Call Volume Slider](https://github.com/project-error/npwd/commit/85f464c6e216f83250516a2d7cdc2bc27c0f23ef)
- [x] [Center Time With Frame](https://github.com/project-error/npwd/issues/511)
- [x] [Check for Custom Wallpaper](https://github.com/project-error/npwd/commit/8a1220474ff83db5fbcc8b3056c66260f3c80f4e)
- [x] Config For Generated Number Format
- [x] [Default Language](https://github.com/project-error/npwd/issues/501)
- [x] Messages/Call Hooks
- [x] [Ringtone Dial For Originator](https://github.com/project-error/npwd/commit/071e5e65d9bc3627ad5a122bafe45feb5d06233e)
- [x] [Share Contact](https://github.com/project-error/npwd/issues/472)

### Version 1.7.0+

- [ ] Migrate to monorepo
- [ ] Implement audio recordings for calls
- [ ] Record videos / video calls (maybe?)
- [ ] App moderation (Twitter, marketplace, match)
- [x] Default contacts (to make people stop crying)
- [ ] Work further on our public facing API (discussion)
- [ ] Personalize Twitter
- [ ] Sound features such as hearing others ringtones etc
- [ ] New code transport solution with Vite (replacing Module federation from Webpack)

### Undetermined Planned Features

These are features we plan on adding to the phone, but currently have no set time frame to do so.

- [ ] Bank App
- [ ] Cell Service
- [ ] Config for Bottom Navbar Order
- [ ] Video calls
- [ ] Document App
- [ ] Email App
- [ ] Garage App
  - Will use [NGWD](https://github.com/project-error/new-garage-who-dis) as this is planned to be fully standalone.
- [x] GPS System
  - Send current location.
  - Update real time position within a specified time frame.
- [x] Group Messages
- [ ] Image Enlarge on Click

### Unplanned Features/Won't Support

These are features the team has no interest in supporting at the current moment. Please do not suggest them as they will be closed/denied.

- Instagram App
  - Too similar already to Twitter and only used for images. Not worth the dev time.
- Music App
  - DMCA issues with music and potential copyright issues.
  - This includes any sort of variations to this that are focused on music or copyrighted material.
- Job Whitelisting
  - Heavily dependent on framework integration.
- Default Phone Contacts
  - We plan to handle this with our exposed events for calling/messaging so server owners can do their own things. There won't be any default contacts.
- Radio App
  - Not within the current scope of the phone. Use an actual radio resource.
- Support For Other Voips
  - We have standardized [pma-voice](https://github.com/AvarianKnight/pma-voice) and don't plan to support any other voice resources.
- Support Ticket
  - Not within the current scope of the phone. Best to use a resource designed for this.
