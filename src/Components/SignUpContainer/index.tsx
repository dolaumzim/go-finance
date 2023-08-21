import './styles.css'
import { Button } from '../Button'
import { Formik, Form, Field  } from 'formik'
import { lockSVG, mailSVG, personSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { signUpSchema } from '../../assets/schemas'
import { SignUpProps } from '../../assets/interfaces'
import { signUpApi } from '../../assets/API'
import { Link } from 'react-router-dom';

export const SignUpContainer = () => {

    const initialValues : SignUpProps = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        termsOfUse: false
    }

    const onSubmitForm = async (values : SignUpProps) =>{
        try{
            await signUpApi(values)
        }
        catch(error) {
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
            <Formik <SignUpProps>
            initialValues={initialValues} 
            validationSchema={signUpSchema}
            onSubmit={(values,{resetForm})=>{onSubmitForm(values),resetForm()}}
            >
                {({ isSubmitting, isValid, errors, touched,values }) => (
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
                        <div className="termsCheck"><Field name='termsOfUse' type="checkbox" ></Field></div>
                        <span>Declaro que li e concordo com os termos e condições de uso</span>
                    </label>
                    <Button disabled={isSubmitting||!isValid||!values.termsOfUse} innerText='Cadastrar'/>
                    <Link className="goBack" to="/">Voltar</Link>
                </Form>
                )}
            </Formik>
        </div>
    </div>       
)
}