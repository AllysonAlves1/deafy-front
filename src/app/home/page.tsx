import RootLayout from "../layout";
import HeaderHome from "../components/header/headerHome";
import Audio from "../components/media/audio";

export default function HomePage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome></HeaderHome>
      <div className="h-screen px-4 flex flex-col gap-4">
        <h1 className="text-lg">Músicas</h1>
        <div className="flex gap-2">
          <Audio></Audio>
          <Audio></Audio>
        </div>
        <h1 className="text-lg">Podcasts</h1>
        <div className="flex gap-2">
          <Audio></Audio>
          <Audio></Audio>
        </div>
      </div>
    </RootLayout>
  );
}
