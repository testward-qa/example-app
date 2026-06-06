export function Login() {
  const REDIRECT_AFTER_LOGIN = '/dashboard'
  return (
    <form onSubmit={() => (location.href = REDIRECT_AFTER_LOGIN)}>
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />
      <button data-testid="login-btn" type="submit">Log in</button>
    </form>
  )
}
