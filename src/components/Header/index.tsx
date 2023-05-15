import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-between px-4 pt-4">
            <h1 className="uppercase text-lg font-semibold">Live Sky</h1>

            <form>
                <input placeholder="Pesquisar" type="text" className="border w-96 border-sky-5 px-8 p-2 rounded-full outline-0" />
            </form>

            <Link href={'/perfil/luisss'}>
                <div className="flex gap-2 items-center">
                    <img src="https://doodleipsum.com/100x100/avatar-2?i=6bff1692e77c36e5effde3d6f48fab6e" alt="" className="w-14 border-2 object-cover border-sky-500 rounded-full" />
                </div>
            </Link>
        </header>
    )
}