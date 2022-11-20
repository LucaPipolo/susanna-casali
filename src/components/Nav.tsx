// Types definition.
interface NavProps {
  navItems: {
    text: string;
    href: string;
  }[];
}

// Internal dependencies.
import slugify from '@utils/slugify';

import Button from '@components/Button';
import NavItem from '@components/NavItem';

// Component.
const Nav = ({ navItems }: NavProps) => {
  return (
    <nav className="flex w-full justify-end md:justify-between">
      <ul className="hidden grow items-center justify-center gap-8 font-semibold text-han-purple-600 md:flex">
        {navItems.map((navItem) => {
          return (
            <NavItem
              key={slugify(navItem.text)}
              text={navItem.text}
              href={navItem.href}
            />
          );
        })}
      </ul>
      <div className="flex gap-4">
        <Button
          classes="hidden md:block"
          text="Download my CV"
          href="/documents/cv.pdf"
          style="hollow"
          download="cv-susanna-casali"
        />
        <Button text="Contact Me" href="mailto:susanna.casali87@gmail.com" />
      </div>
    </nav>
  );
};

export default Nav;
