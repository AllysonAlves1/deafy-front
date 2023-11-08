import Image from "next/image"
import Link from "next/link"
import RootLayout from "../layout"
import Label from "../components/label/label"
import deafyicon from '../../../public/deafyicon.png'
import Button from "../components/button/button"

export default function register(){

    const layoutProps = false

    return(
        <RootLayout layoutProps={layoutProps}>
            <div className="flex flex-col items-center justify-center h-screen gap-2 bg-black">
                <div className="flex flex-col items-center">

                    <Image
                        src={deafyicon}
                        style={{ cursor: "pointer" }}
                        alt="Deafy Icon"
                        className="w-20"
                    />

                    <h1 className="text-2xl">Registro</h1>

                    <form action="" method="post">
                        
                        <Label nome="Nome"/>

                        <Label nome="E-mail"/>

                        <Label nome="Senha"/>

                        <Label nome="Confirme sua senha"/>

                        <div className="flex flex-col items-center gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Aceito os termos.</label>
                            </div>
                            <Button nome="Registrar"/>
                        </div>
                    </form>
                </div>

                <h2>Ou</h2>

                <div>
                    <form action="" method="post">
                        <button type="submit">
                            <Image src="SocialImgs/icons8-google-logo.svg" alt="" width={25} height={25}></Image>
                        </button>
                        <button type="submit">
                            <Image src="SocialImgs/icons8-facebook.svg" alt="" width={25} height={25}></Image>
                        </button>
                    </form>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h3>Já tem conta?</h3>
                    <Link className="hover:underline" href="/login">Login</Link>
                </div>
            </div>
        </RootLayout>
    )
}