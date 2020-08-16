import styled from 'styled-components';

export const ToggleButtonDiv = styled.div`
  width: 50px;
  height: 26px;
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  background-color: gray;
`;

export const ToggleCircleDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  margin-left: ${({ rightMovement }) => rightMovement};
  transition: all 0.3s;
`;
