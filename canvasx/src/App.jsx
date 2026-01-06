import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Editor from "./pages/Editor";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const navigate = useNavigate();
  const openProject = (projectId) => {
    navigate(`/editor/${projectId}`);
  };
  const location = useLocation();

  const isEditorPage = location.pathname.startsWith("/editor");
  return (
    <>
    {!isEditorPage && <Navbar />}
   <Routes>
  <Route path="/" element={<Home />} />
  <Route
  
    path="/projects"
    element={
      <PrivateRoute>
        <Projects onOpen={openProject} />
      </PrivateRoute>
    }
  />

  <Route
    path="/editor/:projectId"
    element={
      <PrivateRoute>
        <Editor />
      </PrivateRoute>
    }
  />

  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>

    </>
  );
}

export default App;
