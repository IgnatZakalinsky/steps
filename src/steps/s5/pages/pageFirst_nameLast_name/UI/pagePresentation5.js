import React from 'react';

// подключить колбэки в презентационной

const PagePresentation5 = ({textOut, textIn, setTextOutCallback, setTextInCallback}) => {
    return (
        <div>
            <div>Text {textOut}</div>
            <div>
                <input placeholder={'text'} value={textIn} onChange={setTextInCallback}/>
            </div>
            <div>
                <button onClick={setTextOutCallback}>Set text</button>
            </div>
        </div>
    );
};

export default PagePresentation5;
