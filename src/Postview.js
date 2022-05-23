import React, { useEffect, useState } from 'react';
import './Postview.css';
import Card from './components/Card';
import Spinner from './components/Spinner';
import Header from './components/Header';

// const url = 'http://localhost:3004/user';

const url = process.env.REACT_APP_API + '/post';

const Postview = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    setPeople(data.user);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Header></Header>
        <div className='card-wrapper'>
          <Card people={people}></Card>
        </div>
      </>
    );
  }
  // return <div className="site-container"></div>;
};

export default Postview;
