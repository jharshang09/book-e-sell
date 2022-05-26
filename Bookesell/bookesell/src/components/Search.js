import React from 'react';
import { Link } from 'react-router-dom';
import search from './image/search.svg'
import './Header.css'

const Search = () => {
    return (
        <div className='search'>
        <div className='header-search'>
            <div className='header-search-area'>
            <input className='placeholder' type="text" placeholder='Search...'/>
            <button type='submit' className='btn1'><img src={search}/>Search</button>
            <button type='submit' className='btn2'>Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default Search;