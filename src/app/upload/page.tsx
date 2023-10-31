import HeaderHome from "../components/header/headerHome"
import SendMedia from "../components/sendMedia/sendMedia"
import RootLayout from "../layout"

export default function uploadPage(){

    const layoutProps = true

    return(
        <RootLayout layoutProps={layoutProps}>
            <HeaderHome />
            <SendMedia />
            <div>
                <h1>UPLOAD PAGE</h1>
            </div>
        </RootLayout>
    )

}