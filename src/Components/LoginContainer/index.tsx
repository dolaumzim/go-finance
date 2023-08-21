import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import './styles.css'
import { lockSVG, mailSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { loginSchema } from '../../assets/schemas'


export const LoginContainer = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    interface LoginProps {
        email : string
        password : string
    }

    const onSubmitForm = (values : LoginProps) =>{
        console.log('... on submmit', values)
    }

return(
    <div className="rightSide">
        <div className="rightContainer">
            <div className="titleRight">
                <p className="main">Login</p>
                <p className="subtext">Entre ou <a href="register.html">faça seu cadastro</a></p>
            </div>
            <Formik <LoginProps>
            initialValues={initialValues} 
            validationSchema={loginSchema}
            onSubmit={(values)=>onSubmitForm(values)}
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
            <a className="forget" href="#passwordForgot">Esqueceu sua senha</a>
        </div>
    </div>       
)
}