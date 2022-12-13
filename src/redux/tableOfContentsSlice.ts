import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { listChapter } from 'api/tableOfContents';
import {
    ChapterLessonType,
    ChapterType,
    InitialStateType,
    PictureOfLessonType,
} from 'types/tableOfContents.interface';
import { getDataListChapter, getDataPictureOfLesson } from './tableOfContentsThunkAction';
const initialState: InitialStateType = {
    listChapter: [],
    pictureOfLesson: null,
    chapterLesson: null,
    error: false,
    success: false,
    errorMessage: '',
    successMessage: '',
    widthSidebarHook: 0,
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
        getHeightSidebar: (state, action) => {
            state.widthSidebarHook = action.payload as number;
        },
        getInformationChapterLesson: (state, action: { payload: ChapterLessonType }) => {
            state.success = true;
            state.successMessage = 'Get information chapter and lesson successfully!';
            state.chapterLesson = action.payload;
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
        builder
            .addCase(
                getDataPictureOfLesson.fulfilled,
                (state, action: PayloadAction<PictureOfLessonType | null>) => {
                    state.success = true;
                    state.successMessage = 'Get data picture of lesson successfully!';
                    state.pictureOfLesson = action.payload;
                },
            )
            .addCase(getDataPictureOfLesson.rejected, (state) => {
                state.error = true;
                state.errorMessage = 'Get data picture of lesson failed!';
            });
    },
});
const { reducer: tableOfContentsReducer } = tableOfContentsSlice;
export const { turnOffActiveStatusNotification, getHeightSidebar, getInformationChapterLesson } =
    tableOfContentsSlice.actions;
export default tableOfContentsReducer;
