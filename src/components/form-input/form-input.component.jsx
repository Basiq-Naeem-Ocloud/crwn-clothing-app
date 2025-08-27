

import './form-input.styles.scss'


const FormInput = ({label, ...otherProps }) => {

    return (
        <div className="group">
                <input className="form-input"  {...otherProps}/> {/* v imp we set this so that we can recevies multiple props like value, required, etc*/}

            
            {/* v imp we use logic to give class name it means if there is some value in input field we need to chnage the style of label*/}
            {/* we are saying if label is present then render this*/}

            {label && (
             <label className={`${otherProps.value.length > 0 ? 'shrink': ''} form-input-label`} > {label}
             </label>
            )}

        </div>
        
    )


}


export default FormInput;