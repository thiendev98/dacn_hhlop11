import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Menu, theme } from 'antd';
import { heightHeader } from 'types/variables';
import { AppstoreOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import type { MenuProps } from 'antd';
import { useAppDispatch } from 'redux/hook';
import { getDataListChapter } from 'redux/tableOfContentsThunkAction';
import { LayoutStyle } from './layout.style';
import image from 'assets/images/image.png';
import math from 'assets/images/math.png';
import image211 from 'assets/images/image_2.1.1.png';
import image212 from 'assets/images/image_2.1.2.png';
import { Col, Row, Slider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import page from 'assets/images/file-earmark.svg';
import book from 'assets/images/book.svg';
import out from 'assets/images/out.svg';
const { Search } = Input;
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const heightSlider = 44;
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

const listObject: ItemType[] = [
    getItem('Đa diện', 'dd', '', [getItem('S.ABCD', 'S.ABCD')]),
    getItem('Đa giác', 'dg', '', [
        getItem('ABCD', 'ABCD'),
        getItem('SAB', 'SAB'),
        getItem('SBC', 'SBC'),
        getItem('SCD', 'SCD'),
        getItem('SDA', 'SDA'),
        getItem('SAC', 'SAC'),
        getItem('SBD', 'SBD'),
    ]),
    getItem('Đường thẳng', 'dt', '', [
        getItem('AB', 'AB'),
        getItem('BC', 'BC'),
        getItem('CD', 'CD'),
        getItem('DA', 'DA'),
        getItem('SA', 'SA'),
        getItem('SB', 'SB'),
        getItem('SC', 'SC'),
        getItem('SD', 'SD'),
        getItem('AC', 'AC'),
        getItem('BD', 'BD'),
    ]),
    getItem('Mặt phẳng', 'mp'),
    getItem('Điểm', 'd', '', [
        getItem('S', 'S'),
        getItem('A', 'A'),
        getItem('B', 'B'),
        getItem('C', 'C'),
        getItem('D', 'D'),
        getItem('I', 'I'),
    ]),
];
const items: MenuItem[] = [
    getItem(
        'Chương 1: Phép dời hình và phép đồng dạng trong mặt phẳng',
        'CHAPTER1',
        <AppstoreOutlined />,
        [
            getItem('Bài 1: Phép biến hình', '1.1', <img src={book} alt="" />),
            getItem('Bài 2: Phép tịnh tiến', '1.2', <img src={book} alt="" />, [
                getItem('Bài tập 1', '1.2.1', <img src={page} alt="" />),
                getItem('Bài tập 2', '1.2.2', <img src={page} alt="" />),
                getItem('Bài tập 3', '1.2.3', <img src={page} alt="" />),
                getItem('Bài tập 4', '1.2.4', <img src={page} alt="" />),
            ]),
            getItem(
                'Bài 3: Phép đối xứng trục',
                '1.3',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '1.3.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '1.3.2', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 4: Phép đối xứng tâm',
                '1.4',
                <img src={book} alt="" />,
            ),
            getItem('Bài 5: Phép quay', '1.5', <img src={book} alt="" />, [
                getItem('Bài tập 1', '1.5.1', <img src={page} alt="" />),
                getItem('Bài tập 2', '1.5.2', <img src={page} alt="" />),
            ]),
            getItem(
                'Bài 6: Khái niệm về phép dời hình và hai hình bằng nhau',
                '1.6',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '1.6.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '1.6.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '1.6.3', <img src={page} alt="" />),
                ],
            ),
            getItem('Bài 7: Phép vị tự', '1.7', <img src={book} alt="" />, [
                getItem('Bài tập 1', '1.7.1', <img src={page} alt="" />),
                getItem('Bài tập 2', '1.7.2', <img src={page} alt="" />),
                getItem('Bài tập 3', '1.7.3', <img src={page} alt="" />),
            ]),
            getItem('Bài 8: Phép đồng dạng', '1.8', <img src={book} alt="" />, [
                getItem('Bài tập 1', '1.8.1', <img src={page} alt="" />),
                getItem('Bài tập 2', '1.8.2', <img src={page} alt="" />),
                getItem('Bài tập 3', '1.8.3', <img src={page} alt="" />),
                getItem('Bài tập 4', '1.8.4', <img src={page} alt="" />),
            ]),
            getItem(
                'Bài tập ôn tập chương 1',
                '1.9',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '1.9.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '1.9.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '1.9.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '1.9.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '1.9.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '1.9.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '1.9.7', <img src={page} alt="" />),
                ],
            ),
        ],
    ),
    getItem(
        'Chương 2: Đường thẳng và mặt phẳng trong không gian. Quan hệ song song',
        'CHAPTER2',
        <AppstoreOutlined />,
        [
            getItem(
                'Bài 1: Đại cương về đường thẳng và mặt phẳng',
                '2.1',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '2.1.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '2.1.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '2.1.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '2.1.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '2.1.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '2.1.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '2.1.7', <img src={page} alt="" />),
                    getItem('Bài tập 8', '2.1.8', <img src={page} alt="" />),
                    getItem('Bài tập 9', '2.1.9', <img src={page} alt="" />),
                    getItem('Bài tập 10', '2.1.10', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 2: Hai đường thẳng chéo nhau và hai đường thẳng song song',
                '2.2',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '2.2.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '2.2.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '2.2.3', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 3: Đường thẳng và mặt phẳng song song',
                '2.3',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '2.3.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '2.3.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '2.3.3', <img src={page} alt="" />),
                ],
            ),

            getItem(
                'Bài 4: Hai mặt phẳng song song',
                '2.4',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '2.4.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '2.4.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '2.4.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '2.4.4', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 5: Phép chiếu song song. Hình biểu diễn của một hình không gian',
                '2.5',
                <img src={book} alt="" />,
            ),
            getItem(
                'Bài tập ôn tập chương 2',
                '2.6',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '2.6.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '2.6.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '2.6.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '2.6.4', <img src={page} alt="" />),
                ],
            ),
        ],
    ),
    getItem(
        'Chương 3: Vectơ trong không gian. Quan hệ vuông góc trong không gian',
        'CHAPTER3',
        <AppstoreOutlined />,
        [
            getItem(
                'Bài 1: Vectơ trong không gian',
                '3.1',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '3.1.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '3.1.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '3.1.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '3.1.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '3.1.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '3.1.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '3.1.7', <img src={page} alt="" />),
                    getItem('Bài tập 8', '3.1.8', <img src={page} alt="" />),
                    getItem('Bài tập 9', '3.1.9', <img src={page} alt="" />),
                    getItem('Bài tập 10', '3.1.10', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 2: Hai đường thẳng vuông góc',
                '3.2',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '3.2.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '3.2.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '3.2.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '3.2.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '3.2.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '3.2.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '3.2.7', <img src={page} alt="" />),
                    getItem('Bài tập 8', '3.2.8', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 3: Đường thẳng vuông góc với mặt phẳng',
                '3.3',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '3.3.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '3.3.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '3.3.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '3.3.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '3.3.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '3.3.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '3.3.7', <img src={page} alt="" />),
                    getItem('Bài tập 8', '3.3.8', <img src={page} alt="" />),
                ],
            ),
            getItem(
                'Bài 4: Hai mặt phẳng vuông góc',
                '3.4',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '3.4.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '3.4.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '3.4.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '3.4.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '3.4.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '3.4.6', <img src={page} alt="" />),
                    getItem('Bài tập 7', '3.4.7', <img src={page} alt="" />),
                    getItem('Bài tập 8', '3.4.8', <img src={page} alt="" />),
                    getItem('Bài tập 9', '3.4.9', <img src={page} alt="" />),
                    getItem('Bài tập 10', '3.4.10', <img src={page} alt="" />),
                    getItem('Bài tập 11', '3.4.11', <img src={page} alt="" />),
                ],
            ),
            getItem('Bài 5: Khoảng cách', '3.5', <img src={book} alt="" />, [
                getItem('Bài tập 1', '3.5.1', <img src={page} alt="" />),
                getItem('Bài tập 2', '3.5.2', <img src={page} alt="" />),
                getItem('Bài tập 3', '3.5.3', <img src={page} alt="" />),
                getItem('Bài tập 4', '3.5.4', <img src={page} alt="" />),
                getItem('Bài tập 5', '3.5.5', <img src={page} alt="" />),
                getItem('Bài tập 6', '3.5.6', <img src={page} alt="" />),
                getItem('Bài tập 7', '3.5.7', <img src={page} alt="" />),
                getItem('Bài tập 8', '3.5.8', <img src={page} alt="" />),
            ]),
            getItem(
                'Bài tập ôn tập chương 3',
                '3.6',
                <img src={book} alt="" />,
                [
                    getItem('Bài tập 1', '3.6.1', <img src={page} alt="" />),
                    getItem('Bài tập 2', '3.6.2', <img src={page} alt="" />),
                    getItem('Bài tập 3', '3.6.3', <img src={page} alt="" />),
                    getItem('Bài tập 4', '3.6.4', <img src={page} alt="" />),
                    getItem('Bài tập 5', '3.6.5', <img src={page} alt="" />),
                    getItem('Bài tập 6', '3.6.6', <img src={page} alt="" />),
                ],
            ),
        ],
    ),
    // getItem('Bài tập ôn tập cuối năm', 'CHAPTER4', <AppstoreOutlined />, [
    //     getItem('Bài tập 1', '4.1'),
    //     getItem('Bài tập 2', '4.2'),
    //     getItem('Bài tập 3', '4.3'),
    //     getItem('Bài tập 4', '4.4'),
    //     getItem('Bài tập 5', '4.5'),
    //     getItem('Bài tập 6', '4.6'),
    //     getItem('Bài tập 7', '4.7'),
    // ]),
    getItem(
        'Danh sách đối tượng hình vẽ',
        'CHAPTER5',
        <img src={out} alt="" />,
        listObject,
    ),
];
const rootSubmenuKeys = ['CHAPTER1', 'CHAPTER2', 'CHAPTER3'];
export default function Screen() {
    const [exprImage, setExprImage] = useState<string>(image211);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDataListChapter());
    }, [dispatch]);
    const [baseRadius, setBaseRadius] = useState(0);
    const [topRadius, setTopRadius] = useState(0);
    const [heightRadius, setHeightRadius] = useState(0);
    const [sectorCount, setSectorCount] = useState(3);
    const [stackCount, setStackCount] = useState(1);
    const [resetData, setResetData] = useState(false);
    const [lessonChapter, setLessonChapter] = useState<string[]>([
        '1.1',
        'CHAPTER1',
    ]);
    const handleReset = () => {
        Swal.fire({
            title: 'Chú ý',
            text: 'Bạn có muốn cập nhật lại dữ liệu không?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#1677ff',
            cancelButtonColor: '#87adbd',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy bỏ',
            focusConfirm: false,
        }).then((result) => {
            if (result.isConfirmed) {
                setBaseRadius(0);
                setTopRadius(0);
                setSectorCount(3);
                setStackCount(1);
                setHeightRadius(0);
                setResetData(true);
            }
        });
    };
    useEffect(() => {
        if (resetData) setCheckedValueList([]);
        return () => {
            setResetData(false);
        };
    }, [resetData]);
    const [checkedValueList, setCheckedValueList] = useState<
        CheckboxValueType[]
    >([]);
    const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
        setCheckedValueList(checkedValues);
    };
    const onChangeBaseRadius = (newValue: number) => {
        setBaseRadius(newValue);
    };
    const onChangeTopRadius = (newValue: number) => {
        setTopRadius(newValue);
    };
    const onChangeHeightRadius = (newValue: number) => {
        setHeightRadius(newValue);
    };
    const onChangeSectorCount = (newValue: number) => {
        setSectorCount(newValue);
    };
    const onChangeStackCount = (newValue: number) => {
        setStackCount(newValue);
    };
    const [openKeys, setOpenKeys] = useState(['']);
    const downloadImage = () => {
        const chapterOfImage = 'chapter' + lessonChapter[0][0];
        const lessonOfImage = 'lesson' + lessonChapter[0][2];
        saveAs(exprImage, `${chapterOfImage}_${lessonOfImage}.png`);
    };
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const onSearch = (value: string) => console.log(value);
    const onClickChange: MenuProps['onClick'] = ({ keyPath }) => {
        // console.log(keyPath);
        setLessonChapter(keyPath);
        if (exprImage === image211) setExprImage(image212);
        else setExprImage(image211);
    };
    return (
        <LayoutStyle>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={520}
                >
                    {collapsed && (
                        <div
                            className="logo"
                            style={{
                                backgroundColor: '#fff',
                                height: heightHeader + 'px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={image}
                                alt=""
                                style={{
                                    width: 60 + 'px',
                                    opacity: 0.8,
                                    cursor: 'pointer',
                                }}
                                onClick={() => navigate('/')}
                            />
                        </div>
                    )}
                    {!collapsed && (
                        <div
                            className="logo"
                            style={{
                                backgroundColor: '#fff',
                                height: heightHeader + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 12 + 'px',
                            }}
                        >
                            <img
                                src={image}
                                alt=""
                                className="logo_image"
                                onClick={() => navigate('/')}
                            />
                            <img src={math} alt="" className="logo_math" />
                        </div>
                    )}
                    <Menu
                        onClick={onClickChange}
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        style={{
                            height: `${window.innerHeight - 80}px`,
                        }}
                        items={items}
                    ></Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            height: heightHeader + 'px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            },
                        )}

                        <Search
                            placeholder="Tìm tên bài, tên chương..."
                            className="search_header"
                            onSearch={onSearch}
                            enterButton
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height: `calc(${
                                window.innerHeight - 24 - heightHeader
                            })px`,
                            background: colorBgContainer,
                        }}
                    >
                        {collapsed && (
                            <Row className="content_row">
                                <Col span={15}>
                                    {exprImage === image211 && (
                                        <img src={exprImage} alt="" />
                                    )}
                                    {exprImage === image212 && (
                                        <img
                                            src={exprImage}
                                            alt=""
                                            style={{
                                                height: '421px',
                                            }}
                                        />
                                    )}
                                </Col>
                                <Col span={9}>
                                    <Row
                                        style={{ height: heightSlider + 'px' }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Bán kính đáy
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={0.1}
                                                onChange={onChangeBaseRadius}
                                                value={
                                                    typeof baseRadius ===
                                                    'number'
                                                        ? baseRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{baseRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Bán kính đỉnh
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={0.1}
                                                onChange={onChangeTopRadius}
                                                value={
                                                    typeof topRadius ===
                                                    'number'
                                                        ? topRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{topRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Chiều cao
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                onChange={onChangeHeightRadius}
                                                value={
                                                    typeof heightRadius ===
                                                    'number'
                                                        ? heightRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{heightRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Sector Count
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={3}
                                                max={100}
                                                onChange={onChangeSectorCount}
                                                value={
                                                    typeof sectorCount ===
                                                    'number'
                                                        ? sectorCount
                                                        : 3
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{sectorCount}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Stack Count
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={1}
                                                max={50}
                                                onChange={onChangeStackCount}
                                                value={
                                                    typeof stackCount ===
                                                    'number'
                                                        ? stackCount
                                                        : 1
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{stackCount}</span>
                                        </Col>
                                    </Row>
                                    <Checkbox.Group
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                        value={checkedValueList}
                                        onChange={onCheckboxChange}
                                    >
                                        <Row
                                            style={{
                                                marginBottom: '4px',
                                            }}
                                        >
                                            <Checkbox value="Wireframe">
                                                Show Wireframe
                                            </Checkbox>
                                        </Row>
                                        <Row style={{ marginBottom: '4px' }}>
                                            <Checkbox value="Animation">
                                                Start Animation
                                            </Checkbox>
                                        </Row>
                                        <Row style={{ marginBottom: '4px' }}>
                                            <Checkbox value="Smooth">
                                                Smooth Shading
                                            </Checkbox>
                                        </Row>
                                    </Checkbox.Group>
                                    <Row>
                                        <Col span={12}>
                                            <Button
                                                type="primary"
                                                onClick={() => handleReset()}
                                            >
                                                Tạo lại
                                            </Button>
                                        </Col>
                                        <Col span={12}>
                                            <Button
                                                onClick={() => downloadImage()}
                                            >
                                                Tải ảnh xuống
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )}
                        {!collapsed && (
                            <Row className="content_row_false">
                                <Col span={24}>
                                    <img
                                        src={exprImage}
                                        alt=""
                                        className="content_image_false"
                                    />
                                </Col>
                                <Col span={24}>
                                    <Row
                                        style={{ height: heightSlider + 'px' }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Bán kính đáy
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={0.1}
                                                onChange={onChangeBaseRadius}
                                                value={
                                                    typeof baseRadius ===
                                                    'number'
                                                        ? baseRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{baseRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Bán kính đỉnh
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={0.1}
                                                onChange={onChangeTopRadius}
                                                value={
                                                    typeof topRadius ===
                                                    'number'
                                                        ? topRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{topRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Chiều cao
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={0.1}
                                                onChange={onChangeHeightRadius}
                                                value={
                                                    typeof heightRadius ===
                                                    'number'
                                                        ? heightRadius
                                                        : 0
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{heightRadius}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Sector Count
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={3}
                                                max={100}
                                                onChange={onChangeSectorCount}
                                                value={
                                                    typeof sectorCount ===
                                                    'number'
                                                        ? sectorCount
                                                        : 3
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{sectorCount}</span>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            height: heightSlider + 'px',
                                            margin: '8px 0',
                                        }}
                                    >
                                        <Col
                                            span={6}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                            }}
                                        >
                                            Stack Count
                                        </Col>
                                        <Col
                                            span={16}
                                            style={{ marginTop: 16 + 'px' }}
                                        >
                                            <Slider
                                                min={1}
                                                max={50}
                                                onChange={onChangeStackCount}
                                                value={
                                                    typeof stackCount ===
                                                    'number'
                                                        ? stackCount
                                                        : 1
                                                }
                                            />
                                        </Col>
                                        <Col
                                            span={2}
                                            style={{
                                                lineHeight: heightSlider + 'px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span>{stackCount}</span>
                                        </Col>
                                    </Row>
                                    <Checkbox.Group
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                        value={checkedValueList}
                                        onChange={onCheckboxChange}
                                    >
                                        <Row style={{ marginBottom: '4px' }}>
                                            <Checkbox value="Wireframe">
                                                Show Wireframe
                                            </Checkbox>
                                        </Row>
                                        <Row style={{ marginBottom: '4px' }}>
                                            <Checkbox value="Animation">
                                                Start Animation
                                            </Checkbox>
                                        </Row>
                                        <Row style={{ marginBottom: '4px' }}>
                                            <Checkbox value="Smooth">
                                                Smooth Shading
                                            </Checkbox>
                                        </Row>
                                    </Checkbox.Group>
                                    <Row>
                                        <Col span={24}>
                                            <Button
                                                type="primary"
                                                onClick={() => handleReset()}
                                            >
                                                Tạo lại
                                            </Button>
                                        </Col>
                                        <Col span={24}>
                                            {' '}
                                            <Button
                                                onClick={() => downloadImage()}
                                            >
                                                Tải ảnh xuống
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )}
                    </Content>
                </Layout>
            </Layout>
        </LayoutStyle>
    );
}
