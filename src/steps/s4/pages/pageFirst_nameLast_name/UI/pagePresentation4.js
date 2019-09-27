import React from 'react';

// отобразить данные из store в презентационной

const PagePresentation4 = ({textOut, textIn}) => {
    return (
        <div>
            <div>Text {textOut}</div>
            <div><input placeholder={'text'} value={textIn}/></div>
            <div>
                <button>Set text</button>
            </div>
        </div>
    );
};

export default PagePresentation4;
