import { Eye, House, User } from "@phosphor-icons/react";
import { ActiveLink } from "../ActiveLink";

export function SideBar() {
    return (
        <aside className="pb-24 w-24">
            <ul className="flex flex-col w-100">
                <li className="text-center p-4">
                    <ActiveLink activeClassName="text-cyan-500 " href={'/'}>
                        <House size={24} />
                    </ActiveLink>
                </li>
                <li className="text-center p-4">
                    <ActiveLink activeClassName="text-cyan-500 " href={'/perfil'}>
                        <User size={24} />
                    </ActiveLink>
                </li>
                <li className="text-center p-4">
                    <ActiveLink activeClassName="text-cyan-500 " href={'/live'}>
                        <Eye size={24} />
                    </ActiveLink>
                </li>
            </ul>
        </aside>
    )
}