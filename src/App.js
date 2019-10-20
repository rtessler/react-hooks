import React, { useState } from 'react';
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'
import SurveyContextProvider from './contexts/surveyContext'
import CountryContextProvider from './contexts/countryContext'

function App() {

  const [step, setStep] = useState(1)

  const onNext = () => {

    if (step < maxSteps )
      setStep(step + 1)
  }

  const onBack = () => {

    if (step > 1)
      setStep(step - 1)
  }    

  const maxSteps = 3

  let content

  switch (step) {
      case 1: 
      default:
        content = <Step1 onNext={onNext} />
        break

      case 2:
        content = <Step2 onNext={onNext} onBack={onBack} />
        break

      case 3:
        content = <Step3 onBack={onBack} />
        break        
  }

  return (
    <div className="App">

        <SurveyContextProvider>         
          <CountryContextProvider>      
            { content }            
          </CountryContextProvider>   
        </SurveyContextProvider>
    
    </div>
  );
}

export default App