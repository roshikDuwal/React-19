import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoHeading = ({ title }: { title: string }) => {
  return <h1 className="text-white text-3xl font-bold">{title}</h1>;
};

interface TodoFormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setTodList: React.Dispatch<React.SetStateAction<dataTypes[]>>;
  todoList: dataTypes[];
}

const TodoForm = ({
  inputValue,
  setInputValue,
  setTodList,
  todoList,
}: TodoFormProps) => {
  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    if (
      todoList.some((item) =>
        item.todo.toLowerCase().includes(inputValue.toLowerCase())
      )
    ) {
      setInputValue("");
      return;
    }

    const newKey =
      todoList.length === 0 ? 1 : todoList[todoList.length - 1].key + 1;

    setTodList((prev: any) => [...prev, { key: newKey, todo: inputValue }]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleInputChange}>
        <input
          type="text"
          className="bg-white border-none rounded-l-lg h-[3rem] outline-none px-2"
          placeholder="Enter your todo list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-r-lg h-[3rem] px-2 cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

type dataTypes = {
  key: number;
  todo: string;
};

interface TodoDisplayProps {
  todoList: dataTypes[];
  setTodList: React.Dispatch<React.SetStateAction<dataTypes[]>>;
}

const TodoDisplay = ({ todoList, setTodList }: TodoDisplayProps) => {
  const handleClearAll = () => {
    setTodList([]);
  };

  const handleDeleteTodo = (key: number) => {
    const updatedList = todoList.filter((elem: dataTypes) => elem.key != key);
    setTodList(updatedList);
  };

  return (
    <>
      {todoList.map((elem: dataTypes) => {
        return (
          <div
            key={elem.key}
            className=" min-w-[50vw] bg-white py-2 px-3 flex items-center justify-between gap-4"
          >
            <p>{elem.todo}</p>
            <div className="flex items-center gap-4 ">
              <button className="bg-green-400 text-white p-2">
                <FaCheck />
              </button>
              <button
                className="bg-red-500 text-white p-2 cursor-pointer"
                onClick={() => handleDeleteTodo(elem.key)}
              >
                <MdOutlineDeleteOutline />
              </button>
            </div>
          </div>
        );
      })}

      {todoList.length > 1 && (
        <button
          className=" px-4  py-3 text-white cursor-pointer bg-red-500"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      )}
    </>
  );
};

const Todo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodList] = useState<dataTypes[]>([]);
  const [dateTime, setDateTime] = useState<string>("");

  const getDateTime = () => {
    //Todo Date and Time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] bg-indigo-800 flex items-center justify-center flex-col gap-3">
      <TodoHeading title="Todo List" />
      <span className="text-white font-bold">{dateTime}</span>
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoList={todoList}
        setTodList={setTodList}
      />
      <TodoDisplay todoList={todoList} setTodList={setTodList} />
    </div>
  );
};

export default Todo;
