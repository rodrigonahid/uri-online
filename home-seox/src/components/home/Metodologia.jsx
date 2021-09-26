import { LineTitle } from "./LineTitle";
import Image from "next/image";

export function Metodologia(){
    return (
        <section className="container mx-auto">
            <LineTitle title="Metodologia" content="Como traçamos nossas rotas"/>
            <ul className="flex justify-between">
                <MetodologiaItem />
                <MetodologiaItem />
                <MetodologiaItem />
                <MetodologiaItem />
            </ul>
        </section>
    )
}

function MetodologiaItem(){
    return (
        <li className="text-center p-2">
            <span className="inline-flex justify-center bg-purple-100 h-12 w-12 rounded-md mb-5">
                <Image src="https://www.seox.com.br/wp-content/uploads/2021/02/icone-01-home-2021.svg" alt="teste" width="30" height="30"/>
            </span>
            <h3 className="text-blue-default text-xl font-bold mb-5">Imersão</h3>
            <p className="text-sm">Nós acreditamos em conhecer nossos clientes. Mergulhamos de cabeça para entender melhor os processos e sentir as dores da marca.</p>
        </li>
    )
}