FROM ruby:2.4

## Time zone support
RUN apt-get update \
 && apt-get -y install tzdata vim

## alias must be in .bashrc
RUN echo '---' > ~/.gemrc \
 && echo 'gem: --no-document' >> ~/.gemrc \
 && echo "alias rspecx='xvfb-run -a bundle exec rspec'" > ~/.bashrc

## Fix console size and scrolling
RUN echo "set horizontal-scroll-mode off" >> ~/.inputrc

## Install Node
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 && apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update \
 && apt-get -y install yarn

RUN apt-get -y autoremove

ENV APPDIR /admin_react
RUN mkdir $APPDIR
WORKDIR $APPDIR

ENV BUNDLE_JOBS=2 \
    BUNDLE_PATH=/gems \
    # gems folder must be added to GEM_PATHs
    GEM_PATH=$GEM_PATH:/gems \
    PATH=$PATH:/gems/bin

ADD . .