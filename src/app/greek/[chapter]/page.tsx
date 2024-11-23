"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { Chapter, Sec } from "../../../../types";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { useGreekData } from "@/hooks/useGreekData";

const ChapterPage = () => {
  const searchParams = useSearchParams();
  const currentChapterIndex = searchParams.get("current");
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);
  const { greekData, loading } = useGreekData();

  const chapters = useMemo(() => greekData?.chapters || [], [greekData]);

  useEffect(() => {
    if (currentChapterIndex) {
      const index = Number(currentChapterIndex);
      if (!isNaN(index) && index >= 0 && index < chapters.length) {
        setCurrentChapter(index);
      } else {
        console.log("Invalid chapter index:", currentChapterIndex);
      }
    }
  }, [currentChapterIndex, chapters]);

  if (loading) {
    return null;
  }

  if (currentChapter === null || !chapters[currentChapter]) {
    return <div>Chapter not found!</div>;
  }

  const chapter: Chapter = chapters[currentChapter];

  return (
    <PageLayout chapter={chapter}>
      {chapter.sections?.map((section: Sec, index) => (
        <Section
          reverse={index % 2 === 0}
          key={index}
          h={section.h}
          p={section.p}
          img={section.img}
        />
      ))}
    </PageLayout>
  );
};

export default ChapterPage;
