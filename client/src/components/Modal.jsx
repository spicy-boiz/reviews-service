import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalRatings from './ModalRatings';
import ReviewsList from './ReviewsList';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000 !important;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  align-items: center;
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalItself = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 100;
  width: 100%;
  background: white;
  position: relative;
  border-radius: 12px;
  max-width: 1032px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify content: flex-end;
`;

const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  top: 24px;
  left: 24px;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  font-weight: 600;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`;

const Modal = ({ data, isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <ModalOverlay />
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalItself>
        <ModalHeader>
          <ModalCloseButton onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <div>
          <div>
            <ModalRatings data={data} />
          </div>
          <ReviewsList data={data} />
        </div>
      </ModalItself>
    </ModalWrapper>
  </>, document.body,
) : null);

export default Modal;
