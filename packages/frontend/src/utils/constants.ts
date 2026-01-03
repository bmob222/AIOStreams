// Frontend-safe constants - avoid loading backend modules from core
// These are re-exported here to prevent importing the full @aiostreams/core module
// which has backend dependencies (pg, sqlite3, redis) that can't be bundled

export const PresetCategory = {
  STREAMS: 'streams',
  SUBTITLES: 'subtitles',
  META_CATALOGS: 'metaCatalogs',
  MISC: 'misc',
} as const;

export const SERVICE_DETAILS = {
  torbox: { id: 'torbox', name: 'TorBox', shortName: 'TB', description: 'High-speed torrent streaming' },
  realdebrid: { id: 'realdebrid', name: 'Real-Debrid', shortName: 'RD', description: 'Premium link resolver' },
  alldebrid: { id: 'alldebrid', name: 'AllDebrid', shortName: 'AD', description: 'Multi-host resolver' },
  debridlink: { id: 'debridlink', name: 'Debrid-Link', shortName: 'DL', description: 'Multi-host debrid service' },
  premiumize: { id: 'premiumize', name: 'Premiumize', shortName: 'PM', description: 'Premium content delivery' },
  easydebrid: { id: 'easydebrid', name: 'EasyDebrid', shortName: 'ED', description: 'Simple debrid solution' },
  debrider: { id: 'debrider', name: 'Debrider', shortName: 'DR', description: 'Debrid resolver service' },
  putio: { id: 'putio', name: 'put.io', shortName: 'P.IO', description: 'Cloud storage streaming' },
  pikpak: { id: 'pikpak', name: 'PikPak', shortName: 'PKP', description: 'Cloud drive streaming' },
  offcloud: { id: 'offcloud', name: 'Offcloud', shortName: 'OC', description: 'Cloud downloading service' },
  seedr: { id: 'seedr', name: 'Seedr', shortName: 'SDR', description: 'Cloud torrent streaming' },
  easynews: { id: 'easynews', name: 'Easynews', shortName: 'EN', description: 'Usenet streaming service' },
  nzbdav: { id: 'nzbdav', name: 'NzbDAV', shortName: 'ND', description: 'WebDAV usenet service' },
  altmount: { id: 'altmount', name: 'AltMount', shortName: 'AM', description: 'Alternative mount usenet' },
  stremio_nntp: { id: 'stremio_nntp', name: 'Stremio NNTP', shortName: 'SN', description: 'Direct usenet streaming' },
} as const;

export const PROXY_SERVICE_DETAILS = {
  builtin: {
    id: 'builtin',
    name: 'Builtin Proxy',
    description: 'A proxy service that is built into the core of AIOStreams',
    credentialDescription: 'A valid username:password pair for this AIOStreams instance, defined in the `AIOSTREAMS_AUTH` environment variable.',
  },
  stremthru: {
    id: 'stremthru',
    name: 'StremThru',
    description: '[StremThru](https://github.com/MunifTanjim/stremthru) is a feature packed companion to Stremio which also offers a HTTP proxy, written in Go.',
    credentialDescription: 'A valid username:password pair for your StremThru instance, defined in the `STREMTHRU_PROXY_AUTH` environment variable.',
  },
  mediaflow: {
    id: 'mediaflow',
    name: 'MediaFlow Proxy',
    description: '[MediaFlow Proxy](https://github.com/mhdzumair/mediaflow-proxy) is a high performance proxy server which supports HTTP, HLS, and more.',
    credentialDescription: 'The value of your MediaFlow Proxy instance `API_PASSWORD` environment variable.',
  },
} as const;

export const STREAM_TYPES = [
  'p2p',
  'live',
  'stremio-usenet',
  'archive',
  'usenet',
  'debrid',
  'http',
  'external',
  'youtube',
  'error',
  'statistic',
] as const;

// Sorting constants
export const SORT_CRITERIA = [
  'quality',
  'resolution',
  'language',
  'visualTag',
  'audioTag',
  'audioChannel',
  'streamType',
  'encode',
  'size',
  'service',
  'seeders',
  'private',
  'age',
  'addon',
  'regexPatterns',
  'cached',
  'library',
  'keyword',
  'streamExpressionMatched',
  'seadex',
] as const;

export const SORT_DIRECTIONS = ['asc', 'desc'] as const;

