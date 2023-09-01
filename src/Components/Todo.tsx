import { Flex, Button, Container, Space, Group } from "@mantine/core";

const Todo = () => {
  return (
    <Flex direction="row">
      <Container>
        <Flex wrap="wrap"></Flex>
      </Container>
      <Space h="lg"></Space>

      <Container>
        <Group position="center" spacing="xl">
          <Button>Edit</Button>
          <Button>Complete</Button>

          <Button>Delete</Button>
        </Group>
      </Container>
    </Flex>
  );
};

export default Todo;
