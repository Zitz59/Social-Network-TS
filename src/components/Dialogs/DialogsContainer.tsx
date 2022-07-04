import React from 'react';


import {addMessageAC, initialStateType, onMessageChangeAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

export type MapStatePropsType = {
    dialogsPage: initialStateType
}

export type MapDispatchPropsType = {
    addMessage: (dialogMessage: string) => void
    onMessageChange: (newMessage: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {dialogsPage: state.dialogsPage}
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (dialogMessage: string) => {
            dispatch(addMessageAC(dialogMessage))
        },
        onMessageChange: (newMessage: string) => {
            dispatch(onMessageChangeAC(newMessage))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;