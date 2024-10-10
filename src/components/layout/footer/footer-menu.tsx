interface FooterMenuProps {
  menuTitle: JSX.Element;
  menuItems: { id: number; link: string; name: string }[];
}

export default function FooterMenu({ menuTitle, menuItems }: FooterMenuProps) {
  return (
    <div>
      <div>{menuTitle}</div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
