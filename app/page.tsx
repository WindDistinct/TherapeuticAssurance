import Image from "next/image";
import Header from "../components/ui/Header";
import Footer from "@/components/ui/Footer";
import ButtonMenu from "@/components/ui/ButtonMenu";
import Carrusel from "@/components/ui/Carrusel";

export default function Home() {
  return (

          <>

            <Header/>
            <br/><br/><br/><br/><br/>
            <main>

              <Carrusel></Carrusel>
            </main>
            <ButtonMenu/>
            <br/><br/><br/><br/><br/>
            <Footer/>
          </>
            


        );
}
