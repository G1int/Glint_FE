import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "components";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
