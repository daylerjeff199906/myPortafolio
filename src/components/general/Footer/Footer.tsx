import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Divider />
      <div className="container max-w-5xl py-4">
        <h3 className="text-center">
          © Made with{" "}
          <span className="text-red-500 inline-flex animate-love">❤</span> by
          Jeff | {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
}
