import React from "react";
import {MyContext} from "../App"
import { useContext } from 'react';
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer() {
    const {rooms, sortedRooms , loading} = useContext (MyContext);
    if (loading) {
        return <Loading />;
    }
    return (
        <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default RoomContainer;