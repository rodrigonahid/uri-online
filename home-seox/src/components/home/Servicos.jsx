import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";
import Image from "next/image";
import { LineTitle } from "./LineTitle";

function ServicoCard({src, title, content, background}){
    const List = styled.li`
        background-color: ${background};
        transition: .4s;
        &:hover{
            box-shadow: 0px 20px 56px -20px ${background}
        }
    `;
    return(
        <List className="rounded-md p-4 w-64">
            <Image src={src} alt={title} height="245" width="233"/>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
            <p className="text-white">{content}</p>
        </List>
    )
}

export function Servicos(){
    return (
        <section className="container mx-auto my-20">
            <LineTitle title="Nossos serviços" content="Somos especialistas em soluções digitais" button="Começe seu projeto!" href="" />
            <ul className="flex justify-between">
                <ServicoCard src="https://www.seox.com.br/wp-content/uploads/2021/02/Portais-img.svg" title="Portais" content="Temos experiência com grandes portais e baseamos nossos projetos em alta tecnologia, usabilidade, inteligência aplicada e SEO." background="#4F4FFC"/>
                <ServicoCard src="https://www.seox.com.br/wp-content/uploads/2021/02/Portais-img.svg" title="Portais" content="Temos experiência com grandes portais e baseamos nossos projetos em alta tecnologia, usabilidade, inteligência aplicada e SEO." background="#41de83"/><ServicoCard src="https://www.seox.com.br/wp-content/uploads/2021/02/Portais-img.svg" title="Portais" content="Temos experiência com grandes portais e baseamos nossos projetos em alta tecnologia, usabilidade, inteligência aplicada e SEO." background="black"/>
            </ul>
        </section>
    )
}