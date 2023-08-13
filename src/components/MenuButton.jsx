/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { CgMenuLeftAlt, CgClose } from 'react-icons/cg'
import { useData } from './DataProvider';

const toggleMenuOpen = (menuOpened, setMenuOpened) => {
    setMenuOpened(!menuOpened);
}
const MenuButton = () => {

    const { menuOpened, setMenuOpened } = useData();

    const sidebarNav = document.querySelector('.sidebar-nav');


    useEffect(
        () => {
            if (sidebarNav) {
                sidebarNav.style.display = menuOpened ? 'flex' : 'none';
            }
        }, [menuOpened]
    )


    return (
        <button
            className='menu__btn'
            onClick={() => {
                toggleMenuOpen(menuOpened, setMenuOpened);
            }}
        >
            {
                menuOpened
                    ? <CgClose />
                    : <CgMenuLeftAlt />
            }
        </button>
    )
}

export default MenuButton