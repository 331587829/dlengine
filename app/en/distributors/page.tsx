'use client';

import { useState, useEffect } from 'react';
import distributorsData from '../../../data/distributors.json';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';

interface Distributor {
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  abn?: string;
  vat?: string;
  contactPerson?: string;
  products: string[];
}

interface CountryData {
  country: string;
  countryCode: string;
  distributors: Distributor[];
}

// Country name translation mapping
const countryTranslations: { [key: string]: string } = {
  '澳大利亚': 'Australia',
  '阿根廷': 'Argentina',
  '比利时': 'Belgium',
  '巴西': 'Brazil',
  '加拿大': 'Canada',
  '智利': 'Chile',
  '中国': 'China',
  '捷克': 'Czech Republic',
  '丹麦': 'Denmark',
  '芬兰': 'Finland',
  '法国': 'France',
  '德国': 'Germany',
  '希腊': 'Greece',
  '匈牙利': 'Hungary',
  '印度': 'India',
  '以色列': 'Israel',
  '意大利': 'Italy',
  '日本': 'Japan',
  '韩国': 'South Korea',
  '墨西哥': 'Mexico',
  '荷兰': 'Netherlands',
  '新西兰': 'New Zealand',
  '挪威': 'Norway',
  '巴基斯坦': 'Pakistan',
  '波兰': 'Poland',
  '葡萄牙': 'Portugal',
  '卡塔尔': 'Qatar',
  '俄罗斯': 'Russia',
  '沙特阿拉伯': 'Saudi Arabia',
  '新加坡': 'Singapore',
  '南非': 'South Africa',
  '西班牙': 'Spain',
  '瑞典': 'Sweden',
  '瑞士': 'Switzerland',
  '泰国': 'Thailand',
  '土耳其': 'Turkey',
  '阿联酋': 'United Arab Emirates',
  '英国': 'United Kingdom',
  '美国': 'United States',
  '越南': 'Vietnam',
  '马来西亚': 'Malaysia'
};

const translateCountry = (chineseName: string): string => {
  return countryTranslations[chineseName] || chineseName;
};

