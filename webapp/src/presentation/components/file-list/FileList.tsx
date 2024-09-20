import { CardFile } from "../card-file/CardFile";
import { NoResultCard } from "../no-result/NoResultCard";

type TFileList = {
  files: File[];
};

export const FileList = ({ files }: TFileList) => {
  return (
    <section className="h-3/4 w-4/5 flex flex-col border  border-waikawa-gray-500 rounded-lg mt-3 p-5">
      <h2 className="text-sm font-semibold">Upload Files</h2>
      <h4 className="text-xs">View the uploaded files here</h4>
      <div className="w-full h-full border border-waikawa-gray-500 rounded-lg mt-2">
        <div className="flex gap-2 flex-wrap p-2 justify-center items-center">
          {files.length > 0 ? (
            files.map((file) => (
              <CardFile
                key={file.name}
                name={file.name}
                size={file.size}
                type={file.type}
              />
            ))
          ) : (
            <div className="flex flex-row justify-center items-center ">
              <NoResultCard />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
