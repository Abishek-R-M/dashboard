import React from 'react'

const Productdetails = (props) => {
  return (
    <div>
      <div className='productdetails'>
                <div className='proinfo'>
                  <img className='productimg' src={props.productimage} alt='productphotes'/>
                  <p className='productinfo'> {props.productinfo} <br /> <span> {props.productdescription} </span> </p>
                  </div>
                  <div className='stockdetails'>
                  <p>{props.stock}</p>
                  <p className='productprice'> $ {props.price} </p>
                  <p> {props.totalsales} </p>
                  </div>
                </div>
    </div>
  )
}

export default Productdetails;
