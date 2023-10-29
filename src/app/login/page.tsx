import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    return (
        <div>

            <header>
                <h1>Tela de Login</h1>
            </header>

            <form action="" method="post">

                <label htmlFor="">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite seu E-mail" />

                <label htmlFor="">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />

                <button type="submit">Logar!</button>

            </form>

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
    )
}