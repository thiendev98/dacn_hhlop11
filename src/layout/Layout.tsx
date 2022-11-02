import { LayoutStyle } from 'layout/layout.style';
import Header from 'components/UI/header/Header';
import Sidebar from 'components/UI/sidebar/Sidebar';
export default function Layout() {
    return (
        <LayoutStyle>
            <Header></Header>
            <Sidebar></Sidebar>
        </LayoutStyle>
    );
}
