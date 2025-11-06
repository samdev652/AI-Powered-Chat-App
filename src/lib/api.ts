// API functions for fetching chat data
// TODO: Replace with actual backend API endpoints

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

interface Chat {
  id: string;
  title: string;
  created: string;
}

/**
 * Fetch chats created today
 */
export async function getTodaysChats(): Promise<Chat[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/chats/today`);
    if (!response.ok) {
      throw new Error("Failed to fetch today's chats");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching today's chats:", error);
    // Return empty array as fallback
    return [];
  }
}

/**
 * Fetch chats created yesterday
 */
export async function getYesterdaysChats(): Promise<Chat[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/chats/yesterday`);
    if (!response.ok) {
      throw new Error("Failed to fetch yesterday's chats");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching yesterday's chats:", error);
    // Return empty array as fallback
    return [];
  }
}

/**
 * Fetch chats created in the last 7 days (excluding today and yesterday)
 */
export async function getSevenDaysChats(): Promise<Chat[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/chats/seven-days`);
    if (!response.ok) {
      throw new Error("Failed to fetch seven days chats");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching seven days chats:", error);
    // Return empty array as fallback
    return [];
  }
}
