import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:9000/book/${id}`, {
      method: "DELETE",
    });
    setAllBooks(allBooks.filter((book) => book._id!== id));
    alert("Book deleted successfully");
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-[1180px]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                No.
              </th>
              <th scope="col" class="px-6 py-3">
                Book Name
              </th>
              <th scope="col" class="px-6 py-3">
                Author Name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Prices
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Edit or Manage</span>
              </th>
            </tr>
          </thead>
          {allBooks.map((book, index) => (
            <tbody key={book._id}>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index+1}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.bookTitle}
                </th>
                <td class="px-6 py-4">{book.authorName}</td>
                <td class="px-6 py-4">{book.category}</td>
                <td class="px-6 py-4">$10.00</td>
                <td class="px-6 py-4">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(book._id)} className="ml-5 bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
                </td>
                
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
