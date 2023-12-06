import { Card, CardBody, Chip } from "@nextui-org/react";
import { IconDialpad } from "@tabler/icons-react";

interface Props {
  title: string;
  description: string;
  tools: string[];
  other: string[];
}

export function CardSkill({ title, description, tools, other }: Props) {
  return (
    <Card className=" border-1 p-3 sm:p-4" shadow="none">
      <CardBody>
        <div className="text-gray-500 mb-3">
          <IconDialpad size={34} className="border-2 rounded-lg p-1" />
        </div>
        <h3 className="text-lg font-bold capitalize">
          {title || "Title default"}
        </h3>
        <p className="line-clamp-2 mb-3">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
        </p>

        {tools?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm text-gray-500 mb-1">Tools</h3>
            {tools?.map((item, index) => (
              <Chip
                size="sm"
                key={index}
                className="mr-2 mb-2"
                variant="bordered"
                color="success"
              >
                {item}
              </Chip>
            ))}
          </div>
        )}

        {other?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm text-gray-500">Other</h3>
            {other?.map((item, index) => (
              <Chip
                size="sm"
                key={index}
                className="mr-2 mb-2"
                variant="bordered"
              >
                {item}
              </Chip>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
