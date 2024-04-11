import { toggleComplete, deleteItem } from "@/store/listSlice";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  // Assign useDishpatch to dispatch
  const dispatch = useDispatch();

  //Get the list from state
  const list = useSelector((state) => state.list);

  //Function to send the item to be deleted
  function handleDelete(id) {
    dispatch(deleteItem(id));
  }

  //Function to send item to toggle complete
  function handleComplete(id) {
    dispatch(toggleComplete(id));
  }

  //Map the list and show all the items as list items
  return list.map((item) => (
    // If item is complete it will be marked as such using tailwind class
    <li
      key={item.id}
      id={item.id}
      className={`flex flex-row gap-1 items-center list-none p-2 hover:shadow-md rounded-lg hover:scale-125 text-gray-700 hover:text-gray-800 bg-gray-100 transition-all ${
        item.complete == true ? "line-through" : ""
      }`}
    >
      <p className=" text-lg">{item.itemText}</p>

      <button
        className={`hover:scale-110 ${
          item.complete == true
            ? "text-green-600 hover:text-green-600"
            : "text-gray-700 hover:text-green-800"
        }`}
        onClick={() => handleComplete(item.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </button>

      <button
        className=" text-gray-700 hover:text-red-600 hover:scale-110"
        onClick={() => handleDelete(item.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </li>
  ));
}
