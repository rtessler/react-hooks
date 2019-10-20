import React, { useState, useContext } from 'react';
import { SurveyContext } from '../contexts/surveyContext'

const Step2 = (props) => {

    const { survey, saveFavorites } = useContext(SurveyContext)
    const [ data, setData ] = useState(survey.favorites)

    const onChange = (e) => {

        const id = e.target.id
        const val = e.target.value

        data[id] = val
        setData({...data})
    }

    const onBack = () => {

        saveFavorites(data)
        props.onBack()
    }

    const onSubmit = (e) => {

        e.preventDefault()
        saveFavorites(data)
        props.onNext()
    }

    return ( 
        <div className='step step2'>
            
            <form onSubmit={onSubmit}>

                <h1>Step 2</h1>

                <div className='field'>
                    
                    color
                    <input id='color' value={data.color} required onChange={onChange} />                    
                </div>

                <div className='field'>
                    
                    food
                    <input id='food'  value={data.food} required onChange={onChange} />                    
                </div>      
                
                <button id='back' onClick={onBack}>back</button>
                <button id='next' type='submit'>next</button>      

            </form>
        </div>
        );
}
 
export default Step2