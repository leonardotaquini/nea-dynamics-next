import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import Image, { type StaticImageData } from "next/image";

interface CardItemProps {
  title: string;
  content: string;
  image: StaticImageData;
  end?: boolean;
}

export const CardItem = ({ title, content, image, end }: CardItemProps) => {
  return (
    <Card className="grid grid-cols-12 col-span-12 sm:w-3/4 ">
      <div
        className={`col-span-12 sm:col-span-6 ${
          end ? "sm:order-2" : "sm:order-1"
        }`}
      >
          <Image
            src={image}
            className="h-full object-cover transform transition-transform duration-300 hover:scale-105"
            alt={title}
          />
      </div>
      <div
        className={`col-span-12 sm:col-span-6 ${
          end ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <CardHeader>
          <CardTitle
            className="text-center text-2xl font-mono text-white rounded p-3"
            style={{ backgroundColor: "#243579" }}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className="sm:text-justify text-slate-500 h-full xl:text-lg"
          style={{ lineHeight: "35px" }}
        >
          <p>{content}</p>
        </CardContent>
      </div>
    </Card>
  );
};
