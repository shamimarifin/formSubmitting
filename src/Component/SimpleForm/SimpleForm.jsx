import React from 'react'

const SimpleForm = () => {

    const handling = (e)=> {
        e.preventDefault()
        console.log(e.target.name.value, e.target.email.value)
    }

  return (
    <div>
        <form onSubmit={handling}>
            <input type="text" name='name'  placeholder='Enter yourname'/>
            <br />
            <input type="email" name="email" id="" placeholder='Enter youremail'/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SimpleForm