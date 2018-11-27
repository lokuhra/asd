import React from "react";
import MdFileUpload from "react-icons/lib/md/file-upload";

export default ({ fileName, onChange}) => (
  <div className="file has-name is-fullwidth is-primary box bg-transparent p-0">
    <label className="file-label">
      <input className="file-input" type="file" name="resume" onChange={onChange}/>
      <span className="file-cta">
        <span className="file-icon">
          <MdFileUpload />
        </span>
        <span className="file-label">Elija un archivo</span>
      </span>
      <span className="file-name">{fileName}</span>
    </label>
  </div>
);
