import React from "react";
import "./Ticket.css";
import team from "../../team";
import Counter from "../Counter";

const Ticket = () => {
  return (
    <div className="ticketContainer">
      {team.map((employee) => {
        return (
          <div className="ticketFront">
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
            <Counter />
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
