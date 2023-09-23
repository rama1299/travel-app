import React from 'react';

function Hero() {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2), rgba(255, 255, 255)), url("/hero.jpg")',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="mt-10">
                <h1 className="mb-16 max-w-3xl mx-auto text-3xl md:text-5xl font-bold text-center text-white">
                    Where Every Destination Becomes a Memory
                </h1>
                <div className="p-4 md:p-8 bg-opacity-50 bg-black rounded-lg mx-4">
                    <form action="/" className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full md:w-1/4">
                            <label htmlFor="destination" className="text-white text-base font-semibold">
                                Destination
                            </label>
                            <input
                                type="text"
                                placeholder="Country"
                                className="w-full p-2 outline-none border-none text-gray-800 text-sm rounded"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/4">
                            <label htmlFor="checkIn" className="text-white text-base font-semibold">
                                Check In
                            </label>
                            <input
                                type="date"
                                placeholder="Choose a date"
                                className="w-full p-2 outline-none border-none text-gray-800 text-sm rounded"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/4">
                            <label htmlFor="checkOut" className="text-white text-base font-semibold">
                                Check Out
                            </label>
                            <input
                                type="date"
                                placeholder="Choose a date"
                                className="w-full p-2 outline-none border-none text-gray-800 text-sm rounded"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/4">
                            <label htmlFor="guests" className="text-white text-base font-semibold">
                                Guests
                            </label>
                            <input
                                type="number"
                                placeholder="Number of guests"
                                className="w-full p-2 outline-none border-none text-gray-800 text-sm rounded"
                            />
                        </div>
                        <button className="btn bg-red-600 text-white w-full md:w-auto px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            CHECK AVAILABILITY
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
