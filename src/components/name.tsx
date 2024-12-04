"use client";
import { TypeAnimation } from 'react-type-animation';

export default function Name() {
  return <TypeAnimation className="text-4xl font-bold" sequence={["Brian Matzelle"]} speed={20} cursor={false} />;
}
