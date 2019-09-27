import React from 'react';
import PagePresentation4 from "./pagePresentation4";
import {useSelector} from "react-redux";

// законнектить данные из store в контейнерную и передать в пропсы презентационной

const PageContainer4 = () => {
    const textOut = useSelector(state => state.page4.textOut);
    const textIn = useSelector(state => state.page4.textIn);

    return (
        <PagePresentation4 textOut={textOut} textIn={textIn}/>
    );
};

export default PageContainer4;
