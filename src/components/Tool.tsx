import Image from 'next/image';

interface ToolProps {
  src: string;
  alt: string;
}

const Tool = ({ src, alt }: ToolProps) => {
  return (
    <Image
      className="object-cover"
      src={`/images/tools/${src}.svg`}
      height={40}
      width={40}
      alt={alt}
    />
  );
};

export default Tool;
