import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color: string;
}

const Box: FC<Props> = ({ children, color }) => {
  return <div style={{ color }}>{children}</div>;
};

export default Box;
