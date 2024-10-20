/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { match } from "ts-pattern";

type FileBoxProps = {
  file: any;
};

type FileBoxState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; error: string };

export default function FileBox({ file }: FileBoxProps) {
  const [state, setState] = useState<FileBoxState>({ status: "idle" });

  const isDisabled = false;

  const baseClasses =
    "shadow-sm rounded-lg w-full p-3 border transition-all duration-200";
  const stateClasses = isDisabled
    ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
    : "border-gray-300 active:border-gray-400 hover:bg-gray-100 cursor-pointer";

  return match(state)
    .with({ status: "loading" }, () => (
      <div className={`${baseClasses} ${stateClasses} flex items-center`}>
        <span className="loading loading-spinner loading-md mr-2"></span>
        <span>Checking file...</span>
      </div>
    ))
    .with({ status: "error" }, ({ error }) => (
      <div
        className={`${baseClasses} ${stateClasses} border-red-300 bg-red-50 text-red-600`}
      >
        Error: {error}
      </div>
    ))
    .otherwise(() => (
      <div className={`${baseClasses} ${stateClasses}`}>
        <span className="flex-1">{file.Name}</span>
      </div>
    ));
}
