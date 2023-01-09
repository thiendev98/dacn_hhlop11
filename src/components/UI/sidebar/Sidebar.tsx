import { SidebarStyle, SidebarModalStyle } from './sidebar.style';
import { useEffect, useState } from 'react';
import { XCircle, CaretDown, CaretRight, List } from 'react-bootstrap-icons';
import menu from 'assets/images/menu.png';
import down from 'assets/images/down.png';
import cancel from 'assets/images/cancel.png';
import right from 'assets/images/right.png';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import { getHeightSidebar, getInformationChapterLesson } from 'redux/tableOfContentsSlice';
import { heightBreadcrumbs, initialListExpand, widthSidebar } from 'types/variables';
import { tableOfContentsSelector } from 'redux/tableOfContentsSelector';
import { Collapse } from 'react-collapse';
import { getDataListChapter, getDataPictureOfLesson } from 'redux/tableOfContentsThunkAction';
import { CHAPTER, LESSON } from 'types/tableOfContents.enum';
import { ChapterLessonType, PictureOfLessonType } from 'types/tableOfContents.interface';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React from 'react';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),

        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
}
// export default function Sidebar() {
//     const { widthSidebarHook, listChapter } = useAppSelector(tableOfContentsSelector);
//     const [showSidebar, setShowSidebar] = useState<boolean>(false);
//     const [clickExpandedChapter, setClickExpandedChapter] = useState<boolean>(true);
//     const [listExpand, setListExpand] = useState<boolean[]>(initialListExpand);
//     const [indexSelectedChapter, setIndexSelectedChapter] = useState<number>(0);
//     const [indexSelectedLesson, setIndexSelectedLesson] = useState<number>(0);
//     // const myRefChapter = useRef<null | HTMLParagraphElement>(null);
//     const dispatch = useAppDispatch();
//     useEffect(() => {
//         dispatch(getDataListChapter());
//         if (showSidebar) {
//             dispatch(getHeightSidebar(widthSidebar + 240));
//         } else dispatch(getHeightSidebar(widthSidebar));
//     }, [dispatch, showSidebar, clickExpandedChapter]);
//     const handleShowExpand = (key: number) => {
//         let newListExpand: boolean[] = [];
//         listExpand.forEach((valueElementOfListExpand, index) => {
//             if (index === key - 1) newListExpand.push(!valueElementOfListExpand);
//             else newListExpand.push(false);
//         });
//         // if(newListExpand.every((value: boolean)=> value))
//         setIndexSelectedLesson(0);
//         setIndexSelectedChapter(key);
//         setListExpand(newListExpand);
//         setClickExpandedChapter(!clickExpandedChapter);
//     };
//     const handleShowSidebar = () => setShowSidebar(!showSidebar);
//     const submitRequestPictureOfLesson = async (
//         keyOfChapter: number,
//         keyOfLesson: number,
//         valueOfChapter: CHAPTER,
//         valueOfLesson: LESSON,
//         nameOfChapter: string,
//         nameOfLesson: string,
//     ) => {
//         const data: PictureOfLessonType = { chapter: valueOfChapter, lesson: valueOfLesson };
//         const chapterLesson: ChapterLessonType = { chapter: nameOfChapter, lesson: nameOfLesson };
//         setIndexSelectedChapter(keyOfChapter);
//         setIndexSelectedLesson(keyOfLesson);
//         await dispatch(getDataPictureOfLesson(data));
//         await dispatch(getInformationChapterLesson(chapterLesson));
//     };
//     if (showSidebar)
//         return (
//             <SidebarModalStyle>
//                 <div id="sidebar_modal" style={{ width: widthSidebarHook }}>
//                     <div style={{ height: `${heightBreadcrumbs - 10}px` }}>
//                         <img
//                             alt=""
//                             className="sidebar_modal_cancel"
//                             src={cancel}
//                             onClick={() => handleShowSidebar()}
//                         />
//                     </div>
//                     {listChapter.map((chapter) => {
//                         const nameOfChapter = chapter.chapter + chapter.name;
//                         const listLesson = chapter.listLesson;
//                         return (
//                             <Collapse isOpened={true || false} key={chapter.key}>
//                                 {!listExpand[chapter.key - 1] && (
//                                     <div onClick={() => handleShowExpand(chapter.key)}>
//                                         <span className="sidebar_chapter">
//                                             <img
//                                                 alt=""
//                                                 src={right}
//                                                 className="sidebar_modal_right"
//                                             />
//                                             {nameOfChapter}
//                                         </span>
//                                     </div>
//                                 )}
//                                 {listExpand[chapter.key - 1] && (
//                                     <div>
//                                         <div onClick={() => handleShowExpand(chapter.key)}>
//                                             <span
//                                                 className={
//                                                     indexSelectedChapter - chapter.key
//                                                         ? `sidebar_chapter`
//                                                         : `sidebar_chapter selected`
//                                                 }
//                                             >
//                                                 <img
//                                                     alt=""
//                                                     src={down}
//                                                     className="sidebar_modal_down"
//                                                 />
//                                                 {nameOfChapter}
//                                             </span>
//                                         </div>
//                                         <Collapse isOpened={true}>
//                                             {listLesson.map((lesson) => {
//                                                 const nameOfLesson = lesson.lesson + lesson.name;
//                                                 return (
//                                                     <p
//                                                         className={
//                                                             indexSelectedLesson - lesson.key
//                                                                 ? 'sidebar_lesson'
//                                                                 : 'sidebar_lesson sidebar_lesson_selected'
//                                                         }
//                                                         key={lesson.key}
//                                                         onClick={() =>
//                                                             submitRequestPictureOfLesson(
//                                                                 chapter.key,
//                                                                 lesson.key,
//                                                                 chapter.value,
//                                                                 lesson.value,
//                                                                 nameOfChapter,
//                                                                 nameOfLesson,
//                                                             )
//                                                         }
//                                                     >
//                                                         {nameOfLesson}
//                                                     </p>
//                                                 );
//                                             })}
//                                         </Collapse>
//                                     </div>
//                                 )}
//                             </Collapse>
//                         );
//                     })}
//                 </div>
//             </SidebarModalStyle>
//         );
//     else
//         return (
//             <SidebarStyle>
//                 <div id="sidebar" style={{ width: widthSidebarHook, height: widthSidebarHook }}>
//                     <img alt="" src={menu} onClick={() => handleShowSidebar()} />
//                 </div>
//             </SidebarStyle>
//         );
// }
