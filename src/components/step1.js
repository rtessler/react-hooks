import React, { useState, useContext } from 'react';
import { SurveyContext } from '../contexts/surveyContext'
import { CountryContext } from '../contexts/countryContext'

const Step1 = (props) => {

    const { survey, saveUser } = useContext(SurveyContext)
    const { countries } = useContext(CountryContext)
    const [ data, setData ] = useState(survey.user)

    const onChange = (e) => {

        // update state

        const id = e.target.id
        const val = e.target.value

        console.log('onChange: ', val)

        data[id] = val
        setData({...data})
    }

    const onNext = () => {

        //setData({...data})
        console.log(data)
        saveUser(data)
        props.onNext()
    }

    const onSubmit = (e) => {

        e.preventDefault()
        onNext()
    }    

    //console.log('step1: data ', data)

    return ( 
        <div className='step step1'>
        
            <form onSubmit={onSubmit} >

                <h1>Step 1</h1>

                <div className='field'>
                    
                    name
                    <input id='name' value={data.name} required onChange={onChange} />                    
                </div>

                <div className='field'>
                    
                    email
                    <input id='email'  value={data.email} required onChange={onChange} />                    
                </div>   

                <div className='field'>

                    <select id='country' onChange={ onChange } value={data.country ? data.country : ''} >

                        { countries.map(x => <option key={x.name} value={x.name}>{x.name}</option>)}
                    </select>
                </div> 

                <button type='submit'>next</button>       

            </form>
        </div>
        );
}
 
export default Step1;