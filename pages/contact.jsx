import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Other addresses where you can contact me.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://www.youtube.com/@devil.sq0">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-youtube fa-2x" />
                        <p className="font-semibold text-xl">Youtube Kanalı</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://top.gg/bot/1244620556641239060">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-top fa-2x" />
                        <p className="font-semibold text-xl">Top.gg Oy Ver</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="Developer">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">Destek Sunucusu</p>
                    </div>
                </a>
                <a href="mailto:https://discord.gg/costav">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">costavyedekk@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
