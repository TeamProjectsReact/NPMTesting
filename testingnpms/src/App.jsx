import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import EditorTest from "./components/TestinEditor/EditorTest";
import NewEditor from "./components/TestinEditor/NewEditor";
import TestingPack from "./components/TestingPackege/TestingPack";
import TestingCSS from "./components/TestingCSS/TestingCSS";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/EditorTest" element={<EditorTest /> } />
        <Route path="/NewEditor" element={<NewEditor />} />
        <Route path="/TestingPack" element={<TestingPack />} />
        <Route path="/TestingCSS" element={<TestingCSS />} />
      </Routes> 
    </BrowserRouter>
  )
}