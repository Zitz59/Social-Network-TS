import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={s.loginContainer} onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input} placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field className={s.input} placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field className={s.input} component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <button className={s.button}>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (

        <div className={s.blockContainer}>
            <div className={s.loginContainer}>
                <h1 className={s.loginTitle}>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>

    )
}

export default Login