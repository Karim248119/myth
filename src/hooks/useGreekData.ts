import { mythData } from "../../data";
import { Mythology } from "../../types";

const greekMythology: Mythology = {
  name: "Greek",
  chapters: mythData,
};

export const useGreekData = () => {
  return {
    greekData: greekMythology,
    loading: false,
    error: null as string | null,
  };
};
