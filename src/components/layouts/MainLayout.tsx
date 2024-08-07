import { ReactNode } from "react";

interface Props {
  options?: { name: string }[];
  children: ReactNode;
}

const MainLayout = ({ children, options = [] }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
export default MainLayout;
