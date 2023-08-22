import axios, { AxiosResponse } from "axios";
import { capitalize } from "./functions";
import { SignInProps } from '../assets/interfaces.tsx'
import { LoginProps } from '../assets/interfaces'

const urlApi = 'http://academy-react.rarolabs.com.br/v1/'

export const signInApi = async (values : SignInProps) => {return await axios.post(urlApi + 'users',{...values,name:capitalize(values.name.toLowerCase())})}

export const loginApi = async (values: LoginProps) => {return await axios.post(urlApi + 'auth/login',{...values});}

export const userApi = async (loginSucceded: AxiosResponse<any, any>) => {return await axios.get(urlApi + `users/${loginSucceded.data.id}`,
            {headers: { Authorization: `Bearer ${loginSucceded.data.token}` }})}