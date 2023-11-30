import Audio from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";

export default function uploadPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <SendMedia />
      <div className="max-h-full bg-neutral-200 dark:bg-neutral-900 p-4">
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-5">
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
          <Audio />
        </div>
      </div>
    </RootLayout>
  );
}
