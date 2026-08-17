---
name: prakrutiyogashala-website
description: Improve Prakrutiyogashala.com (Prakruti Yogashala, Rishikesh yoga teacher training). Use when editing site copy, pages, SEO, conversion, brand voice, course pages, or when the user mentions Prakrutiyogashala, Prakruti Yogashala, YTT in Rishikesh, or making the website better.
---

# Prakruti Yogashala website

Live WordPress site: [https://www.prakrutiyogashala.com](https://www.prakrutiyogashala.com)  
This repo is a React rebuild of the **school** website (yoga teacher training in Rishikesh). Do not turn it into an Ayurveda dosha / “what is your Prakruti” quiz. Prakruti Yogashala is the school’s name.

Before writing, read [facts.md](facts.md). Before rewriting a live page, read [known-issues.md](known-issues.md).

## Goal

Help sincere seekers choose the right course and enroll with confidence. The site should feel like the school: precise, personal, lineage-rooted — not a generic Rishikesh TTC landing page.

Primary conversion: WhatsApp / call / application for 100 / 200 / 300 hour TTC.  
Secondary: retreats, Ayurveda, alumni community.

## Voice

Match the **100-hour course page**, not the older brochure pages.

- Specific over superlative. Prefer “eight to ten teachers, fifteen students” over “#1 yoga school.”
- Sincere and demanding. The school is not a yoga holiday. Say who it is *not* for.
- Founder-led. Darshan teaches like an engineer-physicist: examples, dry humour, Sanskrit–English precision. Do not flatten him into “experienced yoga master.”
- Body, mind, speech. Curriculum is nine disciplines on one path, not fitness with incense.
- Indian terms used correctly and sparingly: Gurukul, Prakriti, sattvic, Nada Yoga, shatkarma. Do not sprinkle Sanskrit as decoration.

Avoid: “life-changing journey,” “never been easier,” “embrace mindfulness,” “transformative odyssey,” fake countdown urgency, “best in the world” unless a real ranking is cited.

## Canonical facts (do not invent)

If a number is not in [facts.md](facts.md), do not guess. Flag it for the owner.

Always use **Prakruti Yogashala** (never Yogshala, Yogshala, or Prakrutiyogashala as the display name). Domain may stay `prakrutiyogashala.com`.

Never contradict:

- 200h and 300h: Yoga Alliance certified (RYT path).
- 100h: foundational; Yoga Alliance CE eligible; **not** a standalone teaching certification.
- Location: Tapovan, Rishikesh — not Dharamshala/Dharamsala as the school home (gallery title is wrong).
- Contact: `+91 83808 84995`, `prakrutiyogashala@gmail.com`.

Batch size, dates, prices, and daily timetable currently conflict across pages. Do not pick a number to “sound better.” Ask, or keep the page’s existing figure and mark the conflict.

## How to improve a page

1. Fetch the live URL. Note H1, proof, CTAs, FAQs, and contradictions with [facts.md](facts.md).
2. Decide the page job (rank, explain, enroll). One job per page.
3. Rewrite in brand voice. Fix grammar, duplicate sections, and mismatched teacher tags.
4. Keep enrollment paths obvious: WhatsApp, phone, and one short form. Do not add a second competing “limited offer” block.
5. Deliver as:
   - **Paste-ready copy** (headings + body)
   - **CMS change list** (what to replace, what to delete)
   - **Open questions** (facts that still conflict)

Do not publish invented testimonials, rankings, or Yoga Alliance claims.

## Page jobs

| Page | Job |
|------|-----|
| Home | Orient + route to the right course. Short proof, then 100/200/300. |
| `/yoga-teacher-training-in-rishikesh` | Category SEO + compare courses. No duplicate homepage essay. |
| `/100-hours-yoga-teacher-training` | Convert beginners who want depth in ~12 days. Voice source of truth. |
| `/200-hours-yoga-teacher-training` | Main RYT-200 enroll page. Certification, curriculum, living, price. |
| `/300-hour-yoga-teacher-training` | Advanced RYT-300. Prerequisite 200h. Do not mention Dharamshala unless the owner confirms a second campus. |
| `/about-us` | People and origin. Teacher tags must match the bio. |
| Course comparison, retreats, Ayurveda, gallery, blogs | Support; do not restyle as a second homepage. |

## Conversion

- Lead with who it is for / not for, then proof (batch size, faculty, lineage, reviews), then price.
- One honest scarcity line if true (“batches cap at N”). Delete rotating “Only 6 spots / prices increase soon” unless the owner confirms it is real this month.
- First-time India fears belong in one compact block (water, meals, women-only floors, airport pickup) — already on home; do not copy it onto every page.
- CTAs: “WhatsApp Darshan,” “Call +91 83808 84995,” “Apply.” “Learn More” with no destination is a miss.

## SEO and trust

- Title pattern: `{Course} in Rishikesh | Prakruti Yogashala` — unique per URL.
- One H1. Do not stuff “best yoga teacher training” into every heading.
- Fix 404 sitemap; request a real XML sitemap in WordPress/SEO plugin.
- Gallery and meta must say Rishikesh, not Dharamshala.
- Internal links: home → course pages; course pages → about teachers; all → WhatsApp.
- Reviews: 4.9 / 350+ appears on cards. Link to the actual Google (or other) source when adding trust.

## Copy quality bar

Every draft must pass:

- [ ] School name spelled **Prakruti Yogashala**
- [ ] No unverifiable “#1”
- [ ] 100h vs 200h/300h certification stated correctly
- [ ] Teacher specialty tags match the bio
- [ ] Daily schedule does not fight another section on the same page
- [ ] Grammar and parallel lists (“3 vegetarian meals every day”)
- [ ] English punctuation in quotes and dashes
- [ ] No duplicate hero / FAQ / form stacked three times

## When the user says “make the website better”

Work in this order unless they name a page:

1. Unify brand name, batch size, schedule, and certification (needs owner decisions — list them).
2. Tighten homepage: one hero, one proof row, course cards, living/trust, teachers, FAQ, one CTA.
3. Bring 200h and 300h copy up to the 100h page’s voice and structure.
4. Fix about-us teacher chips and empty bios (Vikram Ji, Yogi Suraj).
5. Technical: sitemap, titles, gallery location, form spam-decode UX.

When this repo holds the frontend, edit the React pages to match the school homepage: hero, proof, why us, 100/200/300 courses, living, teachers, FAQ, WhatsApp. Keep Body / Mind / Speech as teaching pillars, not a constitution test.
