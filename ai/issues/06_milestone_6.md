---
title: "Milestone 6: Configuration Persistence & Data Sync"
labels: milestone, epic
---

## Objective

Ensure that user configurations are saved, loaded, and synchronized with the device.

## Description

This milestone focuses on the data management aspect of the application. It's crucial that any changes made in the Configurator are not lost when the application is closed and are correctly transmitted to the hardware device.

## Acceptance Criteria

-   [ ] A data model for the application's configuration (layers, mappings, settings) is defined and implemented.
-   [ ] The application can read and write the complete configuration to the Ringed Trackball Mouse device via BLE.
-   [ ] The configuration is persisted locally on the desktop, so it is automatically reloaded when the application starts.
-   [ ] A "Force Resync" button in the "Device" section successfully re-transmits the local configuration to the device.
-   [ ] The application can handle cases where the device's configuration might be out of sync with the local configuration.
-   [ ] The data contract between the firmware and the app is respected, ensuring that the app consumes events and does not infer gestures itself.
