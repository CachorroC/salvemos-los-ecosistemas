export default async function VideoComponent(
  {
    src 
  }: { src: string } 
) {
  return (
    <iframe
      src={src}
      allowFullScreen
    />
  );
}
