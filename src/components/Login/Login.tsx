import {useForm} from 'react-hook-form';
import s from './Login.module.css';
import React from 'react';

type FormData = {
    email:string,
    password:string,
    rememberMe:boolean
}

export const Login = () => {
    const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log('RESULT', data);
        alert(JSON.stringify(data));
    };
    console.log(errors);
    return (
        <div className={s.blockContainer}>
            <form className={s.loginContainer} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={s.loginTitle}>Login</h1>
                <div>
                    <input type={'text'}
                           className={s.input}
                           placeholder={'email'}
                           {...register('email', {
                               required: true,
                               pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                           })}/>
                </div>
                <div>

                    <input className={s.input}
                           placeholder={'password'}
                           {...register('password', {required: true, maxLength: 80})}/>
                </div>
                <div>
                    <input className={s.input} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <button className={s.button}>Login</button>
            </form>
        </div>

    )
}