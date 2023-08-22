import './styles.css'
import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import { lockSVG, mailSVG } from '../../assets/SVG/svgs'
import { Input } from '../Input'
import { loginSchema } from '../../assets/schemas'
import { localSet } from '../../assets/functions'
import { Link, useNavigate } from 'react-router-dom';
import { loginApi, userApi } from '../../assets/API'
import { LoginProps } from '../../assets/interfaces'
import {useState} from 'react'

export const LoginContainer = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()
    const [badLogin, setBadLogin] = useState('')

    const onSubmitForm = async(values : LoginProps) =>{
        try{
            const loginSucceded = await loginApi(values);
            const userById = await userApi(loginSucceded);
            localSet(userById.data)
            setBadLogin('')
            navigate('/home')
        }
          catch(error) {
            setBadLogin('Email ou Senha incorretos!')
            console.log(error);
          };
    }

return(
    <div className="rightSide">
        <div className="rightContainer">
            <div className="titleRight">
                <p className="main">Login</p>
                <p className="subtext">Entre ou <Link to='/signin'> faça seu cadastro</Link></p>
            </div>
            <Formik <LoginProps>
            initialValues={initialValues} 
            validationSchema={loginSchema}
            onSubmit={(values,{resetForm})=>{onSubmitForm(values),resetForm()}}
            >
                {({ isSubmitting, errors, touched }) => (
                <Form className="formEntry">
                    <Input  name='email'
                            placeholder='E-mail'
                            type='text'
                            svg={mailSVG}
                            errors= {touched.email && errors.email}
                            />        
                    <Input  name='password'
                            placeholder='Senha'
                            type='password'
                            svg={lockSVG}
                            errors= {touched.password && errors.password}
                            />
                    <Button disabled={isSubmitting} innerText='Entrar'/>
                </Form>
                )}
            </Formik>
            {badLogin && <span className='errorSpan'>{badLogin}</span>}
            <Link className='forget' to="/construction2"> Esqueceu sua senha </Link>
        </div>
    </div>       
)
}