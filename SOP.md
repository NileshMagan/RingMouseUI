# SOP: Ringed Trackball Mouse System

### Desktop Application & HUD Overlay (Cross-Platform)

---

## 0. Purpose

This SOP defines the **full desktop software system** for the Ringed Trackball Mouse project, with a **special focus on the UI, HUD overlay, and configuration tooling**.

This SOP exists to:

* Enable a **cross-platform desktop application** (Windows, macOS, Linux)
* Provide a **clean, neon, low-distraction UI**
* Define a **real-time HUD overlay** that visually communicates:

  * Current layer
  * Recognized input
  * Resulting output
* Prevent feature creep and UI inconsistency
* Allow AI agents or developers to implement the app **without guessing intent**

This SOP assumes the firmware SOP already exists and is adhered to strictly.

---

## 1. System Context (High-Level)

The project consists of three cooperating systems:

1. **Embedded firmware (ESP32-C3)**
2. **Desktop application (this SOP)**
3. **HUD overlay (part of the desktop app)**

The desktop app is **not optional**.
Certain firmware modes (notably Keyboard Cycling Mode) assume a HUD exists.

---

## 2. Desktop App Responsibilities (Authoritative)

The desktop application MUST:

1. Discover and connect to the device over BLE
2. Read and write configuration data
3. Persist configuration across device reboot
4. Provide a UI to:

   * Create/edit layers
   * Assign colors
   * Map gestures → actions
   * Configure keyboard cycling behavior
5. Display **live device state**
6. Render a **non-blocking HUD overlay**
7. Mirror device LED logic visually
8. Never require firmware changes for remapping

---

## 3. Platform & Technology Requirements

### 3.1 Platform support (mandatory)

* Windows
* macOS
* Linux (GNOME/KDE minimum)

### 3.2 Architectural constraints

* **Single codebase**
* **Native-feeling UI**
* **Low idle CPU usage**
* **Always-on-top transparent HUD window**
* **Click-through HUD (default)**

### 3.3 Recommended stack (non-binding but preferred)

* **Tauri** (Rust backend)
* **React + TypeScript** frontend
* CSS or canvas-based animation (no heavy 3D engines)

---

## 4. Desktop App Structure

The app MUST be structured into **two windows**:

1. **Configurator Window**
2. **HUD Overlay Window**

They may share state but must be independently controllable.

---

## 5. Configurator Window SOP

### 5.1 Purpose

The Configurator is the **authoritative editor** for the device’s behavior.

It is not decorative.
Every UI element must correspond to firmware-supported behavior.

---

### 5.2 Layout

**Left navigation column**

* Device
* Layers
* Mappings
* Keyboard Mode
* HUD
* Advanced

**Main content panel**

* Context-sensitive editor based on selection

---

### 5.3 Visual Design Rules (Configurator)

* Background: near-black / charcoal
* Accents: layer color
* Borders: thin neon outlines (1px)
* Glow: subtle, never thick
* Typography: single clean sans-serif
* No skeuomorphism
* No “gamer RGB” effects

---

### 5.4 Device Section

Shows:

* Connection status
* Battery %
* Firmware version
* Active layer (live)
* BLE signal indicator

Actions:

* Connect / disconnect
* Force resync config
* Identify device (LED pulse)

---

### 5.5 Layer Editor

For each layer:

* Name
* Color (RGB/HEX)
* Gesture → Action mapping table
* Layer type (normal / keyboard / momentary)

Rules:

* Every layer MUST have a defined color
* Unmapped gestures are treated as NoOp
* At least one failsafe gesture must exist

---

### 5.6 Gesture Mapping UI

Gestures include:

* Click (single / double)
* Hold (start / end)
* Swipe (cardinal + optional diagonals)
* Ball move

Mappings resolve to **abstract actions**, never raw HID calls.

---

### 5.7 Keyboard Mode Editor

Supports:

* Gesture cycling groups
* Timeout duration
* Commit gesture
* Cancel gesture
* Visual HUD dependency toggle

UI MUST show:

* Cycling order
* Active selection
* Commit behavior

---

### 5.8 HUD Settings

Controls:

* Enable / disable HUD
* Scale (80–150%)
* Auto-hide delay
* Show only on input
* Debug mode (show unmapped gestures)

---

## 6. HUD Overlay SOP (Critical)

### 6.1 Purpose

The HUD is a **live visual interpreter** of what the device is doing.

It exists to:

* Prevent mode confusion
* Make gesture systems learnable
* Make keyboard cycling usable

---

### 6.2 HUD Window Rules

* Always-on-top
* Borderless
* Transparent background
* Click-through by default
* Anchored bottom-right
* Auto-hides when idle

---

## 7. HUD Layout Specification

The HUD consists of **three stacked zones**:

---

### 7.1 Top Label Strip

Displays:

* Active layer name
* Recognized input → resolved output

Example:

```
KEYBOARD_LETTERS
SWIPE_UP → Next Letter (B)
```

Design:

* Slim pill or stacked text
* Layer color accent underline or glow
* Text updates instantly on events

---

### 7.2 Center Element: Skeleton Ball

A circular element representing the trackball.

Design:

* Wireframe / skeletal lattice look
* Subtle neon glow
* Minimal idle motion (slow pulse or drift)

Behavior:

* Click → compress animation
* Hold → steady glow
* Error → brief red flash
* Move → subtle parallax or inner dot shift

---

### 7.3 Gesture Ring

A ring of gesture “slots” around the ball.

Slots appear only if mapped in the current layer.

Supported positions:

* Up
* Down
* Left
* Right
* Optional diagonals

Each slot shows:

* Icon
* Short label
* Arc or tick behind it

Background tint of HUD reflects **layer color**.

---

## 8. HUD Animation Rules

### 8.1 Swipe Animation

When a swipe is recognized:

* Corresponding ring slot scales up briefly (bump)
* Arc behind it flashes brighter
* Animation duration: ~200ms total

---

### 8.2 Click Animation

On click:

* Ball compresses briefly
* Glow spikes
* Optional ripple ring expands outward

---

### 8.3 Hold Animation

On hold start:

* Background tint intensifies
* Ball glow becomes steady

On hold end:

* Quick release bounce
* Revert to prior layer visuals

---

### 8.4 Keyboard Cycling Animation

When cycling:

* Direction slot updates label live
* Small tick animation on each cycle
* Top label updates current selection

HUD MUST remain visible until commit or timeout.

---

## 9. Data Contract Between Firmware & App

The app consumes **events**, not logic.

Minimum live event payload:

* Active layer ID
* Layer color
* Recognized gesture type
* Resolved action summary
* Timestamp
* Optional magnitude

The app NEVER infers gestures itself.

---

## 10. Failure & Recovery Visualization

* Long hold → show “Failsafe Reset” message briefly
* Config reset → red flash + confirmation text
* BLE disconnect → HUD fades out gracefully

---

## 11. Performance & UX Constraints

* HUD idle CPU usage near zero
* Animations only run on events
* No constant polling visuals
* No modal dialogs during normal use
* App must tolerate device disconnects silently

---

## 12. Non-Goals (Explicit)

The app MUST NOT:

* Implement gesture detection
* Interpret raw motion data
* Hard-code firmware behavior
* Assume OS-specific shortcuts
* Require reflashing for remaps

---

## 13. Outcome

When implemented correctly, this SOP produces:

* A **production-grade configurator**
* A **learnable, elegant HUD**
* A system where:

  * Firmware is deterministic
  * Meaning lives in config
  * UI communicates intent clearly
* A foundation suitable for:

  * Dual-ring keyboards
  * Advanced macros
  * Future device variants
