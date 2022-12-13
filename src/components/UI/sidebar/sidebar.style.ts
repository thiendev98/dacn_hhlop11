import styled from 'styled-components';
import { selectedColor, textSelectedColor, whiteColor } from 'types/color';
import { heightHeader } from 'types/variables';

export const SidebarStyle = styled.div`
    #sidebar {
        position: fixed;
        top: ${heightHeader}px;
        left: 0;
        bottom: 0;
        padding: 1rem;
        box-shadow: rgb(0 0 0 / 25%) 2px 1px 2px;
    }
`;
export const SidebarModalStyle = styled.div`
    #sidebar_modal {
        position: fixed;
        top: ${heightHeader}px;
        left: 0;
        bottom: 0;
        padding: 1rem;
        box-shadow: rgb(0 0 0 / 25%) 2px 1px 2px;
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
    }
    .sidebar_lesson_selected {
        color: ${textSelectedColor};
    }
`;
