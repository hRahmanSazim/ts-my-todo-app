import {
  Text,
  Flex,
  Chip,
  Group,
  Paper,
  Badge,
  Grid,
  Container,
  Button,
  Menu,
} from "@mantine/core";
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import { TbTrashX } from "react-icons/tb";
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

type Task = {
  task: string;
  id: string;
  completed: boolean;
  time: string;
};
type props = {
  todo: Task;
  removeTodo: (id: string) => void;
  editTodo: (id: string, value: string) => void;
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
  }, [status]);
  const toggleComplete = (id: string) => {
    handleToggle(id);
    setStatus(!status);
  };

  // console.log(newTask);
  // const todoEditSubmitHandler = (id: string, value: string) => {
  //   editTodo(id, value);
  // };

  return (
    <Flex
      gap={"xl"}
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Chip
        variant="light"
        radius={"xl"}
        onClick={() => toggleComplete(todo.id)}
        children={undefined}
        size={"lg"}
      ></Chip>
      <Paper
        shadow="xl"
        radius="xl"
        p="sm"
        withBorder
        bg={"#DCDCDC"}
        w={"30rem"}
      >
        <Grid align="flex-start">
          <Grid.Col span={4}>
            <Group>
              <Badge fz={"sm"} c={"white"} bg={"black"}>
                {todo.time}
              </Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Container c={"black"}>
              {status ? (
                <Text td={line}>{todo.task}</Text>
              ) : (
                <Text fz={line}>{todo.task}</Text>
              )}
            </Container>
          </Grid.Col>
          <Grid.Col span={4}>
            {/* <ActionIcon onClick={() => removeTodo(todo.id)}></ActionIcon>
             */}
            {/* <Text c={"red"} pl={"5rem"}> */}
            {/* testing
            </Text> */}
            <Button.Group>
              <EditModal todo={todo} editTodo={editTodo} />
              <Menu>
                <Menu.Target>
                  <Button c={"white"} bg={"red"}>
                    <TbTrashX size="1.5rem"></TbTrashX>
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label fz={"xl"}>
                    Confirm Deletion!!
                    <Menu.Item
                      icon={<TiTickOutline color="green" />}
                      onClick={() => removeTodo(todo.id)}
                    >
                      YES
                    </Menu.Item>
                    <Menu.Item icon={<RxCross2 color="red" />}>NO</Menu.Item>
                  </Menu.Label>
                </Menu.Dropdown>
              </Menu>
            </Button.Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </Flex>
  );
};

export default Todo;
