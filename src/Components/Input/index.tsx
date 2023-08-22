import './styles.css'
import ErrorMessage from '../ErrorMessage'
import { Field } from 'formik'
import { InputProps } from '../../assets/interfaces';

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