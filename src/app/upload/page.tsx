import HeaderHome from "../components/header/headerHome";
import Audio from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";

export default function uploadPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome />
      <SendMedia />
      <div className="h-screen px-4 flex flex-col gap-4">
        <h1 className="text-lg">Meus Uploads</h1>
        <div className="flex gap-2">
          <Audio></Audio>
          <Audio></Audio>
        </div>
      </div>
    </RootLayout>
  );
}
