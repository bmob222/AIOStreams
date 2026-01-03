import { NextResponse } from 'next/server';

interface ParsedStream {
  filename?: string;
  folderName?: string;
  resolution?: string;
  quality?: string;
  encode?: string;
  visualTags?: string[];
  audioTags?: string[];
  languages?: string[];
  provider?: string;
  indexer?: string;
  size?: number;
  seeders?: number;
  type?: string;
  addon?: string;
  message?: string;
  [key: string]: unknown;
}

function formatSize(bytes?: number): string {
  if (!bytes) return '';
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) return `${gb.toFixed(1)} GB`;
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(0)} MB`;
}

function formatStream(stream: ParsedStream): { name: string; description: string } {
  const parts: string[] = [];

  // Build name
  const nameParts: string[] = [];
  if (stream.resolution) nameParts.push(stream.resolution);
  if (stream.quality) nameParts.push(stream.quality);
  if (stream.encode) nameParts.push(stream.encode);

  const name = nameParts.length > 0 ? nameParts.join(' | ') : stream.filename || 'Stream';

  // Build description
  if (stream.visualTags?.length) parts.push(stream.visualTags.join(' '));
  if (stream.audioTags?.length) parts.push(stream.audioTags.join(' '));
  if (stream.languages?.length) parts.push(stream.languages.join('/'));
  if (stream.size) parts.push(formatSize(stream.size));
  if (stream.seeders) parts.push(`${stream.seeders} seeders`);
  if (stream.indexer) parts.push(`📍 ${stream.indexer}`);
  if (stream.addon) parts.push(`🔌 ${stream.addon}`);
  if (stream.message) parts.push(stream.message);

  const description = parts.length > 0 ? parts.join(' | ') : stream.folderName || '';

  return { name, description };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { stream } = body;

    if (!stream) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'INVALID_REQUEST',
          message: 'Stream data is required',
        },
      }, { status: 400 });
    }

    const formatted = formatStream(stream);

    return NextResponse.json({
      success: true,
      data: formatted,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'FORMAT_ERROR',
        message: error instanceof Error ? error.message : 'Failed to format stream',
      },
    }, { status: 500 });
  }
}
