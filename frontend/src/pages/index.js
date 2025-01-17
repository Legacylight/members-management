import AnalyticCard from "../components/analyticcard";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const name = "{Admin}";
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const response = await axios.get('https://codeschris.pythonanywhere.com/api/members/');
        const data = response.data;
        setTotalMembers(data.length);
      } catch (error) {
        console.error('Error fetching total members:', error);
      }
    };

    fetchTotalMembers();
  }, []); 

  return (
    <>
      <div className="container mt-5">
        <header>
          <h2 className="text-center display-5 fw-bold">Dashboard</h2>
          <h6 className="my-5 display-6">Welcome, {name}</h6>
        </header>
        <div className="d-flex row md-row-cols-2 g-3">
          <AnalyticCard count={totalMembers}/>
          <AnalyticCard count={totalMembers}/>
          <AnalyticCard count={totalMembers}/>
          <AnalyticCard count={totalMembers}/>
        </div>
      </div>
    </>
  )
}

export default Home;
