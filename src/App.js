import { Routes, Route ,} from "react-router-dom"
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop1 = () => (
   <h1> This is Shop1 </h1>
);


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop1" element={<Shop1 />} />
        <Route path="SignIn" element={<SignIn/>} />
        
      </Route>
    </Routes>

  );
}

export default App;
