
# GitHub Repository Setup Guide

This guide will help you push your To-Do List application to GitHub. Follow these steps to create a repository and push your code.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Steps to Push to GitHub

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the '+' icon in the top-right corner and select 'New repository'
3. Enter a name for your repository (e.g., 'todo-list-app')
4. Add an optional description
5. Choose whether the repository should be public or private
6. Do NOT initialize the repository with a README, .gitignore, or license as we already have these files
7. Click 'Create repository'
8. Copy the repository URL (it will look like `https://github.com/yourusername/todo-list-app.git`)

### 2. Push Your Code Using the Setup Script

We've created a PowerShell script to automate the process of pushing your code to GitHub. Follow these steps:

1. Open PowerShell in your project directory
2. Run the setup script by typing:
   ```
   .\setup-github.ps1
   ```
3. When prompted, paste the GitHub repository URL you copied earlier
4. The script will initialize Git, add your files, commit them, and push them to GitHub

### 3. Verify Your Repository

1. Go to your GitHub repository URL in a web browser
2. You should see all your project files there
3. The README.md file should be displayed on the repository's main page

## Manual Setup (Alternative to the Script)

If you prefer to push your code manually or if the script encounters any issues, you can use these Git commands:

```bash
# Initialize Git repository
git init

# Add all files to Git
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/todo-list-app.git

# Push to GitHub
git push -u origin master
# If the above fails, try:
# git push -u origin main
```

## Troubleshooting

- **Authentication Issues**: If you encounter authentication issues, GitHub now uses personal access tokens instead of passwords. Generate a token in your GitHub account settings and use it as your password.
- **Branch Name Issues**: GitHub now uses 'main' as the default branch name instead of 'master'. If pushing to 'master' fails, try pushing to 'main' instead.

## Next Steps

After successfully pushing your project to GitHub, you might want to:

1. Set up GitHub Pages to host your application
2. Configure GitHub Actions for continuous integration
3. Add collaborators to your repository
4. Create issues for future enhancements

Congratulations! Your To-Do List application is now on GitHub.