export const SORT_CRITERIA_DETAILS = {
  quality: {
    name: 'Quality',
    description: 'Sort by quality',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Low quality first',
    descendingDescription: 'High quality first',
  },
  resolution: {
    name: 'Resolution',
    description: 'Sort by resolution',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Low resolution first',
    descendingDescription: 'High resolution first',
  },
  language: {
    name: 'Language',
    description: 'Sort by language',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Preferred language last',
    descendingDescription: 'Preferred language first',
  },
  visualTag: {
    name: 'Visual Tag',
    description: 'Sort by visual tags',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-matching first',
    descendingDescription: 'Matching first',
  },
  audioTag: {
    name: 'Audio Tag',
    description: 'Sort by audio tags',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-matching first',
    descendingDescription: 'Matching first',
  },
  audioChannel: {
    name: 'Audio Channel',
    description: 'Sort by audio channels',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Fewer channels first',
    descendingDescription: 'More channels first',
  },
  streamType: {
    name: 'Stream Type',
    description: 'Sort by stream type',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-preferred first',
    descendingDescription: 'Preferred first',
  },
  encode: {
    name: 'Encode',
    description: 'Sort by encode',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-preferred first',
    descendingDescription: 'Preferred first',
  },
  size: {
    name: 'Size',
    description: 'Sort by size',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Smaller first',
    descendingDescription: 'Larger first',
  },
  service: {
    name: 'Service',
    description: 'Sort by service',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'No service first',
    descendingDescription: 'Preferred service first',
  },
  seeders: {
    name: 'Seeders',
    description: 'Sort by seeders',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Fewer seeders first',
    descendingDescription: 'More seeders first',
  },
  private: {
    name: 'Private',
    description: 'Sort by private tracker',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Public first',
    descendingDescription: 'Private first',
  },
  age: {
    name: 'Age',
    description: 'Sort by age',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Older first',
    descendingDescription: 'Newer first',
  },
  addon: {
    name: 'Addon',
    description: 'Sort by addon order',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'By addon order',
    descendingDescription: 'By addon order',
  },
  regexPatterns: {
    name: 'Regex Patterns',
    description: 'Sort by regex patterns',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-matching first',
    descendingDescription: 'Matching first',
  },
  cached: {
    name: 'Cached',
    description: 'Sort by cached',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Not cached first',
    descendingDescription: 'Cached first',
  },
  library: {
    name: 'Library',
    description: 'Sort by in library',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Not in library first',
    descendingDescription: 'In library first',
  },
  keyword: {
    name: 'Keyword',
    description: 'Sort by keyword match',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-matching first',
    descendingDescription: 'Matching first',
  },
  streamExpressionMatched: {
    name: 'Stream Expression',
    description: 'Sort by stream expression',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Non-matching first',
    descendingDescription: 'Matching first',
  },
  seadex: {
    name: 'SeaDex',
    description: 'Sort by SeaDex rating',
    defaultDirection: 'desc' as const,
    ascendingDescription: 'Not rated first',
    descendingDescription: 'Best rated first',
  },
} as const;

