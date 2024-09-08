import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='min-h-[calc(100vh-117px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout
