#!/bin/bash
cat << 'INNER_EOF' >> src/index.css

@keyframes gradient-wave {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
INNER_EOF
