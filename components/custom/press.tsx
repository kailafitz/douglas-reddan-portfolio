import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "Article Title",
    date: "Jun 22nd, 2023",
    source: "Irish Independant",
    href: "https://www.independent.ie/entertainment/theatre-arts/pride-and-prejudice-in-the-west-of-ireland-choreographer-and-filmmaker-douglas-reddan-talks-coming-out-and-his-new-project/a1468899650.html",
  },
  {
    title:
      "Lasta at glór: What Moves You: Snowflake Author Louise Nealon talks Dance & Writing with Movement Artist Douglas Reddan",
    source: "Glor",
    href: "https://glor.ie/events/llasta-at-glor-what-moves-you-snowflake-author-louise-nealon-talks-dance-and-writing-with-movement-artist-douglas-reddann-in-conversation-with-movement-artist-douglas-reddan/",
  },
  {
    title: "The Arts are There to Enjoy and to Engage With",
    date: "Jun 10th, 2021",
    source: "Clare Champion",
    href: "https://clarechampion.ie/the-arts-are-there-to-enjoy-and-to-engage-with/",
  },
];

const Press = () => {
  return (
    <div
      id="press"
      className="container flex flex-col lg:flex-row flex-wrap justify-between pb-16"
    >
      {articles.map((article) => {
        return (
          <Card className="max-card-width bg-primary border-l-4 border-t-0 border-b-0 border-r-0 border-slate-900 flex flex-col justify-between">
            <CardHeader className="mb-3 pt-0">
              <CardTitle className="text-md font-semibold mb-1">
                {article.title}
              </CardTitle>
              <CardDescription>
                {article.source}
                {article.date && `  |  ${article.date}`}
              </CardDescription>
            </CardHeader>
            <CardFooter className="pb-0">
              <Button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-4 btn-animation-secondary"
                )}
              >
                <Link href={article.href} target="_blank">
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Press;
