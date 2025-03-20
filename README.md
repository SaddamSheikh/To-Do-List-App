# To-Do List Application

A comprehensive, interactive To-Do List application built with React and TypeScript. This application allows users to create, manage, and organize their tasks with categories, due dates, priorities, and more.

## Features

- Add new tasks with optional categories, due dates, and priority levels
- Mark tasks as completed
- Edit and delete tasks
- Search functionality to quickly find specific tasks
- Filter tasks by status (all, active, completed) and category
- Task statistics dashboard showing completion rates and task distribution
- Visual indicators for task priority and overdue tasks
- Persistent storage using localStorage
- Responsive design
- Modular component architecture for better maintainability

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn
```

## Usage

### Development

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:5173/

### Build

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Preview

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `src/App.tsx` - Main application component
- `src/App.css` - Styles for the application
- `src/main.tsx` - Entry point for the application
- `src/components/` - Reusable components
  - `SearchBar.tsx` - Task search functionality
  - `TaskForm.tsx` - Form for adding new tasks
  - `TaskItem.tsx` - Individual task display component
  - `TaskFilter.tsx` - Filtering options for tasks
  - `StatsDisplay.tsx` - Task statistics dashboard
- `static-todo-app.html` - Static HTML version of the application

## Technologies Used

- React
- TypeScript
- Vite (build tool)
- CSS (for styling)

## License

MIT