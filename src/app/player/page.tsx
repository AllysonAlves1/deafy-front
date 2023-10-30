import RootLayout from "../layout"
import Play from "../components/play/play"
import Subtitle from "../components/play/subtitle"

export default function playerPage(){

    const layoutProps = false

    return(
        <RootLayout layoutProps={layoutProps}>
            <Play></Play>
            <Subtitle></Subtitle>
        </RootLayout>
    )
    
}