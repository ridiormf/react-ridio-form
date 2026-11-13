import { useForm } from "@ridiormf/react-ridio-form";

interface PlaygroundValues extends Record<string, unknown> {
  readonly email: string;
}

const initialValues: PlaygroundValues = {
  email: "ada@example.com",
};

export function App() {
  const { values } = useForm<PlaygroundValues>({ initialValues });

  return (
    <main>
      <h1>react-ridio-form</h1>
      <p>Playground local da biblioteca, sem lógica de formulário ainda.</p>
      <p>email: {values.email}</p>
    </main>
  );
}
