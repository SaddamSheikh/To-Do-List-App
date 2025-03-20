import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category?: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
}

interface StatsDisplayProps {
  todos: Todo[];
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ todos }) => {
  // Calculate statistics
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Count tasks by priority
  const highPriorityTasks = todos.filter(todo => todo.priority === 'high').length;
  const mediumPriorityTasks = todos.filter(todo => todo.priority === 'medium').length;
  const lowPriorityTasks = todos.filter(todo => todo.priority === 'low').length;
  
  // Count overdue tasks
  const overdueTasks = todos.filter(todo => 
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed
  ).length;

  return (
    <div className="stats-container">
      <h2 className="stats-title">Task Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalTasks}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completedTasks}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{activeTasks}</div>
          <div className="stat-label">Active</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completionRate}%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{highPriorityTasks}</div>
          <div className="stat-label">High Priority</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{overdueTasks}</div>
          <div className="stat-label">Overdue</div>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;