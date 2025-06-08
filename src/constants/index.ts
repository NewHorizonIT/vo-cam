export const quizSets = {
  survey: {
    title: "Khảo sát về Vô cảm",
    description:
      "Kiểm tra mức độ vô cảm của bạn thông qua các tình huống thực tế",
    timeLimit: 600, // 10 minutes
    questions: [
      {
        id: 1,
        question: "Theo bạn, thế nào được coi là vô cảm?",
        options: [
          "Là khi con người biết quan tâm, chia sẻ với những người xung quanh.",
          "là một cách nói ẩn dụ dùng để chỉ hiện tượng con người ngày càng trở nên thờ ơ, lãnh đạm, thiếu quan tâm đến những vấn đề xung quanh, đặc biệt là nỗi đau, khó khăn hay bất hạnh của người khác.",
          "Là khi con người dễ xúc động và hay giúp đỡ mọi người.",
          "Là khi con người sống khép kín và không bao giờ tiếp xúc với xã hội.",
        ],
        correctAnswer: 1,
        explanation:
          "là một cách nói ẩn dụ dùng để chỉ hiện tượng con người ngày càng trở nên thờ ơ, lãnh đạm, thiếu quan tâm đến những vấn đề xung quanh, đặc biệt là nỗi đau, khó khăn hay bất hạnh của người khác.",
      },
      {
        id: 2,
        question:
          "Bạn có được nghe nói về vô cảm ở trường bạn trong các môn học, giờ chào cờ, sinh hoạt hay hoạt động ngoại khóa không?",
        options: [
          "Có, nhưng chỉ trong một vài môn học như Ngữ văn hoặc Giáo dục công dân.",
          "Không, chưa từng nghe nhắc đến.",
          "Có, vô cảm được nhắc đến trong nhiều hoạt động như môn học, giờ chào cờ, sinh hoạt lớp và ngoại khóa.",
          "Có nghe nói nhưng không hiểu rõ đó là gì.",
        ],
        correctAnswer: 2,
        explanation:
          "Có, vô cảm được nhắc đến trong nhiều hoạt động như môn học, giờ chào cờ, sinh hoạt lớp và ngoại khóa.",
      },
      {
        id: 3,
        question:
          "Nguyên nhân nào sau đây dẫn đến hiện tượng vô cảm ở một bộ phận giới trẻ hiện nay?",
        options: [
          "Do giới trẻ ngày nay luôn được sống trong môi trường đầy đủ tình cảm và sự quan tâm.",
          "Do mạng xã hội giúp giới trẻ thấu hiểu và chia sẻ cảm xúc tốt hơn.",
          "Do giới trẻ ngày càng chủ động tham gia các hoạt động tình nguyện, giúp đỡ cộng đồng.",
          "Do ảnh hưởng tiêu cực từ mạng xã hội và các phương tiện truyền thông khiến họ sống khép kín, ít giao tiếp.",
        ],
        correctAnswer: 3,
        explanation:
          "Do ảnh hưởng tiêu cực từ mạng xã hội và các phương tiện truyền thông khiến họ sống khép kín, ít giao tiếp.",
      },
      {
        id: 4,
        question: "Nếu thấy mẹ em bị bệnh, em sẽ làm gì?",
        options: [
          "Lờ đi vì nghĩ việc chăm sóc là của người lớn.",
          "Hỏi han, chăm sóc mẹ và phụ giúp việc nhà nếu có thể.",
          "Cảm thấy buồn nhưng không biết làm gì nên cứ im lặng.",
          "Rủ bạn đi chơi để quên đi chuyện đó cho đỡ buồn.",
        ],
        correctAnswer: 1,
        explanation: "Hỏi han, chăm sóc mẹ và phụ giúp việc nhà nếu có thể.",
      },
      {
        id: 5,
        question: "Nếu bạn thấy một bạn học bị bắt nạt, bạn sẽ...?",
        options: [
          "Giả vờ không thấy để khỏi phiền phức.",
          "Nói với giáo viên hoặc người lớn.",
          "Quay video đăng lên mạng.",
          "Cười theo cho vui.",
        ],
        correctAnswer: 1,
        explanation: "Nói với giáo viên hoặc người lớn.",
      },
      {
        id: 6,
        question:
          "Nếu một người bạn trong lớp bạn luôn im lặng, ít nói, có dấu hiệu buồn bã và tránh giao tiếp, bạn sẽ làm gì?",
        options: [
          "Lờ đi vì nghĩ bạn ấy không thích bị làm phiền.",
          "Kể với bạn khác để mọi người chú ý.",
          "Tìm cách tiếp cận, hỏi han nhẹ nhàng và chia sẻ với thầy cô nếu cần.",
          "Tránh tiếp xúc vì sợ liên lụy đến mình.",
        ],
        correctAnswer: 2,
        explanation:
          "Tìm cách tiếp cận, hỏi han nhẹ nhàng và chia sẻ với thầy cô nếu cần.",
      },
      {
        id: 7,
        question: "Những người nào dễ bị vô cảm?",
        options: [
          "Những người luôn sẵn sàng lắng nghe và chia sẻ với người khác.",
          "Những người biết quan tâm, giúp đỡ người gặp khó khăn.",
          "Những người thường thể hiện sự đồng cảm trong các tình huống xã hội.",
          "Những người thờ ơ, né tránh các mối quan hệ và không quan tâm đến cảm xúc của người khác.",
        ],
        correctAnswer: 3,
        explanation:
          "Những người thờ ơ, né tránh các mối quan hệ và không quan tâm đến cảm xúc của người khác.",
      },
      {
        id: 8,
        question:
          "Trong giờ hoạt động trải nghiệm, cách nào là không hiệu quả để giải quyết tình trạng vô cảm?",
        options: [
          "Tạo không gian để học sinh thể hiện cảm xúc và chia sẻ với nhau.",
          "Khuyến khích học sinh làm việc nhóm để tăng cường sự đồng cảm và hiểu biết.",
          "Sử dụng các trò chơi để giải trí và chơi chung với nhau, giúp học sinh giảm sự vô cảm và xa lánh.",
          "Để học sinh tự do, không định hướng hoạt động hay hỗ trợ cảm xúc.",
        ],
        correctAnswer: 3,
        explanation:
          "Để học sinh tự do, không định hướng hoạt động hay hỗ trợ cảm xúc.",
      },
      {
        id: 9,
        question:
          "Bạn cảm các tiết học hoạt động trải nghiệm ở trường như thế nào?",
        options: [
          "Rất chán,cảm thấy buồn ngủ",
          "Cảm thấy bình thường",
          "Cảm thấy chưa được thực hành chơi các trò chơi nhiều",
          "Rất vui,rất yêu thích tiết học.",
        ],
        correctAnswer: 3,
        explanation: "Rất vui,rất yêu thích tiết học.",
      },
      {
        id: 10,
        question:
          "Theo bạn có nên tổ chức các buổi tuyên truyền và ngăn ngừa tình trạng vô cảm cho học sinh không?",
        options: [
          "Không cần thiết vì học sinh tự biết cách sống có trách nhiệm.",
          "Nên tổ chức nhưng chỉ dành cho một số học sinh có vấn đề cá nhân.",
          "Chỉ nên tổ chức khi có dấu hiệu nghiêm trọng mới can thiệp.",
          "Nên tổ chức thường xuyên để nâng cao nhận thức và phòng tránh vô cảm cho tất cả học sinh.",
        ],
        correctAnswer: 3,
        explanation:
          "Nên tổ chức thường xuyên để nâng cao nhận thức và phòng tránh vô cảm cho tất cả học sinh.",
      },
    ],
  },
  basic: {
    title: "Trắc nghiệm mở rộng về Vô cảm",
    description:
      "Đánh giá nhận thức và thái độ về vô cảm trong môi trường học đường",
    timeLimit: 900, // 15 phút
    questions: [
      {
        id: 1,
        question:
          "Tình trạng vô cảm bạn nhìn thấy ở trường thường xảy ra ở đối tượng nào?",
        options: [
          "Chỉ xảy ra ở học sinh nam.",
          "Chỉ xảy ra ở học sinh nữ.",
          "Thường xảy ra ở cả học sinh nam và nữ.",
          "Không xảy ra ở học sinh.",
        ],
        correctAnswer: 2,
        explanation:
          "Vô cảm có thể xảy ra ở cả học sinh nam và nữ, không phân biệt giới tính.",
      },
      {
        id: 2,
        question: "Nếu bạn thấy một bạn học bị bắt nạt, bạn sẽ...?",
        options: [
          "Giả vờ không thấy để khỏi phiền phức.",
          "Nói với giáo viên hoặc người lớn.",
          "Quay video đăng lên mạng.",
          "Cười theo cho vui.",
        ],
        correctAnswer: 1,
        explanation:
          "Nói với người lớn là hành vi đúng đắn để giúp đỡ người bị bắt nạt.",
      },
      {
        id: 3,
        question: "Những người nào dễ bị vô cảm?",
        options: [
          "Những người luôn sẵn sàng lắng nghe và chia sẻ với người khác.",
          "Những người biết quan tâm, giúp đỡ người gặp khó khăn.",
          "Những người thường thể hiện sự đồng cảm trong các tình huống xã hội.",
          "Những người thờ ơ, né tránh các mối quan hệ và không quan tâm đến cảm xúc của người khác.",
        ],
        correctAnswer: 3,
        explanation:
          "Người thờ ơ và né tránh quan hệ xã hội dễ rơi vào trạng thái vô cảm.",
      },
      {
        id: 4,
        question:
          "Sau các hoạt động trải nghiệm này, bạn có cảm thấy tinh thần làm việc nhóm trong lớp học được nâng cao không?",
        options: [
          "Có, tinh thần làm việc nhóm trong lớp được cải thiện.",
          "Không, tinh thần làm việc nhóm vẫn như cũ.",
          "Một chút, nhưng không rõ rệt.",
          "Không, tinh thần làm việc nhóm giảm đi.",
        ],
        correctAnswer: 0,
        explanation:
          "Các hoạt động trải nghiệm thường giúp cải thiện tinh thần làm việc nhóm.",
      },
      {
        id: 5,
        question: "Câu nào sau đây đúng nhất để định nghĩa về vô cảm?",
        options: [
          "Là khi con người biết quan tâm, chia sẻ với những người xung quanh.",
          "Là một cách nói ẩn dụ dùng để chỉ hiện tượng con người ngày càng trở nên thờ ơ, lãnh đạm, thiếu quan tâm đến những vấn đề xung quanh, đặc biệt là nỗi đau, khó khăn hay bất hạnh của người khác.",
          "Là khi con người dễ xúc động và hay giúp đỡ mọi người.",
          "Là khi con người sống khép kín và không bao giờ tiếp xúc với xã hội.",
        ],
        correctAnswer: 1,
        explanation: "Đáp án 2 là định nghĩa rõ ràng và đầy đủ nhất về vô cảm.",
      },
      {
        id: 6,
        question: "Khi bạn biết bạn mình bị vô cảm, bạn sẽ làm gì?",
        options: [
          "Cố gắng nói chuyện và giúp bạn mình nhận ra cảm xúc của mình.",
          "Đưa bạn mình tham gia vào các hoạt động nhóm để tạo sự gắn kết.",
          "Cố gắng lắng nghe và hiểu cảm xúc của bạn mình, khuyến khích bạn chia sẻ.",
          "Im lặng và không can thiệp.",
        ],
        correctAnswer: 2,
        explanation:
          "Lắng nghe và khuyến khích chia sẻ là cách hỗ trợ người vô cảm hiệu quả.",
      },
      {
        id: 7,
        question: "Khi xem một bộ phim, cuốn truyện có nội dung vô cảm bạn sẽ:",
        options: [
          "Rút ra kinh nghiệm cho bản thân.",
          "Không quan tâm.",
          "Chỉ quan tâm đến các nhân vật đẹp hay xấu.",
          "Cảm thấy nhàm chán và không muốn theo dõi tiếp.",
        ],
        correctAnswer: 0,
        explanation:
          "Thái độ đúng đắn là rút ra bài học từ nội dung có chủ đề vô cảm.",
      },
      {
        id: 8,
        question: "Vô cảm gây ra những hậu quả gì?",
        options: [
          "Làm giảm đi sự gắn kết và đoàn kết trong tập thể.",
          "Tạo ra sự xa cách và thiếu sự hỗ trợ giữa các cá nhân.",
          "Tăng cường sự hợp tác và đoàn kết trong nhóm.",
          "Giúp mọi người dễ dàng hòa nhập và giúp đỡ nhau hơn.",
        ],
        correctAnswer: 0,
        explanation:
          "Vô cảm làm giảm sự đoàn kết và tương tác giữa các cá nhân.",
      },
      {
        id: 9,
        question:
          "Nếu một người bạn trong lớp bạn luôn im lặng, ít nói, có dấu hiệu buồn bã và tránh giao tiếp, bạn sẽ làm gì?",
        options: [
          "Lờ đi vì nghĩ bạn ấy không thích bị làm phiền.",
          "Kể với bạn khác để mọi người chú ý.",
          "Tìm cách tiếp cận, hỏi han nhẹ nhàng và chia sẻ với thầy cô nếu cần.",
          "Tránh tiếp xúc vì sợ liên lụy đến mình.",
        ],
        correctAnswer: 2,
        explanation:
          "Quan tâm đúng cách và báo cho người lớn nếu cần là việc nên làm.",
      },
      {
        id: 10,
        question:
          "Đang đi học về bạn thấy một đám đông đang bu quanh một bạn lớn đang đánh bạn nhỏ tuổi hơn ở nơi vắng vẻ. Bạn sẽ làm gì?",
        options: [
          "Lấy điện thoại ra quay phim rồi đưa lên mạng xã hội cho mọi người xem.",
          "Nhìn xong rồi đi.",
          "Nhào vô can ngăn.",
          "Gọi người lớn ở gần đấy giúp đỡ.",
        ],
        correctAnswer: 3,
        explanation: "Gọi người lớn can thiệp là hành vi đúng đắn và an toàn.",
      },
      {
        id: 11,
        question: "Câu nào là biểu hiện của người vô cảm?",
        options: [
          "Không quan tâm khi bạn bè gặp khó khăn.",
          "Quan tâm và lắng nghe khi bạn bè gặp khó khăn.",
          "Giúp đỡ bạn bè khi họ gặp vấn đề.",
          "Tham gia các hoạt động nhóm cùng bạn bè.",
        ],
        correctAnswer: 0,
        explanation:
          "Sự thờ ơ với khó khăn của người khác là biểu hiện điển hình của vô cảm.",
      },
      {
        id: 12,
        question: "Nếu thấy mẹ em bị bệnh, em sẽ làm gì?",
        options: [
          "Lờ đi vì nghĩ việc chăm sóc là của người lớn.",
          "Hỏi han, chăm sóc mẹ và phụ giúp việc nhà nếu có thể.",
          "Cảm thấy buồn nhưng không biết làm gì nên cứ im lặng.",
          "Rủ bạn đi chơi để quên đi chuyện đó cho đỡ buồn.",
        ],
        correctAnswer: 1,
        explanation:
          "Biết chăm sóc và phụ giúp là biểu hiện của tình cảm và trách nhiệm.",
      },
      {
        id: 13,
        question:
          "Bạn có được nghe nói về vô cảm ở trường bạn trong các môn học, giờ chào cờ, sinh hoạt hay hoạt động ngoại khóa không?",
        options: [
          "Có, nhưng chỉ trong một vài môn học như Ngữ văn hoặc Giáo dục công dân.",
          "Không, chưa từng nghe nhắc đến.",
          "Có, vô cảm được nhắc đến trong nhiều hoạt động như môn học, giờ chào cờ, sinh hoạt lớp và ngoại khóa.",
          "Có nghe nói nhưng không hiểu rõ đó là gì.",
        ],
        correctAnswer: 2,
        explanation:
          "Việc tích hợp giáo dục giá trị sống vào nhiều hoạt động giúp học sinh nhận thức tốt hơn về vô cảm.",
      },
      {
        id: 14,
        question:
          "Bạn cảm nhận các tiết học hoạt động trải nghiệm ở trường như thế nào?",
        options: [
          "Rất chán, cảm thấy buồn ngủ.",
          "Cảm thấy bình thường.",
          "Cảm thấy chưa được thực hành chơi các trò chơi nhiều.",
          "Rất vui, rất yêu thích tiết học.",
        ],
        correctAnswer: 3,
        explanation:
          "Sự yêu thích các tiết học trải nghiệm góp phần giảm sự vô cảm.",
      },
      {
        id: 15,
        question:
          "Đã bao giờ bạn truy cập vào các trang web, trang mạng xã hội để tìm hiểu về tình trạng vô cảm chưa?",
        options: [
          "Chưa bao giờ.",
          "Không bao giờ nghĩ tới.",
          "Không thích tìm hiểu.",
          "Thỉnh thoảng.",
        ],
        correctAnswer: 3,
        explanation:
          "Việc tìm hiểu trên mạng cho thấy sự quan tâm đến vấn đề xã hội.",
      },
      {
        id: 16,
        question:
          "Theo bạn có nên tổ chức các buổi tuyên truyền và ngăn ngừa tình trạng vô cảm cho học sinh không?",
        options: [
          "Không cần thiết vì học sinh tự biết cách sống có trách nhiệm.",
          "Nên tổ chức nhưng chỉ dành cho một số học sinh có vấn đề cá nhân.",
          "Chỉ nên tổ chức khi có dấu hiệu nghiêm trọng mới can thiệp.",
          "Nên tổ chức thường xuyên để nâng cao nhận thức và phòng tránh vô cảm cho tất cả học sinh.",
        ],
        correctAnswer: 3,
        explanation:
          "Giáo dục phòng ngừa cần thực hiện thường xuyên và trên diện rộng.",
      },
      {
        id: 17,
        question:
          "Nguyên nhân nào sau đây dẫn đến hiện tượng vô cảm ở một bộ phận giới trẻ hiện nay?",
        options: [
          "Do giới trẻ ngày nay luôn được sống trong môi trường đầy đủ tình cảm và sự quan tâm.",
          "Do mạng xã hội giúp giới trẻ thấu hiểu và chia sẻ cảm xúc tốt hơn.",
          "Do giới trẻ ngày càng chủ động tham gia các hoạt động tình nguyện, giúp đỡ cộng đồng.",
          "Do ảnh hưởng tiêu cực từ mạng xã hội và các phương tiện truyền thông khiến họ sống khép kín, ít giao tiếp.",
        ],
        correctAnswer: 3,
        explanation:
          "Mạng xã hội có thể khiến giới trẻ ngày càng sống khép kín hơn nếu sử dụng sai cách.",
      },
      {
        id: 18,
        question:
          "Trong giờ hoạt động trải nghiệm, cách nào là không hiệu quả để giải quyết tình trạng vô cảm?",
        options: [
          "Tạo không gian để học sinh thể hiện cảm xúc và chia sẻ với nhau.",
          "Khuyến khích học sinh làm việc nhóm để tăng cường sự đồng cảm và hiểu biết.",
          "Sử dụng các trò chơi để giải trí và chơi chung với nhau, giúp học sinh giảm sự vô cảm và xa lánh.",
          "Để học sinh tự do, không định hướng hoạt động hay hỗ trợ cảm xúc.",
        ],
        correctAnswer: 3,
        explanation:
          "Thiếu định hướng khiến học sinh không học được kỹ năng cảm xúc và xã hội.",
      },
    ],
  },
};

export type QuizSet = keyof typeof quizSets;
