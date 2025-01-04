import Tabbar from "../navigation/tabbar";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getTrainerWithStudents } from "../../../store";

function Family(){

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    
    useEffect(() => {
            dispatch(getTrainerWithStudents({}));
    }, [ dispatch ])
    return(
        <Tabbar/>
    )
}
export default Family;
