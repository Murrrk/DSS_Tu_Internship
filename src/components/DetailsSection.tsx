import React, { useState, useEffect } from 'react';
import Task  from '../interfaces';
//import './DetailsSection.css';

interface DetailsSectionProps {
    selectedTask: Task | null;
    handleTaskSave: (task: Task) => void;
  }
  
  const DetailsSection: React.FC<DetailsSectionProps> = ({ selectedTask, handleTaskSave }) => {
    const initialTaskState: Task = {
      id: 0,
      description: '',
      assignee: '',
      status: '',
      priority: 0,
      dueDate: new Date(),
    };
   const [task, setTask] = useState<Task>(initialTaskState);

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask(initialTaskState);
    }
  }, [selectedTask]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [id]: id === 'dueDate' ? new Date(value) : value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.description && task.assignee) {
      handleTaskSave(task);
      setTask(initialTaskState);
    }
  };

  const handleClear = () => {
    setTask(initialTaskState);
  };

  return (
    <div className="content-details">
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={task.description}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="assignee">Assignee:</label>
        <input
          type="text"
          id="assignee"
          value={task.assignee}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          value={task.status}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="priority">Priority:</label>
        <input
          type="number"
          id="priority"
          value={task.priority}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={task.dueDate.toISOString().slice(0, 10)}
          onChange={handleInputChange}
          required
        />

        <div className="buttons">
          <button id="saveButton" type="submit">
            Save
          </button>
          <button id="clearButton" type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsSection;