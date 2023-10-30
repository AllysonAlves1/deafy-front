import Link from "next/link"
import Image from "next/image"

const HeaderHome = () => {

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return(
        <div style={{backgroundColor:"blue"}}>
            <Link href="#">
                <Image src="/deafyicon.png" style={{cursor:"pointer"}} alt="Deafy Icon" width={50} height={50}></Image>
            </Link>
            <Link href="">
                <Image src="/config.svg" alt="" width={50} height={50}></Image>
            </Link>
        </div>
    )
}

export default HeaderHome;