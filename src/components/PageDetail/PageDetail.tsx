/* eslint-disable @typescript-eslint/no-explicit-any */
import NotdirList from "../NotdirList/NotdirList";
import FileList from "../FileList/FileList";

type PageDetailProps = {
  page: any;
};

export default function PageDetail({ page }: PageDetailProps) {
  console.log(navigator.userAgent);

  return (
    <div className="w-full h-full flex flex-col gap-10">
      {page.Notdirs.length > 0 && <NotdirList initialNotdir={page.Notdirs} />}
      {page.Files.length > 0 && <FileList initialFiles={page.Files} />}
    </div>
  );
}
