import { MessageName0 } from './locales';

export type SearchEngineId =
  | 'google'
  | 'bing'
  | 'brave'
  | 'duckduckgo'
  | 'ecosia'
  | 'qwant'
  | 'searx'
  | 'startpage'
  | 'yahooJapan'
  | 'yandex';

export type SearchEngine = {
  contentScripts: {
    matches: string[];
    runAt: 'document_start' | 'document_end' | 'document_idle';
  }[];
  messageNames: {
    name: MessageName0;
    description?: MessageName0;
  };
};

export const SEARCH_ENGINES: Readonly<Record<SearchEngineId, Readonly<SearchEngine>>> = {
  google: {
    contentScripts: [
      {
        matches: [
          'https://www.google.com/search?*',
          'https://www.google.ad/search?*',
          'https://www.google.ae/search?*',
          'https://www.google.com.af/search?*',
          'https://www.google.com.ag/search?*',
          'https://www.google.com.ai/search?*',
          'https://www.google.al/search?*',
          'https://www.google.am/search?*',
          'https://www.google.co.ao/search?*',
          'https://www.google.com.ar/search?*',
          'https://www.google.as/search?*',
          'https://www.google.at/search?*',
          'https://www.google.com.au/search?*',
          'https://www.google.az/search?*',
          'https://www.google.ba/search?*',
          'https://www.google.com.bd/search?*',
          'https://www.google.be/search?*',
          'https://www.google.bf/search?*',
          'https://www.google.bg/search?*',
          'https://www.google.com.bh/search?*',
          'https://www.google.bi/search?*',
          'https://www.google.bj/search?*',
          'https://www.google.com.bn/search?*',
          'https://www.google.com.bo/search?*',
          'https://www.google.com.br/search?*',
          'https://www.google.bs/search?*',
          'https://www.google.bt/search?*',
          'https://www.google.co.bw/search?*',
          'https://www.google.by/search?*',
          'https://www.google.com.bz/search?*',
          'https://www.google.ca/search?*',
          'https://www.google.cd/search?*',
          'https://www.google.cf/search?*',
          'https://www.google.cg/search?*',
          'https://www.google.ch/search?*',
          'https://www.google.ci/search?*',
          'https://www.google.co.ck/search?*',
          'https://www.google.cl/search?*',
          'https://www.google.cm/search?*',
          'https://www.google.cn/search?*',
          'https://www.google.com.co/search?*',
          'https://www.google.co.cr/search?*',
          'https://www.google.com.cu/search?*',
          'https://www.google.cv/search?*',
          'https://www.google.com.cy/search?*',
          'https://www.google.cz/search?*',
          'https://www.google.de/search?*',
          'https://www.google.dj/search?*',
          'https://www.google.dk/search?*',
          'https://www.google.dm/search?*',
          'https://www.google.com.do/search?*',
          'https://www.google.dz/search?*',
          'https://www.google.com.ec/search?*',
          'https://www.google.ee/search?*',
          'https://www.google.com.eg/search?*',
          'https://www.google.es/search?*',
          'https://www.google.com.et/search?*',
          'https://www.google.fi/search?*',
          'https://www.google.com.fj/search?*',
          'https://www.google.fm/search?*',
          'https://www.google.fr/search?*',
          'https://www.google.ga/search?*',
          'https://www.google.ge/search?*',
          'https://www.google.gg/search?*',
          'https://www.google.com.gh/search?*',
          'https://www.google.com.gi/search?*',
          'https://www.google.gl/search?*',
          'https://www.google.gm/search?*',
          'https://www.google.gp/search?*',
          'https://www.google.gr/search?*',
          'https://www.google.com.gt/search?*',
          'https://www.google.gy/search?*',
          'https://www.google.com.hk/search?*',
          'https://www.google.hn/search?*',
          'https://www.google.hr/search?*',
          'https://www.google.ht/search?*',
          'https://www.google.hu/search?*',
          'https://www.google.co.id/search?*',
          'https://www.google.ie/search?*',
          'https://www.google.co.il/search?*',
          'https://www.google.im/search?*',
          'https://www.google.co.in/search?*',
          'https://www.google.iq/search?*',
          'https://www.google.is/search?*',
          'https://www.google.it/search?*',
          'https://www.google.je/search?*',
          'https://www.google.com.jm/search?*',
          'https://www.google.jo/search?*',
          'https://www.google.co.jp/search?*',
          'https://www.google.co.ke/search?*',
          'https://www.google.com.kh/search?*',
          'https://www.google.ki/search?*',
          'https://www.google.kg/search?*',
          'https://www.google.co.kr/search?*',
          'https://www.google.com.kw/search?*',
          'https://www.google.kz/search?*',
          'https://www.google.la/search?*',
          'https://www.google.com.lb/search?*',
          'https://www.google.li/search?*',
          'https://www.google.lk/search?*',
          'https://www.google.co.ls/search?*',
          'https://www.google.lt/search?*',
          'https://www.google.lu/search?*',
          'https://www.google.lv/search?*',
          'https://www.google.com.ly/search?*',
          'https://www.google.co.ma/search?*',
          'https://www.google.md/search?*',
          'https://www.google.me/search?*',
          'https://www.google.mg/search?*',
          'https://www.google.mk/search?*',
          'https://www.google.ml/search?*',
          'https://www.google.com.mm/search?*',
          'https://www.google.mn/search?*',
          'https://www.google.ms/search?*',
          'https://www.google.com.mt/search?*',
          'https://www.google.mu/search?*',
          'https://www.google.mv/search?*',
          'https://www.google.mw/search?*',
          'https://www.google.com.mx/search?*',
          'https://www.google.com.my/search?*',
          'https://www.google.co.mz/search?*',
          'https://www.google.com.na/search?*',
          'https://www.google.com.nf/search?*',
          'https://www.google.com.ng/search?*',
          'https://www.google.com.ni/search?*',
          'https://www.google.ne/search?*',
          'https://www.google.nl/search?*',
          'https://www.google.no/search?*',
          'https://www.google.com.np/search?*',
          'https://www.google.nr/search?*',
          'https://www.google.nu/search?*',
          'https://www.google.co.nz/search?*',
          'https://www.google.com.om/search?*',
          'https://www.google.com.pa/search?*',
          'https://www.google.com.pe/search?*',
          'https://www.google.com.pg/search?*',
          'https://www.google.com.ph/search?*',
          'https://www.google.com.pk/search?*',
          'https://www.google.pl/search?*',
          'https://www.google.pn/search?*',
          'https://www.google.com.pr/search?*',
          'https://www.google.ps/search?*',
          'https://www.google.pt/search?*',
          'https://www.google.com.py/search?*',
          'https://www.google.com.qa/search?*',
          'https://www.google.ro/search?*',
          'https://www.google.ru/search?*',
          'https://www.google.rw/search?*',
          'https://www.google.com.sa/search?*',
          'https://www.google.com.sb/search?*',
          'https://www.google.sc/search?*',
          'https://www.google.se/search?*',
          'https://www.google.com.sg/search?*',
          'https://www.google.sh/search?*',
          'https://www.google.si/search?*',
          'https://www.google.sk/search?*',
          'https://www.google.com.sl/search?*',
          'https://www.google.sn/search?*',
          'https://www.google.so/search?*',
          'https://www.google.sm/search?*',
          'https://www.google.sr/search?*',
          'https://www.google.st/search?*',
          'https://www.google.com.sv/search?*',
          'https://www.google.td/search?*',
          'https://www.google.tg/search?*',
          'https://www.google.co.th/search?*',
          'https://www.google.com.tj/search?*',
          'https://www.google.tk/search?*',
          'https://www.google.tl/search?*',
          'https://www.google.tm/search?*',
          'https://www.google.tn/search?*',
          'https://www.google.to/search?*',
          'https://www.google.com.tr/search?*',
          'https://www.google.tt/search?*',
          'https://www.google.com.tw/search?*',
          'https://www.google.co.tz/search?*',
          'https://www.google.com.ua/search?*',
          'https://www.google.co.ug/search?*',
          'https://www.google.co.uk/search?*',
          'https://www.google.com.uy/search?*',
          'https://www.google.co.uz/search?*',
          'https://www.google.com.vc/search?*',
          'https://www.google.co.ve/search?*',
          'https://www.google.vg/search?*',
          'https://www.google.co.vi/search?*',
          'https://www.google.com.vn/search?*',
          'https://www.google.vu/search?*',
          'https://www.google.ws/search?*',
          'https://www.google.rs/search?*',
          'https://www.google.co.za/search?*',
          'https://www.google.co.zm/search?*',
          'https://www.google.co.zw/search?*',
          'https://www.google.cat/search?*',
        ],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_googleName',
    },
  },
  bing: {
    contentScripts: [
      {
        matches: [
          'https://www.bing.com/search?*',
          'https://www.bing.com/images/search?*',
          'https://www.bing.com/videos/search?*',
          'https://www.bing.com/news/search?*',
          'https://cn.bing.com/search?*',
          'https://cn.bing.com/images/search?*',
          'https://cn.bing.com/videos/search?*',
          'https://cn.bing.com/news/search?*',
          'https://www2.bing.com/search?*',
          'https://www2.bing.com/images/search?*',
          'https://www2.bing.com/videos/search?*',
          'https://www2.bing.com/news/search?*',
          'https://www4.bing.com/search?*',
          'https://www4.bing.com/images/search?*',
          'https://www4.bing.com/videos/search?*',
          'https://www4.bing.com/news/search?*',
        ],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_bingName',
    },
  },
  brave: {
    contentScripts: [
      {
        matches: [
          'https://search.brave.com/search?*',
          'https://search.brave.com/images?*',
          'https://search.brave.com/news?*',
          'https://search.brave.com/videos?*',
          'https://search.brave.com/goggles?*',
        ],
        runAt: 'document_idle',
      },
    ],
    messageNames: {
      name: 'searchEngines_braveName',
    },
  },
  duckduckgo: {
    contentScripts: [
      {
        matches: [
          '*://duckduckgo.com/',
          '*://duckduckgo.com/?*',
          // #if CHROME
          '*://html.duckduckgo.com/html/',
          '*://html.duckduckgo.com/html/?*',
          // #endif
          '*://safe.duckduckgo.com/',
          '*://safe.duckduckgo.com/?*',
          '*://start.duckduckgo.com/',
          '*://start.duckduckgo.com/?*',
        ],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_duckduckgoName',
    },
  },
  ecosia: {
    contentScripts: [
      {
        matches: ['https://www.ecosia.org/search?*'],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_ecosiaName',
    },
  },
  qwant: {
    contentScripts: [
      {
        matches: ['https://www.qwant.com/?*'],
        // https://github.com/iorate/ublacklist/pull/179
        runAt: 'document_idle',
      },
      {
        matches: ['https://lite.qwant.com/?*'],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_qwantName',
      description: 'searchEngines_qwantDescription',
    },
  },
  searx: {
    contentScripts: [
      {
        matches: [
          '*://searx.be/search*',
          '*://searx.fmac.xyz/search*',
          '*://search.unlocked.link/search*',
          '*://search.ononoki.org/search*',
          '*://northboot.xyz/search*',
          '*://searx.tiekoetter.com/search*',
          '*://searx.work/search*',
          '*://paulgo.io/search*',
          '*://search.rhscz.eu/search*',
          '*://search.rabbit-company.com/search*',
          '*://priv.au/search*',
          '*://search.sapti.me/search*',
          '*://searxng.nicfab.eu/searxng/search*',
          '*://search.smnz.de/search*',
          '*://notsearch.uk/search*',
          '*://search.bus-hit.me/search*',
          '*://xo.wtf/search*',
          '*://searx.mha.fi/search*',
          '*://searx.prvcy.eu/search*',
          '*://search.chemicals-in-the-water.eu/search*',
          '*://searx.baczek.me/search*',
          '*://search.rowie.at/search*',
          '*://searx.ericaftereric.top/search*',
          '*://sh0.it/search*',
          '*://s.frlt.one/search*',
          '*://search.gcomm.ch/searx/search*',
          '*://ooglester.com/search*',
          '*://searx.priv.pw/search*',
          '*://swag.pw/search*',
          '*://search.projectsegfau.lt/search*',
          '*://searx.xyz/search*',
          '*://opnxng.com/search*',
          '*://s.zhaocloud.net/search*',
          '*://searx.catfluori.de/search*',
          '*://searx.cthd.icu/search*',
          '*://intelwinds.com/search*',
          '*://search.drivet.xyz/search*',
          '*://spot.murena.io/search*',
          '*://search.leptons.xyz/searxng/search*',
          '*://searx.si/search*',
          '*://baresearch.org/search*',
          '*://searx.oakleycord.dev/search*',
          '*://search.zzls.xyz/search*',
          '*://searx.sev.monster/search*',
          '*://gsch.eu/search*',
          '*://search.us.projectsegfau.lt/search*',
          '*://searx.rasp.fr/search*',
          '*://s.trung.fun/searxng/search*',
          '*://searxng.bandarawela.net/search*',
          '*://searx.chocoflan.net/searx/search*',
          '*://search.cronobox.one/search*',
          '*://search.charleseroop.com/search*',
          '*://sx.fukt.lol/search*',
          '*://searx.juancord.xyz/searxng/search*',
          '*://searx.delicta.pp.ua/search*',
          '*://searx.esmailelbob.xyz/search*',
          '*://search.privacyguides.net/search*',
          '*://searxng.fingerbib.xyz/searxng/search*',
          '*://search.affusio.com/search*',
          '*://search.suenram.us/searxng/search*',
          '*://searxng.au/search*',
          '*://search.disroot.org/search*',
          '*://searx.fi/search*',
          '*://searx.netzspielplatz.de/search*',
          '*://search.mpx.wtf/search*',
          '*://jackgoss.xyz/search*',
          '*://etsi.me/search*',
          '*://search.uspersec.com/search*',
          '*://search.kiwitalk.de/search*',
          '*://search.0relay.com/search*',
          '*://srx.cosmohub.io/search*',
          '*://privatus.live/search*',
          '*://search.kvj.ovh/search*',
          '*://searx.becomesovran.com/search*',
          '*://searx.gnous.eu/search*',
          '*://searx.orion-hub.fr/search*',
          '*://searx.slipfox.xyz/searx/search*',
          '*://privatesearch.dev/search*',
          '*://searx.ru/search*',
          '*://searx.mastodontech.de/search*',
          '*://searx.dresden.network/search*',
          '*://searx.stuehieyr.com/search*',
          '*://searx.webheberg.info/search*',
          '*://searx.win/search*',
          '*://searx.gnu.style/search*',
          '*://searx.roflcopter.fr/search*',
          '*://sx.catgirl.cloud/search*',
          '*://suche.tromdienste.de/search*',
          '*://search.trom.tf/search*',
          '*://searx.mxchange.org/search*',
          '*://searx.tyil.nl/search*',
          '*://searx.divided-by-zero.eu/search*',
          '*://searx.nakhan.net/search*',
          '*://searx.nixnet.services/search*',
          '*://searx.zapashcanon.fr/search*',
          '*://darmarit.org/searx/search*',
          '*://jsearch.pw/searx/search*',
          '*://gruble.de/search*',
          '*://search.inetol.net/search*',
          '*://search.demoniac.ch/search*',
          '*://search.lvkaszus.pl/search*',
          '*://searxng.diadz.de/search*',
          '*://searx.namejeff.xyz/search*',
          '*://searx.dofpot.nl/search*',
          '*://search.modalogi.com/search*',
          '*://searxng.xcxc.eu/search*',
          '*://searx.tuxcloud.net/search*',
          '*://search.whateveritworks.org/search*',
          '*://copp.gg/search*',
          '*://sarch.im-in.space/search*',
          '*://searxng.se/search*',
          '*://search.laksith.dev/search*',
          '*://searx.ox2.fr/search*',
          '*://search.0xgingi.com/search*',
          '*://search.dojoro.de/search*',
          '*://jabber-germany.de/searx/search*',
          '*://myprivatesrx.us/search*',
          '*://search.bowlman.org/search*',
          '*://search.fascinated.cc/search*',
          '*://stalk.antelope.day/search*',
          '*://searxng.no-logs.com/search*',
          '*://searx.kutay.dev/search*',
          '*://searx.daetalytica.io/search*',
          '*://searx.bissisoft.com/search*',
          '*://search.neet.works/search*',
          '*://offtheradar.info/search*',
          '*://search.shinglea.dev/search*',
          '*://search.listi.me/search*',
          '*://search.serginho.dev/search*',
          '*://searx.netzspielplatz.de/search*',
          '*://searx.thefloatinglab.world/search*',
          '*://search.whatever.social/searxng/search*',
        ],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_searxName',
    },
  },
  startpage: {
    contentScripts: [
      {
        matches: [
          'https://*.startpage.com/do/*',
          'https://*.startpage.com/rvd/*',
          'https://*.startpage.com/sp/*',
        ],
        runAt: 'document_start',
      },
    ],
    messageNames: {
      name: 'searchEngines_startpageName',
    },
  },
  yahooJapan: {
    contentScripts: [
      {
        matches: ['https://search.yahoo.co.jp/search?*'],
        runAt: 'document_idle',
      },
    ],
    messageNames: {
      name: 'searchEngines_yahooJapanName',
    },
  },
  yandex: {
    contentScripts: [
      {
        matches: [
          // Web
          'https://yandex.com/search/?*',
          'https://yandex.ru/search/?*',
          'https://yandex.ua/search/?*',
          'https://yandex.by/search/?*',
          'https://yandex.kz/search/?*',
          'https://yandex.uz/search/?*',
          'https://yandex.com.tr/search/?*',
          'https://yandex.fr/search/?*',
          'https://yandex.az/search/?*',
          'https://yandex.com.ge/search/?*',
          'https://yandex.com.am/search/?*',
          'https://yandex.co.il/search/?*',
          'https://yandex.lv/search/?*',
          'https://yandex.lt/search/?*',
          'https://yandex.ee/search/?*',
          'https://yandex.md/search/?*',
          'https://yandex.tm/search/?*',
          'https://yandex.tj/search/?*',
          // News
          'https://newssearch.yandex.com/news/search?*',
          'https://newssearch.yandex.ru/news/search?*',
          'https://newssearch.yandex.ua/news/search?*',
          'https://newssearch.yandex.by/news/search?*',
          'https://newssearch.yandex.kz/news/search?*',
          'https://newssearch.yandex.uz/news/search?*',
          'https://newssearch.yandex.com.tr/news/search?*',
          'https://newssearch.yandex.fr/news/search?*',
          'https://newssearch.yandex.az/news/search?*',
          'https://newssearch.yandex.com.ge/news/search?*',
          'https://newssearch.yandex.com.am/news/search?*',
          'https://newssearch.yandex.co.il/news/search?*',
          'https://newssearch.yandex.lv/news/search?*',
          'https://newssearch.yandex.lt/news/search?*',
          'https://newssearch.yandex.ee/news/search?*',
          'https://newssearch.yandex.md/news/search?*',
          'https://newssearch.yandex.tm/news/search?*',
          'https://newssearch.yandex.tj/news/search?*',
        ],
        runAt: 'document_idle',
      },
    ],
    messageNames: {
      name: 'searchEngines_yandexName',
    },
  },
};
