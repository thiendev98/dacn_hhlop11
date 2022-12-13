import { ChapterLessonType } from 'types/tableOfContents.interface';
import { BreadcrumbStyle } from './breadcrumb.style';
interface Props {
    chapterLesson: ChapterLessonType | null;
}
export default function Breadcrumb({ chapterLesson }: Props) {
    return (
        <BreadcrumbStyle>
            <div className="breadcrumbs">
                {chapterLesson && (
                    <span>
                        {chapterLesson.chapter} / {chapterLesson.lesson}
                    </span>
                )}
            </div>
        </BreadcrumbStyle>
    );
}
