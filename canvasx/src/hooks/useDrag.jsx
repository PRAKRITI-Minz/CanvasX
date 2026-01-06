import { useEffect, useState } from "react";
export function useDrag(blocks, setBlocks, canvasRef) {
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e, block) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    setDraggingId(block.id);
    setOffset({
      x: e.clientX - rect.left - block.x,
      y: e.clientY - rect.top - block.y
    });
  };
     
  useEffect(() => {
    const onMouseMove = (e) => {
        if (!draggingId) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
     
      setBlocks(blocks.map
        (block => { 
            if (block.id !== draggingId) return block; 
    const HEADER_HEIGHT = 50;  
    const BLOCK_WIDTH = block.width || 300;  
    const BLOCK_HEIGHT = block.height || 120; 
    let newX = e.clientX - rect.left - offset.x;
    let newY = e.clientY - rect.top + canvas.scrollTop - offset.y; 
    newX = Math.max(0, newX); 
    newX = Math.min(newX, rect.width - BLOCK_WIDTH); 
    newY = Math.max(HEADER_HEIGHT, newY); 
    newY = Math.min( newY, canvas.scrollHeight - BLOCK_HEIGHT ); 
    return { ...block, x: newX, y: newY };
 }) 
); 
}; 
    const stopDrag = () => { 
        setDraggingId(null); 
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [draggingId, offset, blocks, setBlocks, canvasRef]
);

  return { startDrag };
}
