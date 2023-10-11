type Props = { 
  title: string; 
  image?: string;
};

const PageTitle = ({ title, image }: Props) => (
  <div className="w-100 mb-8">
    <h1>{title}</h1>
  </div>
);

export default PageTitle;