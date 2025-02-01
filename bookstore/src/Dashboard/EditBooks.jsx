import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditBooks = () => {
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
    <div>
      Edit 
    </div>
  )
}

export default EditBooks
