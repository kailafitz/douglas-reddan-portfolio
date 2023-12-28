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
    <div id="press" className="py-32 bg-slate-900">
      <div className="container flex flex-col lg:flex-row flex-wrap justify-between">
        {articles.map((article, i) => {
          return (
            <Card
              key={i}
              className="w-full mb-8 last:mb-0 lg:mb-0 max-card-width bg-primary border-l-4 border-t-0 border-b-0 border-r-0 border-testRed flex flex-col justify-between"
            >
              <CardHeader className="mb-3">
                <CardTitle className="text-md font-semibold mb-1">
                  {article.title}
                </CardTitle>
                <CardDescription>
                  {article.source}
                  {article.date && `  |  ${article.date}`}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-4 btn-animation-secondary"
                  )}
                >
                  <Link
                    href={article.href}
                    target="_blank"
                    className="flex flex-row content-center items-center"
                  >
                    Read More
                    <svg
                      className="ml-1"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Press;
