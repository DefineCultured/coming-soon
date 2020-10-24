import styles from './Styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='flex flex-row mb-2 space-x-3'>
        <a href='https://twitter.com/definecultured' target='_blank' rel='noopener noreferrer'>
          <img src='images/twitter.svg' className='w-6' />
        </a>
        <a href='https://www.facebook.com/DefineCultured' target='_blank' rel='noopener noreferrer'>
          <img src='images/facebook.svg' className='w-6' />
        </a>
        <a href='https://www.instagram.com/definecultured' target='_blank' rel='noopener noreferrer'>
          <img src='images/instagram.svg' className='w-6' />
        </a>
        <a href='https://www.twitch.tv/definecultured' target='_blank' rel='noopener noreferrer'>
          <img src='images/twitch.svg' className='w-6' />
        </a>
      </div>
      © 2020 Define Cultured. All Rights Reserved.
    </footer>
  )
}

export default Footer
