import { Button } from '../Button'
import { Formik, Form, Field  } from 'formik'
import './styles.css'
import { lockSVG, mailSVG, personSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { signUpSchema } from '../../assets/schemas'
import axios from 'axios'
import { GO_FINANCE_TOKEN } from '../../assets/tokens'


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
        password_confirmation: '',
        termsOfUse: false
    }
    interface SignUpProps {
        name : string
        email : string
        password : string
        password_confirmation : string
        termsOfUse? : boolean
    }
    
    // const onSubmitForm = (values : SignUpProps) =>{
    //     axios.post('http://academy-react.rarolabs.com.br/v1/users',
    //     {
    //         ...values
    //       }
    //     )
    //       .then((response) => {
    //         console.log({...values});
    //         console.log({response});
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     console.log('... on submmit', values)
    // }


    const onSubmitForm = async (values : SignUpProps) =>{
        try{
            await axios.post('http://academy-react.rarolabs.com.br/v1/users',{...values})
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
            onSubmit={(values)=>onSubmitForm(values)}
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
                    <a className="goBack" href="login.html">Voltar</a>
                </Form>
                )}
            </Formik>
        </div>
    </div>       
)
}