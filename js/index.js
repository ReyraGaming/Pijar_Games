/*-------------------------Modal Login-------------------------------------*/
const button_Login = document.querySelector("#login-btn");
const modalLogin = document.querySelector("#modal-login");
const modalLoginSection = document.querySelector(".modal-login-section");

modalLoginSection.addEventListener("click", (e) => {
  e.stopPropagation();
});

button_Login.addEventListener("click", () => {
  modalLogin.classList.toggle("modal-login-container-show");
});

modalLogin.addEventListener("click", () => {
  modalLogin.classList.toggle("modal-login-container-show");
});

/*-------------------------Preview Image-------------------------------------*/

const listGames = document.querySelector(".list-games");
const listGamesTemplate = listGames.innerHTML;

const mainGames = document.querySelector(".content-main-images-section");
const mainGamesTemplate = mainGames.innerHTML;

const games = [
  {
    id: 1,
    image:
      "https://prod.assets.earlygamecdn.com/images/resident-evil-4-remake-keyart.jpeg?mtime=1677862560",
    stat: "Out Now",
    title: "Resident Evil 4",
    desc: `Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. 
      Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, 
      where there is something terribly wrong with the locals.`,
  },
  {
    id: 2,
    image: "https://images2.alphacoders.com/100/1001341.jpg",
    stat: "Out Now",
    title: "Sekiro : Shadows Die Twice",
    desc: `Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever 
      path to vengeance in the award winning adventure from developer FromSoftware, 
      creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. 
      Kill Ingeniously.`,
  },
  {
    id: 3,
    image:
      "https://cdn2.unrealengine.com/egs-genshin-impact-4-2-carousel-desktop-1280x720-0d445c9584cd.png?h=720&quality=medium&resize=1&w=1280",
    stat: "Out Now",
    title: "Resident Evil 4",
    desc: `Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. 
      Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless 
      mysteries that Teyvat holds...`,
  },
];

listGames.innerHTML = Mustache.render(listGamesTemplate, { games });

mainGames.innerHTML = Mustache.render(mainGamesTemplate, games.at(0));

function img(id) {
  const result = games.find((game) => game.id === id);
  mainGames.innerHTML = Mustache.render(mainGamesTemplate, result);
}

/*-----------------------------------List-Games-----------------------------------------------*/

const listCards = document.querySelector(".list-card-games");
const listCardsTemplate = listCards.innerHTML;

const cardGames = [
  {
    image:
      "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S2_1200x1600-76424286902489f4d9639ac9b735c2b2?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Marvel's Spiderman Remastered",
    discount: "20%",
    firstPrice: "IDR. 399.000",
    lastPrice: "IDR. 299.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Dying Light 2",
    discount: "20%",
    firstPrice: "IDR. 780,000",
    lastPrice: "IDR. 540,000",
  },
  {
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Nioh: Complete Edition",
    discount: "20%",
    firstPrice: "IDR. 599.000",
    lastPrice: "IDR. 399.000",
  },
  {
    image:
      "https://cdn2.unrealengine.com/egs-theevilwithin-tangogameworks-ic1-200x200-aa22fbef7649.png?h=270&quality=medium&resize=1&w=480",
    genre: "Base Game",
    title: "The Evil Within",
    discount: "20%",
    firstPrice: "IDR. 699.000",
    lastPrice: "IDR. 499.000",
  },
  {
    image:
      "https://www.gameinformer.com/sites/default/files/styles/review_summary_game_cover/public/2023/01/26/7b01e7ee/residentevil4.jpg",
    genre: "Base Game",
    title: "Resident Evil 4",
    discount: "20%",
    firstPrice: "IDR. 999.000",
    lastPrice: "IDR. 699.000",
  },
  {
    image:
      "https://i.pinimg.com/originals/ba/a0/8b/baa08bc3dc95fb3d105391e7ca24dd82.jpg",
    genre: "Base Game",
    title: "Sekiro: Shadows Die Twice",
    discount: "20%",
    firstPrice: "IDR. 499.000",
    lastPrice: "IDR. 299.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Cyberpunk 2077",
    discount: "20%",
    firstPrice: "IDR. 799.000",
    lastPrice: "IDR. 399.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Star Wars: Jedi Survivor",
    discount: "20%",
    firstPrice: "IDR. 759,000",
    lastPrice: "IDR. 510,000",
  },
  {
    image:
      "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Grand Theft Auto: Premium Edition",
    discount: "20%",
    firstPrice: "IDR. 399.000",
    lastPrice: "IDR. 199.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/undefined/offer/SWJFO_ADHOC_510X680-510x680-04ec2ab0afa8b571f51c34577bf1ec09.jpg?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Jedi: Fallen Order",
    discount: "20%",
    firstPrice: "IDR. 699.000",
    lastPrice: "IDR. 499.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Dead Island 2",
    discount: "20%",
    firstPrice: "IDR. 699.000",
    lastPrice: "IDR. 399.000",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/clary/ACOdyssey_STD_Store_Portrait_1200x1600_1200x1600-3add642bad2d1207487527d53d715220?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Assassin's Creed : Odyssey",
    discount: "20%",
    firstPrice: "IDR. 499.000",
    lastPrice: "IDR. 299.000",
  },
];

