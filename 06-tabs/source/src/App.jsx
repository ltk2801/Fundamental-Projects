import { useState } from "react";
import Job from "./Job";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useEffect } from "react";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setJobList(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="jobs-center">
      <Sidebar
        jobList={jobList}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {loading ? <Loading /> : <Job jobs={jobList} currentItem={currentItem} />}
    </div>
  );
};
export default App;
