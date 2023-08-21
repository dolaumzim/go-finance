import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import './styles.css'
import { lockSVG, mailSVG, personSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { signUpSchema } from '../../assets/schemas'


export const SignUpContainer = () => {
    const capitalize = (word :string) => {
    
    const arr = word.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        console.log(arr.join(" "))
    return arr.join(" ");
    }

    const initialValues : SignUpProps = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }
    interface SignUpProps {
        name : string
        email : string
        password : string
        passwordConfirm : string
    }
    
    const onSubmitForm = (values : SignUpProps) =>{
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
            onSubmit={(values)=>onSubmitForm(values)}
            >
                {({ isSubmitting, isValid, errors, touched }) => (
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
                    <Input  name='passwordConfirm'
                            placeholder='Confirma Senha'
                            type='password'
                            svg={lockSVG}
                            errors= {touched.passwordConfirm && errors.passwordConfirm}
                            />
                    <div className="termsOfUse">
                        <div className="termsCheck"><input  type="checkbox"></input></div>
                        <span>Declaro que li e concordo com os termos e condições de uso</span>
                    </div>
                    <Button disabled={isSubmitting||!isValid} innerText='Cadastrar'/>
                    <a className="goBack" href="login.html">Voltar</a>
                </Form>
                )}
            </Formik>
        </div>
    </div>       
)
}