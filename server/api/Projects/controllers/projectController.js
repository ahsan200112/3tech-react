const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
    try {
        const { title, description, link, image } = req.body;
        const imageUrl = req.imageUrl || '';

        const newProject = new Project({
            title,
            description,
            link,
            image: imageUrl || '',
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        res.status(200).json(projects);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Service not found' });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateProject = async (req, res) => {
    try {
        // Check if the image URL is provided and include it in the update
        const updatedData = { ...req.body };
        if (req.imageUrl) {
            updatedData.image = req.imageUrl;
        }

        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const deleted = await Project.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json({ message: 'Project deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
