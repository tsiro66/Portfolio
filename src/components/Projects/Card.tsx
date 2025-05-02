type DemoCardProps = {
  title: string;
  description: string;
  techstack: React.ReactNode;
  link?: string;
};

const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  techstack,
  link,
}) => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex flex-col border border-gray-200 dark:border-gray-700 
      transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => {
          if (link) {
            window.open(link, "_blank");
          }
        }}
      >
        <h2 className="flex items-center text-xl font-bold gap-2 mb-2">
          {title} {techstack}
        </h2>
        <p className="text-gray-400 dark:text-gray-300 mb-4">{description}</p>
      </div>
    </>
  );
};

export default DemoCard;
