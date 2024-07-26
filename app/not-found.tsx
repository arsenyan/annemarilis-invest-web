import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className="pt-20 text-xl lg:text-4xl font-semibold pb-10">Page Not Found</h2>
      <p className="text-md pb-10">Could not find requested resource</p>
      <Link className="transition-all bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded" href="/">Return Home</Link>
    </div>
  )
}