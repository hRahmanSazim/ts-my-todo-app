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

export default function HeaderShell({
  addTodo,
  todos,
  removeTodo,
  editTodo,
  handleToggle,
}) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={55} p="xs" c={"white"} bg={"#00BDD7"}>
          <Flex justify={"space-around"}>
            <Text fz={"xl"} fw={"bolder"} tt={"capitalize"}>
              Sazim Todo
            </Text>
            <Anchor
              c={"white"}
              href="https://github.com/hRahmanSazim/ts-my-todo-app/tree/feature"
              target="_blank"
              td={"underline"}
            >
              Github link
            </Anchor>
          </Flex>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {
        <Center>
          <Container pt={"6rem"}>
            <Flex direction="column" gap="xl">
              {todos.map(
                (todo: { task: string; id: string; completed: boolean }) => {
                  return (
                    <Todo
                      todo={todo}
                      removeTodo={removeTodo}
                      editTodo={editTodo}
                      handleToggle={handleToggle}
                    />
                  );
                }
              )}
              <AddModal addTodo={addTodo} />
            </Flex>
          </Container>
        </Center>
      }
    </AppShell>
  );
}
