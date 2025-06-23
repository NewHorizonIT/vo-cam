import { Brain, Github, Facebook, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">Vô Cảm</span>
            </div>
            <p className="text-muted-foreground">
              Nền tảng học tập về bệnh vô cảm, cung cấp kiến thức chuyên sâu và
              công cụ đánh giá hiệu quả.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/theory"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lý thuyết
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Đội ngũ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Facebook className="h-5 w-5" />
                <a href="https://www.facebook.com/share/19AdfXChpJ/?mibextid=wwXIfr">
                  Rèn luyện sự đồng cảm
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>vuhaihoangdung8@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Github className="h-5 w-5" />
                <a href="https://github.com/peterlegend29/peter">
                  peterlegend29/peter
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/qr.jpg" alt="Logo" width={200} height={100} />
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
