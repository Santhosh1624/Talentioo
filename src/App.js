// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import SignUp from './SignUp';
import Login from './Login';
import TodoList from './TodoList';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Your Personal Task Manager    </h2>
    <p>Stay organized and manage your daily tasks with ease using TodoList, a simple and intuitive task management application. Whether you have a busy schedule or just a few tasks to keep track of, TodoList is here to help you stay on top of everything.</p>
  </div>
);

export default App;
