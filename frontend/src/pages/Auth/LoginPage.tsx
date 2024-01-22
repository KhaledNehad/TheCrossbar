import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-6 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <img className="h-32 w-32" src="src/assets/images/logo.svg" alt="Crossbar Logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-4xl lg:text-5xl">
          Welcome back <mark className="rounded bg-primary px-2 text-white dark:bg-blue-500">Crossbar</mark> user!
        </h1>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Login to your account using your email and password.</p>

        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit((data) => console.log(data))}>
          <input className="m-2 rounded-md border border-gray-400 p-2" type="email" placeholder="Email" {...register('email')} />
          <input className="m-2 rounded-md border border-gray-400 p-2" type="password" placeholder="Password" {...register('password')} />
          <button className="m-2 rounded-md bg-primary px-6 py-2 text-white" type="submit">
            Login
          </button>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link className="text-blue-600" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
