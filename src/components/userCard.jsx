import React from "react";
import "../styles/usercard.css";
const UserCard = (props) => {
  console.log(props.key);

  return (
    <div className="_card" key={props.data.id}>
      <h6>User name:{props?.data?.name}</h6>
      <h6>User Age:{props?.data?.age}</h6>
      <h6>User Email:{props?.data?.email}</h6>
      <h6>User Location:{props?.data?.location}</h6>
      <h6>User role:{props?.data?.role}</h6>
    </div>
  );
};

export default UserCard;
