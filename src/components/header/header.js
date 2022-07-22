import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TotalPrice } from '../../features/cart/cart';
import CartMenu from '../cart-menu/cart-menu';
import './header.css';

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    let items = useSelector(state => state.cart.itemsOnCart);
    return (
        <header>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <Link to="/" className='col-auto logo'>Game Shop</Link>
                    <div className='col-6 col-md-9 col-lg-10 d-flex justify-content-end align-items-center cart'><FiShoppingCart size={20} style={{ cursor: 'pointer' }} onClick={() => {
                        setIsOpenMenu(!isOpenMenu);
                    }} /> <span>{TotalPrice(items) !== 0 ? ` - ${TotalPrice(items)}$` : ''}</span>
                        {isOpenMenu ? <CartMenu /> : null}
                    </div>
                </div>
            </div>
        </header>
    );
}