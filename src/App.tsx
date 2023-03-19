import React from 'react'
import Calculator from './components/Calculator';
import FormOne from "./components/FormOne";


 const App = (): JSX.Element => {
  return (
  <>
    <div className="wrapper">
      <Calculator/>
      </div>
      <FormOne />
      </>
  )
}
export default App;