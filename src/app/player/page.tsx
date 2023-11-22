import RootLayout from "../layout";
import Play from "../components/play/play";
import Subtitle from "../components/play/subtitle";
import HeaderHome from "../components/header/header";

export default function PlayerPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div>
        <HeaderHome />
        <Play />
        <Subtitle />
      </div>
    </RootLayout>
  );
}
