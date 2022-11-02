import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import { tableOfContentsSelector } from 'redux/tableOfContentsSelector';
import { getDataListChapter } from 'redux/tableOfContentsThunkAction';
export default function Header() {
    const dispatch = useAppDispatch();
    const { listChapter } = useAppSelector(tableOfContentsSelector);
    useEffect(() => {
        dispatch(getDataListChapter());
    }, [dispatch]);
    console.log(listChapter);
    return (
        <div>
            <div>HEADER</div>
        </div>
    );
}
