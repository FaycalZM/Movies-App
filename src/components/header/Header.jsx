import React from 'react'
import SearchForm from './SearchForm'
import UserInfos from './UserInfos'
import MenuButton from '../MenuButton'

const Header = () => {

  return (
    <header className='main-content-header'>
      <MenuButton />
      <SearchForm />
      <UserInfos />
    </header>
  )
}

export default Header