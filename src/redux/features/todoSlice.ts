import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

interface createSliceType {
	brand: string;
	image: string;
	year: number;
	id: number;
}

const initialState: { data: createSliceType[] } = {
	data: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			console.log(state);
			const newData = {
				brand: action.payload.brand,
				image: action.payload.image,
				year: action.payload.year,
				id: Date.now(),
			};
			data.push(newData);
		},
	},
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
