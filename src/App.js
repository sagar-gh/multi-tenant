import React, { Suspense, lazy } from "react";
const Login = lazy(() => import("./components/login"));

function App() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Login />
    </Suspense>
  );
}

export default App;
