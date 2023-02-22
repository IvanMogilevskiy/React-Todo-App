/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const addNewTask = createAsyncThunk(
  'tasks/addTask',
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

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
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
    [addNewTask.fulfilled]: (state, action) => {
      state.push(action.payload.task)
    }
  },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;