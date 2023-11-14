import HeaderHome from "../components/header/headerHome"
import SendMedia from "../components/sendMedia/sendMedia"
import RootLayout from "../layout"

export default function uploadPage(){

    const layoutProps = true

    return(
        <RootLayout layoutProps={layoutProps}>
            <HeaderHome />
            <SendMedia />
            <div className="flex">
                <h1>Meus Uploads:</h1>
            </div>
        </RootLayout>
    )

}