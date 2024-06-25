import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-[#12061b] -z-10">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold h-screen items-center justify-center text-center">
          MusicMax
        </h1>
      </div>
    </main>
  );
}
