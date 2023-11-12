import './layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='layout' data-testid='layout'>
      {children}
    </div>
  );
}
