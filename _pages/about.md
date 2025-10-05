---
permalink: /
title: "Junsung Park"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## About Me
I'm a Ph.D. candidate in [KAIST AI](https://gsai.kaist.ac.kr/) adviced by Prof. [Hyunjung Shim](https://scholar.google.com/citations?user=KB5XZGIAAAAJ&hl=en), 
and earned BSc for Mechanical Engineering & Artificial Intelligence in [Korea University](https://www.korea.edu/sites/en/index.do).

I'm interested in real-world problems like autonomous driving, navigation, and robotics.


## Publications
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

## Patents
{% for post in site.patents reversed %}
  {% include archive-single.html %}
{% endfor %}

## Projects
{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}

## Awards and Honors
- Scholarship from Lee Myungbak & Kim Yoonok Foundation: 2022 ~ 2023
- Scholarship from Korea University Alumni Association: 2021 ~ 2023
- Bronze Prize & Social Contribution Prize from Korea Univ. Innovation Center for Engineering, Capstone Design Project. 2018.

## Educations
- PhD Candidate, **KAIST**: August 2023 ~ ing
- BSc Mechanical Engineering & Artificial Intelligence, **Korea University**: March 2017 ~ August 2023
