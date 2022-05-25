## 소개
- 차트가 있는 웹사이트 개발
- 팀원: 김준엽 김항래 김보현 최덕희 최민정
- 기간: 5/23 ~ 5/25
- 배포: [https://master--madup2b.netlify.app/](https://master--madup2b.netlify.app/)

## 기술스택
- React, TypeScript
- 상태관리: Recoil
- 차트 라이브러리: Victory
- datepicker 라이브러리: react-datepicker

## 기능
- 대시보드: 선택된 날짜에 따라 통합광고 현황과 매체 현황이 표시됩니다.
  - 날짜선택: 달력으로 날짜를 선택합니다.
  - 통합광고현황: 상황판, 선차트
  - 광고 현황 데이터 : 선택한 날짜 범위의 데이터 총합을 보여줍니다. 선택한 날짜의 범위만큼 이전과 비교하여 데이터의 증감량을 표시하고, 데이터가 충분하지 않아서 증감량을 표시할 수 없을때에는 데이터의 총합만 표시합니다.
  - 매체현황: 퍼센트 막대 차트로 각 회사에서 차지하는 비율을 보여줍니다. 그리고 표로 데이터를 보여줍니다.
- 광고관리: 광고관리 데이터를 필터에 따라 조회합니다.


## 동작
- 통합광고현황
![dateChange](https://user-images.githubusercontent.com/41728258/170305605-b4d90211-0204-457e-bfdd-7c1402141d18.gif)
![adGraph](https://user-images.githubusercontent.com/41728258/170305815-a8fa790c-e91f-4f5d-b0dd-34b74b2a0324.gif)

- 광고관리

![adList](https://user-images.githubusercontent.com/41728258/170305705-f80a93c6-c95c-4990-ac97-68bdf87c871f.gif)
