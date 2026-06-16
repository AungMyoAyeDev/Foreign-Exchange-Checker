import Button from "@/components/ui/Button";

const Home = () => {
  return (
    <section>
      <div className="space-x-5 m-5">
        <Button variants="primary">Home button</Button>
        <Button variants="secondary">secondary button</Button>
        <Button variants="ghost">secondary button</Button>
      </div>
      <p className="bg-red-500">hello</p>
      <div className="w-20 h-40 bg-card">heeee</div>
    </section>
  );
};

export default Home;
