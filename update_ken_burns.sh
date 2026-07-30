#!/bin/bash
sed -i 's/  0% { transform: scale(1.02) translate3d(0, 0, 0); }/  0% { transform: scale(1.03) translate3d(0, 0, 0); }/g' src/index.css
sed -i 's/  100% { transform: scale(1.02) translate3d(0, 0, 0); }/  100% { transform: scale(1.03) translate3d(0, 0, 0); }/g' src/index.css
sed -i 's/  50% { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }/  50% { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }/g' src/index.css
