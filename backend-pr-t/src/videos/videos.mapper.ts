import { Injectable } from "@nestjs/common";
import { VideoClean } from "./types";
import { normalizeImageUrl } from "./utils/imagen.util";
import { formatRelativeDate } from "./utils/date.utill";
import { calculateHype } from "./utils/hype.util";


@Injectable()
export class VideosMapper {
    toClean(video: any): VideoClean {
        return {
            id: video.id,
            thumbnailUrl: normalizeImageUrl(video.snippet?.thumbnails?.high?.url || "", video.snippet?.title || ""),
            title: video.snippet?.title || "",
            autor: video.snippet?.channelTitle || "",
            publishedRelative: formatRelativeDate(video.snippet?.publishedAt || ""),
            hype: calculateHype(video.statistics?.commentCount || "0", video.statistics?.likeCount || "0", video.statistics?.viewCount || "0", video.snippet?.title || "")
        }
    }
}