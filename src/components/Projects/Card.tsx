type DemoCardProps = {
  title: string;
  description: string;
  techstack?: React.ReactNode;
  link?: string;
  progress?: string;
};

const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  techstack,
  link,
  progress,
}) => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex flex-col border border-gray-200 dark:border-gray-700 
      transition-all transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg "
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
        {progress && (
          <>
            <p className="text-gray-400 dark:text-gray-300">{progress}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: progress }}
              ></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DemoCard;
