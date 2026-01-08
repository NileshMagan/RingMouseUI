---
title: "Milestone 1: Project Setup & Core Architecture"
labels: milestone, epic
---

## Objective

Establish the foundational structure of the cross-platform desktop application using the recommended stack.

## Description

This milestone covers the initial setup of the project, including the choice of frameworks and the basic architecture for managing the two main windows (Configurator and HUD). It also includes the initial implementation of the Bluetooth LE (BLE) communication layer, which is critical for interacting with the hardware.

## Acceptance Criteria

-   [ ] A Tauri project is created with a Rust backend and a React + TypeScript frontend.
-   [ ] The project can be built and run on at least one of the target platforms (Windows, macOS, or Linux).
-   [ ] Two distinct windows, one for the Configurator and one for the HUD, can be created and managed by the application.
-   [ ] The HUD window is configured to be borderless, transparent, and always-on-top.
-   [ ] A basic BLE communication module is implemented that can scan for and connect to the Ringed Trackball Mouse device.
-   [ ] Connection status (connected/disconnected) is tracked and can be displayed in the Configurator window.
