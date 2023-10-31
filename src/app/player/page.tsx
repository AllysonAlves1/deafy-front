import RootLayout from "../layout";
import Play from "../components/play/play";
import Subtitle from "../components/play/subtitle";

export default function PlayerPage() {
  const layoutProps = false;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div>
        <Play></Play>
        <Subtitle></Subtitle>
      </div>
    </RootLayout>
  );
}
