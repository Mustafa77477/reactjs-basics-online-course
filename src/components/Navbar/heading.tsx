import { ReactNode } from "react";

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <h2 style={{ fontSize: 40, textAlign: "center" }}>
      {children}
      {title}
    </h2>
  );
};
export default Heading;
