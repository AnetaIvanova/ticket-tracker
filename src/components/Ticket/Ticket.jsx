import React from "react";
import team from "../../team";

const Ticket = () => {
  return (
    <div>
      {team.map((employee) => {
        return (
          <div>
            <h2>{employee.Name}</h2>
            <h2>{employee.Role}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
