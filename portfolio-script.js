// ===== DYNAMIC DATA STRUCTURE =====

const portfolioData = {
    hero: {
        name: "Janesh Allada",
        title: "Computer Science Engineering Student | Full Stack Developer | AI/ML Enthusiast",
        description: "Passionate about building innovative solutions with modern technologies. Experienced in web development, artificial intelligence, and cloud computing.",
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
            tags: ["Python", "C++", "Java", "JavaScript", "HTML/CSS"]
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
            tags: ["AWS", "Azure", "Docker", "Git"]
        },
        {
            icon: "🛠️",
            title: "Tools & Frameworks",
            tags: ["VS Code", "Jupyter", "Postman", "GitHub"]
        },
        {
            icon: "📊",
            title: "Data Science",
            tags: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
        }
    ],
    
    projects: [
        {
            title: "E-commerce Platform",
            date: "2024",
            description: "Full-stack e-commerce application with user authentication, product management, and payment integration using Django and React.",
            tags: ["Django", "React", "MySQL", "Stripe"]
        },
        {
            title: "AI Chatbot",
            date: "2024",
            description: "Intelligent chatbot using NLP and machine learning to provide automated customer support with sentiment analysis.",
            tags: ["Python", "TensorFlow", "NLP", "Flask"]
        },
        {
            title: "Face Recognition System",
            date: "2023",
            description: "Real-time face detection and recognition system using OpenCV and deep learning for security applications.",
            tags: ["Python", "OpenCV", "Keras", "Deep Learning"]
        },
        {
            title: "Weather App",
            date: "2023",
            description: "Responsive weather application with real-time data visualization, forecasts, and location-based services.",
            tags: ["React", "API Integration", "JavaScript", "Bootstrap"]
        },
        {
            title: "Portfolio Website",
            date: "2024",
            description: "Modern, responsive portfolio website showcasing projects and skills with interactive animations and smooth navigation.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
        },
        {
            title: "Task Manager",
            date: "2023",
            description: "Collaborative task management system with real-time updates, team collaboration features, and progress tracking.",
            tags: ["Django", "JavaScript", "WebSocket", "PostgreSQL"]
        }
    ],
    
    experience: [
        {
            title: "Full Stack Web Developer Intern",
            company: "DuraSoft Private Ltd",
            period: "Sep 2024 - Nov 2024",
            description: "Developed scalable web applications using Django and React. Implemented RESTful APIs and optimized database queries for improved performance."
        },
        {
            title: "AI/ML Intern",
            company: "CodeAlpha",
            period: "Aug 2024 - Sep 2024",
            description: "Worked on machine learning models for predictive analytics. Implemented neural networks using TensorFlow and conducted data preprocessing."
        },
        {
            title: "Summer Training",
            company: "Accenture & Google",
            period: "Jun 2024 - Jul 2024",
            description: "Completed intensive training programs in cloud computing, AI, and modern web development practices."
        }
    ],
    
    education: [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Vignan University",
            period: "2022 - 2026",
            gpa: "CGPA: 7.8/10",
            description: "Specialized in Software Engineering, Data Structures, Algorithms, and AI/ML"
        },
        {
            degree: "Intermediate (12th Grade)",
            institution: "Sri Chaitanya Junior College",
            period: "2020 - 2022",
            gpa: "Percentage: 94.5%",
            description: "Major: Mathematics, Physics, Chemistry (MPC)"
        },
        {
            degree: "Secondary School (10th Grade)",
            institution: "The School of Scholars",
            period: "2019 - 2020",
            gpa: "CGPA: 9.8/10",
            description: "Academic excellence in Science and Mathematics"
        }
    ],
    
    certifications: [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Validated cloud computing knowledge and AWS platform expertise"
        },
        {
            title: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            date: "2024",
            description: "Demonstrated understanding of cloud concepts and Azure services"
        },
        {
            title: "Full Stack Web Development",
            issuer: "DuraSoft",
            date: "2024",
            description: "Comprehensive training in modern web development technologies"
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera",
            date: "2023",
            description: "Advanced coursework in ML algorithms and neural networks"
        },
        {
            title: "Python Programming",
            issuer: "CodeAlpha",
            date: "2023",
            description: "Expert-level Python programming and best practices"
        }
    ],
    
    achievements: [
        {
            title: "Smart India Hackathon Finalist",
            description: "Selected as finalist in national-level hackathon for innovative AI solution",
            year: "2024"
        },
        {
            title: "University Coding Competition Winner",
            description: "First place in inter-university programming competition",
            year: "2024"
        },
        {
            title: "Open Source Contributor",
            description: "Active contributor to multiple open-source projects on GitHub",
            year: "2023-2024"
        },
        {
            title: "Research Paper Publication",
            description: "Co-authored paper on AI applications in healthcare",
            year: "2023"
        }
    ]
};

// ===== DYNAMIC RENDERING FUNCTIONS =====

function renderHero() {
    const heroContent = document.getElementById('heroContent');
    const { name, title, description, socials } = portfolioData.hero;
    
    const socialLinks = socials.map(social => {
        const iconSymbol = social.icon === 'github' ? '⚡' : 
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
