'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface DouyinVideo {
  id: string;
  title: string;
  cover_url: string;
  play_url: string;
  like_count: number;
  comment_count: number;
  share_count: number;
  create_time: number;
}

interface DouyinVideoGalleryProps {
  userId: string; // 抖音用户ID
  accessToken: string; // 抖音开放平台Access Token
  maxVideos?: number; // 最大显示视频数
}

export function DouyinVideoGallery({ 
  userId, 
  accessToken, 
  maxVideos = 6 
}: DouyinVideoGalleryProps) {
  const [videos, setVideos] = useState<DouyinVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<DouyinVideo | null>(null);

  // 模拟抖音API调用（实际使用时需要替换为真实API）
  const fetchDouyinVideos = async () => {
    try {
      setLoading(true);
      
      // 模拟API调用 - 使用现有的jetboard图片作为占位符
      const mockVideos: DouyinVideo[] = [
        {
          id: 'video_1',
          title: 'DLE动力冲浪板水上极限体验',
          cover_url: '/images/jetboard/DLE1118ZT1.jpg',
          play_url: 'https://cdn.dlengine.com/video/DLE106clbya.mp4',
          like_count: 12500,
          comment_count: 342,
          share_count: 567,
          create_time: Date.now() - 86400000
        },
        {
          id: 'video_2',
          title: '用户真实反馈：DLE动力冲浪板使用感受',
          cover_url: '/images/jetboard/DLE1118ZT2.jpg',
          play_url: 'https://cdn.dlengine.com/video/DLE106XC.mp4',
          like_count: 8500,
          comment_count: 234,
          share_count: 321,
          create_time: Date.now() - 172800000
        },
        {
          id: 'video_3',
          title: 'DLE动力冲浪板技术解析',
          cover_url: '/images/jetboard/106.jpg',
          play_url: 'https://cdn.dlengine.com/video/DL-2LJTF.mp4',
          like_count: 5300,
          comment_count: 156,
          share_count: 234,
          create_time: Date.now() - 259200000
        }
      ];

      setVideos(mockVideos.slice(0, maxVideos));
      setError('');
    } catch (err) {
      setError('获取抖音视频失败，请稍后重试');
      console.error('抖音API调用失败:', err);
    } finally {
      setLoading(false);
    }
  };

  // 图片加载失败处理
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // 使用默认的抖音风格占位图
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNjb2xvcj0iI2ZmMTk2ZGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+5pif5bGx5Lqk5o2iPC90ZXh0Pgo8L3N2Zz4=';
  };

  // 实际抖音API调用函数（需要配置）
  const fetchRealDouyinVideos = async () => {
    try {
      setLoading(true);
      setError('');
      
      // 抖音开放平台API调用流程：
      // 1. 获取用户视频列表
      const videoListResponse = await fetch(
        `https://open.douyin.com/api/douyin/v1/video/list/?open_id=${userId}&cursor=0&count=${maxVideos}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!videoListResponse.ok) {
        const errorData = await videoListResponse.json();
        throw new Error(`获取视频列表失败: ${errorData.message || '请检查用户ID和Access Token'}`);
      }

      const videoListData = await videoListResponse.json();
      
      if (!videoListData.data || !videoListData.data.list || videoListData.data.list.length === 0) {
        throw new Error('该用户暂无视频内容');
      }
      
      // 2. 获取视频详细信息
      const videoIds = videoListData.data.list.map((video: any) => video.item_id);
      const videoDataResponse = await fetch(
        `https://open.douyin.com/api/douyin/v1/video/data/?item_ids=${videoIds.join(',')}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!videoDataResponse.ok) {
        const errorData = await videoDataResponse.json();
        throw new Error(`获取视频数据失败: ${errorData.message || '请检查API权限'}`);
      }

      const videoData = await videoDataResponse.json();
      
      if (!videoData.data || !videoData.data.item_list) {
        throw new Error('视频数据格式错误');
      }
      
      // 处理视频数据
      const processedVideos = videoData.data.item_list.map((item: any) => ({
        id: item.item_id,
        title: item.title || 'DLE动力冲浪板视频',
        cover_url: item.cover,
        play_url: item.video?.play_addr?.url_list?.[0] || '',
        like_count: item.statistics?.digg_count || 0,
        comment_count: item.statistics?.comment_count || 0,
        share_count: item.statistics?.share_count || 0,
        create_time: item.create_time || Date.now()
      })).filter((video: any) => video.play_url); // 过滤掉没有播放地址的视频

      if (processedVideos.length === 0) {
        throw new Error('未找到可播放的视频内容');
      }

      setVideos(processedVideos);
    } catch (err: any) {
      console.error('抖音API调用失败:', err);
      setError(err.message || '获取抖音视频失败，请稍后重试');
      // 如果API调用失败，使用模拟数据作为降级方案
      fetchDouyinVideos();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken && userId && accessToken !== '您的抖音Access Token' && userId !== '您的抖音用户ID') {
      // 如果配置了真实的accessToken和userId，调用真实API
      fetchRealDouyinVideos();
    } else {
      // 如果使用默认占位符，使用模拟数据
      fetchDouyinVideos();
    }
  }, [userId, accessToken, maxVideos]);

  const formatCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + 'w';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
  };

  const formatTime = (timestamp: number): string => {
    const now = Date.now();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    if (days < 30) return `${Math.floor(days / 7)}周前`;
    return `${Math.floor(days / 30)}月前`;
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(maxVideos)].map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-800/50 rounded-2xl overflow-hidden">
            <div className="aspect-[9/16] bg-gray-700" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-700 rounded" />
              <div className="h-3 bg-gray-700 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-lg mb-4">{error}</div>
        <button 
          onClick={fetchDouyinVideos}
          className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          重新加载
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="group relative bg-gray-800/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            {/* 视频封面 */}
            <div className="relative aspect-[9/16] overflow-hidden">
              <Image
                src={video.cover_url}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={handleImageError}
              />
              
              {/* 播放按钮 */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500/90 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* 视频时长/时间 */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {formatTime(video.create_time)}
              </div>
            </div>
            
            {/* 视频信息 */}
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm leading-tight">
                {video.title}
              </h3>
              <div className="flex justify-between text-gray-400 text-xs">
                <span className="flex items-center gap-1">
                  ❤️ {formatCount(video.like_count)}
                </span>
                <span className="flex items-center gap-1">
                  💬 {formatCount(video.comment_count)}
                </span>
                <span className="flex items-center gap-1">
                  ↗️ {formatCount(video.share_count)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 视频弹窗 */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-black rounded-xl overflow-hidden">
              <video
                src={selectedVideo.play_url}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setSelectedVideo(null)}
              >
                您的浏览器不支持视频播放
              </video>
              
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold mb-2">{selectedVideo.title}</h3>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>❤️ {formatCount(selectedVideo.like_count)} 点赞</span>
                  <span>💬 {formatCount(selectedVideo.comment_count)} 评论</span>
                  <span>↗️ {formatCount(selectedVideo.share_count)} 分享</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}