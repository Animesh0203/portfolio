import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Preloader() {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const preloaderElement = preloaderRef.current;
        if (!preloaderElement) return;

        gsap.to(preloaderElement, {
            opacity: 0,
            duration: 1,
            delay: 2,
            onComplete: () => {
                if (preloaderElement.parentNode) {
                    preloaderElement.parentNode.removeChild(preloaderElement);
                }
            }
        });
    }, []);

    return (
        <div ref={preloaderRef} className="preloader">
            <div className="preloader-content">
                <h1 className='Welcome'>Welcome</h1>
                {/* Add more translations here */}
            </div>
        </div>
    );
}

export default Preloader;
