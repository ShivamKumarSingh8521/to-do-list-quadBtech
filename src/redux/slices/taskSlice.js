import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
      name: "tasks",
      initialState: { items: [] },
      reducers: {
            addTask: (state, action) => {
                  state.items.push({ id: Date.now(), name: action.payload });
            },
            deleteTask: (state, action) => {
                  state.items = state.items.filter((task) => task.id !== action.payload);
            },
      },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
