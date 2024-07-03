import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";

import { Modal, Router, Toast } from "components";
import { globalStyle } from "styles";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <Router>
          <Modal />
          <Toast />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
