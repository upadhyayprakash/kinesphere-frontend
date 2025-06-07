#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/services

# Download images
curl -o public/images/services/sports-rehab.jpg "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop"
curl -o public/images/services/physio.jpg "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
curl -o public/images/services/strength.jpg "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"

echo "Images downloaded successfully!" 