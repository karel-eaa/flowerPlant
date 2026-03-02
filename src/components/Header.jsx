import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    function setTheme(themeName) {
        document.documentElement.setAttribute("data-theme", themeName)
        localStorage.setItem("theme", themeName)
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme) {
            document.documentElement.setAttribute("data-theme", theme)
        }
    }, [])

    return (
        <header>
            <nav className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-xs btn-ghost md:text-base text-xs">Flower Plant</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/myplants'}>My Plants</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li>
                            <details>
                                <summary>Theme</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a onClick={() => setTheme("light")}>Light</a></li>
                                    <li><a onClick={() => setTheme("dark")}>Dark</a></li>
                                    <li><a onClick={() => setTheme("forest")}>Forest</a></li>
                                    <li><a onClick={() => setTheme("silk")}>Silk</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}