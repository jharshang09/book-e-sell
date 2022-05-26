import React from 'react';
import './Cart.css';
import { useState } from 'react';
import Search from './Search';
import dummyimg from './image/dummy-image.png';

const Cart = () => {
    var [count,setCount] = useState(1);
    const incrementProduct = ()=>{
        setCount(count+1);
    }
    const decrementProduct = ()=>{
        // count==1 ? count : setCount(count-1);
        if(count=1){
            setCount(1);
        }
        else{
            setCount(count-1);
        }
    }
    return ( 
        <div>
            <Search/>
        <div className='cart'>
            <h1 className='headername'>Cart page</h1><hr/>
            <div className='cartcontainer'>
                <h3 className='headtitle'>My Shopping Bag (8 items)</h3>
                <h5 className='totalprice'>Total Price: 3000</h5>
            </div>
            <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={dummyimg}  />
                </div>
                <div className='about'>
                    <h1 className='title'>Apple Juice</h1>
                    <h3 className='subtitle'>250ml</h3>
                    <div className='counter'>
                        <button type="submit" className='counterbtn' onClick={decrementProduct}>-</button>
                        <div className='count'>{count}</div>
                        <button type="submit" className='counterbtn' onClick={incrementProduct}>+</button>
                    </div>
                </div>
                <div className='prices'>
                    <h1 className='amount'>500</h1>
                    <div className='off'>1000</div>
                    <div className='save'>50% off</div>
                    <div className='remove'>Remove</div>
                </div>
            </div>
            <button type="submit" className='placebtn'>Place Order</button>
        </div>
        </div>
    );
}

export default Cart;