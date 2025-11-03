// ===== DYNAMIC DATA STRUCTURE =====

const portfolioData = {
    hero: {
        name: "Janesh Allada",
        title: "Computer Science & Engineering Student | MERN Stack Developer | Python Developer | AI/ML Enthusiast",
        description: "Passionate about building innovative solutions with modern technologies. Experienced in web development, artificial intelligence, and Python Development.",
        socials: [
            { icon: "github", url: "https://github.com/janeshallada", label: "GitHub" },
            { icon: "linkedin", url: "https://linkedin.com/in/janesh-allada", label: "LinkedIn" },
            { icon: "email", url: "mailto:janeshallada@gmail.com", label: "Email" }
        ]
    },
    
    skills: [
        {
            icon: "💻",
            title: "Programming Languages",
            tags: ["Python", "C++", "JavaScript", "HTML/CSS"]
        },
        {
            icon: "🌐",
            title: "Web Development",
            tags: ["Django", "React", "Bootstrap", "REST APIs", "MySQL"]
        },
        {
            icon: "🤖",
            title: "AI & Machine Learning",
            tags: ["TensorFlow", "Keras", "OpenCV", "NLP", "Deep Learning"]
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            tags: ["AWS", "Git"]
        },
        {
            icon: "🛠️",
            title: "Tools & Frameworks",
            tags: ["VS Code", "Jupyter", "GitHub"]
        },
        {
            icon: "📊",
            title: "Data Science",
            tags: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
        }
    ],
    
    projects: [
        {
            title: "Novel Vehicle Damage Detection & Repair Cost Estimation Using DeepLearning (YOLOv5) - (Main Project)",
            date: "2025",
            description: " Built a deep learning system using Python, YOLOv5 & TensorFlow to detect vehicle damage and estimate repair costs( 85% faster claims).",
            tags: ["Python", "YOLOv5", "MySQL", "DataBase", "OpenCv"]
        },
        {
            title: "Telegram Chatbot",
            date: "2024",
            description: "Intelligent chatbot using NLP and machine learning to provide automated customer support with sentiment analysis.",
            tags: ["Python", "TensorFlow", "NLP", "Flask"]
        },
        {
            title: "Language Translator Using python",
            date: "2023",
            description: "Designed a Python-based Language Translator that supports multiple languages using external translation APIs for 20+ languages.",
            tags: ["Python"]
        },
        {
            title: "Talking Robot Using Python and JavaScript",
            date: "2023",
            description: "Created a Talking Robot using Python and JavaScript with speech recognition and text-to-speech for real-time voice interaction.",
            tags: ["Python", "JavaScript", "HTML", "CSS", "Bootstrap"]
        },
        {
            title: "Portfolio Website",
            date: "2024",
            description: "Modern, responsive portfolio website showcasing projects and skills with interactive animations and smooth navigation.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
        },
        {
            title: "Security Guard Recruitment System Using Python Django Framework- (Mini Project)",
            date: "2022",
            description: " Built a Django-based Security Guard Recruitment System to automate job postings, applicant tracking, and interview scheduling for security agencies, reducing manual effort by ˜ 60%.",
            tags: ["Django", "JavaScript", "HTML", "CSS", "Python"]
        }
    ],
    
    experience: [
        {
            title: " Web Developer Intern",
            company: "APSSDC",
            period: "May 2023 - Jul 2023",
            description: "Developed scalable web applications using Django and Python. Optimized database queries for improved performance."
        },
        {
            title: "AI/ML Intern",
            company: "AIMERS",
            period: "May 2024 - Jul 2024",
            description: "Worked on machine learning models for predictive analytics. Implemented some prototype telegram chatbots, Weather bots, Image processing, NLP"
        },
        {
            title: "Java Full Stack Development",
            company: "Vaultshpere",
            period: "Dec 2024 - Jan 2025",
            description: "Completed intensive training programs in Java, Springboots."
        },
        {
            title: "MERN Stack Development",
            company: "NxtWave",
            period: "Ongoing",
            description: "Currently upgrading my skills with MERN Development on NXTWAVE."
        }
    ],
    
    education: [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Godavari Institute of Engineering & Technology(A)",
            period: "2022 - 2025",
            gpa: "CGPA: 7.60/10",
            description: "Specialized in Software Engineering, Python, MERN Development"
        },
        {
            degree: "Diploma",
            institution: "Government Polytechnic College, Vijayawada",
            period: "2019 - 2022",
            gpa: "Percentage: 77.51%",
            description: "Major: Electrical and Electronics Engineering"
        },
        {
            degree: "Secondary School (10th Grade)",
            institution: "Montessori High School",
            period: "2018 - 2019",
            gpa: "CGPA: 9.8/10",
            description: "Academic excellence in Science and Mathematics"
        }
    ],
    
    certifications: [
        {
            title: "Responsive Web Design",
            issuer: "FreeCodeCamp",
            date: "2024",
            description: "Expert-level in Web pages Designing and best practices"
        },
        {
            title: "Data Analytics Job Simulation",
            issuer: "Deloitte",
            date: "2025",
            description: "Demonstrated understanding fundamentals of Data Analysis and Forensic Technology"
        },
        {
            title: "Java Full Stack Web Development",
            issuer: "Vaultsphere",
            date: "2025",
            description: "Comprehensive training in modern Java and Springboot technologies"
        },
        {
            title: "Artifical Intelligence",
            issuer: "Artificial Intelligence Medical and Engineering Researchers Society (AIMER Society)",
            date: "2024",
            description: "Advanced coursework in AI technologies and Machine learning problems"
        },
        {
            title: "Web Development Using Django",
            issuer: "APSSDC",
            date: "2023",
            description: "Comprehensive training in Python development and Django Framework"
        }
    ],
    
    achievements: [
        {
            title: "Nestle E-Learning Resilience",
            description: "Completed the tasks effectively in the Nesternship",
            year: "2025"
        },
        {
            title: "All India NCAT",
            description: "Actively participated Aptitue test and secured 17268 rank conducted by Naukari Campus",
            year: "2025"
        },
        {
            title: "AWS Machine Learning Foundation",
            description: "Actively completed the tasks and earned a badge on AWS Educate",
            year: "2025"
        },
        {
            title: "Research Paper Publication",
            description: "Co-authored paper on Deep Learning Web development in Vehicle Damage Assessment",
            year: "2025"
        },
        {
            title: "Problem Solver in Codechef",
            description: "Solved over 50+ problems on CodeChef with difficulty rating 500",
            year: "2025"
        }
    ]
};

