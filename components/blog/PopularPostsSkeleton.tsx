import React from "react";
import { Skeleton } from "../ui/skeleton";
export default function PopularPostsSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="rounded-xl h-[20px] w-[350px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
