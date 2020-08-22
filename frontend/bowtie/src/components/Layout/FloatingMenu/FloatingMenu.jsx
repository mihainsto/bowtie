import React from "react";
import { useState, useEffect } from "react";
import "./FloatingMenu.scss";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const FloatingMenu = (props) =>{
    const style = {
        'left': props.x+'px',
        'top': props.y+'px',
        'width': props.width+'px'
    }
    if (props.open){
        return (
            <ClickAwayListener onClickAway={props.closeMenu}>
                <div className="floating-menu" style={style} >
                    {props.children}
                </div>
            </ClickAwayListener>
        )
    } else{
        return (
            <div></div>
        )
    }

}

export default FloatingMenu