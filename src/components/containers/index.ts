import styled from "styled-components";

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 15px - 20px - 16px);
  min-width: calc(210px - 17px - 22px);
  height: calc(130px - 25px - 22px);

  padding: 25px 17px 20px 20px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 0px;

  @media (max-width: 1211px) {
    width: calc(50% - 11px - 20px - 16px);
  }
`;

export const FullContainer = styled(DefaultContainer)`
  width: calc(100% - 30px * 2);
  height: calc(555px - 26px * 2);
  padding: 30px;
  @media (max-width: 1193px) {
    height: auto;
  }
`;

export const EnlargedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 25px;
  width: calc(68% - 30px * 2 - 27px);
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 0px;
`;

export const ReducedContainer = styled(EnlargedContainer)`
  width: calc(34% - 30px * 2 - 24px);
  @media (min-width: 1324px) {
    width: calc(33% - 30px * 2 - 18px);
  }
`;

export const CategoriesWrapper = styled.ul`
  padding: 0;
`;

export const Li = styled.li`
  font-family: "Ubuntu", sans-serif;
  margin-left: 15px;
  color: #556CB1;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
