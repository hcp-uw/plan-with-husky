import { useState } from 'react'
import { emailSignup } from '../../services/signup'
import './EmailSignup.css'

const EmailSignup = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('')
    setIsError(false)

    try {
      const response = await emailSignup(email)
      setStatus(response.message || 'Email subscribed successfully')
      setEmail('')
    } catch (error) {
      const message = error.response?.data?.message || 'Unable to subscribe right now'
      setStatus(message)
      setIsError(true)
    }
  }

  return (
    <div className='email-signup-container'>
      <h2>Email Signup</h2>
      <form className='email-signup-form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Sign Up</button>
      </form>
      {status && (
        <p className={isError ? 'signup-status error' : 'signup-status success'}>{status}</p>
      )}
    </div>
  )
}

export default EmailSignup