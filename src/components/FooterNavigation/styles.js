import styled from 'styled-components';
import { Flex } from '../../utils/commonStyles';

export const PrevNextMenu = styled(Flex)`
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const LeftLink = styled.div`
    background: rgba(0,0,0,0.1);
    padding: 3px 12px;
`;

export const RightLink = styled(LeftLink)``;
