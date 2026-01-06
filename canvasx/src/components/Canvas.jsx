import Block from './Block'
function Canvas({ blocks, canvasRef, deleteBlock, updateContent, startDrag, updateHeight, updateWidth, mode, activeBlockId, setActiveBlockId, startResize, onDropBlock }) {
    return (
    <div className="canvas" ref={canvasRef} 
    onDragOver={(e) => e.preventDefault()}
  onDrop={(e) => {
    const type = e.dataTransfer.getData("blockType");
    if (!type) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onDropBlock(type, x, y);
  }}>
      <h3>Canvas Area</h3>

      {blocks.length === 0 && (
        <p style={{ opacity: 0.6 }}>Add blocks from sidebar</p>
      )}

      {blocks.map((block) => (

        <Block
          key={block.id}
          block={block}
          startDrag={startDrag}
          startResize={startResize}
          deleteBlock={deleteBlock}
          updateContent={updateContent}
          updateHeight={updateHeight}
          updateWidth={updateWidth}
          mode={mode}
          isActive={block.id === activeBlockId}
          onSelect={() => setActiveBlockId(block.id)}
          />
      ))}  
    </div>
  );
}

export default Canvas;