# Nufails HTML Demos

Static, no-build website demos. All pages are marked `noindex, nofollow`; forms are local demos and do not send or save data.

## Publish the source to GitHub

1. Create a new repository named `nufails-html-demos` in your GitHub account.
2. Upload the contents of this project folder to the repository root (including `index.html`, `404.html`, `_headers`, `assets/`, and all five demo folders), then commit the files.
3. Keep the repository public if you want to connect it through Cloudflare Pages without additional repository permissions. The site source contains only fictional demo content.

## Deploy to Cloudflare Pages

1. In Cloudflare Dashboard, open **Workers & Pages** → **Create application** → **Pages**.
2. To keep a GitHub-connected deployment, select **Connect to Git** and choose `nufails-html-demos`; use no build command and the repository root as the output directory. If choosing Direct Upload instead, select **Direct Upload**, name the project `nufails-html-demos`, and upload the project files from this folder.
3. Deploy, then open the Pages project → **Custom domains** → **Set up a custom domain** and enter `html.nufails-demo.win`.
4. Cloudflare's zone check found that the requested hostname has no DNS record yet. Allow Cloudflare to add only the record needed for `html.nufails-demo.win`. If the dashboard shows a conflict or asks to replace an existing record, stop and review before proceeding.
5. Check the published hub and each demo URL. Replace any sample illustrations with final images only by putting the new files in the matching `img/` folders and updating their local filenames in HTML.
