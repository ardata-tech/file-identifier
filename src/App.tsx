import React, { useState } from "react";
import FileInput from "./components/FileInput";
import { useToast } from "./context/ToastContext";

const App: React.FC = () => {
  const { showToast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      console.log("Selected file:", file.name);
    }
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
      <div className="upload-section">
        <form
          action="#"
          className="flex flex-col justify-center items-center w-full h-screen"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center mb-5 p-5 border-2 border-dashed border-slate-600 rounded-lg w-[480px]">
            <h1 className="text-2xl">Select a file to upload</h1>
            <FileInput label="" altLabel="" onFileChange={handleFileChange} />
          </div>
          <button className="btn btn-active btn-neutral w-36" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
