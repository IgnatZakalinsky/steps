import React from 'react';
import PagePresentation5 from "./pagePresentation5";
import {useDispatch, useSelector} from "react-redux";
import {setTextIn, setTextOut} from "../BLL/pageReducer5";

// взять dispatch и actionCreators, сделать колбэки и отдать в пропсы презентационной

const PageContainer5 = () => {
    const dispatch = useDispatch();
    const setTextOutCallback = () => {
        dispatch(setTextOut());
    };
    const setTextInCallback = (e) => {
        dispatch(setTextIn(e.currentTarget.value));
    };

    const textOut = useSelector(state => state.page5.textOut);
    const textIn = useSelector(state => state.page5.textIn);

    return (
        <PagePresentation5 textOut={textOut} textIn={textIn} setTextOutCallback={setTextOutCallback}
                           setTextInCallback={setTextInCallback}/>
    );
};

export default PageContainer5;
