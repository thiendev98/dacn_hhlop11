import { createAsyncThunk } from '@reduxjs/toolkit';
import { listChapter } from 'api/tableOfContents';
export const getDataListChapter = createAsyncThunk('getDataListChapter', async () => {
    try {
        return listChapter;
    } catch (error) {
        throw new Error(error as string);
    }
});
