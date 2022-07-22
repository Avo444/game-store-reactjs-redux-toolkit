import { useEffect } from 'react';
import GetGames from '../../components/games/get-games';
import InfoGames from '../../components/info-games/info-games';
import './home-page.css';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Home Page | Game Shop';
    })
    return (
        <section className='shop'>            
            <InfoGames />
            <GetGames />
        </section>
    );
}