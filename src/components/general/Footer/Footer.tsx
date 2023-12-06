import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <div className="dark:bg-slate-900 text-white">
      <Divider />
      <div className="container max-w-5xl py-2">
        <h3 className="text-center">
          © Made with <span className="text-red-500 animate-love">❤</span> by
          Jeff | {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
}
