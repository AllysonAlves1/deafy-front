import HeaderHome from "../components/header/header";
import SearchBar from "../components/searchbar/searchBar";
import RootLayout from "../layout";

export default function SearchPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <HeaderHome />
      <div className="h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col">
        <SearchBar />
      </div>
    </RootLayout>
  );
}
