import React, { useState } from 'react'

const Controlledform = () => {
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handlingSubmit = (e)=> {
        e.preventDefault()
        // console.log('Submitting')
        console.log(name , email, password)

        if(password.length < 6){
            setError('password must be 6 character')
        }else{
            setError('')
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }


    const handlePasswordChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)


        if(password.length < 6){
         setError('password must be 6 character or longer than')
        }else{
            setError('')
        }
    }

  return (
    <div>
        <form onSubmit={handlingSubmit}>
            <input type="text" name="name" id="" defaultValue={name} onChange={handleNameChange} placeholder='Enter your name'/>
            <br />
            <input type="email" defaultValue={email} onChange={handleEmailChange} name=""  placeholder='Enter your email' required/>
            <br />
            <input type="password" name=""  placeholder='Enter your password' required onChange={handlePasswordChange}/>
            <br />
            <input type="submit" value="Submit" />
            <br />
            <p>{error}</p>
        </form>
    </div>
  )
}

export default Controlledform