listCards.innerHTML = Mustache.render(listCardsTemplate, { cardGames });

const swiper = new Swiper(".myListGames", {
  breakpoints: {
    320 : {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480 : {
      slidesPerView: 4,
      spaceBetween: 50
    },

    1200 : {
      slidesPerView: 5,
      spaceBetween: 50
    },

    1400 : {
      slidesPerView: 6,
      spaceBetween: 60
    },
  },
});

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");

buttonNext.onclick = () => {
  swiper.slideNext();
};

buttonPrev.onclick = () => swiper.slidePrev();

/*-----------------------------------Free-Games-----------------------------------------------*/
const freeCards = document.querySelector(".list-free-games");
const freeCardsTemplate = freeCards.innerHTML;

const freeGames = [
  {
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Genshin Impact",
    Price: "Free",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/Val_s2_1200x1600-a51221b62f3b4a013a17b22dd983c32c?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "Valorant",
    Price: "Free",
  },
  {
    image:
      "https://thumbnails.pcgamingwiki.com/d/db/Dota_2_cover.jpg/300px-Dota_2_cover.jpg",
    genre: "Base Game",
    title: "Dota 2",
    Price: "Free",
  },
  {
    image:
      "https://thumbnails.pcgamingwiki.com/8/89/Farlight_84_cover.jpg/300px-Farlight_84_cover.jpg",
    genre: "Base Game",
    title: "Farlight 84",
    Price: "Free",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/076207fa2b5c4803a636af606c3c28b7/SMITE-EPIC-PortraitImagev2-10r6-1200x1600_1200x1600-c4528924f2e647e8cc492bdc1145b677?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "SMITE",
    Price: "Free",
  },
  {
    image:
      "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-j1tqb.png?h=480&quality=medium&resize=1&w=360",
    genre: "Base Game",
    title: "PUBG: Battlegrounds",
    Price: "Free",
  },
  {
    image:
      "https://i.pinimg.com/originals/c5/6c/77/c56c774ee09e3e16bf12460dea765109.jpg",
    genre: "Base Game",
    title: "League of Legends",
    Price: "Free",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/037/550/248/large/anthrox-studio-apex-key-art-refresh-2500px.jpg?1620675622",
    genre: "Base Game",
    title: "Apex Legends",
    Price: "Free",
  },
  {
    image:
      "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/product_box_art/s3/2020/09/01/1db94fba/warframe.jpg",
    genre: "Base Game",
    title: "Warframe",
    Price: "Free",
  },
  {
    image:
      "https://thumbnails.pcgamingwiki.com/3/3b/Overwatch_2_cover.jpg/300px-Overwatch_2_cover.jpg",
    genre: "Base Game",
    title: "Overwatch 2",
    Price: "Free",
  },
  {
    image:
      "https://thumbnails.pcgamingwiki.com/7/7b/EFootball_2024_cover.jpg/300px-EFootball_2024_cover.jpg",
    genre: "Base Game",
    title: "Efootball 2024",
    Price: "Free",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/id/5/5f/Tf2_standalonebox.jpg",
    genre: "Base Game",
    title: "Team Fortress",
    Price: "Free",
  },
  
];

freeCards.innerHTML = Mustache.render(freeCardsTemplate, { freeGames });

const freeList = new Swiper(".listFreeGames", {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480 : {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1200 : {
      slidesPerView: 5,
      spaceBetween: 50
    },

    1400 : {
      slidesPerView: 5,
      spaceBetween: 50
    },
  }
});

const freeNext = document.querySelector(".button-next");
const freePrev = document.querySelector(".button-prev");

freeNext.onclick = () => freeList.slideNext();

freePrev.onclick = () => freeList.slidePrev();

/*-----------------------------------ToggleNavbar---------------------------------------------*/
const toggleButton = document.querySelector("#toggle-button");
const navbarContent = document.querySelector(".sub-navbar-content");
const closeButton = document.querySelector("#close-button");

const interactNavbar = () => {
  return navbarContent.classList.toggle("sub-navbar-content-shown");
};

toggleButton.addEventListener("click", interactNavbar);
closeButton.addEventListener("click", interactNavbar);
