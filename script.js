// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 移动端汉堡菜单
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // 移动端菜单链接点击后关闭菜单
    const mobileLinks = document.querySelectorAll('.mobile-menu nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // 平滑滚动
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.overview-card, .scenario-card, .interaction-card, .feature-card, .tech-section, .testing-process, .testing-feedback, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初始设置
    const elements = document.querySelectorAll('.overview-card, .scenario-card, .interaction-card, .feature-card, .tech-section, .testing-process, .testing-feedback, .contact-info, .contact-form');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 初始执行一次
    animateOnScroll();

    // 粒子特效
    createParticles();

    // 表单提交
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('表单提交成功！我们会尽快与您联系。');
            this.reset();
        });
    }

    // 演示图片点击放大效果
    const demoImages = document.querySelectorAll('.demo-image');
    demoImages.forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${imgSrc}" alt="放大图片">
                </div>
            `;
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                modal.remove();
                document.body.style.overflow = 'auto';
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });

    // 视频播放按钮点击效果
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('视频播放功能即将上线，敬请期待！');
        });
    }
});

// 创建粒子特效
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机大小
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // 随机颜色
        const colors = ['#00A6FB', '#8892B0', '#CCD6F6'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机透明度
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // 随机动画
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

// 添加粒子动画样式
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        25% {
            transform: translateY(-20px) translateX(10px);
        }
        50% {
            transform: translateY(0) translateX(20px);
        }
        75% {
            transform: translateY(20px) translateX(10px);
        }
    }
    
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 8px;
    }
    
    .close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .close:hover {
        color: #00A6FB;
    }
`;
document.head.appendChild(style);