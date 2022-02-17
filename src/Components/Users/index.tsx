import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useQuery } from "urql";

export type User = {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
};

const UsersQuery = `
  query {
    users {
      fullName
      _id
      fullName
      firstName
      lastName
      email
    }
  }
`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function Users() {
  const classes = useStyles();

  const [result, reexecuteQuery] = useQuery({
    query: UsersQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Completo</TableCell>
            <TableCell align="center">Primeiro Nome</TableCell>
            <TableCell align="center">Segundo Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map(({ fullName, firstName, lastName, email }: User) => (
            <TableRow key={fullName}>
              <TableCell component="th" scope="row" align="center">
                {fullName}
              </TableCell>
              <TableCell align="center">{firstName}</TableCell>
              <TableCell align="center">{lastName}</TableCell>
              <TableCell align="center">{email}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
