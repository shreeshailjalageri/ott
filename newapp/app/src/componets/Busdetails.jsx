import { json, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import React, { Component }  from 'react';
import ToasterUi from 'toaster-ui';
import PacmanLoader from "react-spinners/PacmanLoader";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const Busdetails = () => {

  let[userdetails , setUserdetails] = useState({});
  let[bus , setBus] = useState(null);
  let[bookingdate , setbookingdate] = useState("");
  let[seats , setSeats] = useState(1);
  let[loading, setLoading] = useState(true);
  let {busid} = useParams();
  let navigate=useNavigate();
  const toaster = new ToasterUi();


  useEffect(()=>{

      fetch("http://localhost:5000/bus/"+busid)
      .then((res)=>{return res.json()})
      .then((bus)=>{
          setBus(bus);
      })
      let data = JSON.parse(localStorage.getItem("userdetails"));
      setUserdetails(data);

      let date = JSON.parse(localStorage.getItem("bookingdate"));
      setbookingdate(date);

  } , [])

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  let handleBookticket = ()=>{
    // add ticket obj to active booking key
    let ticket={
                   busname:bus.name,
                   busnumber:bus.number,
                   seats:seats,
                   from:bus.from,
                   to:bus.to,
                   start:bus.start,
                   end:bus.end,
                   journey_time:bus.journey_time,
                   price:bus.price * seats,
                   date: bookingdate
    }
    let UpdatedData = {
        ...userdetails,
        active_bookings : [...userdetails.active_bookings,ticket]

    }

    let config = {
      method :"PUT",
      headers : {"Context-Type": "application/json"},
      body : JSON.stringify(UpdatedData)
    }

    fetch("http://localhost:4000/users/"+userdetails.id , config)
       .then(()=>{
        localStorage.setItem("userdetails", JSON.stringify(UpdatedData));
       })
     
       //increament booked_seats
       let updatedBusdata = {...bus , booked_seats: Number(bus.booked_seats) + Number(seats)}

       let busConfig = {
        method : "PUT",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify( updatedBusdata )
       }

     {loading}
      }

  return ( 
      <div className="bus-details">
          <Navbar/>
        {loading && <PacmanLoader color="#36d7b7" />}
          {bus && 
          <div>
              <div>
                  <h3>Journey from <span>{bus.from}</span> to <span>{bus.to}</span> </h3>
                  <h2>{bus.busname}- {bus.type}</h2>
                  <p>{bus.busnumber}</p>
                  <p>Total capacity : {bus.seats} </p>
                  <p>Available Seats: {bus.seats - bus.booked_seats} </p>
                  <p>Boarding : <span>{bus.from} - {bus.start}</span></p>
                  <p>Destination : <span>{bus.to} - {bus.end}</span></p>
                  <p className="price">{bus.price} Rupees  / ticket  </p>
                  <input type="number" min="1" max={bus.seats - bus.booked_seats}
                  value={seats} onChange={(e)=>{setSeats(e.target.value)}}/>
                  <h2>Total Price - <span>{seats * bus.price}</span>  </h2>
                  <button className="ticket-btn" onClick={openModal}>Book ticket</button>
              </div> 
          </div>
          }
          {bus && <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Passenger : {userdetails.username}</h2>
              <p>{userdetails.phone}</p>
              <p>{bus.busname} - {bus.busnumber} </p>
              <p>Date : {bookingdate}</p>
              <p>{bus.from} - {bus.start}  to {bus.to} - {bus.end} </p>
              <p>Seats selected : {seats}  - Total Amount {seats*bus.price} &#8377; </p>
              <input type="number" placeholder="Enter amount in rupees"/>
              <button onClick={closeModal}>Pay</button>
          </Modal>}
      </div>
  );
}
export default Busdetails;