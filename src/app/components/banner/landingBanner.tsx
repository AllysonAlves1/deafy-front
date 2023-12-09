

export default function LandingBanner(){
    return(
        <div className="bg-landingImage bg-center bg-cover bg-no-repeat h-96 w-full border-b-4">
            <div className="flex flex-col justify-center items-center w-full h-full backdrop-blur-sm">
                <h2 className="text-white text-4xl font-bold">Bem vindo ao Deafy!</h2>
                <p className="text-white">Nosso aplicativo de música voltado à inclusão!</p>
            </div>
        </div>
    );
}