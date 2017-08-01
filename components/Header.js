import React, { Component } from 'react';
import Navigation from '../components/Navigation';

const Header = (props) => (
    <header>
        <style jsx>{`
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            padding: 20px 0;

            h1 {
                margin-left: 0;
                padding-left: 0;
            }
        `}</style>
        <h1>Frontend.Cafe</h1>
        <Navigation />
    </header>
)

export default Header;
