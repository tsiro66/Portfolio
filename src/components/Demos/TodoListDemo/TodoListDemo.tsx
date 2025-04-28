import { useState, ChangeEvent } from "react";
import { FaTrash } from "react-icons/fa";

const TodoListDemo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== "" && todos.length < 10) {
      setTodos((prev) => [...prev, input]);
      setInput("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
    const newCheckedItems = { ...checkedItems };
    delete newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4 bg-gray-100 dark:bg-gray-800 rounded-4xl shadow-md">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder=" Add a todo..."
          maxLength={20}
          className="flex-1 p-2 pl-4 rounded border-0 bg-transparent outline-none dark:bg-gray-600 dark:text-white"
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />

        <button
          onClick={addTodo}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-3xl transition duration-300 ease-in-out cursor-pointer"
        >
          Add
        </button>
      </div>
      <p className="text-red-500 mb-2 text-sm opacity-90 pl-4">
        {input.length > 19 && "No more than 20 characters!"}
        {todos.length >= 10 && "You can only add up to 10 todos!"}
      </p>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-600 p-2 rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`check-${index}`}
                checked={checkedItems[index] || false}
                onChange={() => toggleCheck(index)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className="bg-white dark:bg-gray-700 border-2 rounded-full border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-green-500">
                <svg
                  className={`fill-current w-3 h-3 text-green-500 pointer-events-none ${
                    checkedItems[index] ? "opacity-100" : "opacity-0"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
            </div>
            <div
              className={`flex-1 px-4 text-gray-800 dark:text-white ${
                checkedItems[index] ? "line-through " : ""
              }`}
            >
              {todo}
            </div>
            <button
              onClick={() => removeTodo(index)}
              className="text-red-600 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
};

export default TodoListDemo;
