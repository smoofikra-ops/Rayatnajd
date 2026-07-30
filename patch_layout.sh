sed -i 's/<TopBanner \/>/  <div className="sticky top-0 z-50 flex flex-col w-full shadow-sm">\n        <TopBanner \/>/g' src/components/Layout.tsx
sed -i 's/<Navbar \/>/<Navbar \/>\n      <\/div>/g' src/components/Layout.tsx
