export const formatRuntime = (runtime: number | string): string => {
  const runtimeValue = Number(runtime);
  const hours = Math.floor(runtimeValue / 60);
  const minutes = runtimeValue % 60;
  return `${hours}h ${minutes}min`;
}
