import { formatRelativeDate } from './date.util';

describe('formatRelativeDate', () => {
  const now = Date.now();

  it('should return "Hace unos segundos" for recent dates', () => {
    const date = new Date(now - 10 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace unos segundos');
  });

  it('should return minutes for dates within the hour', () => {
    const date = new Date(now - 5 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 5 minutos');
  });

  it('should handle singular minute', () => {
    const date = new Date(now - 1 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 1 minuto');
  });

  it('should return hours for dates within the day', () => {
    const date = new Date(now - 3 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 3 horas');
  });

  it('should handle singular hour', () => {
    const date = new Date(now - 1 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 1 hora');
  });

  it('should return days for dates within the week', () => {
    const date = new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 3 días');
  });

  it('should handle singular day', () => {
    const date = new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 1 día');
  });

  it('should return weeks for dates within the month', () => {
    const date = new Date(now - 14 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 2 semanas');
  });

  it('should return months for dates within the year', () => {
    const date = new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 3 meses');
  });

  it('should handle singular month', () => {
    const date = new Date(now - 35 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 1 mes');
  });

  it('should return years for old dates', () => {
    const date = new Date(now - 400 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 1 año');
  });

  it('should handle plural years', () => {
    const date = new Date(now - 800 * 24 * 60 * 60 * 1000).toISOString();
    expect(formatRelativeDate(date)).toBe('Hace 2 años');
  });
});
