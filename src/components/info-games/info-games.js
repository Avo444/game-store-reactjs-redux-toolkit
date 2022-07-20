import { useSelector } from 'react-redux';
import './info-games.css';

export default function InfoGames() {
    const getTotal = useSelector((state) => {
        return state.game.length;
    });
    return <div className='info container text-start'>All Games - <span>{getTotal}</span></div>;
}