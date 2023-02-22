import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import pkg from 'body-parser';
import { nanoid } from 'nanoid';
// const express = require('express');
// const dotenv = require('dotenv');
// const colors = require('colors');
// const cors = require('cors');
// const { json } = require('body-parser');
// const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

const { json } = pkg;

app.use(cors());
app.use(json());

let tasks = [
  {
    id: nanoid(),
    title: 'Buy milk',
    completed: true,
  },
  {
    id: nanoid(),
    title: 'Learn TypeScript',
    completed: false,
  },
];

app.get('/tasks', (req, res) => res.send(tasks));

app.post('/tasks', (req, res) => {
  const task = { title: req.body.title, id: nanoid(), completed: false };
  tasks.push(task);
  return res.send(task);
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => task.id === id);

  if (index > -1) {
    tasks.splice(index, 1);
  }

  res.send(tasks);
});

const PORT = 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.green.bold));
