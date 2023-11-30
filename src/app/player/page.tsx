import RootLayout from "../layout";
import Play from "../components/play/play";
import Subtitle from "../components/play/subtitle";

export default function PlayerPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div>
        <Play />
        <Subtitle />
      </div>
    </RootLayout>
  );
}
