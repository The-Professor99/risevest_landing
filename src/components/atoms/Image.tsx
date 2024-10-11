import "./Image.scss";

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  loading?: "lazy" | "eager";
  className?: string;
}

const Image = ({
  src,
  alt,
  width = "auto",
  height = "auto",
  loading = "lazy",
  className = "",
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`image ${className}`}
    />
  );
};

export default Image;
