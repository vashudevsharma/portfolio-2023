import React, { useEffect, useState } from 'react';
import './Connect.css'; 


export const Connect = () => {
    const [coolText, setCoolText] = useState('cool');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const maxCount = 6;
        let currentCount = (coolText.match(/o/g) || []).length;

       const intervalId = setInterval(()=> {
        if(currentCount < maxCount){
            setCoolText(coolText + 'o');
            currentCount++;

        } else {
            setCoolText('cool');
            currentCount = 0;
        }
    },1000)

    return()=>{
        clearInterval(intervalId);
    }

        
    },[coolText]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        event.preventDefault();
    };

    return(
        <div className='section'>
            <div className='text'>
                <h2 className='heading'>Let's Connect.</h2>
                <p className='slogan'>and build<br/>something {coolText} <br/>for good.</p>
            </div>
            <div className='mail' onClick={handleEmailChange}>
                <input
                     type='email'
                     placeholder='type type type, fas fas, give me yo mail!'
                     value={email}
                     onChange={handleEmailChange}
                     className='ipt'
                />
                <button type='submit' className='btn'>lessgoooo!</button>
            </div>
        </div>
    );
};

export default Connect;