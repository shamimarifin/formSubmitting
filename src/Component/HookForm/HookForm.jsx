import React from 'react'
import UseInputFiled from '../../hooks/UseInputFiled'

const HookForm = () => {

    const [name , nameChange] = UseInputFiled('')
    const [email, emailChange] = UseInputFiled('')


    const handleSubmit = e => {
        e.preventDefault()

        console.log(name, email)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" defaultValue={name} name="name" id="" onChange={nameChange}/>
            <input type="email" name="" id="" defaultValue={email} onChange={emailChange}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default HookForm