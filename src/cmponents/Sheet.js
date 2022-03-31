import styled from "styled-components";

const Sheet = styled.div`
  width: ${props => props.width ? props.width : '80vw'};
  height: ${props => props.height ? props.height : '45vw'};
  background-color: #eee;
  opacity: 1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Sheet;