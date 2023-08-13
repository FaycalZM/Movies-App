import React, { useState } from 'react'
import SidebarData from '../data/SidebarData'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import MenuButton from './MenuButton'
import { useData } from './DataProvider'


const SideBarNav = () => {

    const [sideBarData, setSideBarData] = useState(SidebarData);
    const { setMenuOpened } = useData();

    return (
        <nav className='sidebar-nav'>
            <MenuButton />
            {
                sideBarData.map((navItem) => {
                    return (
                        <>
                            <Link
                                to={navItem.path}
                                key={navItem.id}
                                onClick={() => {
                                    setMenuOpened(false);
                                    navItem.onclick();
                                    setSideBarData(
                                        sideBarData.map((item) => {
                                            if (navItem.id === item.id) {
                                                return {
                                                    ...item,
                                                    clicked: !item.clicked
                                                }
                                            }
                                            else
                                                return item
                                        })
                                    );
                                }}
                            >
                                {navItem.icon}
                                {navItem.title}
                                {
                                    navItem.clicked && navItem.clicked !== null
                                        ? <MdKeyboardArrowUp
                                            className='arrow'
                                        />
                                        : null
                                }
                                {
                                    !navItem.clicked && navItem.clicked !== null
                                        ? <MdKeyboardArrowDown
                                            className='arrow' />
                                        : null
                                }
                            </Link>
                            {
                                navItem.sublinks
                                    ? <nav className={`sublinks ${navItem.title} hidden`}>
                                        {
                                            navItem.sublinks.map((subNavItem) => {
                                                return <Link
                                                    to={subNavItem.path}
                                                    key={subNavItem.id}
                                                    onClick={() => setMenuOpened(false)}
                                                >
                                                    {subNavItem.icon}
                                                    {subNavItem.title}
                                                </Link>
                                            })
                                        }
                                    </nav>
                                    : null
                            }
                        </>
                    )
                })
            }

        </nav>
    )
}

export default SideBarNav