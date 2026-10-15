
function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <h2>Home</h2>
      <p>Welcome to my website!</p>
      <p>यह मेरी अपनी वेबसाइट है।</p>
    `;
  }

  else if (page === "about") {
    content.innerHTML = `
      <h2>About</h2>
      <p>मेरा नाम दीपक है।</p>
      <p>मैं वेबसाइट बनाना सीख रहा हूँ।</p>
    `;
  }

  else if (page === "gallery") {
    content.innerHTML = `
      <h2>Gallery</h2>
      <p>यहाँ मेरी फोटो और तस्वीरें दिखाई देंगी।</p>
    `;
  }

  else if (page === "contact") {
    content.innerHTML = `
      <h2>Contact</h2>
      <p>यहाँ संपर्क करने की जानकारी दिखाई देगी।</p>
    `;
  }
}
