import React from 'react';
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from 'reactstrap';

import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart =()=>{

const dispatch = useDispatch();
const deleteProduct = (id)=>{
    dispatch(cartActions.deleteItem(id))
    console.log("id",id);
}

    const cartItems = useSelector(state=> state.cart.cartItems )
    const totalAmount = useSelector(state=> state.cart.totalAmount )
    return (
       <Helmet title='Cart'>
<CommonSection title="Shopping Cart"/>
<section>
    <Container>
        <Row>
            <Col lg='9'>
            {
                cartItems.length===0? <h2 className='fs-4 text-center'>No item added to the cart</h2>: <table className="table bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <motion.th whileTap={{scale: 1.2}}>Delete</motion.th>
                    </tr>
                </thead>

                <tbody>
                   {
                    cartItems.map((item,index)=> (
                        <tr key={index}>
                    <td><img src={item.imgUrl} alt="" /></td>
                    <td>{item.productName}</td>
                   
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><motion.i whileTap={{scale:1.2}} onClick={()=>deleteProduct(item.id)} class="ri-delete-bin-6-line"></motion.i></td></tr> 
                    ) )
                   }
                </tbody>
            </table>
            }
            </Col>
            <Col lg='3'>
            <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
               
            </div>
            <p className='fw-6 mt-2'>taxes and shipping will calculate in checkout</p>

            <button className="buy__btn w-100 "><Link to='/checkout'>Checkout</Link></button>

            <button className="buy__btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>

            

            </Col>
         
        </Row>
    </Container>
</section>
       </Helmet>
    )
}

export default Cart;