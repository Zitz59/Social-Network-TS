import {addMessage,updateNewMessage} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store';
import {DialogsInitialStateType} from '../../redux/dialogsReducer';
import {compose} from 'redux';
import React from 'react';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

export type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
    isAuth:boolean
}

export type MapDispatchPropsType = {
    addMessage: (dialogMessage: string) => void
    updateNewMessage: (newMessage: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {dialogsPage: state.dialogsPage,isAuth:state.auth.isAuth}
}

export default compose<()=>JSX.Element>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addMessage, updateNewMessage}),
    WithAuthRedirect
)(Dialogs)