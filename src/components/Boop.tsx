// thanks to https://www.joshwcomeau.com/react/boop/ for this very elegant piece of code

import React from 'react';
import { animated } from 'react-spring';
import useBoop, { useBoopConfig } from '../hooks/UseBoop';

interface BoopProps extends useBoopConfig {
    children:React.ReactNode
}

const Boop = ({ children, ...boopConfig } : BoopProps) => {
    const {style, trigger} = useBoop(boopConfig);
    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

export default Boop;