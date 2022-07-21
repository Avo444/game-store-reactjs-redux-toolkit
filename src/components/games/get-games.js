import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { addItemInCart, removeItemInCart } from '../../features/cart/cartSlice';
import { getGamesForView } from '../../features/games/gameSlice';
import './get-games.css';

export default function GetGames() {
    const getGames = useSelector(function(state) {
        return state.game.initialGames;
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ItemsOnCart = useSelector(state => state.cart.itemsOnCart);
    return (
            <div className='container'>
                <div className='row'>
                    {
                        getGames.map((game) => {
                            const isItemInCart = ItemsOnCart.some(item => item.id === game.id);
                            const desc = game.description;                    
                            return (
                                <div className='col-md-4' key={game.id}>
                                    <div className='item' onClick={() => {
                                        dispatch(getGamesForView(game));
                                        navigate(`/game/${game.id}`);
                                    }}>
                                        <div className='picture' style={{backgroundImage: `url('${game.picture}')`}}></div>
                                        <div className='info-bar'>
                                            <a href="#">{game.title}</a>
                                            <p className='desc'>{`${desc.substring(0, 40)} ...`}</p>
                                            <div className="d-flex justify-content-end align-items-center price-and-buy">
                                                <span>{game.price}$</span>
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    if(!isItemInCart) {
                                                        dispatch(addItemInCart(game));
                                                    }
                                                    else {
                                                        dispatch(removeItemInCart(game.id));
                                                    }
                                                }} className={isItemInCart ? 'active' : null}>{isItemInCart ? 'acquired' : 'Buy'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            );
                        })
                    }                       
                </div>
            </div>
    );
}