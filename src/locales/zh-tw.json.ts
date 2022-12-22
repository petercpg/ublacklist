import { exportAsMessages } from './helpers';

exportAsMessages('_locales/zh_TW/messages.json', {
  extensionName: 'uBlacklist',
  extensionDescription: '封鎖 Google 搜尋結果中的特定網站結果',
  lang: 'zh-tw',
  // change later when website is ready
  // websiteLocale: 'en',
  error: '錯誤：$1',
  unauthorizedError: '未授權。請關閉同步，然後再次開啟。',
  cancelButton: '取消',
  okButton: '確定',
  content_singleSiteBlocked: 'uBlacklist 已經封鎖 1 個網站',
  content_multipleSitesBlocked: 'uBlacklist 已經封鎖 $1 個網站',
  content_showBlockedSitesLink: '顯示',
  content_hideBlockedSitesLink: '隱藏',
  content_blockSiteLink: '封鎖這個網站',
  content_unblockSiteLink: '解除封鎖這個網站',
  popup_blockSiteTitle: '封鎖這個網站',
  popup_unblockSiteTitle: '解除封鎖這個網站',
  popup_details: '詳細資訊',
  popup_pageURLLabel: '頁面網址',
  popup_pathDepth: '深度',
  popup_pageTitleLabel: '網頁標題',
  popup_addedRulesLabel: '要加入的規則',
  popup_removedRulesLabel: '要刪除的規則',
  popup_blockSiteButton: '封鎖',
  popup_unblockSiteButton: '解除封鎖',
  popup_openOptionsLink: '選項',
  popup_active: '已啟用 uBlacklist',
  popup_inactive: '已停用 uBlacklist',
  popup_activateButton: '啟用',
  options_generalTitle: '一般',
  options_blacklistLabel: '在 Google 搜尋結果中被封鎖的網站',
  options_blacklistHelper:
    '您可以使用 [匹配模式](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) 或 [正規表達式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。',
  options_blacklistExample: '舉例：$1',
  options_blockByTitle: '要使用網頁標題來封鎖網站，請在正規表達式前新增「title」。',
  options_blacklistUpdated: '已更新',
  options_reloadBlacklistButton: '重新載入',
  options_importBlacklistButton: '匯入',
  options_exportBlacklistButton: '匯出',
  options_saveBlacklistButton: '儲存',
  options_importBlacklistDialog_title: '匯入',
  options_importBlacklistDialog_fromFile: '從檔案匯入',
  options_importBlacklistDialog_selectFile: '選擇檔案',
  options_importBlacklistDialog_fromPB: '從 Personal Blocklist 匯入',
  options_importBlacklistDialog_pbLabel: '網域',
  options_importBlacklistDialog_append: '附加到現有清單',
  options_importBlacklistDialog_importButton: '匯入',
  options_importBlacklistDialog_helper: '貼上從 Personal Blocklist 匯出的網域清單。',
  options_otherSearchEngines: '其他搜尋引擎',
  options_otherSearchEnginesDescription: '您可以針對其他搜尋引擎也使用本擴充套件。',
  options_registerSearchEngine: '啟用',
  options_searchEngineRegistered: '已啟用',
  options_skipBlockDialogLabel: '加入封鎖清單時，不顯示「封鎖這個網站」對話框',
  options_hideBlockLinksLabel: '隱藏「封鎖這個網站」的連結',
  options_hideControlLabel: '隱藏封鎖的網站數量和「顯示」連結',
  options_blockWholeSiteLabel: '預設在新增規則時，封鎖整個網站',
  options_blockWholeSiteDescription:
    '例如若封鎖「https://a.b.example.uk.com/」，會加入「*://*.example.uk.com/*」規則。',
  options_appearanceTitle: '外觀',
  options_linkColor: '連結的顏色',
  options_blockColor: '被封鎖的搜尋結果的顏色',
  options_colorUseDefault: '預設',
  options_colorSpecify: '自訂',
  options_highlightColors: '強調顯示的搜尋結果顏色',
  options_highlightDescription: '若要使用「顏色 N」來強調顯示某筆搜尋結果，請在規則前加上「@N」。',
  options_highlightColorNth: '色彩 $1',
  options_highlightColorAdd: '增加',
  options_highlightColorRemove: '刪除',
  options_dialogTheme: '搜尋結果中，「封鎖這個網站」對話框的主題',
  options_dialogThemeDefault: '預設',
  options_dialogThemeLight: '淺色',
  options_dialogThemeDark: '深色',
  options_syncTitle: '同步',
  options_syncFeatureUpdated: '同步功能已更新。若要繼續使用同步功能，請點選「開啟同步」按鈕。',
  options_syncFeature: '雲端同步',
  options_syncFeatureDescription: '可透過雲端服務，在您的不同裝置間同步黑名單資料。',
  options_turnOnSync: '開啟同步',
  options_turnOnSyncDialog_title: '開啟同步',
  options_turnOnSyncDialog_turnOnSyncButton: '開啟',
  options_turnOnSyncDialog_useAltFlow: '用新分頁開啟登入頁面',
  options_turnOnSyncDialog_altFlowDescription:
    '在登入之前，可能會向您請求存取 $1 的權限，但您的個人資訊不會儲存在該網域中。',
  options_turnOnSyncDialog_altFlowAuthCodeLabel: '認證碼',
  options_turnOffSync: '關閉',
  options_syncResult: '最近同步',
  options_syncNever: '從未同步',
  options_syncRunning: '同步中…',
  options_syncReloadButton: '重新載入',
  options_syncNowButton: '立即同步',
  options_syncCategories: '要同步的資料',
  options_syncBlocklist: '封鎖的網站',
  options_syncGeneral: '一般設定',
  options_syncAppearance: '外觀設定',
  options_syncSubscriptions: '訂閱項目',
  options_syncInterval: '同步間隔',
  options_subscriptionTitle: '訂閱',
  options_subscriptionFeature: '訂閱黑名單',
  options_subscriptionFeatureDescription: '如果您加入訂閱，將定期從指定的網址下載黑名單。',
  options_addSubscriptionButton: '加入訂閱',
  options_subscriptionNameHeader: '名稱',
  options_subscriptionURLHeader: '網址',
  options_subscriptionUpdateResultHeader: '最近更新',
  options_subscriptionCheckBoxLabel: '已啟用',
  options_subscriptionMenuButtonLabel: '選單',
  options_noSubscriptionsAdded: '未加入訂閱項目',
  options_subscriptionUpdateRunning: '更新中…',
  options_showSubscriptionMenu: '顯示',
  options_updateSubscriptionNowMenu: '立即更新',
  options_removeSubscriptionMenu: '移除',
  options_updateAllSubscriptionsNowButton: '立即更新',
  options_addSubscriptionDialog_title: '加入訂閱項目',
  options_addSubscriptionDialog_nameLabel: '名稱',
  options_addSubscriptionDialog_urlLabel: '網址',
  options_addSubscriptionDialog_addButton: '加入',
  options_showSubscriptionDialog_blacklistLabel: '規則',
  options_updateInterval: '更新間隔',
  options_backupRestoreTitle: '備份和還原',
  options_backupSettingsLabel: '備份設定',
  options_backupSettingsButton: '備份',
  options_restoreSettingsLabel: '還原設定',
  options_restoreSettingsButton: '還原',
  options_restoreSettingsInvalidFile: '檔案格式無效',
  options_initializeSettingsLabel: '初始化設定',
  options_initializeSettingsButton: '初始化',
  options_initializeSettingsConfirmation: '確定要將設定初始化嗎？',
  options_aboutTitle: '關於 uBlacklist',
  options_aboutVersion: '版本',
  options_aboutDocumentation: '文件',
  options_aboutReleaseNotes: '發行說明',
  options_aboutPrivacyPolicy: '隱私權保護政策',
  options_aboutThirdPartyNotices: '第三方聲明',
  clouds_googleDriveSync: '與 Google Drive 同步',
  clouds_googleDriveSyncDescription: '同步檔案將會儲存在一個使用者不可見的應用程式資料夾中。',
  clouds_googleDriveSyncTurnedOn: '已與 Google Drive 同步',
  clouds_dropboxSync: '與 Dropbox 同步',
  clouds_dropboxSyncDescription: '同步檔案將會儲存在 /Apps/uBlacklist/',
  clouds_dropboxSyncTurnedOn: '已與 Dropbox 同步',
  searchEngines_googleName: 'Google',
  searchEngines_bingName: 'Bing',
  searchEngines_bingDescription_firefox:
    '請關閉「在新的索引標籤或視窗中開啟搜尋結果中的連結」選項。',
  searchEngines_braveName: 'Brave',
  searchEngines_duckduckgoName: 'DuckDuckGo',
  searchEngines_ecosiaName: 'Ecosia',
  searchEngines_qwantName: 'Qwant',
  searchEngines_searxName: 'SearX',
  searchEngines_qwantDescription: '請關閉「總是在 Qwant.com 播放影片」選項。',
  searchEngines_startpageName: 'Startpage.com',
  searchEngines_yahooJapanName: 'Yahoo! JAPAN',
  searchEngines_yandexName: 'Yandex',
});
