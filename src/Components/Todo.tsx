import {
  Text,
  Flex,
  Button,
  Container,
  Space,
  Center,
  Paper,
} from "@mantine/core";
type Task = {
  task: string;
  id: string;
  completed: boolean;
};
interface props {
  todo: Task;
  removeTodo: (id: string) => void;
  editTodo: (id: string) => void;
}
const Todo = ({ todo, removeTodo, editTodo }: props) => {
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
          <Button color="green" radius="100%" size="lg" ml={20}>
            ✓
          </Button>

          <Container>
            <Flex wrap="wrap" c={"black"}>
              <Text>{todo.task}</Text>
            </Flex>
          </Container>
          <Space h="md"></Space>
          <Flex gap={"xs"} justify={"space-between"}>
            <Button onClick={() => editTodo(todo.id)} color="violet">
              edit
            </Button>

            {/* <TextInput label="Edit Todo" placeholder="New Task..." size="xs" /> */}

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
