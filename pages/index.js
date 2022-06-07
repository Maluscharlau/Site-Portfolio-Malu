import Navbar from "./components/Navbar"
import SectorTitle from "./components/SectorTitle"
import ProjectList from "./components/ProjectList"
import Contact from "./components/Contact"
import Head from 'next/head'
import logoHead from ".//../public/logoHead.png"

export default function Home() {
  return (
    <div className="bg-bodyColor flex flex-col justify-center">
      <Head>
          <title>Arquiteta Malu</title>
          <link rel="icon" href="https://maluscharlau.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoHead.801f3bb8.png&w=256&q=75" type="image/icon type"/>
          <meta charSet='utf-8' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <SectorTitle title="ARQUITETONICO"/>
      <ProjectList category="arq"/>
      <SectorTitle title="PAISAGISMO"/>
      <ProjectList category="pai"/>
      <SectorTitle title="URBANISMO"/>
      <ProjectList category="urb"/>
      <Contact/>
    </div>
  )
}
