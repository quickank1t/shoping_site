import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Components";
import { Home, SignUp, Profile, NotFound } from "./page/index.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
