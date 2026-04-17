import axios from "./axios";

export const getDataVideos = async () => {
    try {
        const response = await axios.get("/videos");
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};