import React, { FC } from "react";

type ContactProps = {
  message: string;
};

export const Contact: FC<ContactProps> = ({ message }) => {
  return (
    <>
      <div>Contact</div>
      <p>{message}</p>
    </>
  );
};
