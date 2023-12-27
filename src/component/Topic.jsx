/* eslint-disable react/prop-types */
import MinusIcon from "../assets/images/icon-minus.svg";
import PlusIcon from "../assets/images/icon-plus.svg";

import { useState, useEffect } from "react";

export default function Topic(props) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="desc" onClick={handleClick}>
      <div className="topic">
        <h2>{props.topic}</h2>
        <img src={isShow ? PlusIcon : MinusIcon} />
      </div>

      {!isShow && <p>{props.desc}</p>}

      {props.divider && <span className="divider" />}
    </div>
  );
}
