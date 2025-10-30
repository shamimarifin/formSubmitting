import React, { useState } from 'react'

const ProductForm = ({handleAddProducts}) => {
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        console.log(name , price , quantity)

        if(name.length === 0){
            setError('Please provide product name')

            return

        }else if(price.length === 0){
            setError('Please provide product price')

            return

        }else if(price < 6){
            setError('Price can not be negative')

            return

        }else{
            setError('')
        }
       

        const newProduct = {
            name ,
            price , 
            quantity
        }

        // console.log(newProduct)
        handleAddProducts(newProduct)
        
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Product name'/>
            <br />
            <input type="text" name="price" id="" placeholder='Product price'/>
            <br />
            <input type="text" name="quantity" id="" placeholder='Product quantity'/>
            <br />
            <input type="submit" value="Submit" />
        </form>

       <p style={{color : 'red'}}>{error}</p>
    </div>
  )
}

export default ProductForm