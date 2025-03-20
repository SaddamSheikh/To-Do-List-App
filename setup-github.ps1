# GitHub Repository Setup Script

# Function to check if Git is installed
function Check-GitInstalled {
    try {
        $gitVersion = git --version
        Write-Host "Git is installed: $gitVersion" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "Git is not installed. Please install Git from https://git-scm.com/downloads" -ForegroundColor Red
        return $false
    }
}

# Function to initialize Git repository
function Initialize-GitRepo {
    Write-Host "Initializing Git repository..." -ForegroundColor Cyan
    git init
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Git repository initialized successfully." -ForegroundColor Green
    } else {
        Write-Host "Failed to initialize Git repository." -ForegroundColor Red
        exit 1
    }
}

# Function to add all files to Git
function Add-FilesToGit {
    Write-Host "Adding files to Git..." -ForegroundColor Cyan
    git add .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Files added successfully." -ForegroundColor Green
    } else {
        Write-Host "Failed to add files to Git." -ForegroundColor Red
        exit 1
    }
}

# Function to commit changes
function Commit-Changes {
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m "Initial commit"
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Changes committed successfully." -ForegroundColor Green
    } else {
        Write-Host "Failed to commit changes." -ForegroundColor Red
        exit 1
    }
}

# Function to add remote repository
function Add-RemoteRepo {
    param (
        [string]$repoUrl
    )
    Write-Host "Adding remote repository..." -ForegroundColor Cyan
    git remote add origin $repoUrl
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Remote repository added successfully." -ForegroundColor Green
    } else {
        Write-Host "Failed to add remote repository." -ForegroundColor Red
        exit 1
    }
}

# Function to push to remote repository
function Push-ToRemote {
    Write-Host "Pushing to remote repository..." -ForegroundColor Cyan
    git push -u origin master
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Successfully pushed to remote repository." -ForegroundColor Green
    } else {
        Write-Host "Failed to push to remote repository. Try using 'main' instead of 'master'." -ForegroundColor Yellow
        git push -u origin main
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Successfully pushed to remote repository using 'main' branch." -ForegroundColor Green
        } else {
            Write-Host "Failed to push to remote repository." -ForegroundColor Red
            exit 1
        }
    }
}

# Main script execution
Write-Host "===== GitHub Repository Setup Script =====" -ForegroundColor Magenta

# Check if Git is installed
if (-not (Check-GitInstalled)) {
    exit 1
}

# Check if .git directory already exists
if (Test-Path ".git") {
    Write-Host "Git repository already initialized in this directory." -ForegroundColor Yellow
} else {
    Initialize-GitRepo
}

# Add files to Git
Add-FilesToGit

# Commit changes
Commit-Changes

# Get GitHub repository URL from user
$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git)"

# Check if remote origin already exists
$remoteExists = git remote -v | Select-String -Pattern "origin"
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists. Updating it..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Remote 'origin' updated successfully." -ForegroundColor Green
    } else {
        Write-Host "Failed to update remote 'origin'." -ForegroundColor Red
        exit 1
    }
} else {
    # Add remote repository
    Add-RemoteRepo -repoUrl $repoUrl
}

# Push to remote repository
Push-ToRemote

Write-Host "===== GitHub Repository Setup Complete =====" -ForegroundColor Magenta
Write-Host "Your To-Do List application has been successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan