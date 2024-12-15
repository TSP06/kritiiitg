import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const UploadGuidelines = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const fileRef = ref(storage, `guidelines/${file.name}`); // Path in Firebase Storage

    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setFileUrl(url); // Save the URL for display or further use
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Guidelines</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {fileUrl && (
        <div>
          <p>File uploaded. You can download it using the link below:</p>
          <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
            Download Guidelines
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadGuidelines;
