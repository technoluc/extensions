(function (root, module, global, define) {
  "use strict";

  const MessageAction = {
    AI_COLUMN_EXTRACTION: "AI_COLUMN_EXTRACTION",
    AIRTABLE_EXPORT: "AIRTABLE_EXPORT",
    AUTO_PAGING_UPDATE: "AUTO_PAGING_UPDATE",
    CLIP_DATA_SAVE: "CLIP_DATA_SAVE",
    COPY_STRING: "COPY_STRING",
    COPY_TABLE_IMAGE: "COPY_TABLE_IMAGE",
    COPY_TABLE_STRING: "COPY_TABLE_STRING",
    COPY_TABLES_BATCH: "COPY_TABLES_BATCH",
    COPY: "COPY",
    CSV: "CSV",
    DATA_TO_EXCEL: "DATA_TO_EXCEL",
    DESTROY: "DESTROY",
    DISPLAY_INLINE: "DISPLAY_INLINE",
    EDIT_TABLE: "EDIT_TABLE",
    EXCEL: "EXCEL",
    EXCEL_TABLES_BATCH: "EXCEL_TABLES_BATCH",
    GET_DATA_BATCH: "GET_DATA_BATCH",
    HELLO: "HELLO",
    HIGHLIGHT: "HIGHLIGHT",
    INIT: "INIT",
    LOG_EVENT: "LOG_EVENT",
    PAGING_LISTEN_PRESTART: "PAGING_LISTEN_PRESTART",
    PAGING_LISTEN_START: "PAGING_LISTEN_START",
    PAGING_LISTEN_STOP: "PAGING_LISTEN_STOP",
    PAGING_CONTINUATION: "PAGING_CONTINUATION",
    PAGING_CONTINUATION_PAGE_REFRESH: "PAGING_CONTINUATION_PAGE_REFRESH",
    PAGING_DATA_UPDATE: "PAGING_DATA_UPDATE",
    REPRO_PERFORM: "REPRO_PERFORM",
    PROMPT_PASTE: "PROMPT_PASTE",
    REFRESH: "REFRESH",
    SCREENSHOT: "SCREENSHOT",
    SCREENSHOT_VISIBLE_TAB: "SCREENSHOT_VISIBLE_TAB",
    SELECTION_WORKSHOP: "SELECTION_WORKSHOP",
    SELECTION_WORKSHOP_RECIPE: "SELECTION_WORKSHOP_RECIPE",
    SELECTION_WORKSHOP_RECIPE_CLIP: "SELECTION_WORKSHOP_RECIPE_CLIP",
    SHEET_SYNC_CREATE: "SHEET_SYNC_CREATE",
    SHEET_SYNC_WRITE: "SHEET_SYNC_WRITE",
    SHEET_SHEET_LIST: "SHEET_SHEET_LIST",
    SHEET_LIST: "SHEET_LIST",
    SHEET_LIST_UPDATE: "SHEET_LIST_UPDATE",
    SHEET_LIST_RESET: "SHEET_LIST_RESET",
    WATCH_ELEMENT: "WATCH_ELEMENT",
    UNHIGHLIGHT: "UNHIGHLIGHT",
  };

  if (module && module.exports) {
    module.exports = MessageAction;
  } else if (define) {
    define(function () {
      return MessageAction;
    });
  } else {
    root.MessageAction = MessageAction;
  }
})(
  this,
  typeof module !== "undefined" ? module : undefined,
  typeof global !== "undefined" ? global : undefined,
  typeof define !== "undefined" ? define : undefined
);
