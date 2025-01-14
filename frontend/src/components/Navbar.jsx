import React from 'react'
import ConnectWallet from './ConnectWallet'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    {
      name: 'Homepage',
      url: '/'
    },
    {
      name: '1. Incrementer',
      url: '/_01'
    },
    {
      name: '2. Incrementer (Transaction)',
      url: '/_02'
    }

  ]
  return (
    <>
      <div className="navbar bg-base-100 absolute shadow-sm px-5 lg:px-20 py-3 z-50">
        <div className="navbar-start gap-3">
          <div className="dropdown">
            <img src="https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg" className='h-7' tabIndex={0} role="button"/>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
          <Link to={'/'} className="text-xl font-medium">
            <span className='font-bold'>Dapp</span>Learning
          </Link>
        </div>
        <div className="navbar-end">
          <ConnectWallet />
        </div>
      </div>
    </>
  )
}

export default Navbar