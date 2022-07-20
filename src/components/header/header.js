import './header.css';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TotalPrice } from '../../features/cart/cart';
import CartMenu from '../cart-menu/cart-menu';

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    let items = useSelector(state => state.cart.itemsOnCart);
    return (
        <header>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <a href="#" className='col-auto logo'>Game Store</a>
                    <p className='col-6 col-md-9 col-lg-10 d-flex justify-content-end align-items-center cart'><FiShoppingCart size={20} style={{ cursor: 'pointer' }} onClick={() => {
                        setIsOpenMenu(!isOpenMenu);
                    }} /> <span>{TotalPrice(items) !== 0 ? ` - ${TotalPrice(items)}$` : ''}</span>
                        {isOpenMenu ? <CartMenu /> : null}
                    </p>
                </div>
            </div>
        </header>
    );
}