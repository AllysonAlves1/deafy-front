import RootLayout from "../layout";
import HeaderHome from "../components/header/header";
import Category from "../components/category/category";
import QuadradosSlider from "../components/slider/Slider";

export default function HomePage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome></HeaderHome>
      <div className="h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col gap-4">
        <QuadradosSlider titulo="Musics"/>
        <QuadradosSlider titulo="Podcasts"/>
        <QuadradosSlider titulo="Audiobooks"/>
      </div>
    </RootLayout>
  );
}