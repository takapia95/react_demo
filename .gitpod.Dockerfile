FROM gitpod/workspace-full
RUN sudo install-packages \
          binwalk \
          clang \
          tmux
RUN apt-get update && apt-get install -yq \
    git \
    git-lfs \
    sudo \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*
    libgtk2.0-0 \
    libgtk-3-0
