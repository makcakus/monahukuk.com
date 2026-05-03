"use server";

export type NewsletterState = {
  success: boolean;
  errorKey: string;
} | null;

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<{ success: boolean; errorKey: string }> {
  const email = formData.get("email")?.toString().trim() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, errorKey: "invalidEmail" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    // Not configured yet — log and treat as success so the form still works in dev
    console.log(`[Newsletter] New subscriber (Resend not configured): ${email}`);
    return { success: true, errorKey: "" };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (!res.ok) {
      console.error("[Newsletter] Resend error:", await res.text());
      return { success: false, errorKey: "serverError" };
    }

    return { success: true, errorKey: "" };
  } catch (err) {
    console.error("[Newsletter] Network error:", err);
    return { success: false, errorKey: "serverError" };
  }
}
