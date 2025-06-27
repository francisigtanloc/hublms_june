FROM baserow/backend:1.33.4

USER root

COPY ./plugins/hublms/ $BASEROW_PLUGIN_DIR/hublms/
RUN /baserow/plugins/install_plugin.sh --folder $BASEROW_PLUGIN_DIR/hublms

USER $UID:$GID
