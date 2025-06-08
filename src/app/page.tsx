import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Trophy, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Tìm hiểu về
              <span className="text-blue-600 dark:text-blue-400"> Vô Cảm</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chào các bạn học sinh thân mến! Chào mừng các bạn đến với cổng
              thông tin điện tử về bệnh vô cảm ở lứa tuổi vị thành niên trưởng
              THCS Chu Văn An – một không gian chia sẻ, học hỏi và thấu hiểu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/theory">
                  Bắt đầu học <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Link href="/quiz">Làm bài quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Hệ thống học tập toàn diện với nhiều công cụ hỗ trợ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Lý thuyết</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tìm hiểu các khái niệm cơ bản và nâng cao về vô cảm trong tâm
                  lý học
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Quiz & Đánh giá</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kiểm tra kiến thức với các câu hỏi trắc nghiệm và nhận điểm
                  đánh giá
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Đội ngũ chuyên gia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Được phát triển bởi đội ngũ có kinh nghiệm trong lĩnh vực tâm
                  lý học
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Học tập hiệu quả</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Phương pháp học tập tương tác, dễ hiểu và phù hợp với mọi đối
                  tượng
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Tham gia cùng chúng tôi để khám phá những kiến thức thú vị về tâm lý
            học vô cảm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/theory">Khám phá lý thuyết</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              <Link href="/team">Tìm hiểu về chúng tôi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
