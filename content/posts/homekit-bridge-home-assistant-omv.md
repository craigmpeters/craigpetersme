---
title: Getting HomeKit Bridge working on Home Assistant with Openmediavault
---

Openmediavault is a media management server which runs on Debian, as a core part of this it uses zero config DNS to advertise the services it uses like SMB, File Services, Time Machine and that kind of thing. I like using it as it allows me to run docker containers as well as serve off a bunch of files.

Home Assistant is a system for managing home automation which brings a lot of different systems together and one of the things it can do is advertise this on HomeKit so that I can operate it using my phone, this is also done using zero config DNS.

The problem is that these two systems conflict with each other so what we need to do is to get them to work together.
