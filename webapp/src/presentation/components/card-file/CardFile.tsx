import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import { RiDeleteBin7Line } from "react-icons/ri";
import icon_doc from "../../../assets/icons/icon-doc.svg";

export type TCardFileProps = {
  name: string;
  size: number;
  type: string;
};

export const CardFile = (file: TCardFileProps) => {
  const { name, } = file;
  return (
    <Card
      shadow="sm"
      className="border border-waikawa-gray-500 bg-waikawa-gray-800/50 rounded-lg w-40"
    >
      <CardBody className="overflow-visible py-2 justify-center items-center rounded-lg bg-waikawa-gray-600">
        <Image
          alt={name}
          className="w-[70px] object-contain h-[140px]"
          src={icon_doc}
        />
      </CardBody>
      <CardFooter className="justify-between">
        <div className="text-xs font-semibold truncate">{name}</div>
        <div className="">
          <Button isIconOnly onPress={() => console.log("press")}>
            <RiDeleteBin7Line className="text-xl" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
