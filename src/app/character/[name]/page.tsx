"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Article, Chapter, Sec } from "../../../../types";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { useGreekData } from "@/hooks/useGreekData";

const CharacterPage = () => {
  const params = useParams<{ name: string }>();
  const { greekData, loading } = useGreekData();

  const chapters = useMemo(() => greekData?.chapters || [], [greekData]);

  const characterName = useMemo(() => {
    const rawName = Array.isArray(params?.name) ? params.name[0] : params?.name;
    return rawName ? decodeURIComponent(rawName).trim().toLowerCase() : "";
  }, [params]);

  const chapter: Chapter | undefined = useMemo(
    () =>
      chapters.find((item) => item.name.toLowerCase() === characterName),
    [chapters, characterName]
  );

  if (loading) {
    return null;
  }

  if (!chapter) {
    return <div>Character not found!</div>;
  }

  return (
    <PageLayout chapter={chapter}>
      {chapter.articles?.map((article: Article, index: number) => (
        <Section
          reverse={index % 2 === 0}
          key={article.title || index}
          h={article.title}
          p={article.paragraph}
        />
      ))}
      {chapter.sections?.map((section: Sec, index: number) => (
        <Section
          reverse={index % 2 === 0}
          key={`section-${index}`}
          h={section.h}
          p={section.p}
          img={section.img}
        />
      ))}
    </PageLayout>
  );
};

export default CharacterPage;
