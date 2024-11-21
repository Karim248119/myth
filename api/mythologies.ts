export const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllMythologies = async () => {
  try {
    const response = await fetch(`${base_url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching mythologies:", error);
    return [];
  }
};
