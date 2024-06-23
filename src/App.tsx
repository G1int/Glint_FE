import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";

import { Router, Toast } from "components";
import { globalStyle } from "styles";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <Router>
          <Toast />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
