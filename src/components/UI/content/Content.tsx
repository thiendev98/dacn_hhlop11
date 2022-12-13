import { ContentStyle } from './content.style';
import { useAppSelector } from 'redux/hook';
import { tableOfContentsSelector } from 'redux/tableOfContentsSelector';
import Picture from 'components/UI/picture/Picture';
import Breadcrumb from 'components/UI/breadcrumb/Breadcrumb';
export default function Content() {
    const { pictureOfLesson, chapterLesson, widthSidebarHook } =
        useAppSelector(tableOfContentsSelector);
    return (
        <ContentStyle>
            <div
                id="content"
                style={{
                    width: `calc(${window.innerWidth}px - ${widthSidebarHook}px)`,
                    left: `${widthSidebarHook}px`,
                }}
            >
                <Breadcrumb chapterLesson={chapterLesson}></Breadcrumb>
                <Picture pictureOfLesson={pictureOfLesson}></Picture>
            </div>
        </ContentStyle>
    );
}
