import {
  Text,
  Flex,
  Group,
  Paper,
  Badge,
  Grid,
  Container,
  Button,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import { TbTrashX } from "react-icons/tb";
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { AiTwotoneCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import format from "date-fns/format";

export type Task = {
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
      <ActionIcon
        onClick={() => toggleComplete(todo.id)}
        size={"xl"}
        radius={"100%"}
      >
        {todo.completed ? (
          <AiFillCheckCircle size="4rem" color="green" />
        ) : (
          <AiTwotoneCheckCircle size="4rem" />
        )}
      </ActionIcon>
      <Paper shadow="xl" radius="xl" p="sm" bg={"#F3F4F6"} w={"30rem"}>
        <Grid align="center" columns={12}>
          <Grid.Col span={3}>
            <Group>
              <Badge fz={"xs"} c={"white"} bg={"black"} size="xl">
                {format(new Date(todo.time), "hh:mm a")}
              </Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={5}>
            <Container c={"black"}>
              {status ? (
                <Text td={line}>{todo.task}</Text>
              ) : (
                <Text fz={line}>{todo.task}</Text>
              )}
            </Container>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button.Group>
              <EditModal todo={todo} editTodo={editTodo} />
              <Menu>
                <Menu.Target>
                  <Button
                    c={"white"}
                    bg={"#E03131"}
                    radius={"xl"}
                    styles={() => ({
                      root: { "&:hover": { backgroundColor: "#C92A2A" } },
                    })}
                  >
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
