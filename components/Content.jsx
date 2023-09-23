import React from 'react';

function Content() {
    return (
        <section className='mb-20'>
            <div className='w-11/12 md:w-10/12 mx-auto mt-20 text-center'>
                <p className='block text-md font-semibold text-red-500'>UNCOVER PLACE</p>
                <h1 className='block font-bold text-5xl mt-3'>POPULAR DESTINATION</h1>
                <p className='block text-md font-semibold text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi.</p>
            </div>
            <div className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 mx-auto cursor-pointer">
                <div className="group hover:drop-shadow-xl rounded-3xl grid grid-cols-1 col-span-1 mx-auto w-full h-96 bg-[url('/hero.jpg')] bg-cover bg-center p-4 content-end">
                    <div className="w-full h-32 bg-white rounded-3xl xl:opacity-80 group-hover:opacity-100 cursor-pointer">
                        <div className="px-4 pt-3">
                            <div className="flex justify-between font-semibold">
                                <p className="text-sm text-red-500">Bali</p>
                                <p className="text-sm text-yellow-400">
                                    <span className="mr-1">&#9733;</span>4.5
                                </p>
                            </div>
                            <h4 className="text-xl font-semibold pt-1">Kuta Beach</h4>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="group hover:drop-shadow-xl rounded-3xl grid grid-cols-1 col-span-1 mx-auto w-full h-96 bg-[url('/hero.jpg')] bg-cover bg-center p-4 content-end">
                    <div className="w-full h-32 bg-white rounded-3xl xl:opacity-80 group-hover:opacity-100 cursor-pointer">
                        <div className="px-4 pt-3">
                            <div className="flex justify-between font-semibold">
                                <p className="text-sm text-red-500">Bali</p>
                                <p className="text-sm text-yellow-400">
                                    <span className="mr-1">&#9733;</span>4.5
                                </p>
                            </div>
                            <h4 className="text-xl font-semibold pt-1">Kuta Beach</h4>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="group hover:drop-shadow-xl rounded-3xl grid grid-cols-1 col-span-1 mx-auto w-full h-96 bg-[url('/hero.jpg')] bg-cover bg-center p-4 content-end">
                    <div className="w-full h-32 bg-white rounded-3xl xl:opacity-80 group-hover:opacity-100 cursor-pointer">
                        <div className="px-4 pt-3">
                            <div className="flex justify-between font-semibold">
                                <p className="text-sm text-red-500">Bali</p>
                                <p className="text-sm text-yellow-400">
                                    <span className="mr-1">&#9733;</span>4.5
                                </p>
                            </div>
                            <h4 className="text-xl font-semibold pt-1">Kuta Beach</h4>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="group hover:drop-shadow-xl rounded-3xl grid grid-cols-1 col-span-1 mx-auto w-full h-96 bg-[url('/hero.jpg')] bg-cover bg-center p-4 content-end">
                    <div className="w-full h-32 bg-white rounded-3xl xl:opacity-80 group-hover:opacity-100 cursor-pointer">
                        <div className="px-4 pt-3">
                            <div className="flex justify-between font-semibold">
                                <p className="text-sm text-red-500">Bali</p>
                                <p className="text-sm text-yellow-400">
                                    <span className="mr-1">&#9733;</span>4.5
                                </p>
                            </div>
                            <h4 className="text-xl font-semibold pt-1">Kuta Beach</h4>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-11/12 md:w-10/12 mx-auto mt-8 text-center'>
                <button className='bg-red-500 text-white rounded-full p-3 hover:bg-red-600'>MORE DESTINATION</button>
            </div>
        </section>
    )
}

export default Content