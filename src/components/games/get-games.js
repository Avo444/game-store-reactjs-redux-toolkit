import { useDispatch, useSelector } from 'react-redux';
import { addItemInCart, removeItemInCart } from '../../features/cart/cartSlice';
import './get-games.css';

export default function GetGames() {
    const getGames = useSelector(function(state) {
        return state.game;
    });
    const dispatch =  useDispatch();
    const ItemsOnCart = useSelector(state => state.cart.itemsOnCart);
    return (
        <div className='shop'>
            <div className='container'>
                <div className='row'>
                    {
                        getGames.map((game) => {
                            const isItemInCart = ItemsOnCart.some(item => item.id === game.id);
                            return (
                                <div className='col-md-4' key={game.id}>
                                    <div className='item'>
                                        <div className='picture' style={{backgroundImage: `url('${game.picture}')`}}></div>
                                        <div className='info-bar'>
                                            <a href="#">{game.title}</a>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <span>{game.price}$</span>
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    if(!isItemInCart) {
                                                        dispatch(addItemInCart(game));
                                                    }
                                                    else {
                                                        dispatch(removeItemInCart(game.id));
                                                    }
                                                }} className={isItemInCart ? 'active' : null}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            );
                        })
                    }                       
                </div>
            </div>
        </div>
    );
}