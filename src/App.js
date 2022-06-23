import { Routes, Route ,Outlet} from "react-router-dom"
import Home from "./routes/home/home.component";
const Navigation=()=>{
  return (
    <div>
        <h1>This is Navigation bar</h1>
        <Outlet />
    </div>
  );
};

const Shop1 = () => (
   <h1> This is ./home/shop1 </h1>
);


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="shop1" element={<Shop1 />} />
        
      </Route>
    </Routes>

  );
}
export default App;
