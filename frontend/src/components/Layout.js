import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "./Loader"
import {Suspense} from "react"

export default function Layout() {
    return (
        <div className="flex flex-col justify-between p-4 min-h-screen">
            <Header />
            <main className="flex-1">
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}