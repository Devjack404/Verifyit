type myButtonProps = {
    title: string;
    className: string;
}

function MyButton({ title, className }: myButtonProps) {
  return (
    <button className={className}>
        {title}
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton 
        title="I'm a button" 
        className="bg-blue-500" />
    </div>
  );
}
