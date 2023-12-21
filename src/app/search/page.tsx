'use client'
import SearchBar from "../components/searchbar/searchBar";
import RootLayout from "../layout";

export default function SearchPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col mt-20 mb-20 md:mb-0">
        <SearchBar />
      </div>
    </RootLayout>
  );
}
