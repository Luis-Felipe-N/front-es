import { UserPlus } from "@phosphor-icons/react";
import Link from "next/link";

export default function Perfil() {
    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-start relative`}
            >
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className='w-full aspect-video absolute '
                >
                </iframe>
                <div className="bg-slate-100 z-20 m-36 p-4 rounded w-96">
                    <span className='bg-red-500 p-2 px-4 rounded font-bold text-slate-100'>
                        Ao vivo
                    </span>

                    <p className="mt-2 text-3xl">Confira esta transmissão de Só na conversa realizada há 3 dias.</p>
                </div>
                <div className="bg-slate-100 w-full h-screen z-20">
                    <div className="px-24 py-16">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <img src="https://doodleipsum.com/70x70/avatar-2?i=bf6687f12ea1b025bb325dac36a69402" alt="" className="w-18 object-cover h-18 rounded-full border-2 border-cyan-500" />
                                <div className="text-slate-700">
                                    <h1 className="font-semibold hover:underline">
                                    <Link href={'/perfil/luisss'}>
                                        luisss
                                    </Link>
                                    </h1>
                                    <small>10 Seguidores</small>
                                </div>
                            </div>
                            <button className="rounded bg-cyan-500 text-white px-6 py-2 font-semibold flex gap-2">
                                <UserPlus size={24} weight="bold" />
                                Seguir
                            </button>
                        </div>
                        <div>
                            <h2 className="mt-8 my-4 font-bold">Clips</h2>
                            <ul className="flex gap-2">
                                <li className=" flex flex-col text-lg items-start">
                                    <iframe 
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                                        title="YouTube video player" 
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        className='w-100 aspect-video rounded'
                                    >
                                    </iframe>
                                    <strong>LIVE DE SÁBADO E COM VITÓRIA?</strong>
                                    <small className="text-slate-700">Just chatting</small>
                                </li>
                                <li className=" flex flex-col items-start">
                                    <iframe 
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                                        title="YouTube video player" 
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        className='w-100 aspect-video rounded'
                                    >
                                    </iframe>
                                    <strong>LIVE DE SÁBADO E COM VITÓRIA?</strong>
                                    <small className="text-slate-700">Just chatting</small>
                                </li>
                                <li className=" flex flex-col items-start">
                                    <iframe 
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                                        title="YouTube video player" 
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        className='w-100 aspect-video rounded'
                                    >
                                    </iframe>
                                    <strong>LIVE DE SÁBADO E COM VITÓRIA?</strong>
                                    <small className="text-slate-700">Just chatting</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}