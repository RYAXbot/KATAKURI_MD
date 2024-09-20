FROM node:20


USER node


RUN https://github.com/boru-to/KATAKURI_MD.git


WORKDIR /home/node/blue


RUN chmod -R 777 /home/node/blue/


RUN yarn install && yarn add http


COPY server.js .


COPY start.sh .


CMD ["bash","start.sh" ]
