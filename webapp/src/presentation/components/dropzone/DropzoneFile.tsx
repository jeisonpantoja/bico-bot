import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RiUploadLine } from "react-icons/ri";

export const DropzoneFile = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      setFiles((previoousFiles) => [
        ...previoousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
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
        <button className="bg-transparent border border-waikawa-gray-500 mr-3 hover:bg-waikawa-gray-600 disabled:bg-waikawa-gray-950 text-waikawa-gray-50 px-4 py-1 rounded-lg">
          Discard
        </button>
        <button type="submit" className="bg-waikawa-gray-500 hover:bg-waikawa-gray-600 disabled:bg-waikawa-gray-950 text-waikawa-gray-50 px-4 py-1 rounded-lg">
          Train Chatbot
        </button>
      </div>
      {/* File list*/}
      <div className="w-4/5 h-1/4 mt-2">
        <ul className="flex flex-col">
          {files.map((file) => (
            <li key={file.name} className="flex flex-row justify-between">
              <span>{file.name}</span>
              <span>{file.size}</span>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};
