import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SideBar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SideBar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>

      </div>
    </main>
    </>
  )
}
