'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { toPng, toSvg } from 'html-to-image';
import { Download, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

interface MermaidDiagramProps {
  code: string;
  onDownloadClick?: () => void;
}

export default function MermaidDiagram({ code, onDownloadClick }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (!containerRef.current || !code || !isInitialized) return;

    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Date.now()}`;
        const { svg } = await mermaid.render(id, code);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid render error:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div class="text-red-500 text-sm">渲染失败，请检查 Mermaid 语法</div>';
        }
      }
    };

    renderDiagram();
  }, [code, isInitialized]);

  const handleDownload = async (format: 'png' | 'svg') => {
    if (!containerRef.current) return;

    onDownloadClick?.();

    try {
      const svgElement = containerRef.current.querySelector('svg');
      if (!svgElement) return;

      let dataUrl: string;
      if (format === 'png') {
        dataUrl = await toPng(svgElement as unknown as HTMLElement, {
          backgroundColor: '#ffffff',
          quality: 1,
        });
      } else {
        dataUrl = await toSvg(svgElement as unknown as HTMLElement, {
          backgroundColor: '#ffffff',
        });
      }

      const link = document.createElement('a');
      link.download = `mindmap-${Date.now()}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.parentElement?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-1">
          <button
            onClick={handleZoomOut}
            className="p-1.5 hover:bg-gray-200 rounded transition-colors"
            title="缩小"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs text-gray-600 min-w-[3rem] text-center">{zoom}%</span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 hover:bg-gray-200 rounded transition-colors"
            title="放大"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={toggleFullscreen}
            className="p-1.5 hover:bg-gray-200 rounded transition-colors"
            title="全屏"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDownload('png')}
            className="p-1.5 hover:bg-gray-200 rounded transition-colors"
            title="下载 PNG"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div
          ref={containerRef}
          className="flex items-center justify-center min-h-full transition-transform"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center top' }}
        />
      </div>
    </div>
  );
}
