interface LayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
  rightSidebar: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ sidebar, mainContent, rightSidebar, footer }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row">
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
