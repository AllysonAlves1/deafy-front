import Header from "../components/header/header"
import RootLayout from "../layout"
import notamusica from "../../../public/notamusica.png"
import Image from "next/image"
import Label from "../components/label/label"
import Button from "../components/button/button"

export default function ProfilePage(){

    const layoutProps = true

    return(
        <RootLayout layoutProps={layoutProps}>
            <Header />
            <div className="flex flex-col items-center h-screen bg-neutral-200 dark:bg-neutral-900">
                <div className="flex items-center my-10 gap-2">
                    <Image className="rounded-full w-36" src={notamusica} alt="generico"/>
                    <Button nome="Alterar"/>
                </div>
                <div className="flex flex-col gap-2 items-center ">
                    <h1 className="text-1xl">Nome Atual:</h1>
                    <Label nome="Nome"/>
                    <Button nome="Alterar"/>
                    <Label nome="Senha Antiga"/>
                    <Label nome="Senha Nova"/>
                    <Button nome="Alterar"/>
                </div>
            </div>
        </RootLayout>
    )

}