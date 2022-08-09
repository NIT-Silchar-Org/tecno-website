import React from 'react'
import Parallax from '../components/style-guide/sections/Parallax'
import AboutUs from '../components/style-guide/sections/AboutUs'
import AboutNIT from '../components/style-guide/sections/AboutNIT'
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>Tecnoesis 2022</Head>
      <div className="bg-black">
        <Parallax />
        <AboutUs />
        <AboutNIT />
      </div>
      </>
  )
}
