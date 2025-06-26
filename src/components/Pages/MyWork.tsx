import PageTransition from "../PageTransition";

const MyWork = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Coming Soon...
        </h1>
      </div>
    </PageTransition>
  );
};

export default MyWork;
