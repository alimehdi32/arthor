const axios = require('axios');
const Video = require('../models/video'); 

exports.searchVideos = async (req, res) => {
    console.log('________________', req._parsedUrl.query.split('=')[1]);
    const  query  = req._parsedUrl.query.split('=')[1];
    const url = `${process.env.API_URL}/search?key=${process.env.YOU_TUBE_API_KEY}&type=video&part=snippet&q=${query}`;

    try {
        
        const response = await axios.get(url);
        
        const random = Math.ceil(Math.random() * response.data.items.length); // Random index for video selection
        const video = response.data.items[random];


        const videoData = new Video({
            videoId: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.default.url,
            channelTitle: video.snippet.channelTitle,
            createdBy: req.user.id
        })
        await videoData.save();

        console.log('----Video saved to database----', videoData);

        res.status(200).json({
            success: true,
            message: 'Videos fetched successfully',
        });
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return res.status(500).json({ error: 'Failed to fetch videos' });
        
    }
}

exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find({ createdBy: req.user.id})
        console.log('----Videos fetched from database----', videos);
        if (!videos || videos.length === 0) {
            return res.status(404).json({ error: 'No videos found' });
        }
        res.json({
            success: true,
            videos: videos
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
        return res.status(500).json({ error: 'Failed to fetch videos' });
        
    }
}