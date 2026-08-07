#!/bin/bash
sed -i 's/grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6/grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6/g' src/pages/ToolsCenter.tsx
sed -i 's/p-5 lg:p-6 flex items-start gap-4/p-3 lg:p-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4/g' src/pages/ToolsCenter.tsx
sed -i 's/shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center/shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center/g' src/pages/ToolsCenter.tsx
sed -i 's/text-lg lg:text-xl font-bold text-text-main mb-1/text-sm lg:text-xl font-bold text-text-main mb-1 line-clamp-1/g' src/pages/ToolsCenter.tsx
sed -i 's/text-sm text-text-muted line-clamp-2/text-xs text-text-muted line-clamp-2/g' src/pages/ToolsCenter.tsx
sed -i 's/shrink-0 pt-2/absolute top-3 left-3 rtl:left-auto rtl:right-3/g' src/pages/ToolsCenter.tsx
sed -i 's/flex-grow pt-1/flex-grow/g' src/pages/ToolsCenter.tsx
