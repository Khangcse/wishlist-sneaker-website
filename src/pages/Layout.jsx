import React from 'react'
import { Outlet } from "react-router";
import Header from '../components/js/Header'
import Footer from '../components/js/Footer'
import { Link } from 'react-router';
export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
