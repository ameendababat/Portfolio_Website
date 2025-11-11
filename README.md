# 🌐 Portfolio Homepage

A fully responsive and accessible **portfolio homepage** built using **HTML**, **SCSS**, and modern **CSS methodologies** (BEM & SMACSS).  
This project showcases my ability to design and develop professional, scalable, and accessible webpages — featuring an **intro banner**, **latest projects**, and more.

---

## 🧭 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)


## 🪄 Overview

This homepage is part of my personal portfolio project.  
It highlights my skills in responsive design, accessibility, and structured CSS organization using **BEM** and **SCSS**.  
The site includes the following core sections:

 - 🏠 **Home:** A welcoming introduction with my name and role.  
 - 🙋‍♀️ **About:** A short bio describing who I am and what I do.  
 - ⚙️ **Skills:** A showcase of my technical skills and tools.  
 - 💻 **Projects:** A collection of my best work with links or previews.  
 - 🎓 **Education:** My academic background and qualifications.  
 - 🏅 **Certificates:** Relevant certifications and achievements.  
 - 📞 **Contact:** Easy ways to reach out via email or social media.

---

## ✨ Features

- **Responsive Layout:** Adapts seamlessly to mobile, tablet, and desktop views.  
- **Accessibility:** Meets **WCAG A and AA** standards for color contrast, focus order, and semantic HTML.  
- **SCSS Architecture:** Organized using `base`, `blocks`, and `utils` folders for clarity and reusability.  
- **Clean Typography:** Consistent hierarchy with modern Google Fonts.  
- **Hover Effects:** Interactive project cards with smooth transitions.  
- **Fixed Navbar:** Shrinks on scroll and stays visible for easy navigation.

---

## 🧠 Technologies Used

- **HTML5** — semantic and accessible structure  
- **SCSS (Sass)** — modular, maintainable styling  
- **CSS Methodologies:** BEM, SMACSS  
- **JavaScript (optional)** — for navbar or menu interactivity  
- **Boxicons / Font Awesome** — icons  
- **Google Fonts** — typography  

---

## 📂 Folder Structure

```plaintext
src/
├── index.html
├── scss/
│   ├── base/
│   │   ├── _resets.scss
│   │   └── base.scss
│   ├── blocks/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _intro-banner.scss
│   │   ├── _projects.scss
│   │   └── blocks.scss
│   └── utils/
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── utils.scss
├── img/
│   └── (profile + project images)
├── dist/
│   └── css/
│       └── main.css
└── package.json
