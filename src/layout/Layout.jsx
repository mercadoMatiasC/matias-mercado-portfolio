import { Outlet } from "react-router-dom";
import { Header } from "../components/Header"

export function Layout() {
    return (
        <div className="relative min-h-screen">
            <Header />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
    );
}