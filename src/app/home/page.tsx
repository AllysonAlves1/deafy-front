import RootLayout from "../layout";
import HeaderHome from "../components/header/header";
import Category from "../components/category/category";

export default function HomePage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome></HeaderHome>
      <div className="h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col gap-4">
        <Category category="Músicas" />
        <Category category="Podcasts" />
      </div>
    </RootLayout>
  );
}