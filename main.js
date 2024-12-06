// Snowfall effect
function createSnowflakes() {
    const snowfall = document.querySelector('.snowfall');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.innerHTML = '❄';
        snowfall.appendChild(snowflake);
    }
}

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
});

// Add snowflake styles
const style = document.createElement('style');
style.textContent = `
    .snowflake {
        position: fixed;
        color: #fff;
        font-size: 1em;
        text-shadow: 0 0 5px #000;
        animation: fall linear infinite;
    }
    
    @keyframes fall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
