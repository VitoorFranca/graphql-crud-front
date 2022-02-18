import { useMutation } from "urql";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField } from "@material-ui/core";

export type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
};

const CreateUserMutation = `#graphql
    mutation CreateUser($email: String!, $firstName: String!, $lastName: String!) {
        createUser(data: { $email, $firstName, $lastName }) {
            fullName
        }
    }
`;

export function AddUser() {
  const { register } = useForm<Inputs>();

  const [createUserReasult, createUser] = useMutation(CreateUserMutation);

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    firstName,
    lastName,
  }) => await createUser({ email, firstName, lastName });

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
    </>
  );
}
