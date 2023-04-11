import React from 'react';

interface RenderIf {
  condition: boolean;
  children: React.ReactNode;
}

const RenderIf: React.FC<RenderIf> = ({
  condition,
  children,
}) => {
  return (
    <>
      {condition && children}
    </>
  );
};

export default RenderIf;
