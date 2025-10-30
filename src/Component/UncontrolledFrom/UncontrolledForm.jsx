import React, { useRef } from 'react'

const UncontrolledForm = () => {
     const emailRef = useRef('')
     const passRef = useRef('')

    const handlingSubmit = (e)=> {
        e.preventDefault()

        console.log(emailRef.current.value)
        const email = emailRef.current.value
        const password = passRef.current.value

        
    
    }
    
  return (
    <div>
        <form onSubmit={handlingSubmit}>
            <input type="text" name=""  />
            <br />
            <input type="email" name="" ref={emailRef}/>
            <br />
             <input type="password" name="" ref={passRef}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UncontrolledForm