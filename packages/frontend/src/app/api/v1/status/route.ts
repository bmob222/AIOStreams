import { NextResponse } from 'next/server';

// Service IDs
const REALDEBRID_SERVICE = 'realdebrid';
const ALLDEBRID_SERVICE = 'alldebrid';
const PREMIUMIZE_SERVICE = 'premiumize';
const DEBRIDLINK_SERVICE = 'debridlink';
const TORBOX_SERVICE = 'torbox';
const EASYDEBRID_SERVICE = 'easydebrid';
const PUTIO_SERVICE = 'putio';
const OFFCLOUD_SERVICE = 'offcloud';
const PIKPAK_SERVICE = 'pikpak';
const SEEDR_SERVICE = 'seedr';
const EASYNEWS_SERVICE = 'easynews';
const DEBRIDER_SERVICE = 'debrider';

// Resource types
const STREAM_RESOURCE = 'stream';
const CATALOG_RESOURCE = 'catalog';
const META_RESOURCE = 'meta';
const SUBTITLES_RESOURCE = 'subtitles';

// Stream types
const P2P_STREAM_TYPE = 'p2p';
const DEBRID_STREAM_TYPE = 'debrid';
const USENET_STREAM_TYPE = 'usenet';
const HTTP_STREAM_TYPE = 'http';
const LIVE_STREAM_TYPE = 'live';

// Preset categories
type PresetCategory = 'torrent-addon' | 'usenet-addon' | 'http-addon' | 'catalog-addon' | 'subtitle-addon' | 'other-addon' | 'torrent-indexer' | 'usenet-indexer';

// Services data
const services = {
  [REALDEBRID_SERVICE]: {
    id: REALDEBRID_SERVICE,
    name: 'Real-Debrid',
    shortName: 'RD',
    knownNames: ['RD', 'Real Debrid', 'RealDebrid', 'Real-Debrid'],
    signUpText: "Don't have an account? [Sign up here](https://real-debrid.com/?id=9483829)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'The API key for the Real-Debrid service. Obtain it from [here](https://real-debrid.com/apitoken)',
        type: 'password',
        required: true,
      },
    ],
  },
  [ALLDEBRID_SERVICE]: {
    id: ALLDEBRID_SERVICE,
    name: 'AllDebrid',
    shortName: 'AD',
    knownNames: ['AD', 'All Debrid', 'AllDebrid', 'All-Debrid'],
    signUpText: "Don't have an account? [Sign up here](https://alldebrid.com/?uid=3n8qa&lang=en)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'The API key for the All-Debrid service. Create one [here](https://alldebrid.com/apikeys)',
        type: 'password',
        required: true,
      },
    ],
  },
  [PREMIUMIZE_SERVICE]: {
    id: PREMIUMIZE_SERVICE,
    name: 'Premiumize',
    shortName: 'PM',
    knownNames: ['PM', 'Premiumize'],
    signUpText: "Don't have an account? [Sign up here](https://www.premiumize.me/register)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'Your Premiumize API key. Obtain it from [here](https://www.premiumize.me/account)',
        type: 'password',
        required: true,
      },
    ],
  },
  [DEBRIDLINK_SERVICE]: {
    id: DEBRIDLINK_SERVICE,
    name: 'Debrid-Link',
    shortName: 'DL',
    knownNames: ['DL', 'Debrid Link', 'DebridLink', 'Debrid-Link'],
    signUpText: "Don't have an account? [Sign up here](https://debrid-link.com/id/EY0JO)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'Your Debrid-Link API key. Obtain it from [here](https://debrid-link.com/webapp/apikey)',
        type: 'password',
        required: true,
      },
    ],
  },
  [TORBOX_SERVICE]: {
    id: TORBOX_SERVICE,
    name: 'TorBox',
    shortName: 'TB',
    knownNames: ['TB', 'TorBox', 'Torbox', 'TRB'],
    signUpText: "Don't have an account? [Sign up here](https://torbox.app/subscription?referral=9ca21adb-dbcb-4fb0-9195-412a5f3519bc)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'Your Torbox API key. Obtain it from [here](https://torbox.app/settings)',
        type: 'password',
        required: true,
      },
    ],
  },
  [EASYDEBRID_SERVICE]: {
    id: EASYDEBRID_SERVICE,
    name: 'EasyDebrid',
    shortName: 'ED',
    knownNames: ['ED', 'Easy Debrid', 'EasyDebrid'],
    signUpText: "Don't have an account? [Sign up here](https://easydebrid.com)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'Your EasyDebrid API key',
        type: 'password',
        required: true,
      },
    ],
  },
  [PUTIO_SERVICE]: {
    id: PUTIO_SERVICE,
    name: 'Put.io',
    shortName: 'PUT',
    knownNames: ['PUT', 'Put.io', 'Putio'],
    signUpText: "Don't have an account? [Sign up here](https://put.io)",
    credentials: [
      {
        id: 'clientId',
        name: 'Client ID',
        description: 'Your Put.io OAuth Client ID',
        type: 'string',
        required: true,
      },
      {
        id: 'clientSecret',
        name: 'Client Secret',
        description: 'Your Put.io OAuth Client Secret',
        type: 'password',
        required: true,
      },
    ],
  },
  [OFFCLOUD_SERVICE]: {
    id: OFFCLOUD_SERVICE,
    name: 'Offcloud',
    shortName: 'OC',
    knownNames: ['OC', 'Offcloud'],
    signUpText: "Don't have an account? [Sign up here](https://offcloud.com)",
    credentials: [
      {
        id: 'apiKey',
        name: 'API Key',
        description: 'Your Offcloud API key',
        type: 'password',
        required: false,
      },
      {
        id: 'email',
        name: 'Email',
        description: 'Your Offcloud email',
        type: 'string',
        required: false,
      },
      {
        id: 'password',
        name: 'Password',
        description: 'Your Offcloud password',
        type: 'password',
        required: false,
      },
    ],
  },
  [EASYNEWS_SERVICE]: {
    id: EASYNEWS_SERVICE,
    name: 'Easynews',
    shortName: 'EN',
    knownNames: ['EN', 'Easynews'],
    signUpText: "Don't have an account? [Sign up here](https://www.easynews.com)",
    credentials: [
      {
        id: 'username',
        name: 'Username',
        description: 'Your Easynews username',
        type: 'string',
        required: true,
      },
      {
        id: 'password',
        name: 'Password',
        description: 'Your Easynews password',
        type: 'password',
        required: true,
      },
    ],
  },
};

// Base preset options helper
const baseOptions = (name: string, resources: string[], timeout: number = 10000) => [
  {
    id: 'name',
    name: 'Name',
    description: 'What to call this addon',
    type: 'string',
    required: true,
    default: name,
  },
  {
    id: 'timeout',
    name: 'Timeout (ms)',
    description: 'The timeout for this addon',
    type: 'number',
    required: true,
    default: timeout,
    constraints: { min: 1000, max: 60000 },
  },
  {
    id: 'resources',
    name: 'Resources',
    description: 'The resources to use',
    type: 'multi-select',
    required: false,
    default: resources,
    options: resources.map(r => ({ label: r, value: r })),
  },
];

// Presets data
const presets = [
  {
    ID: 'torrentio',
    NAME: 'Torrentio',
    LOGO: 'https://torrentio.strem.fun/images/logo_v1.png',
    URL: 'https://torrentio.strem.fun',
    DESCRIPTION: 'Provides torrent streams from a multitude of providers and has debrid support.',
    SUPPORTED_SERVICES: [REALDEBRID_SERVICE, PREMIUMIZE_SERVICE, ALLDEBRID_SERVICE, TORBOX_SERVICE, EASYDEBRID_SERVICE, PUTIO_SERVICE, DEBRIDLINK_SERVICE, OFFCLOUD_SERVICE],
    SUPPORTED_STREAM_TYPES: [P2P_STREAM_TYPE, DEBRID_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE, META_RESOURCE, CATALOG_RESOURCE],
    OPTIONS: baseOptions('Torrentio', [STREAM_RESOURCE, META_RESOURCE, CATALOG_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'comet',
    NAME: 'Comet',
    LOGO: 'https://comet.elfhosted.com/static/images/logo.png',
    URL: 'https://comet.elfhosted.com',
    DESCRIPTION: 'Fast debrid stream addon with advanced caching.',
    SUPPORTED_SERVICES: [REALDEBRID_SERVICE, ALLDEBRID_SERVICE, PREMIUMIZE_SERVICE, TORBOX_SERVICE, DEBRIDLINK_SERVICE],
    SUPPORTED_STREAM_TYPES: [DEBRID_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE],
    OPTIONS: baseOptions('Comet', [STREAM_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'mediafusion',
    NAME: 'MediaFusion',
    LOGO: 'https://mediafusion.elfhosted.com/static/images/mediafusion_logo.png',
    URL: 'https://mediafusion.elfhosted.com',
    DESCRIPTION: 'MediaFusion is a feature-rich addon with multiple indexer support.',
    SUPPORTED_SERVICES: [REALDEBRID_SERVICE, ALLDEBRID_SERVICE, PREMIUMIZE_SERVICE, TORBOX_SERVICE, DEBRIDLINK_SERVICE, OFFCLOUD_SERVICE, PIKPAK_SERVICE, EASYDEBRID_SERVICE],
    SUPPORTED_STREAM_TYPES: [P2P_STREAM_TYPE, DEBRID_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE, CATALOG_RESOURCE],
    OPTIONS: baseOptions('MediaFusion', [STREAM_RESOURCE, CATALOG_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'stremio-gdrive',
    NAME: 'Google Drive',
    LOGO: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1024px-Google_Drive_icon_%282020%29.svg.png',
    URL: 'https://stremio-gdrive.com',
    DESCRIPTION: 'Stream content from your Google Drive.',
    SUPPORTED_SERVICES: [],
    SUPPORTED_STREAM_TYPES: [HTTP_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE, CATALOG_RESOURCE],
    OPTIONS: baseOptions('Google Drive', [STREAM_RESOURCE, CATALOG_RESOURCE]),
    CATEGORY: 'http-addon' as PresetCategory,
    BUILTIN: true,
  },
  {
    ID: 'torbox',
    NAME: 'TorBox Addon',
    LOGO: 'https://torbox.app/favicon.ico',
    URL: 'https://stremio.torbox.app',
    DESCRIPTION: 'Official TorBox addon for Stremio.',
    SUPPORTED_SERVICES: [TORBOX_SERVICE],
    SUPPORTED_STREAM_TYPES: [DEBRID_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE],
    OPTIONS: baseOptions('TorBox', [STREAM_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'easynews',
    NAME: 'Easynews',
    LOGO: 'https://www.easynews.com/favicon.ico',
    URL: 'https://easynews.elfhosted.com',
    DESCRIPTION: 'Stream content from Easynews usenet provider.',
    SUPPORTED_SERVICES: [EASYNEWS_SERVICE],
    SUPPORTED_STREAM_TYPES: [USENET_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE],
    OPTIONS: baseOptions('Easynews', [STREAM_RESOURCE]),
    CATEGORY: 'usenet-addon' as PresetCategory,
  },
  {
    ID: 'custom',
    NAME: 'Custom Addon',
    URL: '',
    DESCRIPTION: 'Add any custom Stremio addon by providing its manifest URL.',
    SUPPORTED_SERVICES: [],
    SUPPORTED_STREAM_TYPES: [P2P_STREAM_TYPE, DEBRID_STREAM_TYPE, HTTP_STREAM_TYPE, USENET_STREAM_TYPE, LIVE_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE, CATALOG_RESOURCE, META_RESOURCE, SUBTITLES_RESOURCE],
    OPTIONS: [
      {
        id: 'url',
        name: 'Manifest URL',
        description: 'The URL to the addon manifest.json',
        type: 'url',
        required: true,
      },
      ...baseOptions('Custom Addon', [STREAM_RESOURCE]),
    ],
    CATEGORY: 'other-addon' as PresetCategory,
  },
  {
    ID: 'opensubtitles',
    NAME: 'OpenSubtitles',
    LOGO: 'https://www.opensubtitles.org/favicon.ico',
    URL: 'https://opensubtitles-v3.strem.io',
    DESCRIPTION: 'Subtitles from OpenSubtitles.org',
    SUPPORTED_SERVICES: [],
    SUPPORTED_STREAM_TYPES: [],
    SUPPORTED_RESOURCES: [SUBTITLES_RESOURCE],
    OPTIONS: baseOptions('OpenSubtitles', [SUBTITLES_RESOURCE]),
    CATEGORY: 'subtitle-addon' as PresetCategory,
  },
  {
    ID: 'jackettio',
    NAME: 'Jackettio',
    LOGO: 'https://jackettio.elfhosted.com/images/logo.png',
    URL: 'https://jackettio.elfhosted.com',
    DESCRIPTION: 'Search torrents from Jackett with debrid support.',
    SUPPORTED_SERVICES: [REALDEBRID_SERVICE, ALLDEBRID_SERVICE, PREMIUMIZE_SERVICE, TORBOX_SERVICE, DEBRIDLINK_SERVICE],
    SUPPORTED_STREAM_TYPES: [P2P_STREAM_TYPE, DEBRID_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE],
    OPTIONS: baseOptions('Jackettio', [STREAM_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'orion',
    NAME: 'Orion',
    LOGO: 'https://orionoid.com/favicon.ico',
    URL: 'https://orion.strem.io',
    DESCRIPTION: 'Orion is an indexer service for streaming.',
    SUPPORTED_SERVICES: [REALDEBRID_SERVICE, ALLDEBRID_SERVICE, PREMIUMIZE_SERVICE, OFFCLOUD_SERVICE],
    SUPPORTED_STREAM_TYPES: [P2P_STREAM_TYPE, DEBRID_STREAM_TYPE, USENET_STREAM_TYPE],
    SUPPORTED_RESOURCES: [STREAM_RESOURCE],
    OPTIONS: baseOptions('Orion', [STREAM_RESOURCE]),
    CATEGORY: 'torrent-addon' as PresetCategory,
  },
  {
    ID: 'anime-kitsu',
    NAME: 'Anime Kitsu',
    URL: 'https://anime-kitsu.strem.fun',
    DESCRIPTION: 'Anime catalog and metadata from Kitsu.',
    SUPPORTED_SERVICES: [],
    SUPPORTED_STREAM_TYPES: [],
    SUPPORTED_RESOURCES: [CATALOG_RESOURCE, META_RESOURCE],
    OPTIONS: baseOptions('Anime Kitsu', [CATALOG_RESOURCE, META_RESOURCE]),
    CATEGORY: 'catalog-addon' as PresetCategory,
  },
  {
    ID: 'tmdb-addon',
    NAME: 'TMDB Addon',
    URL: 'https://tmdb.elfhosted.com',
    DESCRIPTION: 'Catalogs and metadata from The Movie Database.',
    SUPPORTED_SERVICES: [],
    SUPPORTED_STREAM_TYPES: [],
    SUPPORTED_RESOURCES: [CATALOG_RESOURCE, META_RESOURCE],
    OPTIONS: baseOptions('TMDB', [CATALOG_RESOURCE, META_RESOURCE]),
    CATEGORY: 'catalog-addon' as PresetCategory,
  },
];

// Mock status response for frontend-only deployment
const mockStatusResponse = {
  version: '2.20.0',
  tag: 'frontend-only',
  commit: 'frontend-deployment',
  buildTime: new Date().toISOString(),
  commitTime: new Date().toISOString(),
  users: null,
  settings: {
    baseUrl: process.env.BASE_URL || 'https://aiostreams.vercel.app',
    addonName: 'AIOStreams',
    alternateDesign: false,
    protected: false,
    regexFilterAccess: 'none' as const,
    loggingSensitiveInfo: false,
    tmdbApiAvailable: false,
    forced: {
      proxy: {
        enabled: null,
        id: null,
        url: null,
        publicUrl: null,
        publicIp: null,
        credentials: null,
        disableProxiedAddons: false,
        proxiedServices: null,
      },
    },
    defaults: {
      proxy: {
        enabled: null,
        id: null,
        url: null,
        publicUrl: null,
        publicIp: null,
        credentials: null,
        proxiedServices: null,
      },
      timeout: null,
    },
    presets,
    services,
    limits: {
      maxMergedCatalogSources: 10,
    },
  },
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockStatusResponse,
  });
}
