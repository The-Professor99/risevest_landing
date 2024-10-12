import Button from "components/atoms/Buttons";
import { AngledArrow } from "components/atoms/Icons";
import type { FooterMenuItems } from "lib/definitions";

interface FooterMenuProps {
  menuTitle: React.ReactNode;
  menuItems: FooterMenuItems;
}

export default function FooterMenu({ menuTitle, menuItems }: FooterMenuProps) {
  return (
    <div>
      <div>{menuTitle}</div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                href={item.link}
                target={item.target}
                className="p-none my-sm flex"
                fontType="secondaryText"
                variant="secondary"
              >
                {item.name}
                {item.target === "_blank" && <AngledArrow className="ml-sm" />}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
