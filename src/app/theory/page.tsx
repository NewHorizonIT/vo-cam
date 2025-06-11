"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, ArrowRight, Brain, Heart } from "lucide-react";
import LessonModal from "@/components/lesson-modal";

const theoryTopics = [
  {
    id: 1,
    title: "Khái niệm cơ bản về Vô cảm",
    duration: "15 phút",
    level: "Cơ bản",
    icon: Brain,
    content: [
      "Định nghĩa vô cảm (Apathy)",
      "Nguyên nhân dẫn đến vô cảm",
      "Các biểu hiện thường gặp",
      "Hậu quả của vô cảm",
    ],
    lesson: `
       <div class="container">
    <h2>Định nghĩa?</h2>
    <p>“Bệnh vô cảm” không phải là một căn bệnh trong y học, mà là một căn bệnh xã hội, thể hiện qua thái độ thờ ơ, lạnh lùng, dửng dưng trước những sự việc, hiện tượng xung quanh, đặc biệt là trước nỗi đau, khó khăn hoặc hạnh phúc của người khác.</p>
    <p>Người vô cảm thường thiếu sự quan tâm và đồng cảm, không phản ứng về mặt cảm xúc với những điều đáng ra cần được chú ý, chia sẻ hoặc giúp đỡ. Họ không buồn, không vui, không tức giận trước các vấn đề của xã hội, thậm chí là bất công hay bất hạnh.</p>
    <p>Bệnh vô cảm làm mất đi tính nhân văn trong mỗi con người, khiến con người trở nên lạnh lùng, chỉ biết đến bản thân, từ đó gây ảnh hưởng tiêu cực đến mối quan hệ giữa người với người và sự phát triển lành mạnh của xã hội.</p>

    <h2>Nguyên nhân dẫn đến bệnh vô cảm</h2>
    <ul class="list-disc pl-5">
      <li>Chấn thương tâm lý, tổn thương cảm xúc</li>
      <li>Rối loạn tâm thần (trầm cảm, lo âu, tâm thần phân liệt)</li>
      <li>Sử dụng chất kích thích, ma túy</li>
      <li>Mệt mỏi, căng thẳng kéo dài</li>
      <li>Bệnh lý thần kinh (Parkinson, Alzheimer, đa xơ cứng...)</li>
      <li>Tác dụng phụ của thuốc điều trị tâm thần</li>
      <li>Môi trường sống thiếu tình cảm, sự quan tâm và hỗ trợ</li>
      <li>Yếu tố di truyền, sinh học</li>
      <li>Lối sống ích kỷ, thực dụng</li>
      <li>Thiếu giáo dục về đạo đức, nhân cách</li>
      <li>Tiếp xúc thường xuyên với bạo lực, thông tin tiêu cực</li>
      <li>Ảnh hưởng từ môi trường xã hội vô cảm, vô tâm</li>
    </ul>

    <h2>Dấu hiệu cho thấy người đó bị bệnh vô cảm</h2>
    <ul class="list-disc pl-5">
      <li>Thiếu cảm xúc, không thể thể hiện cảm xúc</li>
      <li>Mất quan tâm đến người khác và sự việc xung quanh</li>
      <li>Không phản ứng mạnh mẽ trước vui buồn, đau đớn</li>
      <li>Giao tiếp cạn, ít chia sẻ cảm xúc</li>
      <li>Cảm giác trống rỗng, mất hứng thú với hoạt động hàng ngày</li>
      <li>Lạnh lùng, thờ ơ trước nỗi đau hoặc hoàn cảnh khó khăn của người khác</li>
      <li>Thiếu sự đồng cảm trong các mối quan hệ</li>
      <li>Ít hoặc không bộc lộ nét mặt, cử chỉ cảm xúc</li>
      <li>Thường lảng tránh các cuộc trò chuyện sâu sắc hoặc mang tính tình cảm</li>
      <li>Dễ phớt lờ các hành vi xấu, tiêu cực trong xã hội</li>
      <li>Thường chỉ quan tâm đến lợi ích cá nhân</li>
      <li>Không cảm thấy tội lỗi hay day dứt sau hành vi sai trái</li>
    </ul>
    `,
  },
  {
    id: 2,
    title: "Các giải pháp đẩy lùi bênh 'Vô cảm' ",
    duration: "20 phút",
    level: "Trung bình",
    icon: Heart,
    content: ["Một số giải pháp đẩy lùi bệnh vô cảm"],
    lesson: `
      <h2>Giải pháp giúp người đó hết vô cảm</h2>
  <ul class="list-disc pl-5">
    <li>Tư vấn tâm lý, trị liệu tâm thần khi cần thiết.
      <img src="/p1.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Điều trị y học theo chỉ định của bác sĩ nếu có liên quan đến bệnh lý thần kinh hoặc tâm thần.</li>
    <li>Hỗ trợ xã hội, xây dựng mối quan hệ tích cực.</li>
    <li>Tăng cường giao tiếp, chia sẻ cảm xúc với người thân, bạn bè.
      <img src="/p6.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Tham gia các hoạt động xã hội, tình nguyện, giúp đỡ người khác.
      <img src="/p3.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Rèn luyện kỹ năng lắng nghe và đồng cảm.</li>
    <li>Viết nhật ký cảm xúc hàng ngày để hiểu và kết nối nội tâm.
      <img src="/p2.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Tham gia các khóa học, hoạt động phát triển trí tuệ cảm xúc (EQ).</li>
    <li>Tham gia các buổi chia sẻ nhóm, trị liệu nhóm để học cách bộc lộ cảm xúc an toàn.</li>
    <li>Trải nghiệm thực tế tại các mái ấm, viện dưỡng lão để khơi gợi lòng trắc ẩn.</li>
    <li>Đọc sách, xem phim có nội dung nhân văn.</li>
    <li>Tạm giảm tiếp xúc với tin tức tiêu cực, nội dung bạo lực trên mạng xã hội.</li>
    <li>Thực hành các hoạt động thể thao, nghệ thuật để giải tỏa căng thẳng và kết nối cảm xúc.</li>
      <img src="/p7.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Sống chậm lại, dành thời gian suy ngẫm, thiền định hoặc kết nối với thiên nhiên.</li>
    <li>Thực hiện những hành động tử tế mỗi ngày để hình thành thói quen yêu thương.</li>
    <li>Được giáo viên, cha mẹ đồng hành, lắng nghe thay vì phán xét.
      <img src="/p5.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Giáo dục đạo đức, nhân cách từ gia đình và nhà trường.
      <img src="/p8.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
    <li>Tạo môi trường sống tích cực, ấm áp, chan hòa tình cảm.
      <img src="/p4.jpg" alt="Hình ảnh minh họa" class="w-full h-auto rounded-lg my-4">
    </li>
  </ul>`,
  },
];

export default function TheoryPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lý thuyết về Vô cảm
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá kiến thức chuyên sâu về bệnh &qute;vô cảm&qute; thông qua
            các bài học có cấu trúc
          </p>
        </div>

        {/* Theory Topics */}
        <div className="grid gap-8 mb-12">
          {theoryTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {topic.title}
                        </CardTitle>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge
                        variant={
                          topic.level === "Cơ bản"
                            ? "default"
                            : topic.level === "Trung bình"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {topic.level}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {topic.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Nội dung chính:</h4>
                      <ul className="space-y-2">
                        {topic.content.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full md:w-auto">
                            Bắt đầu học
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-full max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                              {topic.title}
                            </DialogTitle>
                          </DialogHeader>
                          <ScrollArea className="h-[60vh] pr-4">
                            <LessonModal data={topic.lesson}></LessonModal>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
