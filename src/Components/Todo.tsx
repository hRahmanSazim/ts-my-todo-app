import {
  Text,
  Flex,
  Group,
  Paper,
  Badge,
  Grid,
  Container,
  Button,
  ActionIcon,
} from "@mantine/core";

import EditModal from "./EditModal";

import { AiTwotoneCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import format from "date-fns/format";
import DeleteModal from "./DeleteModal";

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
  const toggleComplete = (id: string) => {
    handleToggle(id);
  };
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
          <AiTwotoneCheckCircle size="4rem" color="wheat" />
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
              {todo.completed ? (
                <Text td={"line-through"}>{todo.task}</Text>
              ) : (
                <Text fz={"md"}>{todo.task}</Text>
              )}
            </Container>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button.Group>
              <EditModal todo={todo} editTodo={editTodo} />
              <DeleteModal removeTodo={removeTodo} todo={todo} />
            </Button.Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </Flex>
  );
};

export default Todo;
