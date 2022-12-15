import { useState } from 'react';
import * as Icons from '../index';

interface Button {
    width?: string,
    height?: string,
    iconSize?: string,
    label?: string,
    icon?: string,
    submit?: boolean,
    circle?: boolean,
    onClick?: any,
    color?: string,
    backgroudColor?: string,
    hoverColor?: string,
    type?: 'submit' | 'reset' | 'button',
    margin?: string
}

export const Button = (props: Button) => {
    const [isHover, setHover] = useState<boolean>(false);
    
    const button = {
        height: '32px',
        background: isHover ? props.hoverColor : props.backgroudColor,
        color: props.color,
        fontSize: '14px',
        padding: props.icon ? '0 16px 0 12px' : '0 16px',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: props.margin ? props.margin : '0'
    }

    const buttonCircle = {
        width: '32px',
        height: '32px',
        background: isHover ? props.hoverColor : props.backgroudColor,
        color: props.color,
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        margin: props.margin ? props.margin : '0'
    }

    return (
        <button type={props.type ? props.type : 'button'} style={props.circle ? buttonCircle : button} onClick={props.onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {props.icon === 'ArrowLeft' && 
                <Icons.ArrowLeft width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'ArrowRight' && 
                <Icons.ArrowRight width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'BellIcon' && 
                <Icons.BellIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} stroke={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'CalendarIcon' && 
                <Icons.CalendarIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'ClockIcon' && 
                <Icons.ClockIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'CloseIcon' &&  
                <Icons.CloseIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'CopyIcon' && 
                <Icons.CopyIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'DeleteIcon' && 
                <Icons.DeleteIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'DragIcon' && 
                <Icons.DragIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'EditIcon' && 
                <Icons.EditIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'FormsIcon' &&  
                <Icons.FormsIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'GearIcon' &&
                <Icons.GearIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} stroke={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'LoadingIcon' && 
                <Icons.LoadingIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color} 
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'LogoutIcon' && 
                <Icons.LogoutIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'ReceivedIcon' && 
                <Icons.ReceivedIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.icon === 'PlusIcon' && 
                <Icons.PlusIcon width={props.iconSize ? props.iconSize : '16'} height={props.iconSize ? props.iconSize : '16'} fill={props.color}
                style={props.circle ? {marginRight: '0'} : {marginRight: '4px'}} />}
            {props.label}
        </button>
    )
};