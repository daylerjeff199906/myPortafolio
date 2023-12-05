import { Card, CardBody, Chip } from "@nextui-org/react";
import { IconDialpad } from "@tabler/icons-react";

interface props {
  title: string;
  otherTitle: string;
  description: string;
  tools: string[];
  other: string[];
}

export function CardSkill({ props }: { props: props }) {
  return (
    <>
      <Card className="max-w-sm border-1" shadow="none">
        <CardBody className="">
          <div className="text-gray-500">
            <IconDialpad size={24} />
          </div>
          <h3 className="text-lg font-bold">
            {props.title || "Title default"}
          </h3>
          <h3 className="">
            {props.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
          </h3>
          <div>
            {props?.tools?.length > 0 && (
              <h3 className="font-bold  text-sm text-gray-500">Tools</h3>
            )}
            {props?.tools?.length > 0 &&
              props?.tools.map((item, index) => (
                <Chip size="sm" key={index}>
                  {item}
                </Chip>
              ))}
          </div>

          <div>
            {props?.other?.length > 0 && (
              <h3 className="font-bold  text-sm text-gray-500">Other</h3>
            )}
            {props?.other?.length > 0 &&
              props?.other.map((item, index) => (
                <Chip size="sm" key={index}>
                  {item}
                </Chip>
              ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
}
