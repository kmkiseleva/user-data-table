// Core
import { FC, useState, useEffect } from "react";
import axios from "axios";

// Components
import Table from "./components/Table";

const App: FC = () => {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>User Data Table</h1>
      <Table data={userData} />
    </div>
  );
};

export default App;
