import Footer from '@/components/Footer'

import styles from './Styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

export default Layout
