ARG NODE_VERSION=18-alpine3.16

FROM node:${NODE_VERSION}

LABEL name="invoice-app"
LABEL license="ISC"
LABEL description="A MERN invoice image"

ENV NODE_ENV=dev

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

RUN addgroup --system invoice_grp \
    && adduser --system --ingroup invoice_grp invoice_usr

COPY package*.json ./

RUN npm install

COPY --chown=invoice_usr:invoice_grp . ${APP_HOME}

RUN chown invoice_usr:invoice_grp ${APP_HOME}

USER invoice_usr

CMD ["npm", "run", "dev"]

