import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connectWallet } from '../utils'
import Marketplace from './Marketplace'
import BuyFromSupplier from './BuyFromSupplier'
import useProvider from '../hook/useProvider'
import MyNft from './MyNft'
import Create from './Create'
import { fetchApproveForAll } from '../states/providerSlice'

import './App.scss'
import MyStake from './MyStake'
import CreateByArtist from './CreateByArtist'

function App() {
  useProvider()
  const dispatch = useDispatch()
  const account = useSelector((state) => state.provider.account)

  const { pathname } = useLocation()
  const history = useHistory()

  const activeIndex =
    pathname === '/supplier'
      ? 0
      : pathname === '/marketplace'
        ? 1
        : pathname === '/mynft'
          ? 2
          : pathname === '/mystake'
            ? 3
            : pathname === '/create'
              ? 4
              : pathname === '/create-by-artist'
                ? 5
                : undefined
  return (
    <div className="app">
      <header className="header">
        <div style={{ flex: 1 }} />
        <nav className="nav">
          <ul>
            <li tabIndex="0" className={activeIndex === 0 ? 'active' : ''} onClick={() => history.push('/supplier')}>
              {'Buy from supplier'}
            </li>
            <li tabIndex="0" className={activeIndex === 1 ? 'active' : ''} onClick={() => history.push('/marketplace')}>
              {'Marketplace'}
            </li>
            <li tabIndex="0" className={activeIndex === 2 ? 'active' : ''} onClick={() => history.push('/mynft')}>
              {'My NFT'}
            </li>
            <li tabIndex="0" className={activeIndex === 3 ? 'active' : ''} onClick={() => history.push('/mystake')}>
              {'My Stake'}
            </li>
            <li tabIndex="0" className={activeIndex === 4 ? 'active' : ''} onClick={() => history.push('/create')}>
              {'Create'}
            </li>
            <li tabIndex="0" className={activeIndex === 5 ? 'active' : ''} onClick={() => history.push('/create-by-artist')}>
              {'Create by artist'}
            </li>
          </ul>
        </nav>
        <div className="lng-and-account">

          {account ? (
            <div tabIndex="0" className="account">
              {`${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
            </div>
          ) : (
            <div tabIndex="0" className="account" onClick={connectWallet}>
              {'Connect Metamask (BSC Test net)'}
            </div>
          )}
        </div>
      </header>
      <div className="app-body">
        <Switch>
          <Route exact strict path="/supplier" component={BuyFromSupplier} />
          <Route exact strict path="/marketplace" component={Marketplace} />
          <Route exact strict path="/mynft" component={MyNft} />
          <Route exact strict path="/mystake" component={MyStake} />
          <Route exact strict path="/create" component={Create} />
          <Route exact strict path="/create-by-artist" component={CreateByArtist} />
          <Route component={() => <Redirect to="/supplier" />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
