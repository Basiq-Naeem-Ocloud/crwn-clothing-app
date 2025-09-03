

import {FormInputLabel, Input, Group } from './form-input.styles.jsx'


const FormInput = ({label, ...otherProps }) => {

    return (
        <Group>
                <Input {...otherProps}/> {/* v imp we set this so that we can recevies multiple props like value, required, etc*/}

            
            {/* v imp we use logic to give class name it means if there is some value in input field we need to chnage the style of label*/}
            {/* we are saying if label is present then render this*/}

            {label && (
             <FormInputLabel  shrink={otherProps.value.length} > 

                {label}
                
             </FormInputLabel>
            )}

        </Group>
        
    )


}


export default FormInput;