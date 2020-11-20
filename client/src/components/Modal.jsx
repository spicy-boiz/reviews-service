import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalRatings from './ModalRatings';
import ModalReviewsList from './ModalReviewsList';

const TotalContainer = styled.div`
`;

const ModalOverlay = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgb(34, 34, 34) !important;
  /* opacity: 0.6; */
`;

const ModalWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const ModalItself = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 975px;
  max-height: 90%;
  bottom: 30px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 100;
  padding: 24px;
`;

const ModalHeader = styled.div`
  flex: 0 0 40px;
  position: sticky;
  text-align: left;
  top: 0px;
  z-index: -1;
`;

const CloseButtonContainer = styled.div`
top: 24px;
position: absolute;
display: flex;
left: 24px;
`;

const ModalCloseButton = styled.button`
appearance: none;
font-size: 26px;
display: inline-block;
border-radius: 50%;
border: none;
outline: none;
margin: 0px;
padding 0px;
color: rgb(34, 34, 34);
cursor: pointer;
position: relative;
background: transparent;
transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
align-items: flex-start;
`;

const MediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: auto;
  padding: 24px;
`;

const Modal = ({ data, isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <TotalContainer>
      <ModalOverlay />
      <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <ModalItself>
          <CloseButtonContainer>
            <ModalCloseButton onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </ModalCloseButton>
          </CloseButtonContainer>
          <ModalHeader />
          <MediaContainer>
            <ModalRatings data={data} />
            <ModalReviewsList data={data} />
          </MediaContainer>
        </ModalItself>
      </ModalWrapper>
    </TotalContainer>
  </>, document.body,
) : null);

export default Modal;
