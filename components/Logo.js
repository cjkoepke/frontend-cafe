import React from 'react';
import styled from 'styled-components';
import * as colors from '../utils/colors';

const LogoTitle = styled.h1`
    background-image: url(/static/logo.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    text-indent: -9999px;
    height: 150px;
    width: 150px;
`

const Logo = () => (
    <LogoTitle>Frontend Cafe</LogoTitle>
)

export default Logo;

