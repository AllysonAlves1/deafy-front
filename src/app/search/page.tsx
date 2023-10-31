import HeaderHome from "../components/header/headerHome"
import SearchBar from "../components/searchbar/searchBar"
import RootLayout from "../layout"

export default function SearchPage(){

    const layoutProps = true
    
    return(
        <RootLayout layoutProps={layoutProps}>
            <HeaderHome />
            <SearchBar />
            <div>
                <h1>SEARCH PAGE</h1>
            </div>
        </RootLayout>    
    )
    
}