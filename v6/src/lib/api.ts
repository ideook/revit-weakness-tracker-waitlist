import { ApiResponse, WaitlistEntry } from "@/types";

export async function joinWaitlist(data: {
  name: string;
  email: string;
  company?: string;
  role?: string;
}): Promise<ApiResponse<WaitlistEntry>> {
  try {
    // This would be replaced with actual API call to your backend
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to join waitlist");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Mock function for demonstration
export function mockJoinWaitlist(data: {
  name: string;
  email: string;
  company?: string;
  role?: string;
}): Promise<ApiResponse<WaitlistEntry>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate 90% success rate
      if (Math.random() > 0.1) {
        resolve({
          success: true,
          data: {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            joinedAt: new Date(),
          },
          message: "Successfully joined waitlist",
        });
      } else {
        resolve({
          success: false,
          error: "Failed to join waitlist. Please try again.",
        });
      }
    }, 1000);
  });
}