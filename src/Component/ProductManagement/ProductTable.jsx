import React from 'react'

const ProductTable = ({products}) => {

    // console.log({products})
  return (
    <div>
        <h2>Product Length : {products.length}</h2>
        <div>
          <table border="2">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              
              {
                products.map((product, index)=> <tr class="" key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>)
              }
              
            </tbody>
          </table>
        </div>
        
    </div>
  )
}

export default ProductTable