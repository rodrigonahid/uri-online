import styled from "styled-components";
import Link from "next/link";

export function LineTitle({title, content, button, href}){
    const Button = styled.a`
        border: 1px solid black;
        color: black;
        padding: 10px 52px;
        border-radius: 6px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        transition: .1s;
        &:hover{
            background-color: #494AFC;
            color: #FFF;
        }
    `;
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h3 className="mb-2 text-blue-default font-semibold uppercase">{title}</h3>
                <p className="text-4xl font-bold">{content}</p>
            </div>
            <div>
                {button ? <Link href={href} passHref><Button>{button}</Button></Link> : null}
            </div>
        </div>
    )
}