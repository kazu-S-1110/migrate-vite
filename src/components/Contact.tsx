import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

type ContactProps = {
  message: string;
};

export const Contact: FC<ContactProps> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>Contact</div>
      <p>{message}</p>

      <button onClick={() => navigate("/about")}>About</button>
    </>
  );
};
