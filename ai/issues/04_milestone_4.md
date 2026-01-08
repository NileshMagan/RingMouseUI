---
title: "Milestone 4: HUD Implementation - Basic Structure & State Display"
labels: milestone, epic
---

## Objective

Create the initial version of the HUD overlay, focusing on its basic structure and the real-time display of device state.

## Description

This milestone covers the initial implementation of the Heads-Up Display (HUD). The focus is on creating the window itself and the core visual components that provide live feedback to the user, as specified in the SOP.

## Acceptance Criteria

-   [ ] The HUD is rendered in a separate, borderless, and transparent window.
-   [ ] The HUD window is set to be "always-on-top" of other applications.
-   [ ] The HUD window has a click-through (non-blocking) behavior by default.
-   [ ] The HUD is anchored to the bottom-right of the screen.
-   [ ] The "Top Label Strip" is implemented and displays:
    -   The name of the active layer.
    -   The recognized input and the resolved output (e.g., "SWIPE_UP → Next Letter (B)").
-   [ ] The text in the Top Label Strip updates in real-time based on events received from the device.
-   [ ] The "Skeleton Ball" visual element is implemented in the center of the HUD.
-   [ ] The Skeleton Ball has a subtle idle animation (e.g., a slow pulse).
-   [ ] The background tint of the HUD reflects the color of the active layer.
