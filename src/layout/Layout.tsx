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
const { Search } = Input;
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const heightSlider = 42;
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
    getItem(
        'Chương 1: Phép dời hình và phép đồng dạng trong mặt phẳng',
        'CHAPTER1',
        <AppstoreOutlined />,
        [
            getItem('Bài 1: Phép biến hình', '1.1'),
            getItem('Bài 2: Phép tịnh tiến', '1.2'),
            getItem('Bài 3: Phép đối xứng trục', '1.3'),
            getItem('Bài 4: Phép đối xứng tâm', '1.4'),
            getItem('Bài 5: Phép quay', '1.5'),
            getItem(
                'Bài 6: Khái niệm về phép dời hình và hai hình bằng nhau',
                '1.6',
            ),
            getItem('Bài 7: Phép vị tự', '1.7'),
            getItem('Bài 8: Phép đồng dạng', '1.8'),
        ],
    ),
    getItem(
        'Chương 2: Đường thẳng và mặt phẳng trong không gian. Quan hệ song song',
        'CHAPTER2',
        <AppstoreOutlined />,
        [
            getItem('Bài 1: Đại cương về đường thẳng và mặt phẳng', '2.1'),
            getItem(
                'Bài 2: Hai đường thẳng chéo nhau và hai đường thẳng song song',
                '2.2',
            ),
            getItem('Bài 3: Đường thẳng và mặt phẳng song song', '2.3'),
            getItem('Bài 4: Hai mặt phẳng song song', '2.4'),
            getItem(
                'Bài 5: Phép chiếu song song. Hình biểu diễn của một hình không gian',
                '2.5',
            ),
        ],
    ),
    getItem(
        'Chương 3: Vectơ trong không gian. Quan hệ vuông góc trong không gian',
        'CHAPTER3',
        <AppstoreOutlined />,
        [
            getItem('Bài 1: Vectơ trong không gian', '3.1'),
            getItem('Bài 2: Hai đường thẳng vuông góc', '3.2'),
            getItem('Bài 3: Đường thẳng vuông góc với mặt phẳng', '3.3'),
            getItem('Bài 4: Hai mặt phẳng vuông góc', '3.4'),
            getItem('Bài 5: Khoảng cách', '3.5'),
        ],
    ),
];
const rootSubmenuKeys = ['CHAPTER1', 'CHAPTER2', 'CHAPTER3'];
export default function Screen() {
    const [exprImage, setExprImage] = useState(image211);
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
                            height: `${window.innerHeight - 24}` + 'px',
                        }}
                        items={items}
                    />
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
                            placeholder="Nhập nội dung bạn cần tìm"
                            className="search_header"
                            onSearch={onSearch}
                            enterButton
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height:
                                `calc(${
                                    window.innerHeight - 24 - heightHeader
                                })` + 'px',
                            background: colorBgContainer,
                        }}
                    >
                        {collapsed && (
                            <Row className="content_row">
                                <Col span={15}>
                                    <img src={exprImage} alt="" />
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
                                            Base Radius
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
                                            Top Radius
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
                                            Height
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
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Show wireframe</Checkbox>
                                    </Row>
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Start Animation</Checkbox>
                                    </Row>
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Smooth Shading</Checkbox>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Button type="primary">
                                                Reset
                                            </Button>
                                        </Col>
                                        <Col span={12}>
                                            <Button>Save as png</Button>
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
                                            Base Radius
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
                                            Top Radius
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
                                            Height
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
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Show wireframe</Checkbox>
                                    </Row>
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Start Animation</Checkbox>
                                    </Row>
                                    <Row style={{ marginBottom: '4px' }}>
                                        <Checkbox>Smooth Shading</Checkbox>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Button type="primary">
                                                Reset
                                            </Button>
                                        </Col>
                                        <Col span={24}>
                                            {' '}
                                            <Button>Save as png</Button>
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
