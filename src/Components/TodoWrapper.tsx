import {
  Container,
  Group,
  Text,
  TextInput,
  Space,
  Button,
  Flex,
} from "@mantine/core";
import { FormEvent } from "react";
import { useState } from "react";

type addValue = {
  addTodo: (value: string) => void;
};

export default function Todowrapper({ addTodo }: addValue): JSX.Element {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Container size={550} my={40}>
      <Group position="center">
        <Text color="grape" fz={28} fw="bold" td="underline">
          MY TODO APP
        </Text>
      </Group>

      <Space h="xl" />
      <Flex
        mih={100}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Start writing tasks......"
            label="Add Todo Here"
            size="lg"
            value={value}
            radius="md"
            withAsterisk
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <Space h="lg" />

        <Button
          color="violet"
          radius="100%"
          size="lg"
          onClick={handleSubmit}
          mt={24}
        >
          +
        </Button>
      </Flex>
      <Space h="lg" />
    </Container>
  );
}
