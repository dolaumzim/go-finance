import { ErrorMessageType } from "../Components/ErrorMessage"
import { InputHTMLAttributes } from 'react';

export interface SignUpProps {
        name : string
        email : string
        password : string
        password_confirmation : string
        termsOfUse? : boolean
}

export interface LoginProps {
        email : string
        password : string
}

export interface InnerText{
        innerText : string
        disabled? : boolean
}

export interface ErrorMessageProps {
    message: ErrorMessageType
  }

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    errors: ErrorMessageType
    svg : JSX.Element,
}