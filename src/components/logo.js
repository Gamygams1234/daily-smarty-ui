import React from "react";

export default function Logo(props) {
  const size = {
    height: props.size ? props.size : 105,
    width: props.size ? props.size : 105,
  };
  return (
    <div className="logo-main">
      <img style={size} alt="this is the daily smarty logo" src="/assets/ds_circle_logo.png" />
    </div>
  );
}
