
import {addMessage,updateNewMessage} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store';
import {DialogsInitialStateType} from '../../redux/dialogsReducer';
import {compose} from 'redux';

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

export default compose<()=>JSX.Element>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addMessage, updateNewMessage})
)(Dialogs)