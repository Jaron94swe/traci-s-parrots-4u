import React from "react";
interface ContainerProps{
  fluid: boolean;
}
// This Container component allows us to use a bootstrap container without worrying about class names
export const Container: React.FC<ContainerProps> = ({ fluid, children }) =>{
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}
