// 页面切换过渡动画
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面进入动画
    document.body.classList.add('page-enter');
    
    // 链接点击时的页面退出动画
    document.querySelectorAll('a').forEach(link => {
        if (link.href && link.href.includes('.html') && !link.href.includes('#')) {
            link.addEventListener('click', function(e) {
                // 排除外部链接和特殊链接
                if (this.target === '_blank' || this.hasAttribute('download')) {
                    return;
                }
                
                e.preventDefault();
                const href = this.href;
                
                // 添加退出动画
                document.body.classList.add('page-exit');
                
                // 延迟跳转，让动画完成
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        }
    });
    
    // 加载动画隐藏
    setTimeout(() => {
        const transition = document.getElementById('pageTransition');
        if (transition) {
            transition.classList.add('fade-out');
            setTimeout(() => {
                transition.style.display = 'none';
            }, 500);
        }
    }, 800);
});