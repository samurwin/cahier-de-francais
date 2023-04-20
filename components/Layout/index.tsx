import React from 'react'
import ScrollToTop from '../ScrollToTop'
import Header from '../Header'

export default function Layout({children}:any) {

  return (
    <ScrollToTop>
      <Header/>
      {children}
    </ScrollToTop>
  )
}