import s from './Login.module.css'

export const Login = () => {
return(
    <div className={s.blockContainer}>
        <div className={s.loginContainer}>
            <h1 className={s.loginTitle}>Login</h1>
            <input className={s.input} placeholder={'Login'} type="text"/>
            <input className={s.input} placeholder={'Password'} type="text"/>
            <button className={s.button} >Login</button>
        </div>
    </div>

)

}