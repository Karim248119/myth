import { useState, useEffect } from "react";
import { getAllMythologies } from "../../api/mythologies";
import { Mythology } from "../../types";

export const useGreekData = () => {
  const [greekData, setGreekData] = useState<Mythology | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMythologies();
        const greek = data.find((item: Mythology) => item.name === "Greek");
        setGreekData(greek || null);
      } catch (err) {
        setError("Failed to fetch Greek mythology data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { greekData, loading, error };
};
