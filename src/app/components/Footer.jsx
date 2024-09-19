import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
   <footer><div><span> <Image
   src="/images/logo.jpg"
   alt ="hero"
   className="rounded-full object cover"
   width={50}
   height={50}
   />
   </span>
   <p>All Rights Reserved.</p>
   </div></footer>
  )
}

export default Footer