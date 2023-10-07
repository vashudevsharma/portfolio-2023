import React, { useState } from 'react';
import './Expand.css';

export const Expand = ({ title, content }) => {
    const [isExpanded, setIsExpand] = useState(false);

    const toggleExpand = () => {
        setIsExpand(!isExpanded);
    };

    return (
        <div className={`expand-collapse ${isExpanded ? 'expanded' : ''}`}>
            <div className="header" onClick={toggleExpand}>
                {title}{isExpanded ? '' : ''}
            </div>
            {isExpanded ? (
                <div className="content">
                    <p>{content}</p>
                    <button className='work-btn'>Read more</button>
                    </div>
              ): null}
        </div>
    );
};

export default Expand;
