import GetGames from '../../components/games/get-games';
import InfoGames from '../../components/info-games/info-games';
import './home-page.css';

export default function HomePage() {
    return (
        <main>
            <InfoGames />
            <GetGames />
        </main>
    );
}