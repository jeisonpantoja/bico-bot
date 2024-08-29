import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RiDeleteBin7Line, RiUploadLine } from "react-icons/ri";
import icon_doc from "../../../assets/icons/icon-doc.svg";
import { CardFile } from "../card-file/CardFile";

export const DropzoneFile = () => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <form className="h-1/3 w-full flex flex-col justify-center items-center">
        <div className="w-4/5 h-3/4 bg-blue-400 border border-dashed rounded-lg">
          <div
            {...getRootProps()}
            className="bg-waikawa-gray-600 w-ful flex flex-col justify-center items-center h-full"
          >
            <div>
              <RiUploadLine className="text-4xl mb-5" />
            </div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  Drag and drop some files here or click to select files
                </div>
                <div className="text-xs text-waikawa-gray-800">
                  You can upload markdown files
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-4/5 flex flex-row justify-end mt-2">
          <Button className="bg-transparent border border-waikawa-gray-500 mr-3 hover:bg-waikawa-gray-600 disabled:bg-waikawa-gray-950 text-waikawa-gray-50 px-4 py-1 rounded-lg">
            Discard
          </Button>
          <Button
            type="submit"
            className="bg-waikawa-gray-500 hover:bg-waikawa-gray-600 disabled:bg-waikawa-gray-950 text-waikawa-gray-50 px-4 py-1 rounded-lg"
          >
            Train Chatbot
          </Button>
        </div>
        {/* File list*/}
      </form>
      <div className="gap-2 flex justify-center items-center flex-wrap">
        {files.map((file, index) => (
          <CardFile key={index} name={file.name} icon={icon_doc} />
        ))}
      </div>
    </>
  );
};
