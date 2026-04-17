

export function normalizeImageUrl(url: string, title: string): string {
    if (!url) {
        
        return `https://placehold.co/300x200?text=${encodeURIComponent(title.split(" ")[0])}`;
    }

    if (url.includes("via.placeholder.com")) {
        try {

            const sizeMatch = url.match(/via\.placeholder\.com\/(\d+x\d+)/);
            const size = sizeMatch ? sizeMatch[1] : "300x200";

            const textMatch = url.match(/text=([^&]+)/);
            const text = textMatch ? textMatch[1] : title;

            return `https://placehold.co/${size}?text=${encodeURIComponent(text)}`
        } catch {
            return `https://placehold.co/300x200?text=${encodeURIComponent(title.split(" ")[0])}`;
        }

    }
    return url;
}