import Header from 'components/UI/header/Header';
import Sidebar from 'components/UI/sidebar/Sidebar';
import Content from 'components/UI/content/Content';
import { LayoutStyle } from 'layout/layout.style';
export default function Layout() {
    return (
        <LayoutStyle>
            <Header></Header>
            <Sidebar></Sidebar>
            <Content></Content>
        </LayoutStyle>
    );
}
