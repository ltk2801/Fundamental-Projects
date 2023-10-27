import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duti) => {
        const id = uuidv4();
        return (
          <div className="job-desc" key={id}>
            <div className="job-icon">
              <BiChevronsRight />
            </div>
            <p>{duti}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
