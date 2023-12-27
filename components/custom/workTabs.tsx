"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Project from "./project";

const test_data = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    vid: "vid-1",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    vid: "vid-2",
  },
  {
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    vid: "vid-3",
  },
];

export default function WorkTabs() {
  return (
    <div className="container py-28 lg:py-32">
      <Tabs defaultValue="director">
        <div className="block mx-auto w-fit mb-7">
          <TabsList>
            <TabsTrigger
              value="director"
              className="data-[state=active]:border-testYellow border-gray-900 border-4 data-[state=active]:text-testYellow text-testYellow text-xl font-semibold mr-3 p-2"
            >
              director
            </TabsTrigger>
            <p className="text-testYellow font-bold mx-2">|</p>
            <TabsTrigger
              value="choreographer"
              className="data-[state=active]:border-testYellow border-4 border-gray-900 data-[state=active]:text-testYellow text-testYellow text-xl font-semibold ml-3 p-2"
            >
              choreographer
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="director" className="pt-10">
          {/* <div className="grid grid-rows-3 gap-y-24"> */}
          <div>
            {test_data.map((item) => {
              return (
                <Project
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  vid={item.vid}
                />
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="choreographer" className="pt-10">
          {/* <div className="grid grid-rows-3 gap-y-24"> */}
          <div>
            {test_data.map((item) => {
              return (
                <Project
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  vid={item.vid}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
