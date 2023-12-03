import RootLayout from "../layout";
import notamusica from "../../../public/notamusica.png";
import Image from "next/image";
import Label from "../components/label/label";
import Button from "../components/button/button";

export default function ProfilePage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center bg-neutral-200 dark:bg-neutral-900 min-h-screen">
        <div className="flex flex-col gap-4 items-center absolute top-40 w-[50%] xl:w-[30%]">
        <Image
            className="rounded-full w-36 mb-2"
            src={notamusica}
            alt="generico"
          />
          <Label nome="Nome" />
          <Button nome="Alterar" />
        </div>
      </div>
    </RootLayout>
  );
}
