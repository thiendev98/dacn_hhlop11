import styled from 'styled-components';
import { selectedColor, textSelectedColor, whiteColor } from 'types/color';
import { centerElements, heightHeader, fontSizeIcon } from 'types/variables';

export const SidebarStyle = styled.div`
    #sidebar {
        position: fixed;
        top: ${heightHeader}px;
        ${centerElements}
        left: 0;
        bottom: 0;
        padding: 4px;
        // box-shadow: rgb(0 0 0 / 25%) 2px 1px 2px;
        img {
            width: 20px;
            cursor: pointer;
        }
    }
`;
export const SidebarModalStyle = styled.div`
    #sidebar_modal {
        position: fixed;
        top: ${heightHeader}px;
        left: 0;
        bottom: 0;
        padding: 8px;
        box-shadow: rgb(0 0 0 / 25%) 2px 1px 2px;
        animation-duration: 2s;
        .sidebar_modal_cancel {
            background: transparent;
            width: ${fontSizeIcon}px;
            position: absolute;
            top: 16px;
            right: 8px;
        }
    }
    .sidebar_modal_down,
    .sidebar_modal_right {
        width: ${fontSizeIcon}px;
        background: transparent;
        margin-top: -2px;
        margin-right: 4px;
    }
    .sidebar_chapter {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        cursor: pointer;
        overflow: hidden;
        text-transform: uppercase;
    }
    .selected {
        background-color: ${selectedColor};
        color: ${whiteColor};
    }
    .sidebar_lesson {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        cursor: pointer;
        overflow: hidden;
        padding-left: ${fontSizeIcon + 4}px;
    }
    .sidebar_lesson_selected {
        color: ${textSelectedColor};
        font-weight: bold;
    }
`;
