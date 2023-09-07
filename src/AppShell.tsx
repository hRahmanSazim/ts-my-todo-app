import { AppShell, Text, Header, Box, Flex, Anchor } from "@mantine/core";
import TodoWrapper from "./Components/TodoWrapper";
import Todo from "./Components/Todo";

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
      // navbar={
      //   <Navbar width={base}} height={"100%"} p="xs">
      //     {/* Navbar content */}
      //   </Navbar>
      // }
      header={
        <Header height={55} p="xs" c={"white"}>
          <Flex justify={"space-around"}>
            {/* Header content */}
            <Text fz={"xl"} fw={"bolder"} tt={"capitalize"}>
              Sazim ToDo
            </Text>
            <Anchor
              href="https://github.com/hRahmanSazim/ts-my-todo-app/tree/feature"
              target="_blank"
            >
              Github link
            </Anchor>
          </Flex>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {
        /* Your application here */
        <Box>
          <Flex direction="column" gap="xl" color="yellow">
            <TodoWrapper addTodo={addTodo} />
            {todos.map((todo) => {
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
        </Box>
      }
    </AppShell>
  );
}
