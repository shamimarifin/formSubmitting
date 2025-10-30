import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import Controlledform from './Component/ControlledForm/Controlledform'
import UncontrolledForm from './Component/UncontrolledFrom/UncontrolledForm'
import HookForm from './Component/HookForm/HookForm'
import ProductManagement from './Component/ProductManagement/ProductManagement'

function App() {


  return (
    <>
    <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <Controlledform/> */}
      {/* <UncontrolledForm/> */}
      {/* <HookForm/> */}
      <ProductManagement/>
    </>
  )
}

export default App
