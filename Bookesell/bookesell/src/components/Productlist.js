import React from 'react';
import './Productlist.css';
import dummyimg from './image/dummy-image.png';

const Productlist = () => {
    return (
        <div className='productlist'>
            <h1 className='headername'>Product Listing</h1><hr/>
            <div className='cartcontainer'>
                <h3 className='headtitle'>Product Name - 14366 items</h3>
                <h5 className='totalprice'>Sort By
                <select>
                        <optgroup label="Sort">
                        <option value="ascending">a - z</option>
                        <option value="descending">z - a</option>
                        </optgroup>
                    </select>
                </h5>
            </div>
            <div className='listing-section'>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
                <div className='productforlist'>
                    <div className='image-box'>
                         <div className='images' ><img src={dummyimg}  /></div>
                    </div>
                    <div className='text-box'>
                    <h2 className='item'>Product Title</h2>
                    <h3 className='price'>Lorem</h3>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <h3 className='price'><b>MRP &#8377; 800</b></h3>
                    <button type='button' >Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='pagination'>
                <p>&laquo;</p>
                <p>1</p>
                <p class="active">2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>&raquo;</p>
            </div>
        </div>
    );
}

export default Productlist;