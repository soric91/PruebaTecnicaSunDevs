export function calculateHype(commentCount: string, likeCount: string, viewCount: string, title: string): number {

    const commentWeight = isNaN(parseInt(commentCount)) ? 0 : parseInt(commentCount);
    const likeWeight = isNaN(parseInt(likeCount)) ? 0 : parseInt(likeCount);
    const viewWeight = isNaN(parseInt(viewCount)) ? 0 : parseInt(viewCount);


    if (viewWeight === 0 ) {
        return 0;
    }

    if (commentWeight === 0 ){
        return 0;
    }

    let hype = (commentWeight + likeWeight) / viewWeight;
    if (title.toLowerCase().includes("tutorial")) {
        hype *= 2;
    }

    return Number(hype.toFixed(4));
}