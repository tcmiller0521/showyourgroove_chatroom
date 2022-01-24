import RockBg from '../images/rock_Background.png'
import ClassicalBg from '../images/classical_background.png'
import HipHopBg from '../images/hiphop_background.png'
import PopBg from '../images/pop_background.png'
import IndieBg from '../images/indie_background.png'
import GeneralBg from '../images/generalBg-01.png'

const RoomInfo = [

    // change link to theme: { bg-color: }
    {
        title: "General",
        description: "Chat with old friends, make new friends. Chat about anything you like! General is open to everyone and anyone!",
        image: GeneralBg, // background
        link: 'general'
    },
    {
        title: "Rock",
        description: "Love Aerosmith, Guns N' Roses, or other classic rock bands? This is the room for you! Meet people, find new music!",
        image: RockBg,
        link: 'rock'
    },

    {
        title: "Classical",
        description: "Do you like to keep things traditional with classical music? Join now and find others enjoy the traditional way of life!",
        image: ClassicalBg,
        link: 'classical'
    },

    {
        title: "Hip Hop",
        description: "Not a fan of traditional? That's cool! Speed things up and checkout the Hip Hop room to find a new beat to groove to!",
        image: HipHopBg,
        link: 'hipHop'
    },

    {
        title: "Pop",
        description: "Are you more modern? Find people you can relate to in the Pop room! Find some new music to listen to while you're at it!",
        image: PopBg,
        link: 'pop'
    },

    {
        title: "Indie",
        description: "Not a fan of 'mainstream' things? You'll find some people who agree here! Grab some coffee and be your hipster self.",
        image: IndieBg,
        link: 'indie'
    },

]

export default RoomInfo