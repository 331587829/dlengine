'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/hooks';

interface FooterProps {
  isEnglish?: boolean;
}

export function Footer({ isEnglish = false }: FooterProps) {
  const { isEnglish: localeIsEnglish } = useLocale();
  const resolvedIsEnglish = isEnglish || localeIsEnglish;
  // 网络安全证书配置
  const securityCertConfig = {
    cn: {
      url: 'https://xyt.xcc.cn/getpcInfo?sn=1801578511823929344&language=CN&certType=8&url=www.dlengine.com',
      svgPath: '/icons/www.dlengine.com.svg'
    },
    en: {
      url: 'https://xyt.xcc.cn/getpcInfo?sn=1801578511823929344&language=EN&certType=8&url=www.dlengine.com',
      svgPath: '/icons/www.dlengine.comen.svg'
    }
  };

  const certConfig = resolvedIsEnglish ? securityCertConfig.en : securityCertConfig.cn;

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* 左侧：备案信息、版权声明和安全证书 */}
          <div className="flex flex-col items-start gap-2 text-xs text-gray-500">
            {/* 中文页面显示备案信息 */}
            {!resolvedIsEnglish && (
              <>
                <a 
                  href="https://beian.miit.gov.cn" 
                  target="_blank" 
                  rel="noopener"
                  className="hover:text-gray-400 transition"
                >
                  滇 ICP 备 14001547 号
                </a>
                <a 
                  target="_blank" 
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53250402000104"
                  className="hover:text-gray-400 transition"
                >
                  滇公网安备 53250402000104 号
                </a>
              </>
            )}
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-400">{resolvedIsEnglish ? 'Copyright © 2026 DLEngine Inc. All rights reserved.' : 'Copyright © 2026 DLEngine Inc. 保留所有权利。'}</p>
              
              {/* 网络安全证书 - 按照官方说明使用 embed 标签 */}
              <a 
                href={certConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: 'relative', display: 'inline-block', height: '38px' }}
                title={resolvedIsEnglish ? 'Cyber Security Certificate' : '网络安全证书'}
              >
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}></div>
                <embed 
                  src={certConfig.svgPath}
                  width="103"
                  height="38"
                  type="image/svg+xml"
                />
              </a>
            </div>
          </div>
          
          {/* 右侧链接菜单 */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={resolvedIsEnglish ? "/en/distributors" : "/distributors"} className="text-xs text-gray-500 hover:text-white transition">{resolvedIsEnglish ? 'Distributors' : '经销商'}</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">{resolvedIsEnglish ? 'Terms of Use' : '使用条款'}</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">{resolvedIsEnglish ? 'Sales Policy' : '销售政策'}</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">{resolvedIsEnglish ? 'Legal Information' : '法律信息'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
