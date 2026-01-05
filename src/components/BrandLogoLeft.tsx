export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.svg" 
        alt="Yalodent"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">YALODENT</span>';
        }}
      />
    </a>
  )
}