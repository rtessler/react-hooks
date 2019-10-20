import React, { useContext } from 'react';
import { SurveyContext } from '../contexts/surveyContext'

const Step3 = (props) => {

    const { submit } = useContext(SurveyContext)

    const onBack = () => {

        props.onBack()
    }

    const onSubmit = (e) => {

        e.preventDefault()
        submit()
    }

    return ( 
        <div className='step step3'>
            
            <form onSubmit={onSubmit}>

                <h1>Step 3</h1>
                    
                <button id='back' onClick={onBack}>back</button>
                <button id='next' type='submit'>save</button>      

            </form>
        </div>
        );
}
 
export default Step3