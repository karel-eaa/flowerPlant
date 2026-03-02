import { Outlet } from "react-router-dom"
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"

function Layout() {
    return <>
        <Header />
        <main className="mt-[12px] mb-[12px] ml-[8px] mr-[8px] md:ml-[40px] md:mr-[40px]">
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout