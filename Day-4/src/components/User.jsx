import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl p-4">
      <h1>User: { userId }</h1>
    </div>
  );
};

export default User;
