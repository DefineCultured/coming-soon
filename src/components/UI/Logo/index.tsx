import Link from 'next/link'
import clsx from 'clsx'
import styles from './Logo.module.css'

const { logo, sizeSmall, sizeNormal, sizeLarge, sizeXLarge, size2XLarge } = styles

interface LogoProps {
  size?: 'small' | 'normal' | 'large' | 'xlarge' | '2xlarge';
  href?: string;
  as?: string;
  [x: string]: any;
}

const Logo = ({ size, href, as, ...rest }: LogoProps) => {
  const classes = clsx(logo, {
    [sizeSmall]: size === 'small',
    [sizeNormal]: !size || size === 'normal',
    [sizeLarge]: size === 'large',
    [sizeXLarge]: size === 'xlarge',
    [size2XLarge]: size === '2xlarge'
  })

  const MyLogo = () => (
    <div className={classes} {...rest}>
      <span>Define</span>
      <span>Cultured</span>
    </div>
  )

  return (
    <>
      {href ? (
        <Link href={href} as={as}>
          <a>
            <MyLogo />
          </a>
        </Link>
      ) : (
        <MyLogo />
      )}
    </>
  )
}

export default Logo
