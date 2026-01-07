# DocMind - UI Client

This directory contains the user interface and desktop container layer for **DocMind**.
Built with [Electron-Vite](https://electron-vite.org/), it handles the application lifecycle, UI rendering, and communication with the Rust Sidecar.

## 🛠️ Tech Stack

* **Runtime:** Electron
* **Build Tool:** Vite (Electron-Vite)
* **Frontend:** React + TypeScript
* **Styling:** TailwindCSS + Shadcn/UI (Recommended)
* **State Management:** Zustand / React Context

## 📂 Directory Structure

```text
src/
├── electron/       # [Main Process] Window creation, Rust Sidecar process management (spawn/kill) And [Preload Scripts] Secure communication bridge (IPC) between Main and Renderer
└── src/            # [Renderer Process] Pure React frontend code (Chat UI, Settings, etc.)
```

## 🚀 Development Guide

### 1. Prerequisites

Before running the frontend, ensure you have either compiled the Rust Core in the root directory or are prepared to run the Rust service in a separate terminal.

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

This will start both the Electron Main process and the Renderer process with Vite's HMR (Hot Module Replacement) enabled.

```bash
npm run dev
```
  ⚠️ Note: > In development mode, the Electron Main process usually expects the Rust backend to be serving at http://localhost:3000 (default config). You should run cd ../core && cargo run in a separate terminal window to ensure the UI can communicate with the AI engine.

### 4. Build for Production

This compiles the TypeScript code and generates production-ready assets. Note: This is usually triggered by the master build script in the root directory.

```bash
npm run build
```

## 🔌 Communication with Rust Core

The Frontend UI does not contain any AI inference logic. All business logic involves sending HTTP requests to the Rust Sidecar.

- Chat/Inference: Uses fetch or EventSource (SSE) to connect to endpoints like POST /chat provided by the Rust backend.
- System Operations: Window controls, file selection, etc., are handled via window.electron.ipcRenderer communicating with the Electron Main process.

<!--## 🐛 Troubleshooting-->
