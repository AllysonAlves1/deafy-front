import RootLayout from "../layout"
import HeaderHome from "../components/header/HeaderHome"
import Music from "../components/media/Music"
import PodCast from "../components/media/PodCast"

export default function homeApp() {

    const layoutProps = true

    return (
        <RootLayout layoutProps={layoutProps}>
            <HeaderHome></HeaderHome>
            <div>
                <section>
                    <h1>Músicas</h1>
                    <Music></Music>
                </section>
                <section>
                    <h1>PodCasts</h1>
                    <PodCast></PodCast>
                </section>
            </div>
        </RootLayout>
    )

}