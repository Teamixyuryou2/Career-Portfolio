import Image from "next/image";
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 w-full w-[100%] h-[100px] items-center justify-between font-vaporpixel text-sm lg:flex">

        <div className = "flex flex-row justify-start w-1/2">
          <div className ="text-xl" >
            <a
                href="http://localhost:3000/projects"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
                Design
            </a>
          </div>
          <div className ="text-xl" >
              <a
                  href="http://localhost:3000/projects"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  API testing
              </a>
          </div>
          <div className ="text-xl" >
              <a
                  href="http://localhost:3000/projects"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  Projects
              </a>
          </div>
          <div className ="text-xl" >
              <a
                  href="https://github.com/Teamixyuryou2?tab=repositories"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  Github
              </a>
          </div>
        </div>
        <div className = "flex flex-row justify-end w-1/2">
          <div className ="text-xl" >
              <a
                  href="http://localhost:3000/projects"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  Design
              </a>
          </div>
          <div className ="text-xl" >
              <a
                  href="http://localhost:3000/projects"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  API testing
              </a>
          </div>
          <div className ="text-xl" >
              <a
                  href="http://localhost:3000/projects"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
              >
                  Projects
              </a>
          </div>
          <div className ="text-xl" >
            <a
                href="http://localhost:3000/projects"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
                Github
            </a>
        </div>
        </div>

      </div> */}

      <Navbar />

      <div className="bg-gray-500 w-screen h-[500px] font-lg text-slate-950 flex flex-row justify-center"> 
        <div className =" h-full min-w-[600px] sm:w-full lg:w-1/3 flex-row flex justify-center">
          <div className ="h-full min-w-1/3 w-2/3 flex-col flex justify-between">
            <div className ="h-[350px] w-full flex flex-row justify-center">
              <div className ="rounded-full bg-gray-700 h-[350px] w-[350px] flex flex-col justify-center">
                {/*Input image here*/}
              </div>
            </div>
            <div className ="rounded-lg bg-gray-700 h-1/4 w-full flex flex-col justify-center">
              {/*Input bio here*/}
            </div>
          </div>
        </div>
        {/*block means visible hidden means disappear*/}
        <div className =" bg-gray-600 h-full hidden lg:block lg:w-2/3 flex-row flex justify-center"> Inner2 </div>
      </div>

      {/* flex-row and flex-col after flex makes it go certain directions, justify between spaces the contents stored*/}
      <div className="bg-gray-50 w-screen h-[7000px] lg:h-[3000px] font-lg text-slate-950">
        <div className ="bg-gray-700 h-1/4 w-full lg:flex-row lg:flex lg:justify-center">

          <div className ="bg-gray-600 h-1/3 lg:h-full lg:w-1/3 flex-col lg:flex-col flex justify-center">
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner1 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner1 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner1 </div>
          </div>

          <div className ="bg-gray-600 h-1/3 lg:h-full lg:w-1/3 flex-col flex justify-center"> 
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
          </div>

          <div className ="bg-gray-600 h-1/3 lg:h-full lg:w-1/3 flex-col flex justify-center">
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
            <div className ="bg-gray-300 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
          </div>

        </div>

        <div className ="bg-gray-700 h-1/4 w-full lg:flex-row lg:flex lg:justify-center">
          <div className ="bg-gray-600 h-1/3 w-full lg:h-full lg:w-1/3 flex-row flex justify-center">Long Inner</div>

          <div className ="bg-gray-600 h-1/3 lg:h-full lg:w-1/3 flex-col flex justify-center"> 
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner2 </div>
          </div>

          <div className ="bg-gray-600 h-1/3 lg:h-full lg:w-1/3 flex-col flex justify-center">
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
            <div className ="bg-gray-400 h-full w-full lg:flex-row flex justify-center"> Inner3 </div>
          </div>
        </div>

        <div className ="bg-gray-700 h-1/4 w-full lg:flex-row lg:flex lg:justify-between">
          <div className ="bg-gray-500 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 1 </div>
          <div className ="bg-gray-500 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 2 </div>
          <div className ="bg-gray-500 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 3 </div>
        </div>

        <div className ="bg-gray-700 h-1/4 w-full lg:flex-row lg:flex lg:justify-between">
          <div className ="bg-gray-300 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 1 </div>
          <div className ="bg-gray-300 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 2 </div>
          <div className ="bg-gray-300 h-1/3 lg:h-full lg:w-1/3 lg:flex-row flex justify-center"> Box 3 </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
