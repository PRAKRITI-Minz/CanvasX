import express from "express";
import Project from "../models/Project.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.use(auth);
/* ------------------ Create Project ------------------ */
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const project = await Project.create({
      name: name || "Untitled Project"
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ Get All Projects ------------------ */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ Get Single Project ------------------ */
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Invalid project id" });
  }
});

/* ------------------ Update Blocks ------------------ */
router.put("/:id", async (req, res) => {
  try {
    const { blocks } = req.body;

    if (!Array.isArray(blocks)) {
      return res.status(400).json({ error: "Invalid blocks payload" });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        blocks,
        lastUpdated: Date.now()
      },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Invalid project id" });
  }
});

/* ------------------ Delete Project ------------------ */
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "Invalid project id" });
  }
});

/* ------------------ Export Project ------------------ */
router.get("/:id/export", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const orderedBlocks = [...project.blocks].sort(
      (a, b) => (a.y || 0) - (b.y || 0)
    );

    res.json({
      id: project._id,
      name: project.name,
      exportedAt: Date.now(),
      blocks: orderedBlocks
    });
  } catch (err) {
    res.status(400).json({ error: "Invalid project id" });
  }
});

export default router;
