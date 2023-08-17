"use client";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import variables from "./variables.module.scss";
import Link from "next/link";

export default function Home() {
  const [markdown, setMarkdown] = useState("# Markdown preview");

  const [isBigSize, setIsBigSize] = useState(false);

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
  };

  return (
    <main className={variables.main}>
      <section className={variables.markdown}>
        {/* SECTION 1 */}

        <div
          className={variables.editorWrap}
          style={
            activeButton === 2 ? { display: "none" } : { display: "block" }
          }>
          <div className={variables.toolbar}>
            Editor
            <svg
              style={
                activeButton === 1 ? { display: "block" } : { display: "none" }
              }
              onClick={() => handleButtonClick(1)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
              />
            </svg>
            <svg
              style={
                activeButton === 1 ? { display: "none" } : { display: "block" }
              }
              onClick={() => handleButtonClick(1)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
              />
            </svg>
          </div>
          <textarea
            style={
              activeButton === 1 ? { height: "100vh" } : { height: "auto" }
            }
            id="editor"
            className={variables.editor}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}></textarea>
        </div>

        {/* SECTION 2 */}

        <div
          className={variables.previewWrap}
          style={
            activeButton === 1 ? { display: "none" } : { display: "block" }
          }>
          <div className={variables.toolbar}>
            Editor
            <svg
              style={
                activeButton === 2 ? { display: "block" } : { display: "none" }
              }
              onClick={() => handleButtonClick(2)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrows-angle-expand"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
              />
            </svg>
            <svg
              style={
                activeButton === 2 ? { display: "none" } : { display: "block" }
              }
              onClick={() => handleButtonClick(2)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrows-angle-contract"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
              />
            </svg>
          </div>
          <article id="preview" className={variables.preview}>
            <ReactMarkdown className={variables.preview}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
  );
}
