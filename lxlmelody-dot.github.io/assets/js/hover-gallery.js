// 悬停画廊效果
class HoverGallery {
    constructor() {
        this.cards = document.querySelectorAll('.hover-card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            // 添加鼠标悬停效果
            card.addEventListener('mouseenter', () => {
                this.animateCard(card, 'enter');
            });
            
            card.addEventListener('mouseleave', () => {
                this.animateCard(card, 'leave');
            });
            
            // 添加触摸设备支持
            card.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.animateCard(card, 'enter');
            });
            
            card.addEventListener('touchend', () => {
                this.animateCard(card, 'leave');
            });
        });
    }
    
    animateCard(card, action) {
        const overlay = card.querySelector('.hover-overlay');
        const info = card.querySelector('.portfolio-info');
        
        if (action === 'enter') {
            // 鼠标进入
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(255, 182, 193, 0.3)';
            
            if (overlay) {
                overlay.style.opacity = '1';
            }
            
            if (info) {
                info.style.transform = 'translateY(-5px)';
            }
            
            // 添加轻微震动效果
            card.style.animation = 'vibrate 0.3s ease';
            
        } else if (action === 'leave') {
            // 鼠标离开
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(255, 182, 193, 0.1)';
            card.style.animation = '';
            
            if (overlay) {
                overlay.style.opacity = '0';
            }
            
            if (info) {
                info.style.transform = 'translateY(0)';
            }
        }
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hover-card')) {
        new HoverGallery();
    }
});