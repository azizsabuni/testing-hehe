import type { Route }
  from "./+types/home";
import Navbar from "../../Compenants/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My app hehe" },
    { name: "description", content: "Welcome hehe!" },
  ];
}


export function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className={"container"}>
      <div className={"page-heading"}>
        <h1>Track you resume and applications ratings</h1>
        <h2>Welcome!</h2>
      </div>

    </section>

  </main>;
}
