import styled from "styled-components";
import { Container, Img, P } from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";
import SocialKakao from "../../LoginPage/SocialKakao";
import { Link } from "react-router-dom";

// 바로가기
// Container - Main 영역 Container
// Div - Content(글 / 버튼)
// Div - Content 중 문단을 묶는 Div
// Component - Content로 쓰이는 문단의 스타일
// Component - Content 중 Button으로 사용하는 스타일
// ComponentList : Button 모음

function IntroPageMain() {
  return (
    <IntroPageMainContainer>
      {/* Content 영역 */}
      <DivContent margin="55px 0px 70px 0px" height="375px">
        <Img src="img/onePercent.png" width="206px" alt="1 percent logo" />
        <DivContentP>
          <ContentP>
            100명 중 1명은
            <br />
            <strong>조현병</strong>이라는 사실,
            <br />
            알고 계셨나요?
          </ContentP>
          <ContentP>
            초기에 발견할수록
            <br />
            치료가 수월한 조현병
            <br />
            지금부터 예방해봐요!
          </ContentP>
        </DivContentP>
      </DivContent>

      {/* Button 영역 */}
      <DivContent height="120px">
        <ButtonItems />
      </DivContent>
    </IntroPageMainContainer>
  );
}

// Container - Main 영역 Container
const IntroPageMainContainer = styled(Container)`
  width: 100%;
  height: 660px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 8px;
  padding: 15px;
  box-sizing: border-box;

  border-radius: 36px;

  background-color: ${theme.colors.purple_100};
`;

// Div - Content(글 / 버튼)
const DivContent = styled.div`
  width: 100%;
  height: ${(props) => props.height || "auto"};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  margin: ${(props) => props.margin};

  /* background-color: yellow; */
`;

// Div - Content 중 문단을 묶는 Div
const DivContentP = styled.div`
  height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  line-height: 30px;
`;

// Component - Content로 쓰이는 문단의 스타일
const ContentP = styled(P)`
  font-size: 20px;
`;

// Component - Content 중 Button으로 사용하는 스타일
export const Button = styled.button`
  width: 342px;
  height: 56px;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border-radius: 16px;
  font-size: 20px;
  border: 1px solid;
  border-color: ${theme.colors.black_100};
  box-sizing: border-box;

  margin-top: ${(props) => props.margintop};
  cursor: pointer;

  &:first-child {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black_80};
    color: ${({ theme }) => theme.colors.white_100};
    border: none;
  }
`;

// ComponentList : Button 모음
export const ButtonItems = () => {
  return (
    <div>
      <Link to="/test">
        <Button backgroundColor="#1e1e1e" color="#FEFEFE">
          테스트 시작
        </Button>
      </Link>
      <SocialKakao />
    </div>
  );
};

export default IntroPageMain;
