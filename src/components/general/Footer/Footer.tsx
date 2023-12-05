import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <>
      <Divider />
      <div className="container max-w-5xl py-2">
        <h3 className="text-center">
          Made with <span className="text-red-500">❤</span> by Jeff
        </h3>
      </div>
    </>
  );
}
