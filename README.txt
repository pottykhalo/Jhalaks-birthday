JHALAK'S BIRTHDAY WEBSITE
==========================

FILES
- index.html  : the webpage structure and editable messages
- style.css   : colors, layout, animations, responsive design
- script.js   : countdown and interactive features
- photos/     : put your chosen photos here before publishing (create this folder)

PREVIEW ON YOUR COMPUTER
1. Unzip the download.
2. Open index.html in a browser. Most features work without a server.
3. To edit wording, open index.html in a text editor and search for the message.
4. To edit reasons and letter text, open script.js and change the text in the letters/reasons sections.
5. To edit colors, change the CSS variables near the top of style.css.

ADD PERMANENT PHOTOS
1. Create a folder called "photos" beside index.html.
2. Copy images into it, e.g. photos/us-1.jpg, photos/us-2.jpg, photos/us-3.jpg.
3. In index.html, find the three photo-placeholder divs and replace each with:
   <div class="photo-placeholder"><img src="photos/us-1.jpg" alt="A favourite memory"></div>
   Use us-2.jpg and us-3.jpg for the other two cards.
4. The on-page file picker is a preview helper; images selected through it are not automatically saved into the website.

ADD MUSIC
- The music player lets you choose an audio file from your own device for a preview.
- For a published page, a direct public HTTPS link to an audio file can be pasted into the URL field. Streaming-service page URLs (e.g. Spotify/YouTube pages) usually are not direct audio files and may not work as audio sources.
- Use music you have permission to share. You can also remove the URL field and keep the file picker if you prefer.

PUBLISH IT ONLINE (FREE OPTIONS)
Option A — Netlify Drop (quickest):
1. Open https://app.netlify.com/drop in your browser.
2. Sign in if asked.
3. Drag the unzipped website folder (or the folder's contents, depending on the page prompt) into the drop area.
4. Netlify will provide a public website URL. Open that URL on your phone to test it, then send it to Jhalak.
5. If it asks for a folder, upload the folder containing index.html, style.css, script.js and photos/.

Option B — GitHub Pages:
1. Sign in at https://github.com and create a new public repository.
2. Upload index.html, style.css, script.js and the photos folder.
3. Open the repository's Settings → Pages.
4. Select deploy from the main branch/root and save.
5. Wait for GitHub Pages to show the published URL, then share it.

IMPORTANT
- The birthday countdown is set to 17 November 2026 using the visitor's device clock.
- The page uses Google Fonts if the visitor has internet access; fallback fonts are included.
- Before publishing, test the site on your phone and check that the photos/music you chose work.
- The website is a static site: it does not collect or upload visitors' information.
