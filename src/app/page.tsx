import Link from 'next/link';
export default function Home() {
    return (
        <div className='bg-black bg-home-img bg-cover bg-center'>
            <main className='flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'>
                <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'>
                    <h1 className='text-3xl font-bold'>
                        Dano&apos;s Computer
                        <br />
                        Repair Shop
                    </h1>
                    <address>
                        Main St.
                        <br />
                        Cedarville, USA
                        <br />
                    </address>
                    <p>Open daily : 9am to 5pm</p>
                    <Link href='tel:1234567890' className='hover:underline'>
                        (123) 456-7890
                    </Link>
                </div>
            </main>
        </div>
    );
}
