import { PictureOfLessonType } from 'types/tableOfContents.interface';
import { PictureStyle } from './picture.style';
interface Props {
    pictureOfLesson: PictureOfLessonType | null;
}
export default function Picture({ pictureOfLesson }: Props) {
    if (pictureOfLesson)
        return (
            <PictureStyle>
                <div className="picture">
                    <div>Picture of lesson</div>
                    {<p>{pictureOfLesson.chapter}</p>}
                    {<p>{pictureOfLesson.lesson}</p>}
                </div>
            </PictureStyle>
        );
    else
        return (
            <PictureStyle>
                <div className="picture">
                    <p>Please select the article that needs help drawing pictures</p>
                </div>
            </PictureStyle>
        );
}
