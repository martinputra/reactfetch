import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import {Switch, Route} from "react-router-dom";
import SideMenu from './components/sidemenu/SideMenu';

function App() {

  //data local
  let [userData, setUserData] = useState([
    {
      id : 1,
      image: "https://picsum.photos/seed/14/200",
      username : "martinus",
      name: "martinus pratama",
      email: "martinus@gmail.com",
      phone: "08997868547",
      website: "google.com"
    },
    {
      id : 2,
      image: "https://picsum.photos/seed/112/200",
      username : "ekoseptianto",
      name: "eko septianto",
      email: "ekoseptianto@gmail.com",
      phone: "08122857888",
      website: "facebook.com"
    },
    {
      id : 3,
      image: "https://picsum.photos/seed/164/200",
      username : "vateer",
      name: "dimas vateer",
      email: "dimas@gmail.com",
      phone: "085641551888",
      website: "twitter.com"
    }
  ])

  // data dari api server
  let [apiData, setApiData] = useState([

  ])

  //menjalankan function sebelum component terender
  useEffect( ()=> {
    
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setApiData(data)
    })
    .catch(err => console.log(err))

    //cleaner function / unsubscriber
    return ()=>{}
  
  }, [])

  return (
    <div className="App">
      <Navbar />
      <SideMenu />
      <header className="App-header">

        <Switch>

          <Route path="/contact">
            <h1>contact page</h1>
          </Route>

          <Route path="/about">
            <h1>about page</h1>
          </Route>

          <Route path="/blog">
            <h1>blog page</h1>
          </Route>
          
          <Route path="/">
          { apiData.map((e)=>{
          return(
            <Card 
        key={e.id}
        image={`https://picsum.photos/seed/${e.id}/200`} 
        username={e.username} 
        name={e.name} 
        email={e.email}
        phone={e.phone} 
        website={e.website} 
        />
          )
        }) }
          </Route>
        </Switch>

        <Card 
        image="https://picsum.photos/seed/13/200" 
        username="Martinus" 
        name="Martinus Pratama" 
        email="martin@gmail.com"
        phone="08997868547" 
        website="martinus-web.netlify.com" 
        />

        { userData.map((e)=>{
          return(
            <Card 
        key={e.id}
        image={e.image} 
        username={e.username} 
        name={e.name} 
        email={e.email}
        phone={e.phone} 
        website={e.website} 
        />
          )
        }) }

        
      </header>
    </div>
  );
}

export default App;
