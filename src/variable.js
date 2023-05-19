/**
 * @title 로그인 - 테넌트 선택
 */
export const tennantList = [
  { label: "임시회사 1", value: "company1" },
  { label: "임시회사 2", value: "company2" },
];

/**
 * @title slelect form - 날짜 검색 */
export const DateList = [
  { label: "등록일시", value: "postdate" },
  { label: "수정일시", value: "editdate" },
];

/**
 * @title slelect form - 카테고리 검색 */
export const CategoryList = [
  { label: "임시 카테고리 1", value: 1 },
  { label: "임시 카테고리 2", value: 2 },
];

/**
 * @title slelect form - 타입별 검색 */
export const TypeList = [
  { label: "제목", value: "title" },
  { label: "내용", value: "content" },
];

/**
 * @title 메뉴 리스트 */
export const MenuInfo = [
  {
    path: "dashboard",
    summary: "대시보드",
    detail: ["운영현황"],
    id: 1,
  },
  {
    path: "task",
    summary: "과제 관리",
    detail: ["과제 신청", "과제 심사", "과제 운영/개발"],
    id: 2,
  },
  {
    path: "statistics",
    summary: "실적 관리",
    detail: ["과제 처리현황", "일별 처리현황"],
    id: 3,
  },
  {
    path: "rpa",
    summary: "RPA 운영",
    detail: ["스케쥴 관리", "과제 실행 이력", "과제 수행 관리", "장애 관리"],
    id: 4,
  },
  {
    path: "monitor",
    summary: "모니터링",
    detail: ["BOT 모니터링", "과제 모니터링"],
    id: 5,
  },
  {
    path: "community",
    summary: "커뮤니티",
    detail: ["공지사항", "자료실", "FAQ", "QnA"],
    id: 6,
  },
  {
    path: "admin",
    summary: "관리자",
    detail: [
      "Tenant 관리",
      "계정 관리",
      "계정권한 관리",
      "부서 관리",
      "BOT 관리",
      "영업일 관리",
      "카테고리 관리",
      "감사 로그",
      "기타 설정",
    ],
    id: 7,
  },
  {
    path: "agent",
    summary: "RPA봇 전용",
    detail: ["RPA 자료실", "과제 수행 요청"],
    id: 8,
  },
];

/**
 * @title CommunityWrite 조건들
 *  */
export const WriteOption = [
  { label: "카테고리 선택", value: "category" },
  { label: "공개여부", value: "visible" },
  { label: "상단고정 여부", value: "fix" },
  { label: "제목", value: "title" },
];
