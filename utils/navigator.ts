export function shareLink({ shareData }: { shareData: ShareData }) {
  // Check if the browser supports the Share API
  if (navigator.share) {
    navigator
      .share(shareData)
      .catch((error) => console.error('Error sharing:', error));
  } else {
    // Fallback behavior for browsers that don't support the Share API
    alert('Sharing is not supported in this browser.');
  }
}
