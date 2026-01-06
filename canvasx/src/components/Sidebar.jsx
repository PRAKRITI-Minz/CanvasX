import exportPortfolio from "../utils/exportPortfolio";
function Sidebar({ updateBlocks, blocks }) {

  const addBlock = (type) => {
    updateBlocks([...blocks,
      { id: Date.now(), type , content: `This is ${type} block` , height: 150, width: 300, x: 50, y: 80 }
    ])
  }
  const clearCanvas = () => {
  updateBlocks([]);
};


  return (
    <div className="sidebar">
      <h3>Block Library</h3>
       
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "Hero")}>Add Hero</button>
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "About")}>Add About</button>
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "Gallery")}>Add Gallery</button>
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "Publication")}>Add Publication</button>
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "Contact")}>Add Contact</button>
      <button draggable onDragStart={(e) => e.dataTransfer.setData("blockType", "Footer")}>Add Footer</button>
       <button onClick={() => exportPortfolio(blocks, "CanvasX-Portfolio")}>
         Export
       </button>
        <button onClick={clearCanvas}>Clear Canvas</button>
    </div>
  )
}

export default Sidebar