import { FormEvent } from "react";

export function Chat() {

    function handleSubmitComment(event: FormEvent) {
        event.preventDefault()
    }

    return (
         <div className='bg-gray-100 p-8 rounded-lg flex flex-col content-between'>
        <h1 className="uppercase text-center">Chat</h1>

        <ul className="mt-4 flex flex-col gap-4 text-slate-700 flex-1">
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=bf6687f12ea1b025bb325dac36a69402" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>Qual biblioteca de ícones você está usando?</p>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=a9301906a211cd7115ef4f1c7907515a" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>aaaaaaaaaaa</p>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=8a67b4149f641baf1dd0cffd9aaedded" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>Next com javascript ou typescript?</p>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=bb713de492a230ae3a85b202bf8f3a00" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>Qual biblioteca de ícones você está usando?</p>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=0a841f1d924ac1c57d45a5ae945de857" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>Qual biblioteca de ícones você está usando?</p>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://doodleipsum.com/70x70/avatar-2?i=6bff1692e77c36e5effde3d6f48fab6e" alt="" className="w-10 object-cover rounded-full" />
            <time className="text-sm text-slate-500">16:25</time>
            <p>Qual biblioteca de ícones você está usando?</p>
          </li>
        </ul>

        <form onSubmit={handleSubmitComment} className="flex gap-2">
          <input placeholder="Envie uma mensagem" type="text" className="rounded px-4 py-2 w-full"/>
          <button title="Enviar mensagem" className="rounded bg-cyan-500 text-white px-4 py-2 font-semibold">Enviar</button>
        </form>
      </div>
    )
}