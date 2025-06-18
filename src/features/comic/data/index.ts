import type { Comic } from "../type";

// Truyện mẫu 1: Câu chuyện về Vô cảm
export const vocamStory: Comic = {
  id: "vo-cam-story",
  title: "Chỉ là mẹ ốm thôi",
  description:
    "Một câu chuyện minh họa về hiện tượng vô cảm trong cuộc sống hiện đại",
  coverImage: "/comic/Picture1.png",
  audioUrl: "/audio/comic_1.m4a", // 1 file audio cho toàn bộ truyện
  totalDuration: 115, // 3 phút
  pages: [
    {
      id: 1,
      imageUrl: "/comic/Picture1.png",
      text: "Một buổi sáng bình thường, An thức dậy và chuẩn bị đi học...",
      startTime: 0,
      endTime: 2,
    },
    {
      id: 2,
      imageUrl: "/comic/Picture2.png",
      text: "Trên đường đi học, An thấy một bạn nhỏ bị ngã xe đạp...",
      startTime: 2,
      endTime: 18,
    },
    {
      id: 3,
      imageUrl: "/comic/Picture3.png",
      text: "An nhìn thấy nhưng chỉ đi qua mà không quan tâm...",
      startTime: 18,
      endTime: 35,
    },
    {
      id: 4,
      imageUrl: "/comic/Picture4.png",
      text: "Ở trường, An thấy bạn Bình đang buồn vì bị bắt nạt...",
      startTime: 35,
      endTime: 57,
    },
    {
      id: 5,
      imageUrl: "/comic/Picture5.png",
      text: "An biết nhưng chọn cách lờ đi, không muốn dính líu...",
      startTime: 57,
      endTime: 71,
    },

    {
      id: 6,
      imageUrl: "/comic/Picture7.png",
      text: "An quyết định thay đổi và bắt đầu quan tâm đến người khác...",
      startTime: 71,
      endTime: 86,
    },
    {
      id: 7,
      imageUrl: "/comic/Picture8.png",
      text: "Từ đó, An trở thành một người biết quan tâm và giúp đỡ mọi người.",
      startTime: 86,
      endTime: 115,
    },
  ],
};

// Truyện mẫu 2: Tình bạn và Đồng cảm
export const friendshipStory: Comic = {
  id: "friendship-story",
  title: "Bạn ấy ngã rồi!",
  description: "Câu chuyện về tầm quan trọng của sự đồng cảm trong tình bạn",
  coverImage: "/comic/Picture9.png",
  audioUrl: "/audio/comic_2.m4a",
  totalDuration: 62,
  pages: [
    {
      id: 1,
      imageUrl: "/comic/Picture9.png",
      text: "Lan và Hoa là hai người bạn thân từ nhỏ...",
      startTime: 0,
      endTime: 2,
    },
    {
      id: 2,
      imageUrl: "/comic/Picture10.png",
      text: "Một ngày, gia đình Hoa gặp khó khăn tài chính...",
      startTime: 2,
      endTime: 22,
    },
    {
      id: 3,
      imageUrl: "/comic/Picture11.png",
      text: "Lan nhận ra sự thay đổi và chủ động chia sẻ với Hoa...",
      startTime: 22,
      endTime: 32,
    },
    {
      id: 4,
      imageUrl: "/comic/Picture12.png",
      text: "Lan không chỉ lắng nghe mà còn tìm cách giúp đỡ...",
      startTime: 32,
      endTime: 51,
    },
    {
      id: 5,
      imageUrl: "/comic/Picture13.png",
      text: "Hai bạn cùng nhau vượt qua khó khăn...",
      startTime: 51,
      endTime: 62,
    },
  ],
};

// Truyện mẫu 3: Gia đình và Quan tâm
export const familyStory: Comic = {
  id: "family-story",
  title: "Tình tay ba",
  description: "Tầm quan trọng của sự quan tâm trong gia đình",
  coverImage: "/comic/Picture14.png",
  audioUrl: "/audio/comic_3.m4a", // 1 file audio cho toàn bộ truyện
  totalDuration: 186,
  pages: [
    {
      id: 1,
      imageUrl: "/comic/Picture14.png",
      text: "Gia đình anh Minh gồm 4 người...",
      startTime: 0,
      endTime: 3,
    },
    {
      id: 2,
      imageUrl: "/comic/Picture15.png",
      text: "Mọi người đều bận rộn với công việc riêng...",
      startTime: 3,
      endTime: 11,
    },
    {
      id: 3,
      imageUrl: "/comic/Picture16.png",
      text: "Dần dần, các thành viên trở nên xa cách...",
      startTime: 11,
      endTime: 40,
    },
    {
      id: 4,
      imageUrl: "/comic/Picture17.png",
      text: "Minh nhận ra gia đình cần thời gian bên nhau...",
      startTime: 40,
      endTime: 53,
    },
    {
      id: 5,
      imageUrl: "/comic/Picture18.png",
      text: "Anh đề xuất những hoạt động chung...",
      startTime: 53,
      endTime: 67,
    },
    {
      id: 6,
      imageUrl: "/comic/Picture19.png",
      text: "Gia đình trở nên gắn kết và hạnh phúc hơn.",
      startTime: 67,
      endTime: 83,
    },
    {
      id: 7,
      imageUrl: "/comic/Picture20.png",
      text: "Gia đình trở nên gắn kết và hạnh phúc hơn.",
      startTime: 83,
      endTime: 106,
    },
    {
      id: 8,
      imageUrl: "/comic/Picture21.png",
      text: "Gia đình trở nên gắn kết và hạnh phúc hơn.",
      startTime: 106,
      endTime: 148,
    },
    {
      id: 9,
      imageUrl: "/comic/Picture22.png",
      text: "Gia đình trở nên gắn kết và hạnh phúc hơn.",
      startTime: 148,
      endTime: 186,
    },
  ],
};

// Danh sách tất cả truyện
export const allComics: Comic[] = [vocamStory, friendshipStory, familyStory];
