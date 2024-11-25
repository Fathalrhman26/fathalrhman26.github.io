<!-- projects.md -->
---
layout: default
title: Projects
---

<section id="ProjectsSection">
    <h2>My Projects</h2>
    <div class="ProjectsList">
        {% for project in site.data.projects %}
            <div class="ProjectItem">
                <h3>{{ project.title }}</h3>
                <img src="{{ project.image | relative_url }}" alt="{{ project.title }} Screenshot" class="ProjectImage">
                <p>{{ project.description }}</p>
                <p><strong>Technologies:</strong> {{ project.technologies | join: ", " }}</p>
                <a href="{{ project.live_link | relative_url }}" target="_blank">Live Demo</a> |
                <a href="{{ project.source_code | relative_url }}" target="_blank">Source Code</a>
            </div>
        {% endfor %}
    </div>
</section>
