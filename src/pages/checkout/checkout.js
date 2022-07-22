import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeItemInCart } from '../../features/cart/cartSlice';
import swal from 'sweetalert';
import './checkout.css';

export default function CheckOutPage() {
    const cartItems = useSelector(state => state.cart.itemsOnCart);
    const dispatch = useDispatch();
    if(cartItems.length === 0) return <Navigate to="/" />
    return (
        <section className='checkout'>
            <h1 className="text-center text-white">Your Orders</h1>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-8'>
                        <ul className='items'>
                            {
                                cartItems.map((cartItem) => {
                                    return (
                                        <li className='item'>
                                            <div className="left">
                                                <img src={cartItem.picture} alt={cartItem.title} />
                                                {cartItem.title}
                                            </div>
                                            <div className='right'>
                                                <p>Price: <span>{cartItem.price}$</span></p>
                                                <button className='btn btn-primary' onClick={(e) => {
                                                    e.stopPropagation();
                                                    dispatch(removeItemInCart(cartItem.id));
                                                }}>X</button>
                                            </div>
                                        </li>
                                    );
                                })
                            }                            
                        </ul>
                    </div>
                    <div className='col-lg-4'>
                        <div className='checkout-bar d-flex justify-content-center align-items-center flex-column w-100'>
                            <h4>Checkout</h4>
                            <p>Games In Cart: <span>{cartItems.length}</span></p>
                            <p>Total Price: <span>{cartItems.reduce((acc, cartItem) => acc += cartItem.price, 0)}$</span></p>
                            <button className="btn btn-primary" onClick={(e) => {
                                e.stopPropagation();
                                swal('Warning', 'This function is not available', 'warning');
                            }}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}