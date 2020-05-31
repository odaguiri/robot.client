FROM node:14.3.0-alpine3.11
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add vim\
 && npm install -g nodemon\
 && echo $'syntax on\n\
    set nocompatible\n\
    set splitbelow\n\
    set splitright\n\
    set expandtab\n\
    set tabstop=2\n\
    set softtabstop=2\n\
    set shiftwidth=2\n\
    set autoindent\n\
    set ignorecase\n\
    set smartcase\n\
    set noeb vb t_vb=\n\
    au GUIEnter * set vb t_vb=\n\
    set incsearch\n\
    set laststatus=2\n\
    set backspace=2\n\
    set number' > ~/.vimrc

EXPOSE 3000
CMD [ "npm", "start" ]
