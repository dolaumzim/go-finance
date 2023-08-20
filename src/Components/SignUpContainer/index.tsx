import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import * as Yup from 'yup'
import './styles.css'
import { lockSVG, mailSVG } from '../../assets/svgs'
import { Input } from '../Input'


export const SignUpContainer = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    interface PropsLogin {
        email : string
        password : string
    }
    const checkEmail = (value:string) => (value.split('@')[1].split('.')[0].length) + 
                                        (value.split('@')[1].split('.')[1].length) > 1

    const onSubmitForm = (values : PropsLogin) =>{
        console.log('... on submmit', values)
    }

    const loginSchema = Yup.object().shape({
        email: 
        Yup.string().email('Email inválido').required('Digite um Email')
        .test('.com','Email inválido', value =>  value.includes('@') && (checkEmail(value))),
        password : 
        Yup.string()            
        .required('Digite uma senha')
        .test('teste', 'LÁ ELE!', value => (value.toLowerCase() !== 'laele')) 
      });

return(
    <div className="rightSide">
        <div className="rightContainer">
            <div className="titleRight">
                <p className="main">Login</p>
                <p className="subtext">Entre ou <a href="register.html">faça seu cadastro</a></p>
            </div>
            <Formik <PropsLogin>
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