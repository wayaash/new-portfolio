import { useEffect } from "react";
import Router from "./core/router";
import { initState } from "./core/state";
import Background from "./engine/background";
import Console from "./components/Console";

export default function App(){
  useEffect(()=>{
    initState();
  },[]);

  return (
    <div className="text-white min-h-screen">
      <Background/>
      <Router/>
      <Console/>
    </div>
  )
}