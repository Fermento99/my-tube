import styled from 'styled-components';

const Window = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDFCFF;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

function Dialog({ children, closing }) {
  return (
    <Window onClick={() => closing()}>{children}</Window>
  );
}

export default Dialog;