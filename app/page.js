import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-indigo-800 text-white flex px-10">
      <Link className="p-2.5 hover:bg-red-600 mr-auto" href="/accounts">Accounts</Link>
      <Link className="p-2.5 hover:bg-red-600" href="/login">Login</Link>
      <Link className="p-2.5 hover:bg-red-600" href="/signup">Sign up</Link>
    </div>
  )
}
