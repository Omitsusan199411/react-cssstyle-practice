// import 変数名　でstyled-componentsを呼び出す。
// 変数名は何でも良い
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled components -</STitle>
      <SButton>FIGHT!!!</SButton>
    </SContainer>
  );
};

// importで定義した変数名.HTMLタグ名で定義していく
const SContainer = styled.div`
  border: solid 2px #393eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0px;
  color: #3d84a8;
`;
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
