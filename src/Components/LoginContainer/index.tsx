import { Button } from '../Button'
import { Formik, Form  } from 'formik'
import './styles.css'
import { lockSVG, mailSVG } from '../../assets/svgs'
import { Input } from '../Input'
import { loginSchema } from '../../assets/schemas'
import  axios  from 'axios'
import { localSet } from '../../assets/tokens'



export const LoginContainer = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    interface LoginProps {
        email : string
        password : string
    }

    // const onSubmitForm = (values : LoginProps) =>{
    //     axios.post('http://academy-react.rarolabs.com.br/v1/auth/login',
    //       {
    //         ...values
    //       })
    //       .then((response) => {
    //         console.log('response id ', response.data.id)
    //         axios.get(`http://academy-react.rarolabs.com.br/v1/users/${response.data.id}`,
    //         {headers: { Authorization: `Bearer ${response.data.token}` }})
    //       })
    //       .then((response) => {
    //         console.log(response)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     console.log('... on submmit', values)
    // }


    const onSubmitForm = async(values : LoginProps) =>{
        try{
        const loginSucceded = await axios.post('http://academy-react.rarolabs.com.br/v1/auth/login',{...values});
        const userById = await axios.get(`http://academy-react.rarolabs.com.br/v1/users/${loginSucceded.data.id}`,
            {headers: { Authorization: `Bearer ${loginSucceded.data.token}` }})
            localSet(userById.data)
            console.log(typeof(userById.data.id))
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
                <p className="subtext">Entre ou <a href="register.html">faça seu cadastro</a></p>
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