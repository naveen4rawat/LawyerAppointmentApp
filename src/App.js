
import LawyerDetails from "./pages/LawyerDetails/LawyerDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleLawyer from "./pages/SingleLawyer/SingleLawyer";
import Layout from "./Layout/Layout";

import { createStore } from "redux";
import allReducers from "./components/reducers";
import { Provider } from "react-redux";

function App() {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/lawyer/:id" element={<SingleLawyer />} />
            <Route path="/" element={<LawyerDetails />} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
