@echo off
title IMN Lightment Productions - Studio Development Server
cd /d "%~dp0"

echo =================================================================
echo   IMN LIGHTMENT PRODUCTIONS - CINEMATIC STUDIO
echo   Starting development server on http://localhost:3000/
echo =================================================================
echo.

:: Automatically open default browser to the site
start "" http://localhost:3000/

:: Start the Vite dev server with host exposure
call npx vite --port 3000 --host

pause

