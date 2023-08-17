import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <img className="w-32 h-32" src="src/assets/images/logo.svg" alt="Crossbar Logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-black md:text-4xl lg:text-5xl dark:text-white">
          Welcome back <mark className="px-2 text-white bg-primary rounded dark:bg-blue-500">Crossbar</mark> user!
        </h1>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Login to your account using your email and password.</p>

        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit((data) => console.log(data))}>
          <input className="border border-gray-400 rounded-md p-2 m-2" type="email" placeholder="Email" {...register('email')} />
          <input className="border border-gray-400 rounded-md p-2 m-2" type="password" placeholder="Password" {...register('password')} />
          <button className="bg-primary text-white rounded-md px-6 py-2 m-2" type="submit">
            Login
          </button>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
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
