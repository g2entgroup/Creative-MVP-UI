import React, { useContext } from 'react'
import Link from 'next/link'

import { ConnectWalletButton } from 'lib/components/ConnectWalletButton'
import { WalletContext } from 'lib/components/WalletContextProvider'
import { WalletInfo } from 'lib/components/WalletInfo'

import CreativeLogo from 'assets/images/CreativeToken_Logo-wht.svg'
import CreativeCLogo from 'assets/images/Creative-Icon.svg'

export const Nav = (props) => {
  const walletContext = useContext(WalletContext)
  const usersAddress = walletContext._onboard.getState().address

  const handleConnect = (e) => {
    e.preventDefault()

    walletContext.handleConnectWallet()
  }

  return (
    <>
      <div className='nav-and-footer-container'>
        <nav className='sm:px-8 lg:px-0 nav-min-height flex items-center h-full justify-between flex-wrap'>
          <div className='w-2/5 lg:w-1/5 justify-start h-full flex items-center truncate'>
            <Link href='/' as='/'>
              <a title={'Back to home'} className='border-0'>
                <img
                  alt={`Creative Logo`}
                  src={CreativeCLogo}
                  className='mr-auto lg:m-0 w-24 hidden sm:block'
                />
                <span><h1 className='text-accent-1 title text-md sm:text-4xl hidden sm:block'>CREATIVE.</h1></span>
                <img
                  alt={`Creative Play Logo`}
                  src={CreativeCLogo}
                  className='mr-auto lg:m-0 w-6 block sm:hidden'
                />
              </a>
            </Link>
          </div>

          <div className='w-1/5 lg:w-3/5 flex justify-center h-full text-center lg:text-right'>
            &nbsp;
          </div>

          <div className='w-2/5 lg:w-1/5 flex justify-end h-full items-center text-right'>
            <div className='mt-0 sm:mt-0 text-xxs sm:text-sm tracking-wide text-right spinner-hidden'>
              {usersAddress ? <WalletInfo {...props} /> : <ConnectWalletButton size='sm' />}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
