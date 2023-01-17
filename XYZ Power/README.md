# DMIT 1530: Assignment #1

**Weight**: 15% of your final mark

**Due Date**: Refer to Moodle

The due date for this assignment is available on your GitHub Classroom assignment, as well as on Moodle. 

For this assignment, you will build a **three page** website with a **responsive layout**.

The following instructions will help you work through the image preparation, HTML, and CSS required to create this website.

---

## Contents
1. [Image Preparation](#image-preparation)

2. [HTML](#html)

3. [Validation](#validation)

4. [CSS](#css)

5. [Media Queries](#media-queries)

---

## Image Preparation
Although you have been given a number of image files to work with, they are not web-ready. Before you can use them in your website, you must prepare them by:

1. Converting them to a newer image format, such as .webp;
2. Ensuring that no image exceeds **250 kilobytes** in size; and
3. Creating a small, medium, and large version of each background image for each of your three layouts. 

In order to do this, you can use an application such as Adobe Photoshop CC or Squoosh[https://squoosh.app/].

>> **Note**: You do not need to create three versions of *every* image on your page, only your background images.

---

## HTML
Before adding any styles, you must mark-up all of your content. Begin by filling in the meta information in the `<head>` of each HTML document; remember to give a unique, semantic `<title>` and description for each page. Then, start building your `<body>` by pasting all of the content from the **website-content markdown file** into your HTML files, semantically marking them up, and adding appropriate sectioning elements.


### Navigation & Footer
The top-level navigation, main menu, and footer will be identical on every page of your website. A third menu can be found exlusively on the index page. 

Once you have written the code for your top-level navigation, main menu, and footer, copy and paste it into all three of your pages.

#### Functionality
The top-level navigation, index page navigation, and footer will not function. Instead of linking to external website or other pages within your framework folder, use a moot or placeholder link.

```HTML
<!-- moot or placeholder value -->
<a href="#"> ... </a>
```

However, the main menu must link to the following pages within your framework folder:

1. index
2. your home
3. community

The main menu should function from any page within the website.

Finally, make sure that the XYZ Power heading links back to the index page.

### index
The main area of your index page will have two containers. They will switch from a single column layout in the smallest view to a two-column layout in your first media query. 

Both of these containers will have a faux button (i.e., an anchor element styled to look like a button) with a hover state. They will not link to anywhere, but have a placeholder `href` value.

---

### Validation
Your HTML must **validate without any errors**; however, a warning that your website uses filler text rather than English is acceptable. Use [W3C Markup Validation Service](https://validator.w3.org/).

Your CSS must **validate without any errors**. Use [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). If you have any errors and/or warnings, please confirm with your instructor if any of these are acceptable.

---

## CSS
Working within a single stylesheet, `styles.css`, you will utilize flexbox and flexbox properties to create unique layouts for each of your pages. 

### Colour Palette
The following colours are used throughout the website:

1. dark blue:   #084272;
2. light blue:  #E5F5FA;
3. medium blue: #005FAA;
4. light grey:  #F5F5F5;
5. green:       #6ba23f;

For the semi-transparent box near the bottom on the community page, try using the following value:

```css
  rgba(255, 255, 255, 0.85);
```

### Universal & Typographic Styles
Every typographic element on the webpages uses:

```css
{
  font-family: Calibri, Arial, sans-serif;
}
```

#### Headings
The following values are provided to you in pixels; however, you must use relative units (ex. em, **rem**) in order to receive a mark.

* h1: 36px
* h2: 30px
* h3: 34px
* p: 18px

### Navigation & Footer
#### Hover States
Each level of navigation or menu will have a different hover state. Refer to the provided screenshots in Moodle in order to see an example. 

##### Top-Level Navigation
The background colour of each anchor tag turns green. 

> **Hint**: You may need to make the anchor tag take up 100% of the height and width of its parent container in order to do this successfully.

##### Main Menu
The text colour turns green and an underline is added.

##### index Navigation
The background colour of the faux-button turns medium blue; the font colour turns white.

The faux-buttons turn light blue with medium blue text and a dark blue border.

##### Your Home & Community Navigation
The background-colour for all of the labels  underneath the six images in the upper area of the page will switch from dark blue to medium blue.

The links underneath the lorem ipsum filler text will switch to green.

##### Footer Navigation
The font colour turns green.

---

### Media Queries
As you work through the media queries for each page, be mindful of the specificity and scope of your selectors.

You should have a minimum of two media queries, for a total of three 'views' or layouts. You will *need to choose* which breakpoints (i.e., which minimum widths) achieve the look, feel, and functionality of the website in your provided screenshots. 

When defining padding and margins, do not fixate on a pixel-perfect measurement. Instead, focus on making sure that the layout is fluid and looks good at any viewport width. Do this by utilising relative units and flexbox properties such as `justify-content` and `align-items`.

#### A Note on Your Fixed-Width Layouts
At your largest breakpoint or view, your layout should switch to a fixed-width centered layout.

Even when you switch to a fixed-width layout, your background colours and background images should span the entire width of the viewport. 

#### A Hint About Differentiating Page Layouts
If you find that you are having difficulty differentiating between each page with a single stylesheet, try adding a unique class to a high-level element and using this class in your selector statements. 

## Submission
Commit all your work (minimum of **three (3) commits** to GitHub), publish your project to Netlify and supply the netlify link to Moodle.