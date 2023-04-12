import React from 'react';

import { createPortal } from 'react-dom';

interface ReactPortalProps {
  containerId: string;
  children: React.ReactNode;
}

const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  containerId,
}) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container?.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
};

export default ReactPortal;
