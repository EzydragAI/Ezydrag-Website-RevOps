// Default is light. Dark applies only when the visitor explicitly chose it.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('ezydrag-mkt-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;
