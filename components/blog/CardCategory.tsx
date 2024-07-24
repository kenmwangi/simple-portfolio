import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatDate } from "@/lib/blog";
interface CardCategoryProps {
  title: string;
  summary: string;
  date: string;
}

export default function CardCategory({
  title,
  summary,
  date,
}: CardCategoryProps) {
  return (
    <Card className="w-full lg:w-[350px] lg:h-[290px] shadow-md">
      <CardHeader>
        <CardTitle className="text-lg tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
}
