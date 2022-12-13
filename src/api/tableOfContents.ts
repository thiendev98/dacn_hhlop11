import { CHAPTER, LESSON } from 'types/tableOfContents.enum';
import { LessonType, ChapterType } from 'types/tableOfContents.interface';

const lessonOfChapter1: LessonType[] = [
    {
        key: 1,
        lesson: 'Bài 1: ',
        value: LESSON.LESSON1,
        name: 'Phép biến hình',
    },
    {
        key: 2,
        lesson: 'Bài 2: ',
        value: LESSON.LESSON2,
        name: 'Phép tịnh tiến',
    },
    {
        key: 3,
        lesson: 'Bài 3: ',
        value: LESSON.LESSON3,
        name: 'Phép đối xứng trục',
    },
    {
        key: 4,
        lesson: 'Bài 4: ',
        value: LESSON.LESSON4,
        name: 'Phép đối xứng tâm',
    },
    {
        key: 5,
        lesson: 'Bài 5: ',
        value: LESSON.LESSON5,
        name: 'Phép quay',
    },
    {
        key: 6,
        lesson: 'Bài 6: ',
        value: LESSON.LESSON6,
        name: 'Khái niệm về phép dời hình và hai hình bằng nhau',
    },
    {
        key: 7,
        lesson: 'Bài 7: ',
        value: LESSON.LESSON7,
        name: 'Phép vị tự',
    },
    {
        key: 8,
        lesson: 'Bài 8: ',
        value: LESSON.LESSON8,
        name: 'Phép đồng dạng',
    },
];
const lessonOfChapter2: LessonType[] = [
    {
        key: 1,
        lesson: 'Bài 1: ',
        value: LESSON.LESSON1,
        name: 'Đại cương về đường thẳng và mặt phẳng',
    },
    {
        key: 2,
        lesson: 'Bài 2: ',
        value: LESSON.LESSON2,
        name: 'Hai đường thẳng chéo nhau và hai đường thẳng song song',
    },
    {
        key: 3,
        lesson: 'Bài 3: ',
        value: LESSON.LESSON3,
        name: 'Đường thẳng và mặt phẳng song song',
    },
    {
        key: 4,
        lesson: 'Bài 4: ',
        value: LESSON.LESSON4,
        name: 'Hai mặt phẳng song song',
    },
    {
        key: 5,
        lesson: 'Bài 5: ',
        value: LESSON.LESSON5,
        name: 'Phép chiếu song song. Hình biểu diễn của một hình không gian',
    },
];
const lessonOfChapter3: LessonType[] = [
    {
        key: 1,
        lesson: 'Bài 1: ',
        value: LESSON.LESSON1,
        name: 'Vectơ trong không gian',
    },
    {
        key: 2,
        lesson: 'Bài 2: ',
        value: LESSON.LESSON2,
        name: 'Hai đường thẳng vuông góc',
    },
    {
        key: 3,
        lesson: 'Bài 3: ',
        value: LESSON.LESSON3,
        name: 'Đường thẳng vuông góc với mặt phẳng',
    },
    {
        key: 4,
        lesson: 'Bài 4: ',
        value: LESSON.LESSON4,
        name: 'Hai mặt phẳng vuông góc',
    },
    {
        key: 5,
        lesson: 'Bài 5: ',
        value: LESSON.LESSON5,
        name: 'Khoảng cách',
    },
];
export const listChapter: ChapterType[] = [
    {
        key: 1,
        chapter: 'Chương 1: ',
        value: CHAPTER.CHAPTER1,
        name: 'Phép dời hình và phép đồng dạng trong mặt phẳng',
        listLesson: lessonOfChapter1,
    },
    {
        key: 2,
        chapter: 'Chương 2: ',
        value: CHAPTER.CHAPTER2,
        name: 'Đường thẳng và mặt phẳng trong không gian. Quan hệ song song',
        listLesson: lessonOfChapter2,
    },
    {
        key: 3,
        chapter: 'Chương 3: ',
        value: CHAPTER.CHAPTER3,
        name: 'Vectơ trong không gian. Quan hệ vuông góc trong không gian',
        listLesson: lessonOfChapter3,
    },
];
