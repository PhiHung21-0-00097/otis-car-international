import { Metadata } from "next";
import Image from "next/image";
import { bmw, camry, mer } from "@/public/images";

export const metadata: Metadata = {
  title: "Viễn Thông A",
};

const listImageCar = [
  {
    title: "Mercedes",
    image: mer,
  },
  { title: "BMW", image: bmw },
  { title: "Lexus", image: camry },
];
export default function HomePage() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row grid grid-cols-12">
          {listImageCar.map((item, index) => (
            <div key={index} className="col-card-car col-span-4">
              <div className="card">
                <Image
                  src={item.image}
                  alt=""
                  className="z-50 w-44 h-60"
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
