import React from 'react'
import { Routes, Route} from "react-router-dom"
import "./App.css";
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Erorr from './pages/Erorr'
import Navbar from "./components/Navbar"
import {createContext , useState , useEffect} from "react"
import RawData from "./data"
import RoomContainer from './components/RoomContainer';

export const MyContext = createContext(""); // matnsash el export lel MyContext 
function App() {
  let [loading , setLoading] = useState(true)
  let [feature , setFeature] = useState([])
  let [eewad , Set2ewad] = useState([])
  let [sorted , SetSorted] = useState([])
  let MainData = 
  {
    rooms: eewad,
    sortedRooms: sorted,
    featuredRooms: feature,
    loading: loading
  };

  useEffect(()=> {
    setLoading(false)
    let rooms = FetchData(RawData); 
    Set2ewad(rooms)

    let featuredRooms = rooms.filter(roomo => roomo.featured  === true); //rg3le el rooms eli true featured
    setFeature(featuredRooms)
    SetSorted(rooms)
    
  },[loading])
  // console.log({...mslan.rooms}) hatly kol el Main Data w bel a5aas el Rooms

  function Filterr(type){

    if (type === "all") {
    SetSorted(eewad) 
    }
    if (type !== "all") {
    let tempRooms = eewad.filter(room => room.type === type);
    SetSorted(tempRooms) 
    }

    if(type === "truee"){
    let tempRooms = eewad.filter(room => room.pets === true);
    SetSorted(tempRooms) 
    }
    if(type === "falsee"){
    let tempRooms = eewad.filter(room => room.pets === false);
    SetSorted(tempRooms) 
    }
    if(type === "true"){
    let tempRooms = eewad.filter(room => room.breakfast === true);
    SetSorted(tempRooms) 
    }
    if(type === "false"){
    let tempRooms = eewad.filter(room => room.breakfast === false);
    SetSorted(tempRooms) 
    }
  }



  
  function FetchData(RawData) {
    let tempItems = RawData.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id }; // 5ly kol 7aga zy mahya bs hn8yr fel image w el iD
      return room; // w rg3 el Room eli hya kol 7aga zy mhya bs el id w el image mt8yren (y3ne fsasnahom w tl3nahom 3ashan homa f file el data madfonen)
    });
    return tempItems; //w ba3d ma rg3na mn el lela de kolha object gded room inside tempitems ha5ly el funtion trg3 el tempitems
  }                     //la8ena el nested objects




  function getSlugRoom (slug){
    let AllSlugRooms = [...MainData.rooms]
    let filterdSlug = AllSlugRooms.filter((room) => room.slug === slug)
    return filterdSlug
  }

  return (
    <>
    <MyContext.Provider value={{...MainData, getSlugRoom, Filterr} }  >

    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Rooms" element={<Rooms/>}/>
        <Route exact path="/rooms/:slug" element={<SingleRoom/>}/>
        <Route exact path="/filterRooms" element={<RoomContainer/>}/>
        <Route exact path="*" element={<Erorr/>}/>
      </Routes>
  </MyContext.Provider > 

    </>

  )
}

export default App
