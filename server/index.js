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

let todos = [
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

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.green.bold));
