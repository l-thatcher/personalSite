
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar className="h-10 sticky"/>
            <main className="mb-auto top-20 bg-amber-300">{children}</main>
        </div>
    )
}