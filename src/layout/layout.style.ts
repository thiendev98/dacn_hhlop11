import styled from 'styled-components';

export const LayoutStyle = styled.div`
    .ant-layout-sider-children {
        background: #fff;
    }
    .anticon-menu-unfold {
        flex-basis: 1%;
    }
    .search_header {
        flex-basis: 95%;
        font-size: 50px;
    }
    .ant-input-group {
        padding-left: 24%;
        padding-right: 24%;
        input {
            height: 32px;
            padding-left: 12px;
            padding-right: 12px;
        }
        button {
            width: 52px;
            outline: none;
            svg {
                font-size: 20px;
            }
        }
    }
    .logo_image {
        width: 88px;
        z-index: 3;
        margin-top: 20px;
        opacity: 0.8;
        cursor: pointer;
    }
    .logo_math {
        width: 340px;
        z-index: 2;
        margin-left: -60px;
        margin-top: 28px;
    }
    .content_row {
        font-size: 15px;
        font-weight: bold;
        :where(.css-dev-only-do-not-override-26rdvq).ant-slider
            .ant-slider-handle::after {
            margin-top: -4px !important;
        }
        img {
            width: 90%;
        }
        button {
            cursor: pointer;
            width: 90%;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
            letter-spacing: 1px;
        }
    }
    .content_image_false {
        width: 100%;
    }
    .content_row_false {
        font-size: 15px;
        font-weight: bold;
        button {
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
            letter-spacing: 1px;
        }
    }
    .ant-slider-handle {
        transform: translate(-50%, -50%) !important;
    }
`;
