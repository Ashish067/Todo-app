import status from "./status";

interface Props {
  onStatusChange: (status: string) => void;
  selectedStatus: string;
}

const FilterTodo = ({ onStatusChange, selectedStatus }: Props) => {
  return (
    <>
      <div>
        <ul className="max-w-lg w-full mx-auto flex gap-10">
          {status.map((status) => (
            <button
              className={`hover:cursor-pointer ${
                selectedStatus === status
                  ? "underline font-bold text-blue-800"
                  : ""
              }`}
              key={status + Math.floor(Math.random() * 100 + 1)}
              value={status}
              onClick={() => onStatusChange(status)}
            >
              {status}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterTodo;
