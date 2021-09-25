import { LineTitle } from "./LineTitle";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import color from "../commons/_variables.css";

export function Projetos(){
    return(
        <section className="container mx-auto">
            <LineTitle title="Projetos" content="Nós fazemos acontecer" button="Veja mais" href=""/>
            <ul>
                <ProjetoItem />
                <ProjetoItem />
                <ProjetoItem />
            </ul>
        </section>
    )
}

function ProjetoItem(){
    const List = styled.li`
        display: inline-block;
        position: relative;
        width: 350px;
        height: 350px;
        margin: 20px;
        .image-wrapper{
            border-radius: 8px;
            position: absolute;
            z-index: 10px;
            top: 0;
            left: 0;
            transition: .1s;
            &:hover{
                opacity: 0;
            }
            img{
                border-radius: 8px;
            }
        }
    `;
    const ListContent = styled.div`
        z-index: 10;
        background-color: ${color.blue};
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0 20%;
        border-radius: 8px;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .2s;
        display: flex;
        .portfolio{
            display: block;
            font-weight: 600;
            font-size: 12px;
            background-color: #FFF;
            border-radius: 32px;
            padding: 4px 16px;
            margin-bottom: 16px;
            color: ${color.blue}
        }
    `;
    const ProjectLinks = styled.div`
        display: flex;
        position: relative;
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 16px;
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.2);
            border-radius: 50%;
            width: 48px;
            height: 48px;
        }
    `;
    return(
        <List>
            <ListContent>
                <h3 className="mb-2 text-white text-xl font-bold">J&F Invest</h3>
                <p className="mb-2 text-white">O maior grupo empresarial do Brasil.</p>
                <span className="portfolio">Portfólio</span>
                <ProjectLinks>
                    <Link href=""><a><Image src="https://www.seox.com.br/wp-content/uploads/2020/10/03-seox-icone-site.svg" alt="website" height="16" width="16"/></a></Link>
                    <Link href=""><a><Image src="https://www.seox.com.br/wp-content/uploads/2020/10/03-seox-icone-behance.svg" alt="website" height="16" width="16"/></a></Link>
                </ProjectLinks>
            </ListContent>
            <div className="image-wrapper">
                <Image src="https://www.seox.com.br/wp-content/uploads/2020/10/02-seox-postype-portfolio-jef-1024x1024.jpg" alt="" width="350" height="350"/>
            </div>
        </List>
    )
}

