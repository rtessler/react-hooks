import React, { createContext, useState } from 'react';

export const SurveyContext = createContext()

const SurveyContextProvider = (props) => {
    
    const [survey, setSurvey] = useState({ 

        user: {
            name: 'rob',
            email: 'aaa',
            country: null
        },

        favorites: {
            color: 'red',
            food: 'pasta'
        }
    })

    const saveUser = (user) => {

        console.log('saveUser: ', user)
        setSurvey({...survey, user})
    } 
    
    const saveFavorites = (favorites) => {

        setSurvey({...survey, favorites})
    }     
    
    const submit = () => {

        console.log('submit')
    }

    return (
        <SurveyContext.Provider value={{survey, saveUser, saveFavorites, submit}}>
            {props.children}
        </SurveyContext.Provider>
    )
 }

 export default SurveyContextProvider