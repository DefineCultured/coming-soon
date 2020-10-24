import Layout from '@/components/Layout'
import Button from '@/UI/Button'

const ErrorPage = () => (
  <Layout>
    <section className='flex flex-col items-center justify-center space-y-4'>
      <h1 className='flex items-center justify-center'>404 - Page Not Found</h1>
      <Button variant='blue' href='/' glow>
        Go back
      </Button>
    </section>
  </Layout>
)

export default ErrorPage
