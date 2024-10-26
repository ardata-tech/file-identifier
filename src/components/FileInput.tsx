import React from "react";

type FileInputProps = {
  label?: string;
  altLabel?: string;
  onFileChange?: (file: File | null) => void;
};

const FileInput: React.FC<FileInputProps> = ({
  label = "Pick a file",
  altLabel = "Alt label",
  onFileChange,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileChange && event.target.files) {
      onFileChange(event.target.files[0]);
    }
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{altLabel}</span>
      </div>
      <input
        name="file"
        id="file"
        multiple={true}
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleFileChange}
      />
    </label>
  );
};

export default FileInput;
