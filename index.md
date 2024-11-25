<!-- index.md -->
---
layout: default
title: Home
---

<section id="HomeSection">
    <div class="HomeContainer">
        <img src="{{ "/assets/images/ProfileImage.jpg" | relative_url }}" alt="Profile Picture" class="ProfileImage">
        <h1 class="JobTitle">Software Engineer</h1>
        <!-- Social Media Links -->
        <div class="SocialMediaLinks">
            <a href="{{ site.social.twitter }}" target="_blank"><img src="{{ "/assets/images/x.svg" | relative_url }}" alt="Twitter"></a>
            <a href="{{ site.social.linkedin }}" target="_blank"><img src="{{ "/assets/images/linkedin.svg" | relative_url }}" alt="LinkedIn"></a>
            <a href="{{ site.social.github }}" target="_blank"><img src="{{ "/assets/images/github.svg" | relative_url }}" alt="GitHub"></a>
        </div>
        <!-- Biography -->
        <div class="Biography">
            <h2>Biography</h2>
            <p>I'm <b>Fathalrhman Adam</b>, a Software Engineer with interests in <b>Reinforcement Learning (RL) & Robotics</b>. I thrive on solving complex problems and building innovative solutions that make a positive impact on the world.</p>
        </div>
        <!-- AI Communities and Interests -->
        <div id="CommunitiesInterests">
            <div>
                <h2>AI Communities</h2>
                <ul>
                    <li><a href="https://deeplearningindaba.com/" target="_blank">Deep Learning Indaba</a></li>
                    <li><a href="https://www.blackinai.org/" target="_blank">Black in AI</a></li>
                </ul>
            </div>
            <div>
                <h2>Interests</h2>
                <ul>
                    <li>Reinforcement Learning (RL) & Robotics Research</li>
                    <li>AI Ethics & Governance Research</li>
                    <li>Software Engineering</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Additional Sections -->
<section id="EducationSection">
    <h2>Education</h2>
    <div class="EducationItem">
        <h3>Neelain University <span>Sep 2016 – Oct 2024</span></h3>
        <p>BSc in Software Engineering - Khartoum, Sudan</p>
    </div>
    <div class="EducationItem">
        <h3>European Innovation Academy <span>Dec 2018 – Jan 2019</span></h3>
        <p>Diploma in Entrepreneurship and Innovation - Doha, Qatar</p>
    </div>
</section>

<section id="EventsSection">
    <h2>Events Organized</h2>
    <div class="EventsItem">
        <h3>IEEE R8 Sudanese Students and Young Professionals (SSYP2022)</h3>
        <p>I coordinated exhibitions and project teams on the Fourth Industrial Revolution theme.</p>
    </div>
</section>

<section id="ExperienceSection">
    <h2>Experience</h2>
    <div class="ExperienceItem">
        <h3>CLENT Africa <span>Sep 2024 – Present</span></h3>
        <p>Research and Data Analyst - Remote</p>
        <ul>
            <li>Coordinating renewable energy and climate change pilot projects.</li>
            <li>Conducting environmental health baseline studies influencing policies.</li>
            <li>Optimizing data collection protocols aligned with international standards.</li>
            <li>Forging strategic partnerships to broaden research capabilities.</li>
        </ul>
    </div>
    <div class="ExperienceItem">
        <h3>GitHub Digital Public Good <span>May 2023 – Present</span></h3>
        <p>Community Manager Trainee - Remote</p>
        <ul>
            <li>Directing community engagement initiatives.</li>
            <li>Implementing community guidelines enhancing communication.</li>
            <li>Orchestrating workshops to foster collaboration.</li>
            <li>Aligning community strategies with project objectives.</li>
        </ul>
    </div>
    <div class="ExperienceItem">
        <h3>Shai for AI <span>Jun 2021 – Mar 2022</span></h3>
        <p>Senior Machine Learning Engineer Intern - Remote</p>
        <ul>
            <li>Engineered advanced ML models using Python, PyTorch, TensorFlow.js.</li>
            <li>Streamlined data processing using NumPy, Scikit-Learn, Pandas.</li>
            <li>Developed Jupyter/Colab notebooks for model training.</li>
            <li>Architected production-ready pipelines for predictive engines.</li>
        </ul>
    </div>
</section>

<section id="PublicationsSection">
    <h2>Publications</h2>
    <p>Coming soon.</p>
</section>

<section id="AwardsSection">
    <h2>Honors & Awards</h2>
    <div class="AwardsItem">
        <h3>Travel Grant Recipient, Neelain University</h3>
        <p>Awarded a grant to attend the Deep Learning Indaba Conference in Tunis, Tunisia.</p>
    </div>
    <div class="AwardsItem">
        <h3>Fully Funded Scholarship, Arab Innovation Academy</h3>
        <p>Granted a scholarship to study entrepreneurship and innovation in Doha, Qatar.</p>
    </div>
</section>

<section id="BlogsSection">
    <h2>Latest Blogs</h2>
    {% for post in site.posts limit:3 %}
        <div class="BlogItem">
            <span class="blog-date">{{ post.date | date: "%B %d, %Y" }} / {{ post.categories | join: ", " }}</span>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.excerpt | markdownify }} <a href="{{ post.url | relative_url }}">read more</a></p>
        </div>
    {% endfor %}
</section>

<section id="contact">
    <h2>Contact Me</h2>
    <form action="https://docs.google.com/forms/d/e/1FAIpQLSesMqmxx4FkKbZueXelZoSTT7VaeoRhkKCja08BK-4gBFTY2w/formResponse" method="POST">
        <input type="text" name="entry.1176074512" placeholder="Your Name" required>
        <input type="email" name="entry.1467512537" placeholder="Your Email" required>
        <textarea name="entry.611608155" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
