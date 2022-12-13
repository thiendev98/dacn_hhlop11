import styled from 'styled-components';
import { whiteColor } from 'types/color';
import { centerElements, heightHeader } from 'types/variables';

export const HeaderStyle = styled.div`
    #header {
        position: fixed;
        width: 100%;
        background-color: ${whiteColor};
        height: ${heightHeader}px;
        ${centerElements};
        box-shadow: rgb(0 0 0 / 40%) 0px 1px 10px;
    }
`;
