import Image from "next/image";

import { getUserData } from "@/serverActions/github";
import Header from "@/components/header";
import Metric from "@/components/metric";

export default async function Home() {
  const { user } = await getUserData();

  // Convert KB to GB and round to 2 decimal places
  const repositoriesDiskUsage = user.repositories.totalDiskUsage;
  const repositoriesDiskUsageGB =
    Math.round((repositoriesDiskUsage / 1024 / 1024) * 100) / 100;

  return (
    <>
      <Image
        className="absolute top-0 object-top object-contain -z-10"
        alt="Profile Picture"
        src="/logo-nobackground-4k.png"
        priority
        width={854}
        height={480}
        style={{
          marginTop: "-100px",
        }}
      />
      <Header user={user} />
      <main className="grid grid-cols-1 gap-12 mt-16 text-center">
        <h2 className="text-5xl font-extralight">Metrics</h2>
        <h3 className="text-3xl font-light">GitHub</h3>
        <section className="grid grid-cols-4 gap-12">
          <Metric
            data={{
              title: "Repositories",
              value: user.repositories.totalCount,
              secondaryValue: `(${repositoriesDiskUsageGB} GB)`,
            }}
          />
          <Metric
            data={{
              title: "Followers",
              value: user.followers.totalCount,
            }}
          />
          <Metric
            data={{
              title: "Following",
              value: user.following.totalCount,
            }}
          />
          <Metric
            data={{
              title: "Stars",
              value: user.starredRepositories.totalCount,
            }}
          />
        </section>
      </main>
    </>
  );
}
