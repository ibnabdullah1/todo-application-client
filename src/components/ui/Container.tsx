import { ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
}
const Container = ({ children }: TContainerProps) => {
  return <div className=" h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
