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
    <Card className="max-w-sm border-1" shadow="none">
      <CardBody>
        <div className="text-gray-500">
          <IconDialpad size={24} />
        </div>
        <h3 className="text-lg font-bold">{title || "Title default"}</h3>
        <p>
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
        </p>

        {tools?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm text-gray-500">Tools</h3>
            {tools.map((item, index) => (
              <Chip size="sm" key={index}>
                {item}
              </Chip>
            ))}
          </div>
        )}

        {other?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm text-gray-500">Other</h3>
            {other.map((item, index) => (
              <Chip size="sm" key={index}>
                {item}
              </Chip>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
