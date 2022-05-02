import React, {useState} from 'react'
import Link from 'next/link'
import Image from "next/image"
import logo from ".//../../public/logo.png"
import menu from ".//../../public/menu.svg"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const changeOpen =()=> {
    const menuIcon = document.getElementById('menuIcon')
    const navBarFlex = document.getElementById("navFlex")
    const itemNavFlex = document.getElementById("itemNavFlex")
    const logoFlex = document.getElementById("logoFlex")
    if (isOpen) {
      setIsOpen(false)
      menuIcon.classList.remove("opacity-0")
      navBarFlex.classList.remove("h-full")
      itemNavFlex.classList.remove("h-1/2")
      navBarFlex.classList.add("opacity-0")
      navBarFlex.classList.add("h-0")
      itemNavFlex.classList.add("h-0")
      logoFlex.classList.remove("opacity-25")
      navBarFlex.classList.remove("duration-75")
      navBarFlex.classList.add("duration-500")



    }else{
      setIsOpen(true)
      menuIcon.classList.add("opacity-0")
      navBarFlex.classList.add("opacity-100")
      navBarFlex.classList.add("h-full")
      navBarFlex.classList.remove("h-0")
      itemNavFlex.classList.add("h-1/2")
      itemNavFlex.classList.remove("h-0")
      logoFlex.classList.add("opacity-25")

      navBarFlex.classList.add("duration-75")
      navBarFlex.classList.remove("duration-500")



    }
  }

  return (
    <>
      <button className="fixed top-1.5 left-1.5 h-10 w-10 sm:opacity-0 ease-in duration-1000" onClick={changeOpen} id="menuIcon">
        <Image
          src={menu}
          alt="Menu"
        />
      </button>
      <header id="navFlex" className="ease-in duration-75 w-full sm:p-1 sm:m-1 h-0 sm:h-auto overflow-hidden opacity-0 sm:opacity-100 fixed sm:static bottom-0 left-0 flex sm:flex-row flex-col items-center justify-between z-50">
        <div className="ease-in duration-500 bg-bodyColor w-full sm:w-1/4 sm:h-auto h-1/2 opacity-0 sm:opacity-100" id="logoFlex" onClick={changeOpen}>
          <Image
            src={logo}
            alt="Malu Logo"
          />
        </div>
        <nav id="itemNavFlex" className="ease-in duration-500 bg-headerColor sm:bg-bodyColor text-center sm:border-0 border-t-8 border-double border-textColor w-full sm:w-1/3 sm:text-2xl flex sm:flex-row flex-col justify-around fontMoon sm:h-auto h-0">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/">
            <a>Sobre</a>
          </Link>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
          <Link href="/">
            <a>Curriculo</a>
          </Link>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </nav>
      </header>
    </>
    )
}

export default Navbar
