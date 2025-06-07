"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, ArrowRight, Brain, Heart, Eye } from "lucide-react";

const theoryTopics = [
  {
    id: 1,
    title: "Khái niệm cơ bản về Vô cảm",
    description:
      "Tìm hiểu định nghĩa, đặc điểm và các biểu hiện của tình trạng vô cảm trong tâm lý học",
    duration: "15 phút",
    level: "Cơ bản",
    icon: Brain,
    content: [
      "Định nghĩa vô cảm (Apathy)",
      "Phân biệt vô cảm và trầm cảm",
      "Các biểu hiện thường gặp",
      "Nguyên nhân gây ra vô cảm",
    ],
  },
  {
    id: 2,
    title: "Cơ chế tâm lý của Vô cảm",
    description:
      "Khám phá các cơ chế tâm lý và sinh học đằng sau tình trạng vô cảm",
    duration: "20 phút",
    level: "Trung bình",
    icon: Heart,
    content: [
      "Hệ thần kinh và vô cảm",
      "Vai trò của dopamine",
      "Ảnh hưởng đến động lực",
      "Mối liên hệ với các rối loạn khác",
    ],
  },
  {
    id: 3,
    title: "Chẩn đoán và Đánh giá",
    description: "Các phương pháp chẩn đoán và công cụ đánh giá mức độ vô cảm",
    duration: "25 phút",
    level: "Nâng cao",
    icon: Eye,
    content: [
      "Thang đo vô cảm (AES)",
      "Phương pháp phỏng vấn lâm sàng",
      "Đánh giá mức độ nghiêm trọng",
      "Theo dõi tiến triển",
    ],
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
            Khám phá kiến thức chuyên sâu về tâm lý học vô cảm thông qua các bài
            học có cấu trúc
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
                        <CardDescription className="text-base">
                          {topic.description}
                        </CardDescription>
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
                            <DialogDescription>
                              {topic.description}
                            </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-[60vh] pr-4"></ScrollArea>
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
