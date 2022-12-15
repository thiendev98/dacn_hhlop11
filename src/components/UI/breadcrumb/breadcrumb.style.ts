import styled from 'styled-components';
import { heightBreadcrumbs } from 'types/variables';

export const BreadcrumbStyle = styled.div`
    .breadcrumbs {
        height: ${heightBreadcrumbs}px;
        padding: 0 8px 0 8px;
        display: flex;
        align-items: center;
        span {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            cursor: pointer;
            overflow: hidden;
            font-weight: 500;
            font-size: 20px;
            svg {
                padding-left: 2px;
                padding-right: 2px;
                font-size: 24px;
            }
        }
    }
`;
