import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { listChapter } from 'api/tableOfContents';
import { ChapterType, InitialStateType } from 'types/tableOfContents.interface';
import { getDataListChapter } from './tableOfContentsThunkAction';
const initialState: InitialStateType = {
    listChapter: [],
    error: false,
    success: false,
    errorMessage: '',
    successMessage: '',
};
const tableOfContentsSlice = createSlice({
    name: 'tableOfContents',
    initialState,
    reducers: {
        turnOffActiveStatusNotification: (state) => {
            state.error = false;
            state.success = false;
            state.successMessage = '';
            state.errorMessage = '';
        },
    },
    extraReducers(builder) {
        builder
            .addCase(
                getDataListChapter.fulfilled,
                (state, action: PayloadAction<ChapterType[]>) => {
                    state.listChapter = action.payload;
                    state.success = true;
                    state.successMessage = 'Get list chapter successfully!';
                },
            )
            .addCase(getDataListChapter.rejected, (state) => {
                state.error = true;
                state.errorMessage = 'Get list chapter failed!';
            });
    },
});
const { reducer: tableOfContentsReducer } = tableOfContentsSlice;
export const { turnOffActiveStatusNotification } = tableOfContentsSlice.actions;
export default tableOfContentsReducer;
