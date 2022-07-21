import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { removeItemInCart, addItemInCart } from '../../features/cart/cartSlice';
import './game-page.css';

export default function GamePage() {
    const game = useSelector((state) => state.game.gameForView);
    const cartItems = useSelector(state => state.cart.itemsOnCart);
    const itemInCart = cartItems.some((cartitem) => cartitem.id === game.id);
    const dispatch = useDispatch();
    if(!game) return <Navigate to="/" />;
    return (
        <section className='game-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='inf d-flex flex-column align-items-center'>
                            <img src={game.picture}  />
                            <p>{game.description}</p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='checkout-bar mt-5 d-flex justify-content-center align-items-center flex-column'>
                            <h1>{game.title}</h1>
                            <p>PRICE: <span>{game.price}$</span></p>
                            <div className='d-flex'>
                                <button onClick={(e) =>  {
                                    e.stopPropagation();
                                    if(itemInCart === true) {
                                        dispatch(removeItemInCart(game.id));
                                        swal('Success!', 'This game is removed from cart!', 'success');
                                    }
                                    else {
                                        dispatch(addItemInCart(game));
                                        swal('Success!', 'This game has been added to the cart!', 'success');
                                    }
                                }} className={itemInCart ? 'cart active' : 'cart'}>{itemInCart ? 'Remove From Cart' : `Add to Cart`}</button>
                                <button className='buy' onClick={() => swal('','This function temporarily unavailable!', 'warning')}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}