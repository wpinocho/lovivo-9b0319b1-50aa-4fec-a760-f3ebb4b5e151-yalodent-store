export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Yalodent"
        className="h-12 w-auto object-contain hover:opacity-90 transition-opacity" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">YALODENT</span>';
        }}
      />
    </a>
  )
}