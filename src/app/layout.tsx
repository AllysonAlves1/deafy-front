/* eslint-disable jsx-a11y/alt-text */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function rootLayout({
  children,
  layoutProps
}: {
  children: React.ReactNode,
  layoutProps: boolean
}) {
  if (layoutProps==true){
    return (
      <html lang="en">
        <body className={inter.className}>
          <div style={{backgroundColor:"white", display:"flex", justifyContent:"space-around", position:"sticky", bottom:"0"}}>
  
            <Link href="/home" style={{color:"white"}}>
                <Image src="LayoutImgs/home_FILL0_wght400_GRAD0_opsz24.svg" alt="Home Icon" width={50} height={50}></Image>  
            </Link>
  
            <Link href="/search" style={{color:"white"}}>
                <Image src="LayoutImgs/search_FILL0_wght400_GRAD0_opsz24.svg" alt="Search Icon" width={50} height={50}></Image>
            </Link>
  
            <Link href="/upload" style={{color:"white"}}>
              <Image src="LayoutImgs/publish_FILL0_wght400_GRAD0_opsz24.svg" alt="Upload Icon" width={50} height={50}></Image>
            </Link>
  
            <Link href="/profile" style={{color:"white"}}>
              <Image src="LayoutImgs/person_FILL0_wght400_GRAD0_opsz24.svg" alt="Person Icon" width={50} height={50}></Image>
            </Link>
  
          </div>
          {children}
        </body>
      </html>
    )
    //Children é a página que vai ser renderizada, no caso o layout ele renderiza por cima da página em questão
  } else{
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
  }

}
