FROM baserow/web-frontend:1.33.4

USER root

COPY ./plugins/hublms/ /baserow/plugins/hublms/
RUN /baserow/plugins/install_plugin.sh --folder /baserow/plugins/hublms

USER $UID:$GID
