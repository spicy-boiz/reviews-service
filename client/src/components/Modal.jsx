import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalRatings from './ModalRatings';
import ModalReviewsList from './ModalReviewsList';

const TotalContainer = styled.div`
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const ModalWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  z-index: 2000;
  position: fixed;
  top: 0;;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgb(34, 34, 34, 0.6) !important;
`;

const ModalItself = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1032px;
  max-height: 90vh;
  top: 40px;
  bottom: 40px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 100;
  padding: 0px;
`;

const ModalHeader = styled.div`
  flex: 0 0 72px;
  position: sticky;
  text-align: left;
  top: 0px;
  z-index: -1;
`;

const CloseButtonContainer = styled.div`
top: 16px;
position: absolute;
display: flex;
left: 26px;
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
transition:  transform 0.25s ease 0s;
align-items: flex-start;
`;

const MediaContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  position: sticky;
  top: 0;
  padding: 0 24px 24px 24px;
`;

const MediaAdjustor = styled.div`
  top: -24px !important;
display: grid;
grid-template-columns: 1.2fr 2fr;

`;

const ModalRatingsContainer = styled.div`
  position: relative;
  top:800;
`;

const ModalReviewsContainer = styled.div`
  display: flex;
  justify: flex-end;
`;

const Modal = ({ data, isShowing, hide }) => {
  const escKey = useCallback((e) => {
    if (isShowing) {
      if (e.keyCode === 27) {
        hide();
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escKey, false);

    return () => {
      document.removeEventListener('keydown', escKey, false);
    };
  }, []);

  return isShowing ? ReactDOM.createPortal(
    <>
      <TotalContainer>
        <ModalOverlay />
        <ModalWrapper aria-modal="true" aria-hidden="true" tabIndex={-1} role="dialog">
          <ModalItself>
            <CloseButtonContainer>
              <ModalCloseButton onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </ModalCloseButton>
            </CloseButtonContainer>
            <ModalHeader />
            <MediaContainer>
              <MediaAdjustor>
                <ModalRatingsContainer>
                  <ModalRatings data={data} />
                </ModalRatingsContainer>
                <ModalReviewsContainer>
                  <ModalReviewsList data={data} />
                </ModalReviewsContainer>
              </MediaAdjustor>
            </MediaContainer>
          </ModalItself>
        </ModalWrapper>
      </TotalContainer>
    </>, document.getElementById('service3'),
  ) : null;
};

export default Modal;
