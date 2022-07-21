import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        initialGames: [
            {
                id: 1,
                title: 'GTA V LICENSED',
                price: 100,
                picture: 'https://coolthemestores.com/wp-content/uploads/2021/04/grand-theft-auto-v-gta-5-chrome-theme-wallpaper.jpg',
                description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles. Thank's for reading :)"
            },
            {
                id: 2,
                title: 'Forza Horizon V',
                price: 250,
                picture: 'https://s2.gaming-cdn.com/images/products/8701/616x353/forza-horizon-5-pc-xbox-one-xbox-series-xs-pc-xbox-one-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1642425313',
                description: "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Microsoft Windows, Xbox One, and Xbox Series X/S. Thank's for reading :)"
            },
            {
                id: 3,
                title: 'Fortnite',
                price: 15,
                picture: 'https://cdn.alza.cz/Foto/ImgGalery/Image/fortnite-next-gen-upgrade.jpg',
                description: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas. Thank's for reading :)"
            },
            {
                id: 4,
                title: 'Left 4 Dead 2',
                price: 250,
                picture: 'https://cdn.akamai.steamstatic.com/steam/apps/550/capsule_616x353.jpg?t=1630686839',
                description: "Left 4 Dead 2 is a 2009 first-person shooter game developed and published by Valve. The sequel to Turtle Rock Studios's Left 4 Dead (2008) and the second game in the Left 4 Dead series, it was released for Microsoft Windows and Xbox 360 in November 2009, Mac OS X in October 2010, and Linux in July 2013. Thank's for reading :)"
            },
            {
                id: 5,
                title: 'Minecraft',
                price: 500,
                picture: 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/parentsultimateguide-minecraft-blog.jpeg',
                description: "Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens 'Jeb' Bergensten taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active users as of 2021. Thank's for reading :)"
            },
            {
                id: 6,
                title: 'Rocket League',
                price: 1342,
                picture: 'https://cdn.mos.cms.futurecdn.net/CxLvbQNp2Y4BQkTkpW5m7b.jpg',
                description: "Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on. In June 2016, 505 Games began distributing a physical retail version for PlayStation 4 and Xbox One, with Warner Bros. Interactive Entertainment taking over those duties by the end of 2017. Versions for macOS and Linux were also released in 2016, but support for their online services was dropped in 2020. The game went free-to-play in September 2020. Thank's for reading :)"
            },
            {
                id: 7,
                title: 'Fall Guys',
                price: 20,
                picture: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_auto/ncom/en_US/games/switch/f/fall-guys-switch/hero',
                description: "Fall Guys (formerly Fall Guys: Ultimate Knockout)[1] is a platform battle royale game developed by Mediatonic. The game involves up to 60 players who control jellybean-like creatures and compete against each other in a series of randomly selected mini-games, such as obstacle courses or tag. Players are eliminated as the rounds progress until, eventually, the last remaining player is crowned the winner. Thank's for reading :)"
            },
            
        ],
        gameForView: null
    },
    reducers: {
        getGamesForView: (state, action) => {
            state.gameForView = action.payload;
        }
    }
});
export const { getGamesForView } = gameSlice.actions;
export default gameSlice.reducer;