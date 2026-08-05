# atlasdigitalcreatives

This folder contains the complete editable source for the Atlas Digital Creative portfolio website.

## Where to edit

- `app/page.tsx` contains the visible website text and the portfolio project list.
- `app/globals.css` contains the layout, colors, typography, collage, and mobile styling.
- `public/work/` contains every portfolio image used by the website.
- `app/layout.tsx` contains the browser title and page metadata.

## Open the project

1. Install Node.js 22.13 or newer from https://nodejs.org.
2. Open this folder in VS Code or Cursor.
3. Open the terminal inside the folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local address shown in the terminal.

## Change text

Open `app/page.tsx`, find the sentence you want to change, edit the text between the tags, and save the file.

For example:

```tsx
<p>Brand identities, social content, and marketing materials...</p>
```

## Replace a portfolio image

1. Put the new image inside `public/work/featured/`.
2. Open `app/page.tsx`.
3. Change the matching `src` value in the `projects` list near the top of the file.

Example:

```tsx
{ src: "/work/featured/new-design.png", title: "New design", className: "collage-ten" }
```

File names should use lowercase letters and hyphens. Avoid spaces when possible.

## Publish with GitHub and Vercel

1. Create a new empty repository on GitHub.
2. Upload this folder to the repository.
3. Sign in to https://vercel.com with GitHub.
4. Select **Add New Project** and import the repository.
5. Leave the detected build settings unchanged and select **Deploy**.

Afterward, each change pushed to the main GitHub branch will automatically update the Vercel website.

## Contact email currently used

`atlasdigitalcreatives0@gmail.com`
