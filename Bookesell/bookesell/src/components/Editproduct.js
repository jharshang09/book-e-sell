import React from 'react';
import './Editproduct.css';

const Editproduct = () => {
    return (
        <div className='Editproduct'>
            <h1 className='headername'>Edit Product</h1>
            <hr/>
            <div className='editinformation'>
                <div className='edit'>
                    <p>First Name *</p>
                    <input type='text' required/>
                </div>
                <div className='edit'>
                    <p>Last Name *</p>
                    <input type='text' required/>
                </div>              
            </div> 
            <div className='editinformation'>
                <div className='edit'>
                    <p>Shop by Categories</p>
                    <select>
                        <optgroup label="Books">
                        <option value="self help">Self Help</option>
                        <option value="business">Business</option>
                        </optgroup>
                    </select>
                </div>
                <div className='edit1'>
                    <p>Description </p>
                    <input type='text' required/>
                </div>              
            </div> 
            <div className='editinformation'>
                <div className='edit'>
                    <input type="file" />
                </div> 
            </div> 
            <div className='editinformation'>
                <div className='edit'>
                    <button type="submit" className='savebtn'>Save</button>
                    <button type="submit" className='cancelbtn'>Cancel</button>
                </div> 
            </div>            
        </div>
    );
}

export default Editproduct;
