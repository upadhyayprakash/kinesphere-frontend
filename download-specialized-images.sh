#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/specialized

# Download images
curl -o public/images/specialized/pain-management.jpg "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/rehab.jpg "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/posture.jpg "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/dry-needling.jpg "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/athletic.jpg "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/prevention.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
curl -o public/images/specialized/mobility.jpg "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop"

echo "Specialized service images downloaded successfully!" 