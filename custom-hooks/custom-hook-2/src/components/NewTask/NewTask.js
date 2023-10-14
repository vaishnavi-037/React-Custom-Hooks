import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const createTask = (taskData) => {
    const createdTask = { id: taskData.id + Math.random(), text: taskData.title };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://dummyjson.com/products/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: taskText },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
