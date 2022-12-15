import styled from 'styled-components';
import { whiteColor } from 'types/color';

export const HomeStyles = styled.div`
    .homepage {
        max-width: 1050px;
        width: 85%;
        display: inline;
        justify-content: center;
        margin: auto auto 60px;
        text-align: center;
    }
    .image_left {
        transform: rotate(-40deg);
        z-index: -1;
        position: absolute;
        top: 0px;
        left: -70px;
    }
    .image_right {
        z-index: -1;
        position: absolute;
        top: 0px;
        right: 0px;
        object-fit: cover;
    }
    .container {
        transition: opacity 400ms ease 0s, transform 400ms ease 0s;
        transform: none;
        opacity: 1;
        display: flex;
        margin-top: 5%;
        .container_content {
            flex-basis: 45%;
            transform: rotate(-16deg);
            .container_content_image {
                width: 65%;
                border-radius: 8px;
                margin-left: 16%;
                max-width: 480px;
                background-color: transparent;
            }
        }
        .container_introduce {
            flex-basis: 54%;
            margin-top: 60px;
            text-align: center;
            h1 {
                font-weight: 600;
                font-size: 38px;
                padding: 1rem 8px 1rem 8px;
                letter-spacing: 1px;
            }
            p {
                font-size: 20px;
                line-height: 1.5;
                font-weight: 400;
                letter-spacing: 1px;
            }
            button {
                width: 100%;
                background: linear-gradient(to left, #3288ce, #0483ea) !important;
                color: ${whiteColor};
                font-size: 20px;
                font-weight: 700;
                border: 0px;
                border-radius: 10px;
                padding: 10px 0px;
                cursor: pointer;
                max-width: 180px;
                margin: 2rem;
                letter-spacing: 2px;
            }
            button:hover {
                box-shadow: #0483ea 0px 0px 11px;
            }
        }
    }
`;
