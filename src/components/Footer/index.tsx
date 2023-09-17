const Footer = () => {
  return (
    <footer className='flex text-center flex-col items-center justify-center w-full mt-8 text-xs text-gray-400 border-t border-solid border-vn-black-mid h-[80px]'>
      <div className='flex flex-row mb-2 space-x-3'>
        <a href='https://twitter.com/definecultured' target='_blank' rel='noopener noreferrer' className='flex items-center'>
          <img src='images/twitter.svg' className='w-5' />
        </a>
        <a href='https://www.facebook.com/DefineCultured' target='_blank' rel='noopener noreferrer' className='flex items-center'>
          <img src='images/facebook.svg' className='w-4' />
        </a>
        <a href='https://www.instagram.com/definecultured' target='_blank' rel='noopener noreferrer' className='flex items-center'>
          <img src='images/instagram.svg' className='w-4' />
        </a>
        <a href='https://www.twitch.tv/definecultured' target='_blank' rel='noopener noreferrer' className='flex items-center'>
          <img src='images/twitch.svg' className='w-3' />
        </a>
      </div>
      © {new Date().getFullYear()} Define Cultured, LLC. All Rights Reserved.
    </footer>
  )
}

export default Footer
