import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SideBar } from '@/components/Sidebar'
import Link from 'next/link'
import { Chat } from '@/components/Chat'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Live() {
  return (
    <>
    <Head>
      <title>LS :: TRANSMISSÃO DO luisss</title>
    </Head>
    <div className='flex'>
      <SideBar />
      <main
        className={`w-full grid grid-cols-3 gap-4 min-h-screen px-24 py-12 ${inter.className}`}
      >
        <div className='col-span-2'>
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className='w-full aspect-video rounded-lg'
          ></iframe>  

          <div className='mt-4'>
            <div className="flex items-center gap-4">
              <img src="https://doodleipsum.com/70x70/avatar-2?i=bf6687f12ea1b025bb325dac36a69402" alt="" className="w-18 object-cover h-18 rounded-full border-2 border-cyan-500" />
              <div className="font-semibold text-slate-700">
                <h1 className="hover:underline">
                  <Link href={'/perfil/luisss'}>
                  luisss
                  </Link>
                </h1>
                <h2>🛠️ Construindo uma aplicação em nextJs</h2>
                <ul className="flex gap-2 text-xs font-normal">
                  <li className="py-1 px-2 rounded-full bg-cyan-50">Programação</li>
                  <li className="py-1 px-2 rounded-full bg-cyan-50">Javascript</li>
                  <li className="py-1 px-2 rounded-full bg-cyan-50">NextJs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </main>
    </div>
    </>
  )
}
