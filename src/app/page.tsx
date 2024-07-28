"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { signIn, signOut } from "next-auth/react"
import spotify_logo from "../../public/icons/spotify-logo.svg"
import spotify_logo_white from "../../public/icons/spotify-logo-white.svg"
import home from "../../public/icons/home.svg"
import search from "../../public/icons/search.svg"

export default function Home() {
  const { data: session } = useSession()

  console.log(session)

  if (session) {
    return (
      <div className="grid bg-black h-screen gap-2 p-2">
        <div className="flex h-screen">
          <aside>
            <nav className="bg-black flex flex-col gap-2">
              <div className="bg-zinc-900 rounded-lg cursor-default overflow-x-hidden min-w-64">
                <ul className="flex flex-col list-none py-2 px-3">
                  <li className="py-1 px-3 flex items-center">
                    <a
                      href="/"
                      className="text-zinc-400 flex flex-row gap-4 font-bold  items-center text-sm h-10 w-full hover:text-white transition-colors duration-300 ease-linear "
                    >
                      <Image
                        src={home}
                        width={24}
                        height={24}
                        alt="Spotify logo"
                      />
                      Início
                    </a>
                  </li>
                  <li className="py-1 px-3 flex items-center  h-10   w-full hover:text-white transition-colors duration-300 ease-linear">
                    <a
                      href="/search"
                      className="text-zinc-400 flex flex-row gap-4 font-bold  items-center text-sm  h-10   w-full hover:text-white transition-colors duration-300 ease-linear"
                    >
                      <Image
                        src={search}
                        width={24}
                        height={24}
                        alt="Spotify logo"
                      />
                      Buscar
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg cursor-default overflow-x-hidden min-w-64">
                <p className="text-white">Seus albuns</p>
              </div>
            </nav>
          </aside>
          <main className="flex-1">
            <header>cabeçalho vai ter o nome e essas paradas</header>
            <section>aqui vai ter as musicas</section>
          </main>
        </div>
        <footer>footer</footer>
      </div>

      // <div className="max-w-[19rem] h-[22rem] rounded-[2rem] border-4 border-solid border-white flex justify-around items-center flex-col flex-nowrap mt-10 ml-10 mb-16">
      //   <div className="mt-8 w-full flex flex-col flex-nowrap justify-around items-center">
      //     <Image
      //       src={
      //         "https://spotiy-playlist-retriever-experimental.vercel.app/_next/static/media/user_img.6db01878.svg"
      //       }
      //       width={160}
      //       height={160}
      //       alt="Default user image"
      //     />
      //     <p className="text-white font-normal text-xl mt-5 mb-2">Sign In as</p>
      //     <span className="bold-txt">{session?.user?.name}</span>
      //   </div>
      //   <p
      //     className="opacity-70 mt-8 mb-5 underline cursor-pointer"
      //     onClick={() => signOut()}
      //   >
      //     Sign Out
      //   </p>
      // </div>
    )
  } else {
    return (
      <div>
        <header className="flex justify-center items-center flex-col bg-zinc-100 p-6 gap-1">
          <Image
            src={spotify_logo}
            width={150}
            height={150}
            alt="Spotify logo"
          />
          <p className="text-sm text-zinc-500">
            I am developing this Spotify Clone to enhance my skills in Next.js
            and TailwindCSS.
          </p>
        </header>
        <div className="flex flex-col items-center gap-6 my-40">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">Welcome to Spotify Clone!</h1>
            <p className="max-w-xl">
              Sign in to access your Spotify account and explore music and
              playlists just like on the original platform!
            </p>
          </div>
          <button
            className="rounded-full bg-green-600 text-zinc-950 py-4 px-8 font-bold hover:bg-green-500 "
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }
}
