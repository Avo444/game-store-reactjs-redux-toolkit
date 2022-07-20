import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: [
        {
            id: 1,
            title: 'GTA V LICENSED',
            price: 100,
            picture: 'https://coolthemestores.com/wp-content/uploads/2021/04/grand-theft-auto-v-gta-5-chrome-theme-wallpaper.jpg'
        },
        {
            id: 2,
            title: 'Forza Horizon V',
            price: 250,
            picture: 'https://s2.gaming-cdn.com/images/products/8701/616x353/forza-horizon-5-pc-xbox-one-xbox-series-xs-pc-xbox-one-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1642425313'
        },
        {
            id: 3,
            title: 'Fortnite',
            price: 15,
            picture: 'https://cdn.alza.cz/Foto/ImgGalery/Image/fortnite-next-gen-upgrade.jpg'
        },
        {
            id: 4,
            title: 'Left 4 Dead 2',
            price: 250,
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/550/capsule_616x353.jpg?t=1630686839'
        },
        {
            id: 5,
            title: 'Minecraft',
            price: 500,
            picture: 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/parentsultimateguide-minecraft-blog.jpeg'
        },
        {
            id: 6,
            title: 'Rocket League',
            price: 1342,
            picture: 'https://cdn.mos.cms.futurecdn.net/CxLvbQNp2Y4BQkTkpW5m7b.jpg'
        },
        {
            id: 7,
            title: 'Fall Guys',
            price: 20,
            picture: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_auto/ncom/en_US/games/switch/f/fall-guys-switch/hero'
        },
        
    ],
});
export const {getGames} = gameSlice.actions;
export default gameSlice.reducer;