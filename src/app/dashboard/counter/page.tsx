import type { Metadata } from 'next'
import { CounterComponent } from "@/app/shoping-card";

export const metadata: Metadata = {
  title: 'Shoping cart',
  description: 'this is a counter description'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shoping cart</span>
      <CounterComponent />
    </div>
  );
}