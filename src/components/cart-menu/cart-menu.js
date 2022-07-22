import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TotalPrice } from '../../features/cart/cart';
import { removeItemInCart } from '../../features/cart/cartSlice';
import './cart-menu.css';

export default function CartMenu() {
    const items = useSelector(state => state.cart.itemsOnCart);
    const dispatch = useDispatch();
    return (
        <div className='cart-menu'>
            <div className='items'>
                {
                    items.length > 0 ? items.map((item) => {
                        return (
                            <div className='item d-flex justify-content-between align-items-center'>
                                <p>{item.title}</p>
                                <div className='right d-flex align-items-center'>
                                    <span>{item.price}$</span>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(removeItemInCart(item.id));
                                    }}>X</button>
                                </div>
                            </div>
                        );
                    }) : 'Корзина Пусто'
                }
            </div>
            {
                items.length > 0 ? <div className='cart-footer'>
                    <p>Всего: {TotalPrice(items)}$</p>
                    <Link to='/checkout'>Checkout</Link>
                </div> : null
            }
        </div>
    );
}