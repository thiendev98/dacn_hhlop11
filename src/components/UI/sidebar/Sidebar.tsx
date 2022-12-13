import { SidebarStyle, SidebarModalStyle } from './sidebar.style';
import { useEffect, useState } from 'react';
import { ArrowRightCircle, XCircle, CaretDown, CaretRight } from 'react-bootstrap-icons';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import { getHeightSidebar, getInformationChapterLesson } from 'redux/tableOfContentsSlice';
import { initialListExpand, widthSidebar } from 'types/variables';
import { tableOfContentsSelector } from 'redux/tableOfContentsSelector';
import { Collapse } from 'react-collapse';
import { getDataListChapter, getDataPictureOfLesson } from 'redux/tableOfContentsThunkAction';
import { CHAPTER, LESSON } from 'types/tableOfContents.enum';
import { ChapterLessonType, PictureOfLessonType } from 'types/tableOfContents.interface';
export default function Sidebar() {
    const { widthSidebarHook, listChapter } = useAppSelector(tableOfContentsSelector);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [clickExpandedChapter, setClickExpandedChapter] = useState<boolean>(true);
    const [listExpand, setListExpand] = useState<boolean[]>(initialListExpand);
    const [indexSelectedChapter, setIndexSelectedChapter] = useState<number>(0);
    const [indexSelectedLesson, setIndexSelectedLesson] = useState<number>(0);
    // const myRefChapter = useRef<null | HTMLParagraphElement>(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDataListChapter());
        if (showSidebar) {
            dispatch(getHeightSidebar(widthSidebar + 240));
        } else dispatch(getHeightSidebar(widthSidebar));
    }, [dispatch, showSidebar, clickExpandedChapter]);
    const handleShowExpand = (key: number) => {
        let newListExpand: boolean[] = [];
        listExpand.forEach((valueElementOfListExpand, index) => {
            if (index === key - 1) newListExpand.push(!valueElementOfListExpand);
            else newListExpand.push(false);
        });
        // if(newListExpand.every((value: boolean)=> value))
        setIndexSelectedLesson(0);
        setIndexSelectedChapter(key);
        setListExpand(newListExpand);
        setClickExpandedChapter(!clickExpandedChapter);
    };
    const handleShowSidebar = () => setShowSidebar(!showSidebar);
    const submitRequestPictureOfLesson = async (
        keyOfChapter: number,
        keyOfLesson: number,
        valueOfChapter: CHAPTER,
        valueOfLesson: LESSON,
        nameOfChapter: string,
        nameOfLesson: string,
    ) => {
        const data: PictureOfLessonType = { chapter: valueOfChapter, lesson: valueOfLesson };
        const chapterLesson: ChapterLessonType = { chapter: nameOfChapter, lesson: nameOfLesson };
        setIndexSelectedChapter(keyOfChapter);
        setIndexSelectedLesson(keyOfLesson);
        await dispatch(getDataPictureOfLesson(data));
        await dispatch(getInformationChapterLesson(chapterLesson));
    };
    if (showSidebar)
        return (
            <SidebarModalStyle>
                <div id="sidebar_modal" style={{ width: widthSidebarHook }}>
                    <XCircle onClick={() => handleShowSidebar()}></XCircle>
                    {listChapter.map((chapter) => {
                        const nameOfChapter = chapter.chapter + chapter.name;
                        const listLesson = chapter.listLesson;
                        return (
                            <Collapse isOpened={true || false} key={chapter.key}>
                                {!listExpand[chapter.key - 1] && (
                                    <div onClick={() => handleShowExpand(chapter.key)}>
                                        <span className="sidebar_chapter">
                                            <CaretRight></CaretRight>
                                            {nameOfChapter}
                                        </span>
                                    </div>
                                )}
                                {listExpand[chapter.key - 1] && (
                                    <div>
                                        <div onClick={() => handleShowExpand(chapter.key)}>
                                            <span
                                                className={
                                                    indexSelectedChapter - chapter.key
                                                        ? `sidebar_chapter`
                                                        : `sidebar_chapter selected`
                                                }
                                            >
                                                <CaretDown></CaretDown>
                                                {nameOfChapter}
                                            </span>
                                        </div>
                                        <Collapse isOpened={true}>
                                            {listLesson.map((lesson) => {
                                                const nameOfLesson = lesson.lesson + lesson.name;
                                                return (
                                                    <p
                                                        className={
                                                            indexSelectedLesson - lesson.key
                                                                ? 'sidebar_lesson'
                                                                : 'sidebar_lesson sidebar_lesson_selected'
                                                        }
                                                        key={lesson.key}
                                                        onClick={() =>
                                                            submitRequestPictureOfLesson(
                                                                chapter.key,
                                                                lesson.key,
                                                                chapter.value,
                                                                lesson.value,
                                                                nameOfChapter,
                                                                nameOfLesson,
                                                            )
                                                        }
                                                    >
                                                        {nameOfLesson}
                                                    </p>
                                                );
                                            })}
                                        </Collapse>
                                    </div>
                                )}
                            </Collapse>
                        );
                    })}
                </div>
            </SidebarModalStyle>
        );
    else
        return (
            <SidebarStyle>
                <div id="sidebar" style={{ width: widthSidebarHook }}>
                    <ArrowRightCircle onClick={() => handleShowSidebar()}></ArrowRightCircle>
                </div>
            </SidebarStyle>
        );
}
