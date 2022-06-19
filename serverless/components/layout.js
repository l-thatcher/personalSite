
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='p-3 h-screen'/>
            <Footer clasName='bg-green-500'/>
        </>
    )
}