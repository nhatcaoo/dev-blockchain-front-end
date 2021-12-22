import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connectWallet } from '../utils'
import Marketplace from './Marketplace'
import useProvider from '../hook/useProvider'
import MyNft from './MyNft'
import Create from './Create'
import { fetchApproveForAll } from '../states/providerSlice'

import './App.scss'

function App() {
  useProvider()
  const dispatch = useDispatch()
  const account = useSelector((state) => state.provider.account)

  const { pathname } = useLocation()
  console.log(account)
  const history = useHistory()
  console.log("app")

  const activeIndex =
    pathname === '/marketplace'
      ? 0
      : pathname === '/mynft'
        ? 1
        : pathname === '/create'
          ? 2
          : undefined
  return (
    <div className="app">
      <header className="header">
        <div style={{ flex: 1 }} />
        <nav className="nav">
          <ul>
            <li tabIndex="0" className={activeIndex === 0 ? 'active' : ''} onClick={() => history.push('/marketplace')}>
              {'Marketplace'}
            </li>
            <li tabIndex="0" className={activeIndex === 1 ? 'active' : ''} onClick={() => history.push('/mynft')}>
              {'My NFT'}
            </li>
            <li tabIndex="0" className={activeIndex === 2 ? 'active' : ''} onClick={() => history.push('/create')}>
              {'Create'}
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
              {'Connect Metamask (Rinkeby)'}
            </div>
          )}
        </div>
      </header>
      <div className="app-body">
        <Switch>
          <Route exact strict path="/marketplace" component={Marketplace} />
          <Route exact strict path="/mynft" component={MyNft} />
          <Route exact strict path="/create" component={Create} />
          <Route component={() => <Redirect to="/marketplace" />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
