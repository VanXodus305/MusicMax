import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Props {
  title: string;
  image: string;
  url?: string;
}

const ImageCard = ({ title, image, url }: Props) => {
  return (
    <Card
      isPressable
      className="bg-transparent hover:bg-primary select-none hover:scale-95 group shrink-0 w-[160px] snap-center"
      classNames={{
        footer: [
          "px-2",
          "border-b-3",
          "border-transparent",
          "group-hover:border-secondary",
        ],
      }}
      shadow="lg"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          alt={title}
          className="object-cover w-[160px] h-[160px]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-[16px] justify-start text-neutral-100 max-w-[160px]">
        <h1 className="text-left">{title}</h1>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
