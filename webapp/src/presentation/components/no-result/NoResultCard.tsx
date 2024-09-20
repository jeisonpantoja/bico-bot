import notFound from "../../../assets/icons/no-result.svg";

export const NoResultCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img
            src={notFound}
            alt="No result found"
            className="w-20 h-20 mb-10"
        />
        <div className="text-sm text-waikawa-gray-300">No files uploaded yet</div>
        <div className="text-xs text-waikawa-gray-400">Upload some files to see them here</div>
    </div>
  )
}
