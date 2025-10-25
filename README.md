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

### A) Manual (local)

1. Copy this plugin folder into your vault:
   `YOUR_VAULT/.obsidian/plugins/timestamp/`
2. Make sure the folder contains at least:
   `manifest.json`, `main.js` (built), and `styles.css` (optional).
3. In Obsidian: **Settings → Community plugins** → enable **Timestamp**.

### B) BRAT (beta)

1. Install the **BRAT** plugin from the Community plugins directory.
2. Add this repository URL in BRAT to install the latest release.

*(Once approved, it will also be available directly from the official Obsidian plugin browser.)*

## Usage

* Open any note and place the cursor where you want to insert a timestamp.
* Press **Ctrl/⌘ + P** → search for **“Insert timestamp (UTC ISO 8601)”** → press Enter.
* (Optional) Assign a hotkey in **Settings → Hotkeys** (e.g. `Ctrl+Alt+T`).

## Development

```bash
# Install dependencies
yarn

# Build
yarn build

# Watch mode
yarn dev
```

* The build output (`main.js`) is placed in the plugin root folder.
* After rebuilding, toggle the plugin off/on in Obsidian to reload it.

## Publishing a release

1. Ensure `manifest.json` and `versions.json` are up to date.
2. Create a **GitHub tag** and **release** matching the version in `manifest.json`.
3. Attach or include **`manifest.json`**, **`main.js`**, and **`styles.css`** in the release.
4. (Optional) Open a PR to `obsidianmd/obsidian-releases` to add it to the official directory.

## Output format

Example: `2025-10-25T16:45:12Z`

