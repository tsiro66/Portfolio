import DemoCard from "./DemoCard";
// import AccordionDemo from "./AccordionDemo";
import TodoListDemo from "./TodoListDemo/TodoListDemo";

const SkillsDemoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
      <DemoCard
        title="Todo List Demo"
        description="A simple todo list application"
        DemoComponent={TodoListDemo}
      />

      <DemoCard
        title="Placeholder"
        description="This is a placeholder for future demos"
        DemoComponent={() => <div>Placeholder</div>}
      />
      <DemoCard
        title="Placeholder Demo"
        description="This is a placeholder for future demos"
        DemoComponent={() => <div>Placeholder</div>}
      />
    </div>
  );
};

export default SkillsDemoCards;
