import Footer from '@/components/Footer'

const Layout = ({ children }) => (
  <div className='flex flex-col items-center justify-center min-h-screen'>
    <main className='flex flex-col items-center justify-center flex-1 w-full pt-8'>{children}</main>
    <Footer />
  </div>
)

export default Layout
