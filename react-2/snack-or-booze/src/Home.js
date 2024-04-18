import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { drinks as drinksData, snacks as snacksData } from './db.json';

function Home() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    try{
      // console.log( drinksData );
      // console.log( snacksData );
    } 
    catch{
      
    } 
    fetchData();
  }, []);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <div className="mt-4">
            <p>Snacks Available: {snacks.length}</p>
            <p>Drink Choices: {drinks.length}</p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
