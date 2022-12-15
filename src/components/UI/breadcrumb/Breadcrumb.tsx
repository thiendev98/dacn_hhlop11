import { ChapterLessonType } from 'types/tableOfContents.interface';
import { BreadcrumbStyle } from './breadcrumb.style';
import { ChevronDoubleRight } from 'react-bootstrap-icons';
interface Props {
    chapterLesson: ChapterLessonType | null;
}
export default function Breadcrumb({ chapterLesson }: Props) {
    return (
        <BreadcrumbStyle>
            <div className="breadcrumbs">
                {chapterLesson && (
                    <span>
                        {chapterLesson.chapter}
                        <ChevronDoubleRight></ChevronDoubleRight>
                        {chapterLesson.lesson}
                    </span>
                )}
            </div>
        </BreadcrumbStyle>
    );
}
