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

export const signInSchema = Yup.object().shape({
    name: Yup.string().required('Digite um nome e um sobrenome').matches(/^[aA-zZ\s]+$/, "São permitidas apenas letras")
    .test('sobrenome', 'Digite também um sobrenome', value=> value?.includes(' '))
    .test('2 nomes', 'Digite também um sobrenome', value => value.split(' ')[1].length>1),
    email: 
    Yup.string().email('Email inválido').required('Digite um Email')
    .test('.com','Email inválido', value =>  value.includes('@') && (checkEmail(value))),
    password : 
    Yup.string()            
    .required('Digite uma senha')
    .test('meme', 'LÁ ELE!', value => (value !== 'L4ele!!!'))
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{8,})/,
        "Senha precisa conter no mínimo 8 caracteres, 1 letra, 1 número e 1 caracter especial"
      ),
    password_confirmation : 
    Yup.string()            
    .required('Confirme sua senha').oneOf([Yup.ref('password'), ''], 'Senhas não coincidem')
    .test('meme', 'LÁ ELE!', value => (value !== 'L4ele!!!'))
  });