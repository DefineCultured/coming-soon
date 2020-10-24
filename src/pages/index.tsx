import { useState, FormEvent } from 'react'
import clsx from 'clsx'
import axios from 'axios'

import Layout from '@/components/Layout'
import Button from '@/components/UI/Button'
import Logo from '@/UI/Logo'

import styles from '../styles/Contact.module.css'

const Home = () => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checked, setChecked] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [firstErr, setFirstErr] = useState(false)
  const [lastErr, setLastErr] = useState(false)
  const [checkedErr, setCheckedErr] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const resetForm = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
    setChecked(false)
    setEmailErr(false)
    setFirstErr(false)
    setLastErr(false)
    setCheckedErr(false)
  }

  const formIsValid = () => {
    const validFirst = firstName.length >= 2 && firstName.length <= 50
    const validLast = lastName.length >= 2 && lastName.length <= 50
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 200

    if (!validFirst) {
      setFirstErr(true)
    } else {
      setFirstErr(false)
    }

    if (!validLast) {
      setLastErr(true)
    } else {
      setLastErr(false)
    }

    if (!validEmail) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }

    if (!checked) {
      setCheckedErr(true)
    } else {
      setCheckedErr(false)
    }

    if (validFirst && validLast && validEmail && checked) {
      return true
    }

    return false
  }

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault()

    const body = {
      firstName,
      lastName,
      email
    }

    if (formIsValid()) {
      try {
        setButtonDisabled(true)

        axios
          .post('/api/contact', body, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            resetForm()
            if (response.data.success === true) {
              setFormSuccess(true)
              setButtonDisabled(false)
            }
          })
          .catch(err => {
            setButtonDisabled(false)
            throw err
          })
      } catch (err) {
        setButtonDisabled(false)
        throw new Error('Something went wrong..')
      }
    }
  }

  return (
    <>
      <Layout>
        <section className='flex flex-col items-center justify-center'>
          <Logo size='2xlarge' />
        </section>
        {formSuccess ? (
          <section className='flex flex-col items-center justify-center w-full mt-16'>
            <p className='text-xl'>Thank you!</p>
          </section>
        ) : (
          <section className='flex flex-col items-center justify-center w-full mt-16'>
            <form className='w-full max-w-md' onSubmit={handleSubmit} autoComplete='off'>
              <div className='flex flex-wrap mx-3 mb-4'>
                <div className='w-full mb-4 md:pr-3 md:w-1/2 md:mb-0'>
                  <label htmlFor='contact-first-name' className={styles.label}>
                    First Name
                  </label>
                  <input
                    id='contact-first-name'
                    type='text'
                    placeholder='First name'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName || ''}
                    className={clsx(styles.input, 'placeholder-gray-500', { [styles.inputError]: firstErr })}
                  />
                  <span className={(firstErr ? 'flex' : 'hidden') + ' items-center text-xs font-medium tracking-wide text-red-500 pt-1'}>
                    Invalid First Name
                  </span>
                </div>
                <div className='w-full md:pl-3 md:w-1/2'>
                  <label htmlFor='contact-last-name' className={styles.label}>
                    Last Name
                  </label>
                  <input
                    id='contact-last-name'
                    type='text'
                    placeholder='Last name'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName || ''}
                    className={clsx(styles.input, 'placeholder-gray-500', { [styles.inputError]: lastErr })}
                  />
                  <span className={(lastErr ? 'flex' : 'hidden') + ' items-center text-xs font-medium tracking-wide text-red-500 pt-1'}>
                    Invalid Last Name
                  </span>
                </div>
              </div>
              <div className='flex flex-wrap mx-3 mb-4'>
                <div className='w-full'>
                  <label htmlFor='contact-email' className={styles.label}>
                    Email
                  </label>
                  <input
                    id='contact-email'
                    type='email'
                    placeholder='email@example.com'
                    onChange={e => setEmail(e.target.value)}
                    value={email || ''}
                    className={clsx(styles.input, 'placeholder-gray-500', { [styles.inputError]: emailErr })}
                  />
                  <span className={(emailErr ? 'flex' : 'hidden') + ' items-center text-xs font-medium tracking-wide text-red-500 pt-1'}>
                    Invalid Email
                  </span>
                </div>
              </div>
              <div className='flex flex-wrap mx-3 mb-4'>
                <div className='flex flex-col'>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={checked || false}
                      onChange={() => setChecked(!checked)}
                      className={clsx(styles.checkbox, 'form-checkbox')}
                    />
                    <span className='ml-2 text-sm'>I am 13 years of age or older</span>
                  </label>
                  <span className={(checkedErr ? 'flex' : 'hidden') + ' items-center text-xs font-medium tracking-wide text-red-500 pt-1'}>
                    Must be 13 years or older to sign up
                  </span>
                </div>
              </div>
              <div className='flex items-center mx-3'>
                <Button type='submit' variant='blue' disabled={buttonDisabled}>
                  <span className='flex flex-row items-center justify-center'>
                    {buttonDisabled ? (
                      <svg
                        className='w-6 h-6 mr-3 -ml-1 text-white animate-spin'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </section>
        )}
      </Layout>
    </>
  )
}

export default Home
