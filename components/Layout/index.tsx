import React from 'react'
import {Helmet} from 'react-helmet'
import ScrollToTop from '../ScrollToTop'
import Header from '../Header'

export default function Layout({children}:any) {

  return (
    <ScrollToTop>
      <Helmet>
        <title>Cahier de Français</title>
        <meta name="description" content="Learn French Grammar! This website has a variety of reference materials for French grammar and vocabulary. Made by a web developer who is learning french."></meta>
      </Helmet>
      <Header/>
      {children}
    </ScrollToTop>
  )
}