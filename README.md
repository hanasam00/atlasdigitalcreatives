# Atlas Digital Creative

Portfolio website for **Atlas Digital Creative**, an independent graphic design studio established in 2023.

## Live website

This website is hosted using GitHub Pages.

## Website files

```text
index.html
public/
  work/
    concept/
    featured/
README.md
```

The complete website layout and styling are contained inside `index.html`.

Portfolio images are stored inside `public/work/`.

## Preview the website

### GitHub Pages

1. Open the repository settings.
2. Select **Pages**.
3. Set the source to **Deploy from a branch**.
4. Select the `main` branch.
5. Select `/ (root)`.
6. Save and wait for GitHub to publish the website.

### Preview locally

Download the repository, unzip it, and double click `index.html` to open the website in a browser.

## Edit website text

Open `index.html`, locate the text you want to change, edit it, and commit the changes.

## Add a portfolio image

1. Open `public/work/featured/`.
2. Upload the new PNG or JPG file.
3. Use a simple lowercase filename without spaces, such as `client-logo.png`.
4. Open `index.html`.
5. Add a new project block inside the portfolio collage:

```html
<article class="project">
  <div class="project-image">
    <img
      src="public/work/featured/client-logo.png"
      alt="Client logo design"
    >
  </div>
</article>
```

The filename written in `src` must exactly match the uploaded image filename.

## Contact

Email: [atlasdigitalcreatives0@gmail.com](mailto:atlasdigitalcreatives0@gmail.com)

© 2026 Atlas Digital Creative
