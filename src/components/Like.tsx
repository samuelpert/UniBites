import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (status)
    return (
      <AiFillHeart size={40} color="#ff6b81" onClick={() => setStatus(false)} />
    );
  return <AiOutlineHeart size={40} onClick={() => setStatus(true)} />;
};

export default Like;
