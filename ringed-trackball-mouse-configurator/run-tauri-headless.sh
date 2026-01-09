#!/bin/bash
set -e
Xvfb :99 -screen 0 1280x1024x24 &
XVFB_PID=$!
export DISPLAY=:99
npm run tauri dev &
TAURI_PID=$!
sleep 10
trap "kill $TAURI_PID $XVFB_PID" EXIT
