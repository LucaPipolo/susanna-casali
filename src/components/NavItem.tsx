// Types definition.
interface NavItemInterface {
  text: string;
  href: string;
}

// Component.
const NavItem = ({ text, href }: NavItemInterface) => {
  return (
    <li>
      <a className="font-display max-w-sm font-bold leading-tight" href={href}>
        <span className="link link-underline link-underline-purple-han">
          {text}
        </span>
      </a>
    </li>
  );
};

export default NavItem;
