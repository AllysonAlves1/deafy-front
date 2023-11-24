import Category from "../components/category/category";
import HeaderHome from "../components/header/header";
import Audio from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";

export default function uploadPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome />
      <SendMedia />
      <div className=" bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col">
        <Category category="Meus Uploads" />
      </div>
      <div>
        
      </div>
    </RootLayout>
  );
}
