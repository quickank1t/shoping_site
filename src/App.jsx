import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Components";
import { Home, SignUp, Profile, NotFound, Cart } from "./page/index.js";
// TODO : Auth0 for Auth
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
