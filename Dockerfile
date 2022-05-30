from node:14.18.2-slim

#ENV NODE_OPTIONS=--max_old_space_size=8192
ARG ENV_BROWSER
ARG TESTRAIL_RUNID

ENV ENV_BROWSER=$ENV_BROWSER
ENV TESTRAIL_RUNID=$TESTRAIL_RUNID

WORKDIR /opt/qa

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 curl \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

COPY . .
#RUN env | grep NODE_OPTIONS
RUN npm install \
    && npm run e2e-test:bdd \
    && curl -vX POST https://qa-matrix-v2.id/api/v1/report/web/store --form 'Data=@"/opt/qa/e2e-tests/report/cucumber_report.json"' --form 'ReportName=EMI Web' --form 'ProjectId=adf1865c-e505-44d0-a4db-722eb2b6f1d0' --form 'ProjectName=EMI Web' --form 'AppVersion=0.0.1' --form 'Environment=Dev' --form 'TestTool=Jenkins' || curl -vX POST https://qa-matrix-v2.id/api/v1/report/web/store --form 'Data=@"/opt/qa/e2e-tests/report/cucumber_report.json"' --form 'ReportName=EMI Web' --form 'ProjectId=adf1865c-e505-44d0-a4db-722eb2b6f1d0' --form 'ProjectName=EMI Web' --form 'AppVersion=0.0.1' --form 'Environment=Dev' --form 'TestTool=Jenkins'