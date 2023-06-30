import Link from "next/link";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
    <section
      className=" bg-zinc-950 h-screen text-orange-500"
    >
        <nav
          className=" p-4 text-3xl h-[10%]"
        >
          <h1>Ahan's Dashboard</h1>
        </nav>
        <div className="grid grid-cols-4 grid-rows-1 h-[90%] items-end">
          <div
            className=" col-span-3 p-4 rounded bg-orange-500 text-zinc-950 min-h-full"
          >
            {children}
          </div>
          <div 
            className=" grid grid-cols-1 gap-2 p-4"
          >
              <Link 
                className=" p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition"
                href={"/dashboard/skills"}>Skills</Link>
              <Link 
                className=" p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition"
                href={"/dashboard/projects"}>Projects</Link>
              <Link  
                className=" p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition"
                href={"/dashboard/achievements-certifications"}>Certifications</Link>
              <Link  
                className=" p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition"
                href={"/dashboard/achievements-experiences"}>Experiences</Link>
          </div>
        </div>
    </section>
    );
  }