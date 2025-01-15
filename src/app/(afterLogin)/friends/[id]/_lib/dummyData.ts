const friends = new Map([
  [1, { id: 1, introduction: "활기찬 하루를 즐기는 친구", name: "민준", gender: "남", mbti: "ENTP", friendType: "A", volume: 75, taste: "인디밴드", applicationType: "조용히 감상해요" }],
  [2, { id: 2, introduction: "책과 커피를 좋아하는 낭만주의자", name: "지우", gender: "여", mbti: "INFJ", friendType: "B", volume: 50, taste: "클래식", applicationType: "함께 즐겨요" }],
  [3, { id: 3, introduction: "여행과 모험을 사랑하는 열정가", name: "준호", gender: "남", mbti: "ESTP", friendType: "A", volume: 80, taste: "락", applicationType: "시끄럽게 놀아요" }],
  [4, { id: 4, introduction: "편안한 분위기를 좋아하는 온화한 사람", name: "서연", gender: "여", mbti: "ISFP", friendType: "C", volume: 30, taste: "재즈", applicationType: "조용히 감상해요" }],
  [5, { id: 5, introduction: "유머와 에너지로 가득 찬 분위기 메이커", name: "도윤", gender: "남", mbti: "ENFP", friendType: "B", volume: 90, taste: "힙합", applicationType: "함께 즐겨요" }],
  [6, { id: 6, introduction: "섬세하고 따뜻한 마음을 가진 조언자", name: "하윤", gender: "여", mbti: "INFJ", friendType: "C", volume: 45, taste: "발라드", applicationType: "조용히 감상해요" }],
  [7, { id: 7, introduction: "디테일을 놓치지 않는 분석가", name: "지호", gender: "남", mbti: "INTJ", friendType: "A", volume: 60, taste: "전자음악", applicationType: "함께 즐겨요" }],
  [8, { id: 8, introduction: "자연 속에서 에너지를 충전하는 힐링러", name: "유진", gender: "여", mbti: "ISFJ", friendType: "B", volume: 40, taste: "포크송", applicationType: "조용히 감상해요" }],
  [9, { id: 9, introduction: "강렬한 열정을 가진 예술가", name: "승현", gender: "남", mbti: "ENTP", friendType: "C", volume: 85, taste: "댄스", applicationType: "시끄럽게 놀아요" }],
  [10, { id: 10, introduction: "공감과 소통을 중시하는 리더", name: "수아", gender: "여", mbti: "ENFJ", friendType: "A", volume: 70, taste: "팝", applicationType: "함께 즐겨요" }]
]);

// id로 친구 찾기
export const findFriendById = (id:number) => friends.get(id);