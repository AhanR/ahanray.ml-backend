import LoginButton from './login-button';

export default async function Home() {

  return (
    <main className={"flex min-h-screen flex-col items-center justify-center p-24 bg-orange-500 "}  >
      <LoginButton/>
    </main>
  )
}
