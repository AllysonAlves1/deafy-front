import LandingHeader from "./components/header/landingHeader";
import RootLayout from "./layout";
import deafyicon from "../../public/deafyicon.png"
import LandingBanner from "./components/banner/landingBanner";
import LandingCard from "./components/card/landingCard";
import texticon from "../../public/texticon.png"
import upload from "../../public/upload.png"
import music from "../../public/musicicon.png"
import Button from "./components/button/button";
import Link from "next/link";
import LandingFooter from "./components/footer/landingFooter";

export default function home() {

  const layoutProps = false;


  return (
    <RootLayout layoutProps={layoutProps}>
        <LandingHeader image = {deafyicon}/>
        <LandingBanner/>
        <div className="pt-6 flex flex-col items-center gap-10 mb-0 border-b-2 border-slate-900">
          <h2 className="text-black text-2xl font-bold">Porque utilizar o Deafy?</h2>
          <div className="flex flex-col gap-10">
            <LandingCard imagem={texticon} titulo="Transcreva seus áudios." texto="Inclusão para compreensão de áudios na palma da sua mão."/>
            <LandingCard imagem={upload} titulo="Escolha o que ler." texto="Faça upload dos áudios do seu dispositivo."/>
            <LandingCard imagem={music} titulo="Podcasts e Músicas." texto="Temos uma biblioteca de mais de 5 podcasts e músicas a sua disposição."/>
          </div>
          <div>
            <div className="flex flex-col justify-end items-center mt-9 bg-gradient-to-b from-white from-20% via-slate-400 to-slate-500 h-52 w-screen">
              <h2 className="text-white font-semibold text-4xl">É grátis.</h2>
              <p className="text-white font-semibold text-2xl">Só baixar e usar.</p>
            </div>
            <div className="flex flex-col justify-top items-center bg-gradient-to-b from-slate-500 to-slate-800 h-52 w-screen gap-4">
              <p className="text-white text-2xl font-semibold">Venha se juntar a nós.</p>
              <Link href='/register'>
                <Button nome="Inscreva-se já"/>
              </Link>
            </div>
          </div>
          
        </div>
        <LandingFooter></LandingFooter>
    </RootLayout>
  );
}