// ===== DYNAMIC RENDERING FUNCTIONS =====

function renderHero() {
    const heroContent = document.getElementById('heroContent');
    const { name, title, description, socials } = portfolioData.hero;
    
    const socialLinks = socials.map(social => {
        const iconSymbol = social.icon === 'github' ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>' : 
                          social.icon === 'linkedin' ? '💼' : '✉️';
        return `<a href="${social.url}" target="_blank" class="social-icon" title="${social.label}">${iconSymbol}</a>`;
    }).join('');
    
    heroContent.innerHTML = `
        <h1>Hi, I'm <span class="gradient-text">${name}</span></h1>
        <p class="lead">${title}</p>
        <p class="hero-description">${description}</p>
        <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-outline-light">View Projects</a>
        </div>
        <div class="social-links">${socialLinks}</div>
    `;
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-date">${project.date}</span>
            </div>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const experienceContainer = document.getElementById('experienceTimeline');
    experienceContainer.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <h4>${exp.title}</h4>
            <span class="text-muted">${exp.company} | ${exp.period}</span>
            <p>${exp.description}</p>
        </div>
    `).join('');
}

function renderEducation() {
    const educationContainer = document.getElementById('educationTimeline');
    educationContainer.innerHTML = portfolioData.education.map(edu => `
        <div class="timeline-item">
            <h4>${edu.degree}</h4>
            <span class="text-muted">${edu.institution} | ${edu.period}</span>
            <p><strong>${edu.gpa}</strong></p>
            <p>${edu.description}</p>
        </div>
    `).join('');
}

function renderCertifications() {
    const certsGrid = document.getElementById('certificationsGrid');
    certsGrid.innerHTML = portfolioData.certifications.map(cert => `
        <div class="cert-card">
            <h3>${cert.title}</h3>
            <p><strong>${cert.issuer}</strong> | ${cert.date}</p>
            <p>${cert.description}</p>
        </div>
    `).join('');
}

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = portfolioData.achievements.map(achievement => `
        <div class="achievement-card">
            <h3>${achievement.title}</h3>
            <span class="project-date">${achievement.year}</span>
            <p>${achievement.description}</p>
        </div>
    `).join('');
}

// ===== NAVIGATION & INTERACTIONS =====

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navbarMenu = document.getElementById('navbarNav');

navToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.getElementById('mainNav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navbarMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 41, 59, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navbarHeight = document.getElementById('mainNav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards after they're rendered
function observeCards() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .experience-card, .cert-card, .achievement-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    renderHero();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();
    renderAchievements();
    
    // Observe elements after rendering
    setTimeout(observeCards, 100);
    
    console.log('👋 Welcome to Janesh Allada\'s Portfolio!');
    console.log('💻 This portfolio is built with vanilla HTML, CSS, and JavaScript');
    console.log('🚀 100% Offline Ready - No CDN Dependencies!');
});
