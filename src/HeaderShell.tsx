import {
  AppShell,
  Text,
  Header,
  Container,
  Flex,
  Anchor,
  Center,
} from "@mantine/core";
import Todo from "./Components/Todo";
import AddModal from "./Components/AddModal";
import { Task } from "./App";
import { FaGithub } from "react-icons/fa";

type props = {
  addTodo: (id: string) => void;
  todos: Task[];
  removeTodo: (id: string) => void;
  editTodo: (id: string, value: string) => void;
  handleToggle: (id: string) => void;
};
export default function HeaderShell({
  addTodo,
  todos,
  removeTodo,
  editTodo,
  handleToggle,
}: props) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={55} p="xs" c={"white"} bg={"#00BDD7"}>
          <Flex justify={"space-around"}>
            <Text fz={"xl"} fw={"bolder"}>
              ToDo or <span style={{ color: "black" }}>!</span>
              ToDO
            </Text>
            <Anchor
              href="https://github.com/hsbrRahman/ts-my-todo-app/tree/master"
              target="_blank"
              size={"xl"}
              c={"black"}
            >
              <FaGithub />
            </Anchor>
          </Flex>
        </Header>
      }
    >
      {
        <Center>
          <Container pt={"6rem"}>
            <Flex direction="column" gap="xl">
              {todos.map((todo: Task) => {
                return (
                  <Todo
                    todo={todo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    handleToggle={handleToggle}
                  />
                );
              })}
            </Flex>
          </Container>
          <AddModal addTodo={addTodo} />
        </Center>
      }
    </AppShell>
  );
}
