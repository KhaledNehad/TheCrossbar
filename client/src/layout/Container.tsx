interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: ContainerProps) => {
  return <div className='mainContainer'>{children}</div>;
};

export default Container;
