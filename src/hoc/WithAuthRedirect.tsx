import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent: React.FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>;

        // @ts-ignore
        return <Component  {...restProps as T}/>

    }
    const mapStateToProps = (state: AppStateType): MapStatePropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect<MapStatePropsType, {}, T, AppStateType>(mapStateToProps)(RedirectComponent)
}