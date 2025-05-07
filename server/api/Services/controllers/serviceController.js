const Service = require('../models/serviceModel');

// Create a new service
exports.createService = async (req, res) => {
    try {
        const { title, description, link, image } = req.body;
        const imageUrl = req.imageUrl || '';

        const newService = new Service({
            title: {
                en: title.en,
                ar: title.ar,
            },
            description: {
                en: description.en,
                ar: description.ar,
            },
            link :link,
            image: imageUrl || '',
        });

        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ date: -1 });
        res.status(200).json(services);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get Single Blog
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update service
exports.updateService = async (req, res) => {
    try {
        // Check if the image URL is provided and include it in the update
        const updatedData = { ...req.body };
        if (req.imageUrl) {
            updatedData.image = req.imageUrl;
        }

        const updatedService = await Service.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!updatedService) return res.status(404).json({ message: 'Service not found' });
        res.status(200).json(updatedService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete service
exports.deleteService = async (req, res) => {
    try {
        const deleted = await Service.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Service not found' });
        res.status(200).json({ message: 'Service deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
