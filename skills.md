<!-- skills.md -->
---
layout: default
title: Skills
---

<section id="SkillsSection">
    <h2>My Skills</h2>
    <div class="SkillsContainer">
        <div class="TechnicalSkills">
            <h3>Technical Skills</h3>
            <ul>
                {% for skill in site.data.skills.technical %}
                    <li>
                        <span>{{ skill.name }}</span>
                        <div class="SkillBar">
                            <div class="SkillLevel" style="width: {{ skill.proficiency }}%;"></div>
                        </div>
                    </li>
                {% endfor %}
            </ul>
        </div>
        <div class="SoftSkills">
            <h3>Soft Skills</h3>
            <ul>
                {% for skill in site.data.skills.soft %}
                    <li>{{ skill }}</li>
                {% endfor %}
            </ul>
        </div>
    </div>
</section>
