import { useState, useEffect, useRef } from 'react';

const useSmoothScroll = () => {
    const [smoothScrollY, setSmoothScrollY] = useState(0);
    const targetScrollY = useRef(0);
    const currentScrollY = useRef(0);
    const requestRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            targetScrollY.current = window.scrollY;
        };

        const updateScroll = () => {
            const ease = 0.05; 
            const diff = targetScrollY.current - currentScrollY.current;
            
            if (Math.abs(diff) > 0.1) {
                currentScrollY.current += diff * ease;
                setSmoothScrollY(currentScrollY.current);
                requestRef.current = requestAnimationFrame(updateScroll);
            } else {
                requestRef.current = null;
            }
        };

        const onScroll = () => {
            handleScroll();
            if (!requestRef.current) {
                requestRef.current = requestAnimationFrame(updateScroll);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        
        requestRef.current = requestAnimationFrame(updateScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return smoothScrollY;
};

export default useSmoothScroll;
