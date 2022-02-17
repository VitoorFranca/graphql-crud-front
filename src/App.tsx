import { createClient, Provider } from "urql";
import { Home } from "./Views/Home";

function App() {
  const client = createClient({
    url: "http://localhost:4000",
  });

  return (
    <Provider value={client}>
      <Home />
    </Provider>
  );
}

export default App;
