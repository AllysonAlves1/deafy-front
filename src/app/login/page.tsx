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
            <div className="flex flex-col items-center h-screen bg-slate-800 pt-12">

                <Image
                    src={deafyicon}
                    style={{ cursor: "pointer" }}
                    alt="Deafy Icon"
                    className="w-40"
                />

                <div className="flex flex-col gap-2 items-center">
                        <Label nome='E-mail'/>
                        <Label nome='Senha'/>
                        <Button />
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

                <div>
                    <h3>Não tem conta?</h3>
                    <Link href="/register">Registro</Link>
                </div>

            </div>
        </RootLayout>
    )
}