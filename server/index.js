import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import pkg from 'body-parser';
import { nanoid } from 'nanoid';

dotenv.config({ path: './config.env' });

const app = express();

const { json } = pkg;

app.use(cors());
app.use(json());

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

let tasks = [
  {
    id: nanoid(),
    title: 'Buy milk',
    date: new Date().toLocaleDateString('en-US', dateOptions),
    completed: true,
  },
  {
    id: nanoid(),
    title: 'Learn TypeScript',
    date: new Date().toLocaleDateString('en-US', dateOptions),
    completed: false,
  },
];

app.get('/tasks', (req, res) => res.send(tasks));

app.post('/tasks', (req, res) => {
  const task = { title: req.body.title, date: req.body.date, id: nanoid(), completed: false };
  tasks.push(task);
  return res.send(task);
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => task.id === id);
  const completed = Boolean(req.body.completed);

  if (index > -1) {
    tasks[index].completed = completed;
  }
  return res.send(tasks[index]);
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => task.id == id);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  res.send(tasks);
});

const PORT = 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.green.bold));
