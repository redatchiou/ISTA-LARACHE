import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../../css/jodit.css";
function MyEditor({ placeholder }) {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const config = useMemo(
        () => ({
            uploader: {
                insertImageAsBase64URI: true,
            },
            language: "fr",
            readonly: false, // all options from https://xdsoft.net/jodit/docs/ ,
            placeholder: placeholder || "Saiser ici ...",
        }),
        [placeholder]
    );

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {
                    console.log(newContent);
                }}
            />
        </div>
    );
}

export default MyEditor;
