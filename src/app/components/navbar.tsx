import '../globals.css';

export default function Navbar() {
  return (
    <main className="flex min-h-[100px] flex-col items-center justify-between p-24">
        <div className="z-10 w-full w-[100%] h-[100px] items-center justify-between font-vaporpixel text-sm lg:flex">

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

        </div>
    </main>
  );
}