import styled from "styled-components";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link"

function HeaderLink({children, href, ...props}){
    const LinkTailwind = tw.a`
        text-md font-normal text-gray-600 m-4 font-raleway hover:text-blue-default transition
    `;
    return(
        <Link href={href} passHref>
            <LinkTailwind {...props}>{children}</LinkTailwind>
        </Link>
    )
}

export function Header(){
    const HeaderComp = styled.header`
        border-bottom: 1px solid #e8e8e8;
    `;
    const Btn = tw.a`
        block text-blue-default border border-blue-default rounded-md px-4 py-2
        hover:text-white hover:bg-blue-default transition
    `;
    return(
        <HeaderComp className="p-4">
            <div className="flex justify-between items-center container mx-auto">
                <Image src={"https://seox.com.br/wp-content/uploads/2020/10/03-seox-logo.svg"} alt="seox" width="95px" height="43"/>
                <nav>
                    <HeaderLink href="">Cases</HeaderLink>
                    <HeaderLink href="">Sobre nós</HeaderLink>
                    <HeaderLink href="">Time</HeaderLink>
                    <HeaderLink href="">Marketing digital</HeaderLink>
                    <HeaderLink href="">Portal de notícia</HeaderLink>
                </nav>
                <Link href="" passHref>
                    <Btn>Comece seu projeto!</Btn>
                </Link>
            </div>
        </HeaderComp>
    )
}