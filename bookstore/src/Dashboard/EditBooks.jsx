import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPDFURI: "",
  });
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/book/${id}`);
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookData();
  }, [id]);
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleSelectedBookCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    //console.log(bookObj);
    fetch(`http://localhost:9000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
     .then((response) => response.json())
     .then((data) => {
        console.log("Book updated successfully:", data);
        // Redirect to the dashboard after updating the book
        alert("Book updated successfully");
        window.location.href = "/admin/dashboard/manage";
      })
     .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Update the book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label
              htmlFor="bookTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Title
            </label>
            <input
              type="text"
              id="bookTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book Name"
              defaultValue={bookData.bookTitle}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="authorName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author Name"
              defaultValue={bookData.authorName}
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label
              htmlFor="imageURL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Image URL
            </label>
            <input
              type="text"
              id="imageURL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book Image URL"
              defaultValue={bookData.imageURL}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="inputState"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Category
            </label>
            <select
              id="inputState"
              name="categoryName"
              className="pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedBookCategory}
              onChange={handleSelectedBookCategory}
            >
              {bookCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <label
              htmlFor="bookDescription"
              className="block text-sm font-medium text-gray-900"
            >
              Book Description
            </label>
          </div>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={6}
            className="w-full p-2 border border-gray-300 rounded-lg"
            defaultValue={bookData.bookDescription}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <label
              htmlFor="bookPDFURL"
              className="block text-sm font-medium text-gray-900"
            >
              Book PDF URL
            </label>
          </div>
          <input
            id="bookPDFURL"
            name="bookPDFURL"
            placeholder="Book PDF URL"
            required
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            defaultValue={bookData.bookPDFURL}
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
