
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between dark:bg-gray-800">
            <Navbar className="h-10 sticky"/>
            <main className="mb-auto top-20">{children}</main>
        </div>
    )
}