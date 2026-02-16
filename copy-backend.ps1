# TKEA237 Backend Copy Script
# Run this PowerShell script to copy backend files to tkea-backend folder

$sourceDir = "C:\Users\DELL\Desktop\New\tkea\server"
$destDir = "C:\Users\DELL\Desktop\New\tkea\tkea-backend"

# Create destination directory if it doesn't exist
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
    Write-Host "Created directory: $destDir" -ForegroundColor Green
}

# Files and folders to copy
$itemsToCopy = @(
    "app.js",
    "package.json",
    "package-lock.json",
    ".env",
    ".gitignore",
    "routes",
    "controllers",
    "middleware",
    "services",
    "utills",
    "prisma",
    "scripts",
    "tests",
    "logs"
)

# Copy each item
foreach ($item in $itemsToCopy) {
    $sourceItem = Join-Path $sourceDir $item
    $destItem = Join-Path $destDir $item
    
    if (Test-Path $sourceItem) {
        if ((Get-Item $sourceItem) -is [System.IO.DirectoryInfo]) {
            # It's a directory
            Copy-Item -Path $sourceItem -Destination $destItem -Recurse -Force
            Write-Host "✓ Copied folder: $item" -ForegroundColor Green
        } else {
            # It's a file
            Copy-Item -Path $sourceItem -Destination $destItem -Force
            Write-Host "✓ Copied file: $item" -ForegroundColor Green
        }
    } else {
        Write-Host "⚠ File not found: $item" -ForegroundColor Yellow
    }
}

Write-Host "`nBackend files copied successfully!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. cd $destDir"
Write-Host "2. npm install"
Write-Host "3. Create .env file with database credentials"
Write-Host "4. git add ."
Write-Host "5. git commit -m 'Backend setup'"
Write-Host "6. git push"
