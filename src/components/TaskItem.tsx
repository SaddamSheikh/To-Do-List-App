import React from 'react';

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  category?: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, updatedTodo: any) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  text,
  completed,
  category,
  dueDate,
  priority = 'medium',
  onToggle,
  onDelete,
  onEdit
}) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''} priority-${priority}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="checkbox"
      />
      <div className="todo-content">
        <span className="todo-text">{text}</span>
        <div className="todo-details">
          {category && <span className="todo-category">{category}</span>}
          {priority && <span className="todo-priority">{priority}</span>}
          {dueDate && (
            <span className={`todo-due-date ${new Date(dueDate) < new Date() && !completed ? 'overdue' : ''}`}>
              Due: {new Date(dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
      <div className="todo-actions">
        <button
          onClick={() => {
            const newText = prompt('Update task:', text);
            if (newText && newText.trim()) {
              onEdit(id, { text: newText.trim() });
            }
          }}
          className="edit-button"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;