import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // From Local state
  // const { todos, filter } = useAppSelector((state) => state.todos);

  // From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  if (isLoading) {
    return "Loading.....";
  }

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.length > 0 ? (
            todos?.data.map((todo) => <TodoCard key={todo._id} todo={todo} />)
          ) : (
            <p className="text-center">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
