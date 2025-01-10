import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import BookDemo from "./pages/BookDemo";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Default route for HomePage */}
          <Route index element={<HomePage />} />
          <Route path="/book-a-demo" element={<BookDemo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
