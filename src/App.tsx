import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListSection from './components/ListSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import Task from './interfaces';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskSave = (task: Task) => {
    if (selectedTask) {
      const updatedTasks = tasks.map(t => (t.id === selectedTask.id ? task : t));
      setTasks(updatedTasks);
      setSelectedTask(null);
    } else {
      const newTask: Task = {
        ...task,
        id: tasks.length + 1,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter(t => t.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <ListSection tasks={tasks} setSelectedTask={setSelectedTask} handleTaskDelete={handleTaskDelete} />
        <DetailsSection selectedTask={selectedTask} handleTaskSave={handleTaskSave} />
      </div>
      <Footer />
    </div>
  );
};

export default App;