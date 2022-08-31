import {SubmitHandler, useForm} from 'react-hook-form';
import s from './Login.module.scss';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";

type FormData = {
    email: string,
    password: string,
    rememberMe?: boolean
    captcha?:boolean
}

export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isAuth)



    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('RESULT', data);
        // alert(JSON.stringify(data));
        dispatch(login(data.email,data.password))
        reset()

    };
    console.log(errors);
    if (isLoggedIn){
        return <Redirect from="/login" to="/profile"/>
    }
    return (
        <div className={s.blockContainer}>
            <form className={s.loginContainer} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={s.loginTitle}>Login</h1>
                <div className={s.input}>
                    <input className={s.input} type={'text'}
                           placeholder={'Email'}
                           {...register('email', {
                               required: 'Please enter your e-mail',
                               pattern: {
                                   value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                   message: 'Please enter valid email!'
                               }
                           })}/>
                    {errors.email && <div className={s.errorTitle}>{errors.email.message}</div>}
                </div>
                <div className={s.input}>
                    <input className={s.input}
                           type='password'
                           placeholder={'Password'}
                           {...register('password',
                               {
                                   required: 'Please enter your password',
                                   maxLength: {
                                       value: 80,
                                       message: 'Password max length is 80 symbols'
                                   }
                               })}/>
                    {errors.password &&
                        <div className={s.errorTitle}>{errors.password.message}</div>}
                </div>
                <div>
                    <input name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <div className={s.buttonBlock}>
                    <button className={s.button}>Login</button>
                </div>
            </form>
        </div>

    )
}