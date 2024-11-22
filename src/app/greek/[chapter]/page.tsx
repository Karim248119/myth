"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Mythology, Chapter, Sec } from "../../../../types";
import { getAllMythologies } from "../../../../api/mythologies";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const ChapterPage = () => {
  const searchParams = useSearchParams();
  const currentChapterIndex = searchParams.get("current");
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);
  const [myth, setMyth] = useState<Mythology[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch Mythologies
  useEffect(() => {
    const fetchMyth = async () => {
      try {
        const res = await getAllMythologies();
        setMyth(res);
      } catch (error) {
        console.log("Error fetching mythologies:", error);
      } finally {
        setLoading(false); // Ensure loading stops even on error
      }
    };

    fetchMyth();
  }, []);

  const GreekData = myth?.find((item: Mythology) => item.name === "Greek");
  const chapters = GreekData?.chapters || [];

  // Set Current Chapter Index
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
    return;
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
