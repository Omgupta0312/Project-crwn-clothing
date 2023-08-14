import { Outlet } from 'react-router-dom';

import Directory from "../../component/Directory/Directory.component"

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
