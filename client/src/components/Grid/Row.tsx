import React from "react";
interface RowProps{
  fluid: boolean;
}
// This Row component lets us use a bootstrap row without having to think about class names
export const Row: React.FC<RowProps> = ({ fluid, children }) =>{
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}