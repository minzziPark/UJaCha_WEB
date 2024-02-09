import styled from "styled-components";

function TestPageLayout() {
  return (
    <TestPageContainer>
      <QuestionContainer />
    </TestPageContainer>
  );
}

const TestPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const QuestionContainer = styled.div`
  width: 100vw;
  height: 88vh;
  border-radius: 24px 24px 0px 0px;
  background-color: ${({ theme }) => theme.colors.purple_100};
  position: absolute;
  bottom: 0px;

  /* 애니메이션 부분 */
  animation: transY 1.5s ease-in-out;

  @keyframes transY {
    0% {
      transform: translateY(500px);
      opacity: 0.2;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  /* 애니메이션 끝 */
`;

export default TestPageLayout;
