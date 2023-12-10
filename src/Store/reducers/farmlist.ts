import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TreeItem {
  treeName: string;
  temp: string;
  moisture: string;
}

interface ItemsState {
  items: TreeItem[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TreeItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;
export const farmList =  itemsSlice.reducer;
