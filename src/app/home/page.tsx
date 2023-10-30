import RootLayout from "../layout"

export default function homeApp() {

    const layoutProps = true

    return (
        <RootLayout layoutProps={layoutProps}>
            <div>
                <h1>HOME PAGE</h1>
            </div>
        </RootLayout>
    )

}