import { Bree_Serif } from "next/font/google"

const bree = Bree_Serif({
  weight: '400',
  subsets : ['latin']
})

export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-center p-24 bg-orange-500 " + bree.className}  >
      <button
        className={" rounded-3xl font-bold text-black text-4xl border-black border-[3px] py-4 px-8 " + bree.className}
        onClick={()=>console.log("hi")}
      >Login</button>
    </main>
  )
}
