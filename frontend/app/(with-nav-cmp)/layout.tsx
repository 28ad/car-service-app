import Navbar from '../components/Navbar';

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

    {/* wrapper for each page rendered with a navbar */}
      <main className='pl-8 sm:pl-48 p-4 mx-4 min-h-screen text-black'>
        {children}
      </main>
    </>
  );
}