export default function DistributorsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('All');
  const [userLocation, setUserLocation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Get user's geolocation
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
              );
              const data = await response.json();
              setUserLocation(data.countryName || data.locality || '');
            } catch (error) {
              console.error('Failed to get location:', error);
            }
          },
          (error) => {
            console.log('User denied location access or failed to get location:', error);
          }
        );
      }
      setIsLoading(false);
    };

    getLocation();
  }, []);

  // Auto-recommend distributors based on user's location
  useEffect(() => {
    if (userLocation) {
      const matchedCountry = distributorsData.find(country => 
        translateCountry(country.country).includes(userLocation) || 
        userLocation.includes(translateCountry(country.country))
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry.country);
      }
    }
  }, [userLocation]);

  const countries = distributorsData.map(country => country.country);
  const selectedCountryData = distributorsData.find(country => country.country === selectedCountry);

  // Filter distributor data
  const filteredData = distributorsData.filter(countryData => {
    // If country is selected, only show data for that country
    if (selectedCountry && countryData.country !== selectedCountry) {
      return false;
    }
    
    // Filter by product type
    if (selectedProduct !== 'All') {
      const hasMatchingProduct = countryData.distributors.some(distributor => 
        distributor.products.includes(selectedProduct)
      );
      if (!hasMatchingProduct) {
        return false;
      }
    }
    
    return true;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm font-light">Loading distributor information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%);
        }
      `}</style>
      {/* Top Navigation Bar */}
      <Navbar />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            DL Engine Distributor Network
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Global partner network providing professional DLE engine sales and service support
          </p>
        </div>

        {/* Location Recommendation */}
        {userLocation && (
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 shadow-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">Location Detected</p>
                <p className="text-white font-light">
                  Based on your location, recommending distributors in <span className="text-blue-300 font-medium">
                    {userLocation && distributorsData.find(country => 
                      translateCountry(country.country).includes(userLocation) || 
                      userLocation.includes(translateCountry(country.country))
                    ) ? translateCountry(distributorsData.find(country => 
                      translateCountry(country.country).includes(userLocation) || 
                      userLocation.includes(translateCountry(country.country))
                    )!.country) : userLocation}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Filter Distributors
            </h2>
            {(selectedCountry || selectedProduct !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCountry('');
                  setSelectedProduct('All');
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10"
              >
                Clear Filters
              </button>
            )}
          </div>
          
          {/* Product Type Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Product Type</h3>
            <div className="flex flex-wrap gap-3">
              {['All', '发动机', '动力冲浪板'].map(product => {
                const productLabels = {
                  'All': 'All',
                  '发动机': 'Engines',
                  '动力冲浪板': 'DLE Surf'
                };
                return (
                  <button
                    key={product}
                    onClick={() => setSelectedProduct(product)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-lg ${
                      selectedProduct === product
                        ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300 shadow-lg shadow-blue-500/20'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {productLabels[product as keyof typeof productLabels]}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Country Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">Select Country/Region</h3>
            <div className="flex flex-wrap gap-3">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-lg ${
                    selectedCountry === country
                      ? 'bg-purple-500/20 border border-purple-400/30 text-purple-300 shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {translateCountry(country)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Distributor List */}
        <div className="space-y-6">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No distributors found matching your criteria
            </div>
          ) : (
            <div className="space-y-8">
              {filteredData.map(countryData => (
                <div key={countryData.countryCode} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-4 border-b border-white/10">
                    <h2 className="text-xl font-semibold text-white flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                      {translateCountry(countryData.country)}
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {countryData.distributors
                        .filter(distributor => 
                          selectedProduct === 'All' || distributor.products.includes(selectedProduct)
                        )
                        .map((distributor, index) => (
                        <div key={index} className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              {distributor.website && (
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                              <div>
                                <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors">{distributor.name}</h3>
                                {distributor.website && (
                                  <p className="text-xs text-gray-400 mt-0.5">
                                    {distributor.website.replace(/^https?:\/\//, '').replace(/^www\./, '')}
                                  </p>
                                )}
                              </div>
                            </div>
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                              {distributor.products.includes("动力冲浪板") ? "DLE Surf" : "DLE Engine"}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-3 leading-relaxed">{distributor.address}</p>
                          <div className="space-y-1 text-sm text-gray-400">
                            {distributor.phone && <div>📞 {distributor.phone}</div>}
                            {distributor.email && (
                              <div>
                                ✉️ <a href={`mailto:${distributor.email}`} className="hover:text-blue-300 transition-colors">{distributor.email}</a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
            Can't find a suitable distributor?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            If there are no distributors in your area, or you need more information, please contact us for support.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Contact Us - Show Phone */}
            <div className="group relative">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl backdrop-blur-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </button>
              
              {/* Phone Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-xl p-3 rounded-lg shadow-2xl border border-white/10 min-w-[200px] z-50">
                <div className="flex flex-col space-y-3">
                  <a href="tel:13529826090" className="flex items-center group/phone outline-none">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                      <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Aircraft</div>
                      <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">13529826090</div>
                    </div>
                  </a>
                  
                  <a href="tel:18313346064" className="flex items-center group/phone outline-none">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                      <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Surfboard</div>
                      <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">18313346064</div>
                    </div>
                  </a>
                  
                  <a href="tel:19187325509" className="flex items-center group/phone outline-none">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                      <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Engine</div>
                      <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">19187325509</div>
                    </div>
                  </a>
                </div>
                {/* Hover Tooltip Triangle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-b border-r border-white/10"></div>
              </div>
            </div>
            
            {/* Become a Distributor - Show Email */}
            <div className="group relative">
              <button className="inline-flex items-center px-6 py-3 border border-white/20 text-sm font-medium rounded-xl backdrop-blur-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Become a Distributor
              </button>
              
              {/* Email Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-xl p-3 rounded-lg shadow-2xl border border-white/10 min-w-[180px] z-50">
                <a href="mailto:dle@dlengine.com" className="flex items-center group/email outline-none">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-2 group-hover/email:bg-red-500 transition-colors">
                    <svg className="w-3 h-3 text-red-400 group-hover/email:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 5.5V18.5C2 19.3284 2.67157 20 3.5 20H20.5C21.3284 20 22 19.3284 22 18.5V5.5C22 4.67157 21.3284 4 20.5 4H3.5C2.67157 4 2 4.67157 2 5.5ZM3.5 5.5H20.5V6.75924L12 11.5369L3.5 6.75924V5.5ZM3.5 18.5V8.47545L11.2657 12.8398C11.7226 13.0967 12.2774 13.0967 12.7343 12.8398L20.5 8.47545V18.5H3.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Contact Email</div>
                    <div className="text-sm font-medium text-white group-hover/email:text-red-400 transition-colors">dle@dlengine.com</div>
                  </div>
                </a>
                {/* Hover Tooltip Triangle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-b border-r border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}