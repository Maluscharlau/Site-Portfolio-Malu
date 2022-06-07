import logoHead from ".//../public/logoHead.png"
import Image from "next/image"

function Logo() {
  return (
    <Image
      src={logoHead}
      width={150}
      height={150}
    />
  )
}

export default Logo
