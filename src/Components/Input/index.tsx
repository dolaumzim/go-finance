import { InputHTMLAttributes } from 'react';
import './styles.css'
import ErrorMessage, { ErrorMessageType } from '../ErrorMessage'
import { Field } from 'formik'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    errors: ErrorMessageType
    svg : JSX.Element,

}

export const Input = ({name, svg, type, placeholder, errors} : InputProps) => {
    return(
        <>
            <div className="input">
                {svg}
                <Field 
                name={name} 
                placeholder={placeholder} 
                type={type}/>
            </div>
            <ErrorMessage message={errors}/>            
        </>
    )
}