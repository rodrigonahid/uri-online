import Link from "next/link";

export function Banner(){
    return (
        <section className="container mx-auto flex h-96">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-5xl mb-8">Navegamos por ondas de ideias em um mar digital!</h1>
                <p className="text-base text-gray-400 font-sans mb-8">A Seox é uma agência com expertise em soluções digitais, especializada no desenvolvimento de sites, sistemas, apps e marketing de performance.</p>
                <div>
                    <Link href="">
                        <a className="inline bg-blue-default px-8 py-4 rounded-md text-white">Comece seu projeto!</a>
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                Teste
            </div>
        </section>
    )
}