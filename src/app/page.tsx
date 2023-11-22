import LandingBody from "./components/body/landingBody";
import RootLayout from "./layout";


export default function home() {

  const layoutProps = false;


  return (
    <RootLayout layoutProps={layoutProps}>
        <LandingBody/>
    </RootLayout>
  );
}
