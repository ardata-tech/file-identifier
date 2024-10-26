import React, { useState } from "react";
import FileInput from "./components/FileInput";
import { useToast } from "./context/ToastContext";

const App: React.FC = () => {
  const { showToast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    collection: "",
    dataset: "",
    directory: "",
  });

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      showToast({
        title: "Error",
        description: "No file selected. Please select a file to upload.",
        type: "error",
      });
      return;
    }

    // Simulate file upload and show success toast
    try {
      showToast({
        title: "Success",
        description: `Transaction Hash: 0xc56e96310d091edb5c8580489e6510ce7576c590e6e939c3c0ce1e00ea57ce1c`,
        type: "success",
      });
    } catch (error) {
      showToast({
        title: "Error",
        description: `Failed to upload file: ${error}`,
        type: "error",
      });
      return;
    }
  };

  return (
    <div className="App">
      <div className="upload-section flex justify-center items-center w-full h-screen">
        <form
          action="#"
          className="flex flex-col border border-slate-600 rounded-lg p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start mb-5 w-[480px]">
            <label htmlFor="collection" className="mb-2">
              Collection
            </label>
            <input
              id="collection"
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              value={formData.collection}
              onChange={handleInputChange}
              placeholder="e.g. My Collection"
            />
          </div>
          <div className="flex flex-col items-start mb-5 w-[480px]">
            <label htmlFor="dataset" className="mb-2">
              Dataset
            </label>
            <input
              id="dataset"
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              value={formData.dataset}
              onChange={handleInputChange}
              placeholder="e.g. My Dataset"
            />
          </div>
          <div className="flex flex-col items-start mb-5 w-[480px]">
            <label htmlFor="directory" className="mb-2">
              Directory
            </label>
            <input
              id="directory"
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              value={formData.directory}
              onChange={handleInputChange}
              placeholder="e.g. My Directory"
            />
          </div>
          <div className="flex flex-col items-center p-5 border-2 border-dashed border-slate-600 rounded-lg w-[480px]">
            <h1 className="text-xl">Select a file to upload</h1>
            <FileInput label="" altLabel="" onFileChange={handleFileChange} />
          </div>
          <div className="flex justify-center mt-10">
            <button className="btn btn-active btn-neutral w-36" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
