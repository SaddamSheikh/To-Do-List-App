import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskItem from './components/TaskItem'
import StatsDisplay from './components/StatsDisplay'

interface Todo {
  id: number
  text: string
  completed: boolean
  category?: string
  dueDate?: string
  priority?: 'low' | 'medium' | 'high'
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [filter, setFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (task: {
    text: string;
    category?: string;
    dueDate?: string;
    priority: 'low' | 'medium' | 'high';
  }) => {
    setTodos([...todos, {
      id: Date.now(),
      text: task.text,
      completed: false,
      category: task.category,
      dueDate: task.dueDate,
      priority: task.priority
    }])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: number, updatedTodo: Partial<Todo>) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    // Filter by search term
    if (searchTerm && !todo.text.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }
    
    // Filter by completion status
    if (filter === 'completed' && !todo.completed) return false
    if (filter === 'active' && todo.completed) return false
    
    // Filter by category
    if (categoryFilter !== 'all' && todo.category !== categoryFilter) return false
    
    return true
  })
  
  // Get unique categories for the filter dropdown
  const categories = ['all', ...new Set(todos.map(todo => todo.category).filter(Boolean))]

  return (
    <div className="container">
      <h1>To-Do List</h1>
      
      <SearchBar 
        searchTerm={searchTerm} 
        onSearch={setSearchTerm} 
      />
      
      <TaskForm onAddTask={addTodo} />
      
      <TaskFilter 
        filter={filter}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />
      
      <div className="todos-container">
        {filteredTodos.map(todo => (
          <TaskItem 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            category={todo.category}
            dueDate={todo.dueDate}
            priority={todo.priority}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
        {filteredTodos.length === 0 && (
          <div className="empty-state">No tasks match your filters</div>
        )}
      </div>
      
      <StatsDisplay todos={todos} />
    </div>
  )
}

export default App