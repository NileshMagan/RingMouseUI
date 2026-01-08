---
title: "Milestone 2: Configurator UI - Device & Layers"
labels: milestone, epic
---

## Objective

Build the core UI for managing device status and editing layers in the Configurator window.

## Description

This milestone focuses on creating the user interface for the "Device" and "Layers" sections of the Configurator. Users should be able to see the live status of their device and begin creating and customizing layers.

## Acceptance Criteria

-   [ ] The "Device" section of the Configurator UI is implemented.
-   [ ] The UI displays the following live data:
    -   Connection status (e.g., "Connected", "Disconnected").
    -   Battery percentage.
    -   Firmware version.
    -   Active layer name.
    -   BLE signal strength indicator.
-   [ ] The UI provides buttons for the following actions:
    -   Connect / Disconnect.
    -   Force a resync of the configuration.
    -   Identify the device (triggering an LED pulse).
-   [ ] The "Layer Editor" section is implemented.
-   [ ] Users can create new layers.
-   [ ] Users can give each layer a custom name.
-   [ ] Users can assign a unique color to each layer using an RGB or HEX color picker.
-   [ ] The list of layers is displayed in the navigation column.
-   [ ] Selecting a layer in the navigation column displays its properties in the main content panel.
