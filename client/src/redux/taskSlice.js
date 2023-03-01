/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await fetch('http://localhost:5001/tasks');
    if (response.ok) {
      const tasks = await response.json();
      return { tasks };
    }
  }
);

export const addTaskAsync = createAsyncThunk(
  'tasks/addTaskAsync',
  async (payload) => {
    const response = await fetch('http://localhost:5001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (response.ok) {
      const task = await response.json();
      return { task };
    }
  }
);

export const completeTaskAsync = createAsyncThunk(
  'tasks/completeTaskAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:5001/tasks/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (response.ok) {
      const task = await response.json();
      return { task };
    }
  }
);

export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTaskAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:5001/tasks/${payload.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return { id: payload.id };
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(task);
    },
    completeTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[taskIndex].completed = action.payload.completed
    },
    deleteTask: (state, action) => state.filter((task) => task.id !== action.payload.id)
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => action.payload.tasks,
    [addTaskAsync.fulfilled]: (state, action) => {
      state.push(action.payload.task)
    },
    [completeTaskAsync.fulfilled]: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload.task.id);
      state[taskIndex].completed = action.payload.task.completed;
    },
    [deleteTaskAsync.fulfilled]: (state, action) => state.filter((task) => task.id !== action.payload.id),
  },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;