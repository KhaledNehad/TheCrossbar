interface LayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
  rightSidebar: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ sidebar, mainContent, rightSidebar, footer }) => {
  return (
    <div className="flex flex-col">
      <div className="grow">
        <div className="flex min-h-screen flex-col bg-gradient-to-t from-appBlue-200 to-appBlue-100 md:flex-row">
          {sidebar}
          {mainContent}
          {rightSidebar}
        </div>
      </div>
      {footer}
    </div>
  );
};

export default Layout;
