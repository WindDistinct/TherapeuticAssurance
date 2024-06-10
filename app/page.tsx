import Presentacion from "@/components/ui/Presentacion"
import ButtonMenu from "@/components/ui/ButtonMenu";
import Carrusel from "@/components/ui/Carrusel";

export default function Home() {
  return (
          <>
            <main className="contenedor">
              <Presentacion/>
              <Carrusel/>
              <ButtonMenu/>
            </main>
          </>
        );
}
