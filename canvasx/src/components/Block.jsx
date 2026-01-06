import { useEffect, useRef } from "react";

function Block({ block, startDrag, startResize, deleteBlock, updateContent, updateHeight, updateWidth, mode, isActive, onSelect }) {


  return (
    <div
      className={`block ${isActive ? "active" : ""}`}
      style={{
        left: block.x,
        top: block.y,
        height: `${block.height}px`,
        width: `${block.width}px`,
        position: "absolute"
      }}
      onMouseDown={(e) => {
        onSelect();
        if (mode === "preview") return;
        if (e.target.closest(".editable")) return;
        if (e.target.closest(".delete-btn")) return;
        startDrag(e, block);
      }}
    >
        {mode === "edit" && (
      <button
        className="delete-btn"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={() => deleteBlock(block.id)}
      >
        ✕
      </button>
        )}

      <h4>{block.type}</h4>
      
      <div
        className="editable"
        contentEditable={mode === "edit"}
        suppressContentEditableWarning
        onMouseDown={(e) => e.stopPropagation()}
        onInput={(e) =>
            mode === "edit" &&
          updateContent(block.id, e.currentTarget.innerText)
        }
        ref={(el) => {
          if (el && el.innerText !== block.content) {
            el.innerText = block.content;
          }
        }}
      />
      {mode === "edit" && (
        <div
  className="resize-handle"
  onMouseDown={(e) => startResize(e, block)}
/>
      )}
    </div>
    );
}

export default Block;
