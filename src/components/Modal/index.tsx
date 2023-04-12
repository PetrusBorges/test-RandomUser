import React from 'react';

import { UserCardInfo } from '../../types/userCard';

import { useAnimateUnmount } from '../../hooks/useAnimatedUnmount';

import { ReactPortal } from '../index';

import { Overlay, Container } from './styles';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  user: UserCardInfo | null;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  user,
}) => {
  const {
    shouldRender,
    animatedElementRef,
  } = useAnimateUnmount(isVisible);

  if (!shouldRender || !user) {
    return null;
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay
        isVisible={!isVisible}
        ref={animatedElementRef}
      >
        <Container
          isVisible={!isVisible}
        >
          opa
        </Container>
      </Overlay>
    </ReactPortal>
  );
};

export default Modal;
