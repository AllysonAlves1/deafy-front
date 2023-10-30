import Image from "next/image"
const Play = () => {
    return(
        <div>
            <Image src="" alt="" width={50} height={50}></Image>
            <h1>Nome da Musica/PodCast</h1>
            <h3>Autor</h3>
            <Image src="" alt="" width={50} height={50}></Image>
            {/*Contagem das vizualizações, por exemplo: Image (8)  */}
            <p>BARRA CONTENDO O TEMPO DA MUSICA, BOTAO DE PLAY/PAUSE e SKIP</p>
        </div>
    )
}

export default Play;