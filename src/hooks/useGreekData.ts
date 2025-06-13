import { useState, useEffect } from "react";
import { getAllMythologies } from "../../api/mythologies";
import { Mythology } from "../../types";

export const useGreekData = () => {
  const [greekData, setGreekData] = useState<Mythology>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMythologies();
        const greek = data;
        setGreekData(greek || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { greekData, loading, error };
};
