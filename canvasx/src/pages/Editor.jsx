import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import { useDrag } from "../hooks/useDrag";
import { fetchProject, updateProjectBlocks } from "../api/projects";
function Editor() {
  const { projectId } = useParams();
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const [blocks, setBlocks] = useState([]);
  const [activeBlockId, setActiveBlockId] = useState(null);
  const [mode, setMode] = useState("edit");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/");
    }
  }, []);
  /* =============================
     LOAD PROJECT (GET)
  ============================== */
  useEffect(() => {
  let mounted = true;

  fetchProject(projectId)
    .then(project => {
      if (!mounted) return;
      setBlocks(project.blocks || []);
      document.title = project.name;
    })
    .catch(err => {
      console.error("Load failed:", err.message);
    });

  return () => {
    mounted = false;
  };
}, [projectId]);

  /* =============================
     SAVE BLOCKS (PUT)
  ============================== */
  useEffect(() => {
  if (!projectId) return;

  updateProjectBlocks(projectId, blocks).catch(err =>
    console.error("Save failed:", err)
  );
}, [blocks, projectId]);


  /* =============================
     BLOCK OPERATIONS
  ============================== */
  
  const handleDropBlock = (type, x, y) => {
  const newBlock = {
    id: Date.now(),
    type,
    content: `This is ${type} block`,
    x,
    y,
    width: 300,
    height: 150
  };

  setBlocks(prev => [...prev, newBlock]);
};
  
  const updateBlocks = (newBlocks) => {
    setBlocks(newBlocks);
  };

  const deleteBlock = (id) => {
    updateBlocks(blocks.filter(b => b.id !== id));
  };

  const updateContent = (id, text) => {
    updateBlocks(
      blocks.map(b => b.id === id ? { ...b, content: text } : b)
    );
  };

  const updateWidth = (id, width) => {
    updateBlocks(
      blocks.map(b => b.id === id ? { ...b, width } : b)
    );
  };

  const updateHeight = (id, height) => {
    updateBlocks(
      blocks.map(b => b.id === id ? { ...b, height } : b)
    );
  };

  const { startDrag } = useDrag(blocks, setBlocks, canvasRef);
  const startResize = (e, block) => {
  e.stopPropagation();

  const startX = e.clientX;
  const startY = e.clientY;
  const startWidth = block.width;
  const startHeight = block.height;

  const onMouseMove = (e) => {
    const newWidth = Math.max(80, startWidth + (e.clientX - startX));
    const newHeight = Math.max(50, startHeight + (e.clientY - startY));

    updateWidth(block.id, newWidth);
    updateHeight(block.id, newHeight);
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};


  return (
    <div className="editor">
      <Sidebar blocks={blocks} updateBlocks={updateBlocks} />

      <Canvas
        blocks={blocks}
        canvasRef={canvasRef}
        startDrag={startDrag}
        startResize={startResize}
        deleteBlock={deleteBlock}
        updateContent={updateContent}
        updateWidth={updateWidth}
        updateHeight={updateHeight}
        activeBlockId={activeBlockId}
        setActiveBlockId={setActiveBlockId}
        mode={mode}
        onDropBlock={handleDropBlock}
      />
    </div>
  );
}

export default Editor;
