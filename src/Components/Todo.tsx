import {
  Text,
  Flex,
  Button,
  Container,
  Space,
  Center,
  Paper,
  TextInput,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState, useEffect } from "react";
type Task = {
  task: string;
  id: string;
  completed: boolean;
};
type props = {
  todo: Task;
  removeTodo: (id: string) => void;
  editTodo: (id: string) => void;
  handleToggle: (id: string) => void;
};
const Todo: React.FC<props> = ({
  todo,
  removeTodo,
  editTodo,
  handleToggle,
}) => {
  const [status, setStatus] = useState<boolean>(todo.completed);
  const [line, setLine] = useState<string>("");
  useEffect(() => {
    if (status) {
      setLine("line-through");
    } else {
      setLine("md");
    }
    // setStatus(!status);
  }, [status]);
  const toggleComplete = (id: string) => {
    handleToggle(id);
    setStatus(!status);
  };
  const [newTask, setNewTask] = useState<string>("");
  // console.log(newTask);
  const todoEditSubmitHandler = () => {
    editTodo(newTask);
    modals.closeAll();
  };
  return (
    <Center>
      <Paper shadow="xl" radius="xl" p="xs" withBorder w={"50%"}>
        <Flex
          mih={26}
          w={"100%"}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Button
            onClick={() => {
              toggleComplete(todo.id);
              // setStatus();
            }}
            color="green"
            radius="100%"
            size="lg"
            ml={20}
          >
            ✓
          </Button>

          <Container>
            <Flex wrap="wrap" c={"black"} classNames={"test"}>
              {status ? (
                <Text td={line}>{todo.task}</Text>
              ) : (
                <Text fz={line}>{todo.task}</Text>
              )}
            </Flex>
          </Container>
          <Space h="md"></Space>
          <Flex gap={"xs"} justify={"space-between"} mr={25}>
            <Button
              onClick={() => {
                // editTodo(todo.id);
                modals.open({
                  title: "Edit Selected ToDo: ",
                  children: (
                    <>
                      <TextInput
                        label="Updated todo"
                        placeholder="Add task...."
                        data-autofocus
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <Button fullWidth onClick={todoEditSubmitHandler} mt="md">
                        Submit
                      </Button>
                    </>
                  ),
                });
              }}
              color="violet"
            >
              Edit
            </Button>

            {/* <Button onClick={() => editTodo(todo.id)} color="violet">
              edit
            </Button> */}

            <Button onClick={() => removeTodo(todo.id)} color="red">
              delete
            </Button>
          </Flex>
        </Flex>
      </Paper>
    </Center>
  );
};

export default Todo;
