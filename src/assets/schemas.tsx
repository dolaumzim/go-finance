import * as Yup from 'yup'

const checkEmail = (value:string) => (value.split('@')[1].split('.')[0].length) + 
                                        (value.split('@')[1].split('.')[1].length) > 1

export const loginSchema = Yup.object().shape({
        email: 
        Yup.string().email('Email inválido').required('Digite um Email')
        .test('.com','Email inválido', value =>  value.includes('@') && (checkEmail(value))),
        password : 
        Yup.string()            
        .required('Digite uma senha')
        .test('teste', 'LÁ ELE!', value => (value.toLowerCase() !== 'laele')) 
        });

export const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Digite um nome e um sobrenome').matches(/^[aA-zZ\s]+$/, "São permitidas apenas letras").test('sobrenome', 'Digite também um sobrenome', value=> value?.includes(' ')).label('La Ele'),
    email: 
    Yup.string().email('Email inválido').required('Digite um Email')
    .test('.com','Email inválido', value =>  value.includes('@') && (checkEmail(value))),
    password : 
    Yup.string()            
    .required('Digite uma senha').min(4, 'Senha precisa ter no mínimo 4 caracteres')
    .test('teste', 'LÁ ELE!', value => (value.toLowerCase() !== 'l4ele!'))
    .matches(
        /^(?=.*[aA-zZ])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{4,})/,
        "Senha precisa conter no mínimo 4 caracteres, 1 letra, 1 número e 1 caracter especial"
      ),
    password_confirmation : 
    Yup.string()            
    .required('Confirme sua senha').oneOf([Yup.ref('password'), ''], 'Senhas não coincidem')
    .test('teste', 'LÁ ELE!', value => (value.toLowerCase() !== 'laele')) 
  });