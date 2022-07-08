import React from 'react';

import {addMessage,updateNewMessage} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store';
import {DialogsInitialStateType} from '../../redux/dialogsReducer';

export type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

export type MapDispatchPropsType = {
    addMessage: (dialogMessage: string) => void
    updateNewMessage: (newMessage: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {dialogsPage: state.dialogsPage}
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessage})(Dialogs);


export default DialogsContainer;