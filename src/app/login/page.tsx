import Image from 'next/image'
import Link from 'next/link'
import RootLayout from '../layout'
import deafyicon from '../../../public/deafyicon.png'
import Label from '../components/label/label'
import Button from '../components/button/button'

export default function login() {

    const layoutProps = false

    return (
        <RootLayout layoutProps={layoutProps}>
            <div className="flex flex-col items-center h-screen gap-2 bg-slate-800 pt-12">

                <Image
                    src={deafyicon}
                    style={{ cursor: "pointer" }}
                    alt="Deafy Icon"
                    className="w-40"
                />

                <div className="flex flex-col gap-1 items-center">
                        <Label nome='E-mail'/>
                        <Label nome='Senha'/>
                        <Button nome='Login'/>
                </div>

                <div className="flex flex-col gap-1 items-center">
                    <h2>Ou</h2>

                    <form className= "flex gap-1" action="" method="post">
                        <button type="submit">
                            <Image src="SocialImgs/icons8-google-logo.svg" alt="" width={25} height={25}></Image>
                        </button>
                        <button type="submit">
                            <Image src="SocialImgs/icons8-facebook.svg" alt="" width={25} height={25}></Image>
                        </button>
                    </form>
                </div>

                <div className="flex flex-col items-center">
                    <h3>Não tem conta?</h3>
                    <Link className="hover:underline" href="/register">Registre-se</Link>
                </div>

            </div>
        </RootLayout>
    )
}