export function Login() {
  const REDIRECT_AFTER_LOGIN = '/home'
  return (
    <form onSubmit={() => (location.href = REDIRECT_AFTER_LOGIN)}>
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />
      <button data-testid="signin-btn" type="submit">Sign in</button>
    </form>
  )
}

// regression check 1780779347
