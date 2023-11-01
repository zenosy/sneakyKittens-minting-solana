import Header from "./Header";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

// export default Layout;
