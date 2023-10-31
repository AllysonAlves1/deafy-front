import RootLayout from "../layout";
import HeaderHome from "../components/header/headerHome";
import Music from "../components/media/Music";

export default function HomePage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome></HeaderHome>
      <div className="h-screen px-4 flex flex-col gap-4">
        <h1 className="text-lg">Músicas</h1>
        <div className="flex gap-2">
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
        </div>
        <h1 className="text-lg">Podcasts</h1>
        <div className="flex gap-2">
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
        </div>
      </div>
    </RootLayout>
  );
}
