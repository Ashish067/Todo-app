import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import priority from "./priority";

const schema = z.object({
  todo: z
    .string()
    .min(7, { message: "The todo should be at least 7 characters long." }),
  priority: z.enum(priority, {
    errorMap: () => ({ message: "Priority is required." }),
  }),
});

type ToDoData = z.infer<typeof schema>;

interface Props {
  onSubmit: (formData: ToDoData) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ToDoData>({ resolver: zodResolver(schema) });

  return (
    <>
      <div className="max-w-lg w-full mx-auto my-6 p-6 bg-white border border-gray-200 shadow-md rounded-lg">
        <form
          onSubmit={handleSubmit((formData) => {
            onSubmit(formData);
            reset();
          })}
        >
          <div className="mb-4">
            <label
              htmlFor="todo"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter Task:
            </label>
            <input
              {...register("todo")}
              id="todo"
              type="text"
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.todo && <p>{errors.todo.message}</p>}
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-gray-700 font-medium mb-2"
            >
              Select the priority of the task:
            </label>
            <select
              id="priority"
              {...register("priority")}
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option></option>
              {priority.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
            {errors.priority && <p>{errors.priority.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
