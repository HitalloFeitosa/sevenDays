import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-white w-full">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h1 className="text-cyan-500 text-xl max-sm:text-3xl">Aluritter</h1>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <p className="text-slate-400 mr-3">user@gmail.com</p>
                        <button className="bg-red-500 hover:bg-red-600 w-10 rounded focus:outline-none text-white text-sm">
                            <span>
                                <Link to="/login">
                                    Sair
                                </Link>
                            </span>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}