// Filter constants - minimal stubs for UI use
export const RESOLUTIONS = ['144p', '240p', '360p', '480p', '576p', '720p', '1080p', '1440p', '2160p', 'Unknown'] as const;
export const QUALITIES = ['BluRay REMUX', 'BluRay', 'WEB-DL', 'WEBRip', 'HDRip', 'HC HD-Rip', 'DVDRip', 'HDTV', 'CAM', 'TS', 'TC', 'SCR', 'Unknown'] as const;
export const ENCODES = ['AV1', 'HEVC', 'AVC', 'XviD', 'DivX', 'Unknown'] as const;
export const VISUAL_TAGS = ['Unknown', 'HDR+DV', 'DV Only', 'HDR Only', 'HDR10+', 'HDR10', 'DV', 'HDR', 'HLG', '10bit', '3D', 'IMAX', 'AI', 'SDR', 'H-OU', 'H-SBS'] as const;
export const AUDIO_TAGS = ['Unknown', 'Atmos', 'DD+', 'DD', 'DTS:X', 'DTS-HD MA', 'DTS-HD', 'DTS-ES', 'DTS', 'TrueHD', 'OPUS', 'FLAC', 'AAC'] as const;
export const LANGUAGES = [
  'English',
  'Japanese',
  'Chinese',
  'Russian',
  'Arabic',
  'Portuguese',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Korean',
  'Hindi',
  'Bengali',
  'Punjabi',
  'Marathi',
  'Gujarati',
  'Tamil',
  'Telugu',
  'Kannada',
  'Malayalam',
  'Thai',
  'Vietnamese',
  'Indonesian',
  'Turkish',
  'Hebrew',
  'Persian',
  'Ukrainian',
  'Greek',
  'Lithuanian',
  'Latvian',
  'Estonian',
  'Polish',
  'Czech',
  'Slovak',
  'Hungarian',
  'Romanian',
  'Bulgarian',
  'Serbian',
  'Croatian',
  'Slovenian',
  'Dutch',
  'Danish',
  'Finnish',
  'Swedish',
  'Norwegian',
  'Malay',
  'Latino',
  'Dual Audio',
  'Dubbed',
  'Multi',
  'Unknown',
] as const;
export const TYPES = ['movie', 'tvshow', 'anime'] as const;
export const DEDUPLICATOR_KEYS = ['filename', 'infoHash', 'smartDetect'] as const;
export const AUDIO_CHANNELS = ['Unknown', '2.0', '5.1', '6.1', '7.1'] as const;
export const MIN_SIZE = 0;
export const MAX_SIZE = 100 * 1000 * 1000 * 1000; // 100GB
export const MIN_SEEDERS = 0;
export const MAX_SEEDERS = 1000;
export const MIN_AGE_HOURS = 0;
export const MAX_AGE_HOURS = 6480 * 24; // 6480 days

export const TOP_LEVEL_OPTION_DETAILS = {
  tmdbApiKey: {
    name: 'TMDB API Key',
    description:
      'Get your free API key from [here](https://www.themoviedb.org/settings/api). Make sure to copy the 32 character API Key and not the Read Access Token.',
  },
  tmdbAccessToken: {
    name: 'TMDB Access Token',
    description:
      'Get your free access token from [here](https://www.themoviedb.org/settings/api). Make sure to copy the Read Access Token and not the 32 character API Key.',
  },
  rpdbApiKey: {
    name: 'RPDB API Key',
    description:
      'Get your free API key from [here](https://ratingposterdb.com/api-key/) for posters with ratings.',
  },
  topPosterApiKey: {
    name: 'Top Poster API Key',
    description:
      'Get your free API key from [here](https://api.top-streaming.stream/user/register) for posters with ratings.',
  },
  tvdbApiKey: {
    name: 'TVDB API Key',
    description:
      'Sign up for a free API Key at [TVDB](https://www.thetvdb.com/api-information) and then get it from your [dashboard](https://www.thetvdb.com/dashboard/account/apikeys).',
  },
} as const;

export const AUTO_PLAY_ATTRIBUTES = [
  'service',
  'addon',
  'proxied',
  'resolution',
  'quality',
  'encode',
  'audioTags',
  'visualTags',
  'languages',
  'releaseGroup',
  'type',
  'infoHash',
  'size',
] as const;

export const DEFAULT_AUTO_PLAY_ATTRIBUTES = [
  'resolution',
  'quality',
  'releaseGroup',
] as const;

export const AUTO_PLAY_METHODS = [
  'matchingFile',
  'matchingIndex',
  'firstFile',
] as const;

export const AUTO_PLAY_METHOD_DETAILS = {
  matchingFile: {
    name: 'Matching File',
    description:
      'Auto-play the stream that matches the (customisable) attributes of the previous episode.',
  },
  matchingIndex: {
    name: 'Matching Index',
    description:
      'Auto-play the stream in the same position in the result list (assuming it exists) i.e. if you play the second stream, the second stream for the next episode will also be played.',
  },
  firstFile: {
    name: 'First File',
    description: 'Always auto-play the first stream in the result list.',
  },
} as const;

export const RESOURCES = [
  'stream',
  'subtitles',
  'catalog',
  'meta',
  'addon_catalog',
] as const;

