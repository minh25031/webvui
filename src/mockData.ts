// Định nghĩa kiểu dữ liệu để dùng ở các file khác
export interface Flashcard {
  kr: string;
  vi: string;
  type: string;
}

export const KOREAN_LESSONS: Flashcard[] = [
  // Chủ đề: Thời tiết
  { kr: "날씨", vi: "Thời tiết", type: "Thời tiết" },
  { kr: "해 / sunny", vi: "Trời nắng", type: "Thời tiết" },
  { kr: "비 / rainy", vi: "Trời mưa", type: "Thời tiết" },
  { kr: "추워요", vi: "Trời lạnh", type: "Thời tiết" },
  { kr: "더워요", vi: "Trời nóng", type: "Thời tiết" },
  
  // Chủ đề: Thời gian
  { kr: "지금", vi: "Bây giờ", type: "Thời gian" },
  { kr: "오늘", vi: "Hôm nay", type: "Thời gian" },
  { kr: "내일", vi: "Ngày mai", type: "Thời gian" },
  { kr: "아침", vi: "Buổi sáng", type: "Thời gian" },
  { kr: "밤", vi: "Buổi đêm", type: "Thời gian" },
  
  // Chủ đề: Số giờ
  { kr: "한 시", vi: "1 giờ", type: "Số giờ" },
  { kr: "두 시", vi: "2 giờ", type: "Số giờ" },
  { kr: "세 시", vi: "3 giờ", type: "Số giờ" },
  { kr: "네 시", vi: "4 giờ", type: "Số giờ" },
  
  // Chủ đề: Số đếm
  { kr: "하나", vi: "Số 1", type: "Số đếm" },
  { kr: "둘", vi: "Số 2", type: "Số đếm" },
  { kr: "셋", vi: "Số 3", type: "Số đếm" }
];