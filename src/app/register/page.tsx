import Image from "next/image"
import Link from "next/link"
import RootLayout from "../layout"

export default function register(){

    const layoutProps = false

    return(
        <RootLayout layoutProps={layoutProps}>
            <div>
                <header>
                    <h1>Tela de Registro</h1>
                </header>
                <div>
                    <form action="" method="post">
                        <label htmlFor="">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome"/>

                        <label htmlFor="">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu E-mail"/>

                        <label htmlFor="">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>

                        <label htmlFor="">Confirme sua senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha novamente"/>

                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Aceito os termos.</label>

                        <button type="submit">Registrar!</button>
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

                <div>
                    <h3>Já tem conta?</h3>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </RootLayout>
    )
}