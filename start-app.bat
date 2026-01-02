@echo off
echo ==========================================
echo Starting Plane Development Server...
echo ==========================================

REM Check if pnpm is installed
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: pnpm is not installed or not in your PATH.
    echo Please install pnpm to run this application.
    pause
    exit /b 1
)

REM Check if dependencies are installed (basic check)
if not exist "node_modules" (
    echo node_modules not found. Installing dependencies...
    call pnpm install
)

REM Start the dev server
call pnpm dev
