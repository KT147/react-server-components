import fs from "node:fs/promises";
import ClientDemo from "./components/ClientDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";
import RSCDemo from "./components/RSCDemo";
import ServerActionsDemo from "./components/ServerActionsDemo";
import UsePromiseDemo from "./components/UsePromisesDemo";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      {/* <DataFetchingDemo /> */}
      <Suspense>
        <UsePromiseDemo />
      </Suspense>
      <ServerActionsDemo />
    </main>
  );
}
