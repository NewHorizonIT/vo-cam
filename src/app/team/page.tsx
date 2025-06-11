import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Award, Facebook, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Lâm Cẩm Giang",
    role: "Nhóm trưởng",
    avatar: "/m1.png",
    bio: "Học sinh THPT với tinh thần lãnh đạo và định hướng phát triển nhóm hiệu quả.",
    education: "THPT Nguyễn Bỉnh Khiêm",
    experience: "2009",
    location: "Chư Sê, Gia Lai",
    social: {
      email: "gianglaam04@gmail.com",
      facebook: "https://www.facebook.com/lam.yangg",
    },
  },
  {
    id: 2,
    name: "Nguyễn Mai Phát",
    role: "Thành viên",
    avatar: "/m2.png",
    bio: "Học sinh đầy năng động, tích cực tham gia vào các hoạt động nhóm và học tập.",
    education: "THPT Nguyễn Bỉnh Khiêm",
    experience: "2009",
    location: "Chư Sê, Gia Lai",
    social: {
      email: "nguyenmaiphat07012009@gmail.com",
      facebook: "https://www.facebook.com/mai.phat.615165",
    },
  },
  {
    id: 3,
    name: "Vũ Hải Hoàng Dũng",
    role: "Thành viên",
    avatar: "/m4.png",
    bio: "Học sinh có tinh thần hợp tác cao và đam mê khám phá kiến thức mới.",
    education: "THPT Nguyễn Bỉnh Khiêm",
    experience: "2009",
    location: "Chư Sê, Gia Lai",
    social: {
      email: "vuhaihoangdung8@gmail.com",
      facebook: "https://www.facebook.com/hoang.dung.268701",
    },
  },
  {
    id: 4,
    name: "Lê Công Thành",
    role: "Thành viên",
    avatar: "/m3.png",
    bio: "Học sinh tích cực, yêu thích công nghệ và luôn sẵn sàng hỗ trợ nhóm.",
    education: "THPT Nguyễn Bỉnh Khiêm",
    experience: "2009",
    location: "Chư Sê, Gia Lai",
    social: {
      email: "lecongthanhiq@gmail.com",
      facebook: "https://www.facebook.com/lcthanh109",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Đội ngũ của chúng tôi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gặp gỡ những chuyên gia tâm huyết đã cùng nhau xây dựng nền tảng học
            tập về vô cảm
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={80}
                    height={80}
                    className=" border-2 border-gray-200 dark:border-gray-700"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {member.role}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Award className="w-4 h-4 mr-2" />
                    {member.education}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Năm sinh: {member.experience}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {member.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.social.email}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm">
                    <a
                      href={member.social.facebook}
                      className="flex items-center"
                    >
                      <Facebook className="w-4 h-4 mr-1" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
