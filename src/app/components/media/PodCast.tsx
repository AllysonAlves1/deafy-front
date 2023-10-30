import Image from "next/image";
import Link from "next/link";

const PodCast = () => {
    return(
        <Link href="">
            <div>
                <Image src="" alt="" width={50} height={50}></Image>
                <p>2:30</p>
                <h1>PodCastName</h1>
                <h3>AuthorName</h3>
            </div>
        </Link>
    )
}

export default PodCast;