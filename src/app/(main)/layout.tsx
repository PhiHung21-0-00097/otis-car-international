import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ReactNode } from "react";

// export const viewport: Viewport = {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//     userScalable: false
//   }

// export const metadata: Metadata = {
//     // metadataBase: new URL("acb"),
//     title: 'Viễn thông A',
//     description:
//       'Hệ thống cửa hàng bán lẻ điện thoại, máy tính laptop, smartwatch, gia dụng, thiết bị IT, phụ kiện chính hãng - Giá tốt, trả góp 0%, giao miễn phí.',
//     keywords:
//       'vienthonga, vienthong a, điện thoại, máy tính, laptop, smartwatch, gia dụng, thiết bị IT, phụ kiện',
//     openGraph: {
//       images: [
//         {
//           url: 'https://gofiber.b-cdn.net/Vienthonga/ulEX1Dk.png',
//           width: 1094,
//           height: 500
//         }
//       ],
//       locale: 'vi_VN',
//       type: 'website'
//     }
//   }
export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
