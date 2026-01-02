Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Starting Plane Development Server..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check if pnpm is installed
if (-not (Get-Command "pnpm" -ErrorAction SilentlyContinue)) {
    Write-Host "Error: pnpm is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "Please install pnpm to run this application." -ForegroundColor Yellow
    Read-Host -Prompt "Press Enter to exit"
    exit 1
}

# Check if dependencies are installed
if (-not (Test-Path "node_modules")) {
    Write-Host "node_modules not found. Installing dependencies..." -ForegroundColor Yellow
    pnpm install
}

# Start the dev server
Write-Host "Running pnpm dev..." -ForegroundColor Green
pnpm dev
