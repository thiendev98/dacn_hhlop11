export interface LessonType {
    key: number;
    lesson: string;
    name: string;
}
export interface ChapterType {
    key: number;
    chapter: string;
    name: string;
    listLesson: LessonType[];
}
export interface InitialStateType {
    error: boolean;
    success: boolean;
    errorMessage: string;
    successMessage: string;
    listChapter: ChapterType[];
}
