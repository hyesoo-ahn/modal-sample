import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Modal, ModalDismissButton, ModalOpenButton, ModalContents } from "./Modal";
import styled from "@emotion/styled";

const StyledModalContents = styled(ModalContents)`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>모달..이게맞낭ㅇ요?</h1>
      <button onClick={openModal}>Open Modal</button>

      {/* 모달 컴포넌트 */}
      <Modal isFocus={isModalOpen}>
        <ModalDismissButton>
          <button onClick={closeModal}>Close Modal</button>
        </ModalDismissButton>

        <StyledModalContents title="타이틀이 왜 밑에 이써요?">
          <h2>모달 컨텐츠입니다.</h2>
          <h2>모달 컨텐츠입니다.</h2>
          <h2>모달 컨텐츠입니다.</h2>
          <h2>모달 컨텐츠입니다.</h2>
          <h2>모달 컨텐츠입니다.</h2>
        </StyledModalContents>
      </Modal>
    </div>
  );
}

export default App;
