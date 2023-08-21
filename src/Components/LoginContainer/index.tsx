import './styles.css'
import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import { lockSVG, mailSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { loginSchema } from '../../assets/schemas'
import { AxiosResponse }  from 'axios'
import { localSet } from '../../assets/functions'
import { Link } from 'react-router-dom';
import { loginApi, userApi } from '../../assets/API'
import { LoginProps } from '../../assets/interfaces'

export const LoginContainer = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmitForm = async(values : LoginProps) =>{
        try{
            const loginSucceded: AxiosResponse<any, any> = await loginApi(values);
            const userById = await userApi(loginSucceded);
            localSet(userById.data)
            console.log(userById.data)
        }
          catch(error) {
            console.log(error);
          };
    }

return(
    <div className="rightSide">
        <div className="rightContainer">
            <div className="titleRight">
                <p className="main">Login</p>
                <p className="subtext">Entre ou <Link to='/signup'> faça seu cadastro</Link></p>
            </div>
            <Formik <LoginProps>
            initialValues={initialValues} 
            validationSchema={loginSchema}
            onSubmit={(values)=>onSubmitForm(values)}
            >
                {({ isSubmitting, isValid, errors, touched }) => (
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
                    <Button disabled={isSubmitting||!isValid} innerText='Entrar'/>
                </Form>
                )}
            </Formik>
            <a className="forget" href="#passwordForgot">Esqueceu sua senha</a>
        </div>
    </div>       
)
}