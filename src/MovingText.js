import React, { useState, useEffect } from 'react';
import './MovingText.css';


export const MovingText =()=> {
    const [ position , setPosition] = useState(0);

    useEffect(() => {
        let animationFrameId;
        let isScrolling = false;

        const handleScroll = () => {
            if (!isScrolling){
                isScrolling = true;

                animationFrameId = requestAnimationFrame(()=>{
                    const scrollDirection = window.screenY > position === 100 ? 'down' : 'up';
                    if (scrollDirection === 'up'){
                        setPosition((prevPosition) => (prevPosition === 100 ? 0 : prevPosition + 1));
                        } else{
                            setPosition((prevPosition)=> (prevPosition === 0 ? 100 : prevPosition - 1));
                    }

                    isScrolling = false;
                });
            }
        };
        window.addEventListener('scroll', handleScroll);

        return()=>{
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', handleScroll);
        }
    },[position]);

    return(
        <div className='moving-text-container'>
            <div className='moving-text' style={{transform: 'translateX(-${position}%)'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
            </div>
        </div>
    );
};

export default MovingText;