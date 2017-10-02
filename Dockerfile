FROM node

EXPOSE 3000

# Add the project to the image
ADD . /root/weather

# Download the dependencies
WORKDIR /root/weather
RUN ["yarn"]

# Install Yarn server (serve the built app)
RUN ["yarn", "global", "add", "serve"]

# Build the app
RUN ["yarn", "build"]

ENTRYPOINT ["yarn"]

# Serve the built app by default
CMD ["serve", "-p", "3000"]
