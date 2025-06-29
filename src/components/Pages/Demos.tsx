import React, {
  useState,
  useCallback,
  useMemo,
  ReactNode,
  lazy,
  Suspense,
} from "react";
import { FaUserMd, FaLaptopCode, FaStore } from "react-icons/fa";
import { IconType } from "react-icons";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TechDemo from "./Demos/TechDemo";
import EcommerceDemo from "./Demos/EcommerceDemo";

const DoctorDemo = lazy(() => import("./Demos/DoctorDemo"));

interface DemoType {
  id: string;
  name: string;
  icon: IconType;
  component: React.ComponentType | null;
}

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => (
  <div className="transition-all duration-300">{children}</div>
);

const DemoLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mb-4"></div>
    <p className="text-lg text-gray-600 dark:text-gray-300">Loading demo...</p>
  </div>
);

const DemoNavigation = React.memo(
  ({
    demoTypes,
    currentPath,
    onDemoChange,
  }: {
    demoTypes: DemoType[];
    currentPath: string;
    onDemoChange: (id: string) => void;
  }) => {
    const [hoveredDemo, setHoveredDemo] = useState<string | null>(null);

    return (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-4 bg-white dark:bg-gray-800 px-4 py-3 rounded-full shadow-lg">
          {demoTypes.map((demo) => {
            const isActive =
              currentPath === `/demos/${demo.id}` ||
              (currentPath === "/demos" && demo.id === "doctor");
            const isHovered = hoveredDemo === demo.id;

            return (
              <div key={demo.id} className="relative">
                <button
                  onClick={() => onDemoChange(demo.id)}
                  onMouseEnter={() => setHoveredDemo(demo.id)}
                  onMouseLeave={() => setHoveredDemo(null)}
                  className={`
                    relative w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-150 ease-out
                    ${
                      isActive
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }
                  `}
                  aria-label={demo.name}
                  style={{
                    transform: isActive
                      ? "scale(1.1)"
                      : isHovered
                      ? "scale(1.05)"
                      : "scale(1)",
                    willChange: "transform",
                  }}
                >
                  <demo.icon className="text-xl" />
                </button>

                {isHovered && (
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none"
                    style={{
                      opacity: 0,
                      animation: "fadeIn 200ms ease-out forwards",
                    }}
                  >
                    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium px-3 py-1.5 rounded whitespace-nowrap shadow-md">
                      {demo.name}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translate(-50%, 4px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }
        `}</style>
      </div>
    );
  }
);

DemoNavigation.displayName = "DemoNavigation";

const Demos = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const demoTypes = useMemo(
    (): DemoType[] => [
      { id: "doctor", name: "Medical", icon: FaUserMd, component: DoctorDemo },
      {
        id: "tech",
        name: "Tech Startup",
        icon: FaLaptopCode,
        component: TechDemo,
      },
      {
        id: "ecommerce",
        name: "E-commerce",
        icon: FaStore,
        component: EcommerceDemo,
      },
    ],
    []
  );

  const handleDemoChange = useCallback(
    (demoId: string) => {
      navigate(`/demos/${demoId}`);
    },
    [navigate]
  );

  return (
    <PageTransition>
      <Suspense fallback={<DemoLoader />}>
        <Routes>
          <Route index element={<DoctorDemo />} />
          <Route path="doctor" element={<DoctorDemo />} />
          <Route path="tech" element={<TechDemo />} />
          <Route path="ecommerce" element={<EcommerceDemo />} />
        </Routes>
      </Suspense>

      <DemoNavigation
        demoTypes={demoTypes}
        currentPath={location.pathname}
        onDemoChange={handleDemoChange}
      />
    </PageTransition>
  );
};

export default Demos;
