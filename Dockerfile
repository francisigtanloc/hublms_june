FROM baserow/baserow:1.33.4

COPY ./plugins/hublms/ /baserow/plugins/hublms/
RUN /baserow/plugins/install_plugin.sh --folder /baserow/plugins/hublms
