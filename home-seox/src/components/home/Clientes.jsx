import Image from "next/image";

export function Clientes(){
    return(
        <div>
            <h2 className="uppercase tx-md text-gray-400 text-center mb-2">Com a confiança de</h2>
            <ul>
                <li className="flex justify-around">
                    <Image src={"https://www.seox.com.br/wp-content/uploads/2021/02/03-agencia-seox-logo-canal-rural.svg"} alt="canal" width="50" height="50"/>
                    <Image src={"https://www.seox.com.br/wp-content/uploads/2021/02/03-agencia-seox-logo-lance-rural.svg"} alt="canal" width="50" height="50"/>

                </li>
            </ul>
        </div>
    )
}