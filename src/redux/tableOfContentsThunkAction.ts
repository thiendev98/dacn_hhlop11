import { createAsyncThunk } from '@reduxjs/toolkit';
import { listChapter } from 'api/tableOfContents';
import { PictureOfLessonType } from 'types/tableOfContents.interface';
export const getDataListChapter = createAsyncThunk('getDataListChapter', async () => {
    try {
        return listChapter;
    } catch (error) {
        throw new Error(error as string);
    }
});
export const getDataPictureOfLesson = createAsyncThunk(
    'getDataPictureOfLesson',
    async (data: PictureOfLessonType | null) => {
        try {
            return data;
        } catch (error) {
            throw new Error(error as string);
        }
    },
);
