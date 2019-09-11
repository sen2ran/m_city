import React from 'react';

const formField = ({id, formData, change}) => {
    const showError = () => {
        let errorMessage  =<div>
            {
                formData.validation && !formData.valid
                ?formData.validationMessage
                :null
            }
        </div>;

        return errorMessage
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input') :
                formTemplate = (
                   <div className="error_label">
                       <input
                        {...formData.config}
                        value={formData.value}
                        onChange={(event) => change({event,id})}
                       />
                       { showError() }
                    </div> 
                )
            break ;
            default :
                formTemplate = null;
        }
        return formTemplate
    }

    return(
        <div>
            {renderTemplate()}
        </div>
    )
}
export default formField  