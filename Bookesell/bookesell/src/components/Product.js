import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className='product'>
          <h1>Product Page</h1>
          <hr></hr>
          <div className='rightbtn'>
           <input type='text' placeholder='Search...' required/>
           <button type="submit" className='editbtn'>Add Product</button>
          </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title	</th>
                            <th>Data source</th>
                            <th>Query</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><button type="submit" className='edtbtn'>Edit</button></li>
                                    <li><button type="submit" className='deletebtn'>Delete</button></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><button type="submit" className='edtbtn'>Edit</button></li>
                                    <li><button type="submit" className='deletebtn'>Delete</button></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><button type="submit" className='edtbtn'>Edit</button></li>
                                    <li><button type="submit" className='deletebtn'>Delete</button></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>                
                </table>
            </div>
            <div className='table-pagination'>
                <p>Rows per page:</p>
                <select>
                    <option value="5">5</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <p className='pagination-wcaption'><span>1</span>-<span>6</span> of <span>6</span></p>
                <div class="pagination">
                    <button type="submit" className='prvbtn'>❮</button>
                    <button type="submit" className='nextbtn'>❯</button>
                </div>
            </div>
        </div>
    );
}

export default Product;