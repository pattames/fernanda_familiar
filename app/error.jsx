"use client";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="h-screen flex justify-center py-32">
      <h1 className="text-2xl text-red-500 font-medium underline">
        Error fetching data
      </h1>
    </div>
  );
}
