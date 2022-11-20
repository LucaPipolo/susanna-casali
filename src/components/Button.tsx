interface ButtonProps {
  classes?: string;
  style?: string;
  text: string;
  href: string;
  download?: string;
}

// Component.
const Button = ({
  classes = '',
  style = 'primary',
  text,
  href,
  download = '',
}: ButtonProps) => {
  return (
    <a
      className={`flex items-center rounded-xl px-4 py-2 font-semibold duration-500 ease-in-out hover:shadow-special ${
        style === 'primary'
          ? 'bg-han-purple-600 text-white'
          : 'border-2 border-han-purple-600 text-han-purple-600'
      } ${classes}`}
      href={href}
      {...(download ? { download: download } : {})}>
      {text}
    </a>
  );
};

export default Button;
