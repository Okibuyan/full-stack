"use client";
import { Card, CreateModal } from "./components/ui";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      \
      <div className="container p-8 flex flex-col gap-5">
        <div className="flex justify-end">
          <CreateModal />
        </div>
        <div className="flex  flex-wrap justify-between gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
