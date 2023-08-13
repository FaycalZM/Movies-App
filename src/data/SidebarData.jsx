import React from 'react'
import { FaHome, FaRegHeart, FaRegQuestionCircle } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { MdScreenshotMonitor } from 'react-icons/md'





const iconStyle = {
    width: "30px",
    height: "30px"
}


const SidebarData = [
    {
        id: "1",
        title: "home",
        path: "/",
        icon: < FaHome style={iconStyle} />,
        clicked: null,
        sublinks: null
    },
    {
        id: "2",
        title: "movies",
        path: "/movies",
        icon: <BiCameraMovie style={iconStyle} />,
        onclick: () => {
            document.querySelector('.movies').classList.toggle('hidden');
        },
        clicked: false,
        sublinks: [
            {
                id: "1",
                title: "now playing",
                path: "/now_playing",
                icon: null,
                sublinks: null
            },
            {
                id: "2",
                title: "popular",
                path: "/popular_movies",
                icon: null,
                sublinks: null
            },
            {
                id: "3",
                title: "top rated",
                path: "/top_rated_movies",
                icon: null,
                sublinks: null
            },
            {
                id: "4",
                title: "upcoming",
                path: "/upcoming",
                icon: null,
                sublinks: null
            }
        ]
    },
    {
        id: "3",
        title: "series",
        path: "/series",
        icon: <MdScreenshotMonitor style={iconStyle} />,
        onclick: () => {
            document.querySelector('.series').classList.toggle('hidden');
        },
        clicked: false,
        sublinks: [
            {
                id: "1",
                title: "airing today",
                path: "/airing_today",
                icon: null,
                sublinks: null
            },
            {
                id: "2",
                title: "on the air",
                path: "/on_the_air",
                icon: null,
                sublinks: null
            },
            {
                id: "3",
                title: "popular",
                path: "/popular_series",
                icon: null,
                sublinks: null
            },
            {
                id: "4",
                title: "top rated",
                path: "/top_rated_series",
                icon: null,
                sublinks: null
            }
        ]
    },
    {
        id: "4",
        title: "favorites",
        path: "/favorites",
        icon: <FaRegHeart style={iconStyle} />,
        clicked: null,
        sublinks: null
    },
    {
        id: "5",
        title: "about",
        path: "/about",
        icon: <FaRegQuestionCircle style={iconStyle} />,
        clicked: null,
        sublinks: null
    },
]


export default SidebarData