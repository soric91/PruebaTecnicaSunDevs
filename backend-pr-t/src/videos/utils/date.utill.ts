export function formatRelativeDate(dateString: string): string {
    const now = new Date();
    const published = new Date(dateString);

    const diffMs = now.getTime() - published.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Hace unos segundos";
    if (minutes < 60) return `Hace ${minutes} minuto${minutes !== 1 ? "s" : ""}`;
    if (hours < 24) return `Hace ${hours} hora${hours !== 1 ? "s" : ""}`;
    if (days < 7) return `Hace ${days} día${days !== 1 ? "s" : ""}`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `Hace ${weeks} semana${weeks !== 1 ? "s" : ""}`;

    const months = Math.floor(days / 30);
    if (months < 12) return `Hace ${months} mes${months !== 1 ? "es" : ""}`;

    const years = Math.floor(days / 365);
    return `Hace ${years} año${years !== 1 ? "s" : ""}`;
}