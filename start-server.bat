@echo off
cd /d "%~dp0"
start "" http://localhost:3000/
call npx vite --port 3000 --host