export const GDRIVE_FORMATTER = 'gdrive' as const;
export const LIGHT_GDRIVE_FORMATTER = 'lightgdrive' as const;
export const MINIMALISTIC_GDRIVE_FORMATTER = 'minimalisticgdrive' as const;
export const TORRENTIO_FORMATTER = 'torrentio' as const;
export const TORBOX_FORMATTER = 'torbox' as const;
export const PRISM_FORMATTER = 'prism' as const;
export const CUSTOM_FORMATTER = 'custom' as const;

export const FORMATTER_DETAILS = {
  gdrive: {
    id: 'gdrive',
    name: 'Google Drive',
    description: 'Uses the formatting from the Stremio GDrive addon',
  },
  lightgdrive: {
    id: 'lightgdrive',
    name: 'Light Google Drive',
    description:
      'A lighter version of the GDrive formatter, focused on asthetics',
  },
  prism: {
    id: 'prism',
    name: 'Prism',
    description: 'An aesthetic formatter with every detail within 5 lines.',
  },
  minimalisticgdrive: {
    id: 'minimalisticgdrive',
    name: 'Minimalistic Google Drive',
    description:
      'A minimalistic formatter for Google Drive which shows only the bare minimum',
  },
  torrentio: {
    id: 'torrentio',
    name: 'Torrentio',
    description: 'Uses the formatting from the Torrentio addon',
  },
  torbox: {
    id: 'torbox',
    name: 'Torbox',
    description: 'Uses the formatting from the TorBox Stremio addon',
  },
  custom: {
    id: 'custom',
    name: 'Custom',
    description: 'Define your own formatter',
  },
} as const;

export const SNIPPETS = [
  {
    name: 'Year + Season + Episode',
    description:
      'Outputs a nicely formatted year along with the season and episode number',
    value:
      '{stream.year::exists["({stream.year}) "||""]}{stream.seasonEpisode::exists["{stream.seasonEpisode::join(\' • \')}"||""]}',
  },
  {
    name: 'File Size',
    description: 'Outputs the file size of the stream',
    value: '{stream.size::>0["{stream.size::bytes}"||""]}',
  },
  {
    name: 'Duration',
    description: 'Outputs the duration of the stream',
    value: '{stream.duration::>0["{stream.duration::time}"||""]}',
  },
  {
    name: 'P2P marker',
    description: 'Displays a [P2P] marker if the stream is a P2P stream',
    value: '{stream.type::=p2p["[P2P]"||""]}',
  },
  {
    name: 'Languages',
    description:
      'Outputs the languages of the stream. Tip: use stream.languageEmojis if you prefer the flags',
    value:
      '{stream.languages::exists["{stream.languages::join(\' • \')}"||""]}',
  },
] as const;

export const SERVICES = [
  'torbox',
  'realdebrid',
  'alldebrid',
  'debridlink',
  'premiumize',
  'easydebrid',
  'debrider',
  'putio',
  'pikpak',
  'offcloud',
  'seedr',
  'easynews',
  'nzbdav',
  'altmount',
  'stremio_nntp',
] as const;

export const constants = {
  PresetCategory,
  SERVICE_DETAILS,
  PROXY_SERVICE_DETAILS,
  TOP_LEVEL_OPTION_DETAILS,
  GDRIVE_FORMATTER,
  LIGHT_GDRIVE_FORMATTER,
  MINIMALISTIC_GDRIVE_FORMATTER,
  TORRENTIO_FORMATTER,
  TORBOX_FORMATTER,
  PRISM_FORMATTER,
  CUSTOM_FORMATTER,
  AUTO_PLAY_ATTRIBUTES,
  DEFAULT_AUTO_PLAY_ATTRIBUTES,
  AUTO_PLAY_METHODS,
  AUTO_PLAY_METHOD_DETAILS,
  FORMATTER_DETAILS,
  RESOURCES,
  SNIPPETS,
  SERVICES,
  STREAM_TYPES,
  SORT_CRITERIA,
  SORT_DIRECTIONS,
  SORT_CRITERIA_DETAILS,
  RESOLUTIONS,
  QUALITIES,
  ENCODES,
  VISUAL_TAGS,
  AUDIO_TAGS,
  LANGUAGES,
  TYPES,
  DEDUPLICATOR_KEYS,
  AUDIO_CHANNELS,
  MIN_SIZE,
  MAX_SIZE,
  MIN_SEEDERS,
  MAX_SEEDERS,
  MIN_AGE_HOURS,
  MAX_AGE_HOURS,
} as const;
