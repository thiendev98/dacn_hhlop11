import { CHAPTER, LESSON } from './tableOfContents.enum';

export interface LessonType {
    key: number;
    lesson: string;
    name: string;
    value: LESSON;
}
export interface ChapterType {
    key: number;
    chapter: string;
    value: CHAPTER;
    name: string;
    listLesson: LessonType[];
}
export interface InitialStateType {
    error: boolean;
    success: boolean;
    errorMessage: string;
    successMessage: string;
    listChapter: ChapterType[];
    pictureOfLesson: PictureOfLessonType | null;
    chapterLesson: ChapterLessonType | null;
    widthSidebarHook: number;
}
export interface PictureOfLessonType {
    chapter: CHAPTER;
    lesson: LESSON;
}
export interface ChapterLessonType {
    chapter: string;
    lesson: string;
}
