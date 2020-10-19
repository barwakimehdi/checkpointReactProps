import React from "react";
import PropTypes from "prop-types";

const styleimg = {
  width: "300px",
  height: "300px",
  margin: "47PX",
  borderRadius: "50%",
};
const stylebody = {
  margin: "20px",
  display: "flex",
  flexDirection: "row-reverse",
  fontFamily: "Times New Roman",
  fontSize: "X-LARGE",
  color: "white",
};
const stylename = {
  margin: " 1%",
  textShadow: " black -4px 7px 45px",
  textAlign: "center",
  color: "White",
};
const styleback = { background: " rgb(103 74 74 / 91%)" };

function Profile(props) {
  return (
    <div style={styleback}>
      <h1 style={stylename}>{props.fullName}</h1>
      <div style={stylebody}>
        <h5>{props.bio}</h5>
        <img
          style={styleimg}
          src={props.pic}
          alt="hichem mechichi"
          onClick={() => alert(props.fullName)}
        >
          {props.children}
        </img>
      </div>
    </div>
  );
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  pic: PropTypes.string,
};

export default Profile;
