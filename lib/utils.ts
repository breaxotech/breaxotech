/**
 * Copy text to clipboard. Falls back to a prompt if clipboard API is unavailable.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Opens a mailto: link, used for WhatsApp / email buttons.
 */
export function openUrl(url: string, target: "_blank" | "_self" = "_blank"): void {
  window.open(url, target, "noopener,noreferrer");
}
