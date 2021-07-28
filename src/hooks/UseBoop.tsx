// thanks to https://www.joshwcomeau.com/react/boop/ for this very elegant piece of code
import React from 'react';
import {useSpring } from 'react-spring';

interface springConfig{
    tension: number
    friction: number
}

interface useBoopConfig{
    x?: number
    y?: number
    rotation?: number
    scale?: number
    timing?: number
    springConfig?: springConfig
}

// interface useBoop{
//     style : {transform: SpringValue<string>}
//     trigger : React.MouseEventHandler<HTMLElement>
// }

function useBoop({
                     x = 0,
                     y = 0,
                     rotation = 0,
                     scale = 1,
                     timing = 150,
                     springConfig = {
                         tension: 300,
                         friction: 10,
                     },
                 }: useBoopConfig){
    const [isBooped, setIsBooped] = React.useState(false);
    const style = useSpring({
        transform: isBooped
            ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
            : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
        config: springConfig,
    });
    React.useEffect(() => {
        if (!isBooped) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped, timing]);
    
    const trigger = React.useCallback((event: any) => {
        setIsBooped(true);
    }, []);
    return {style, trigger};
}

export default useBoop;
export type {useBoopConfig}