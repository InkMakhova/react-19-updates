import { useActionState } from 'react'
import { fakeLogin } from '../api'

export default function AuthForm() {
  // useActionState allows you to update state based on the result of a form action
  const [state,submitAction] = useActionState(authorization, {
    data: null,
    error: null
  })

  // Function
  async function authorization(prevState,formData) {
    const email = formData.get('email');
    const password = formData.get('password')

    try {
      const response = await fakeLogin({ email, password })
      return { data: response, error: null }
    } catch (e) {
      return { ...prevState, error: e.message }
    }
  }

  return (
    <form action={submitAction}> {/* Change submit to action, each input should have name parameter */}
      <div className="input-field">
        <input
          id="email"
          type="email"
          className="validate"
          name="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <input
          id="password"
          type="password"
          className="validate"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn" type="submit"> {/* Pending status is temporary removed */}
        {'Submit'}
      </button>
      {state.data && <p>{state.data.email} Logged in</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </form>
  )
}
