import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBookData = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9000/book/${id}`)
            .then((response) => response.json())
            .then((data) => setBookData(data))
            .catch((error) => console.error("Error fetching book data:", error));
    }, [id]);

    if (!bookData) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <div className="mt-28 px-4 lg:px-24">
            <div className="flex flex-col md:flex-row items-center bg-teal-100 shadow-lg rounded-lg p-6">
                <img
                    src={bookData.imageURL}
                    alt={bookData.bookTitle}
                    className="w-full md:w-1/3 rounded-lg shadow-md"
                />
                <div className="md:ml-8 mt-6 md:mt-0 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-gray-900">{bookData.bookTitle}</h2>
                    <p className="text-lg text-gray-700">
                        <span className="font-semibold">Author:</span> {bookData.authorName}
                    </p>
                    <p className="text-lg text-gray-700">
                        <span className="font-semibold">Category:</span> {bookData.category}
                    </p>
                    <p className="text-gray-700 text-justify">{bookData.bookDescription}</p>
                    <a
                        href={bookData.bookPDFURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md text-sm inline-block w-32 text-center"
                    >
                        Read PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleBookData;
