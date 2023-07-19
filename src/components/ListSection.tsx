import React from 'react';
import Task from '../interfaces';
import '../styles/ListSection.css';

interface ListSectionProps {
  tasks: Task[];
  setSelectedTask: (task: Task | null) => void;
  handleTaskDelete: (taskId: number) => void;
}

const ListSection: React.FC<ListSectionProps> = ({ tasks, setSelectedTask, handleTaskDelete }) => {
  const handleListItemClick = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <div className="content-list">
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleListItemClick(task)}>
            <p className="id">ID: {task.id}</p>
            <p className="field1">Description: {task.description}</p>
            <p className="field2">Assignee: {task.assignee}</p>
            <p className="status">Status: {task.status}</p>
            <p className="priority">Priority: {task.priority}</p>
            <p className="dueDate">Due Date: {task.dueDate.toISOString().slice(0, 10)}</p>
            <button className="deleteButton" onClick={(e) => {e.stopPropagation(); handleTaskDelete(task.id)}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;