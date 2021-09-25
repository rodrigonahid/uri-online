import { Footer } from "../src/components/commons/Footer";
import { Header } from "../src/components/commons/Header";
import { Banner } from "../src/components/home/Banner";
import { Clientes } from "../src/components/home/Clientes";
import { Projetos } from "../src/components/home/Projetos";
import { Servicos } from "../src/components/home/Servicos";

export default function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Clientes />
        <Servicos />
        <Projetos />
        <Footer />
    </>
  )
}
