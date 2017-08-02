import React from 'react';
import styled from 'styled-components';
import * as colors from '../utils/colors';

const Card = styled.div`
    background: ${colors.base.light};
    border-radius: 8px;
    box-shadow: 0 3px 48px rgba(0,0,0,.2), 0 0 20px rgba(0,0,0,.1);
    padding: 32px;
    width: ${props => props.half ? '50%' : 'auto'};
`

export default Card;
