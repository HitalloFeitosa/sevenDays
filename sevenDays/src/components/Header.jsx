export default function Header() {
    return (
        <>
            <header className="bg-white w-full">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h1 className="text-cyan-500 text-xl mb-2.5 max-sm:text-3xl">Aluritter</h1>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <p className="mr-3">user@gmail.com</p>
                        <input type="button" className="bg-red-500 hover:bg-red-600 w-10 rounded focus:outline-none text-white text-sm cursor-pointer" value="sair" />
                    </div>
                </nav>
            </header>
        </>
    )
}