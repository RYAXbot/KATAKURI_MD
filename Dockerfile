FROM node:20

RUN git clone https://github.com/boru-to/KATAKURI_MD.git /root/boru-to

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/STAR-KING0/node_modules

# Install dependencies
WORKDIR /root/boru-to
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/boru-to/node_modules
