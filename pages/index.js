import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content"
import { useEffect } from "react";
import fecthDataInstagram from "@/modules/fetchData"

export default function Home() {
 useEffect(() => {
  async function fetchData() {
    try {
      const response = await fecthDataInstagram()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
 },[])

  return (
    <main>
      <Navbar />
      <Hero/>
      <Content/>
    </main>
  );
}

