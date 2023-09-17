import { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './Button.module.css'

const { btn, blueGlow, fw } = styles

interface ButtonProps {
  children: ReactNode
  variant: 'red' | 'black' | 'blue',
  glow?: boolean,
  fullWidth?: boolean,
  href?: string,
  as?: string,
  [x: string]: any
}

const Button = ({ children, variant, glow, fullWidth, href, as, type = 'submit', ...rest }: ButtonProps) => {
  const classes = clsx(btn, {
    [blueGlow]: glow && variant === 'blue',
    [fw]: fullWidth,
  })

  const MyButton = () => (
    <button className={classes} type={type} {...rest} >
      {children}
    </button>
  )

  return (
    <>
      {href ? (
        <Link href={href} as={as}>
          <MyButton />
        </Link>
      ) : (
        <MyButton />
      )}
    </>
  )
}

export default Button
