import './styles.css'
import { Button } from '../Button'
import { Formik, Form, Field  } from 'formik'
import { lockSVG, mailSVG, personSVG } from '../../assets/SVG/svgs'
import { Input } from '../Input'
import { signInSchema } from '../../assets/schemas'
import { SignInProps } from '../../assets/interfaces'
import { signInApi } from '../../assets/API'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import './checkbox.css'

export const SignInContainer = () => {

    const initialValues : SignInProps = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        termsOfUse: false
    }

    const navigate = useNavigate()
    const [badSignIn, setSignIn] = useState('')

    const onSubmitForm = async (values : SignInProps) =>{
        try{
            const signedUp = await signInApi(values)
            console.log(signedUp)
            setSignIn('')
            navigate('/')
        }
        catch(error) {
            setSignIn('Ocorreu um erro, tente novamente ou contate o Suporte!')
            console.log(error);
        };
        console.log('... on submmit', values)
    }

return(
    <div className="rightSide">
        <div className="rightContainer">
            <div className="titleRight">
                <p className="main">Cadastro</p>
                <p className="subtext">para iniciar</p>
            </div>
            <Formik <SignInProps>
            initialValues={initialValues} 
            validationSchema={signInSchema}
            onSubmit={(values,{resetForm})=>{onSubmitForm(values),resetForm()}}
            >
                {({ isSubmitting, isValid, errors, touched, values }) => (
                <Form className="formEntry">
                    <Input  name='name'
                            placeholder='Nome e Sobrenome'
                            type='text'
                            svg={personSVG}
                            errors= {touched.name && errors.name}
                            />  
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
                    <Input  name='password_confirmation'
                            placeholder='Confirma Senha'
                            type='password'
                            svg={lockSVG}
                            errors= {touched.password_confirmation && errors.password_confirmation}
                            />
                    <label className="termsOfUse">
                        <Field name='termsOfUse' type="checkbox" ></Field>
                        <span className='checkmark'></span>
                        <span>Declaro que li e concordo com os termos e condições de uso</span>
                    </label>
                    <Button disabled={isSubmitting||!isValid||!values.termsOfUse} innerText='Cadastrar'/>
                    {badSignIn && <span className='errorSpan'>{badSignIn}</span>}
                    <Link className="goBack" to="/">Voltar</Link>
                </Form>
                )}
            </Formik>
        </div>
    </div>       
)
}