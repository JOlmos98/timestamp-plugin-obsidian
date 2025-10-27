# Timestamp (Obsidian Plugin)

Insert a **UTC ISO 8601 timestamp** (`YYYY-MM-DDTHH:MM:SSZ`) at the current cursor position from the **command palette**.

## Features

* Command: **Insert timestamp (UTC ISO 8601)**
* Format: `YYYY-MM-DDTHH:MM:SSZ` (UTC, without milliseconds)
* Works on desktop and mobile

## Requirements

* Obsidian ≥ **1.5.0**
* Node.js + Yarn (for building from source)

## Installation

1. Copy this plugin folder into your vault:
   `YOUR_VAULT/.obsidian/plugins/timestamp/`
2. Make sure the folder contains at least:
   `manifest.json`, `main.js` (built), and `styles.css` (optional).
3. In Obsidian: **Settings → Community plugins** → enable **Timestamp**.

## Usage

* Open any note and place the cursor where you want to insert a timestamp.
* Press **Ctrl/⌘ + P** → search for **“Insert timestamp (UTC ISO 8601)”** → press Enter.
* (Optional) Assign a hotkey in **Settings → Hotkeys** (e.g. `Ctrl+Alt+T`).

## Output format

Example: `2025-10-25T16:45:12Z`


