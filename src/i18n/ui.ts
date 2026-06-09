export const languages = {
  en: 'English',
  tr: 'Türkçe',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.download': 'Download',
    'nav.docs': 'Documentation',
    // Hero
    'hero.badge': 'ML-Powered · No Special Hardware',
    'hero.title1': 'Type with your',
    'hero.title2': 'eyes.',
    'hero.desc': 'OptiType transforms any standard webcam into a gaze-controlled keyboard using real-time face tracking and machine learning — all offline, all free.',
    'hero.cta': 'Download Free',
    'hero.docs': 'Documentation',
    'hero.tracking': 'Tracking Active',
    // Typing demo
    'demo.label': 'eye-typed',
    // Stats
    'stats.accuracy': 'Accuracy',
    'stats.models': 'ML Models',
    'stats.zones': 'Gaze Zones',
    'stats.latency': 'Latency',
    // How it works
    'how.label': 'Pipeline',
    'how.title': 'How It Works',
    'how.desc': 'Four processing stages — all running in real-time on your device.',
    'how.s1': 'Capture',
    'how.s1d': '30 FPS from any webcam',
    'how.s2': 'Face Mesh',
    'how.s2d': '478 landmarks + iris',
    'how.s3': 'ML Classify',
    'how.s3d': '8 features → 6 zones',
    'how.s4': 'Type',
    'how.s4d': 'Dwell → keystrokes',
    // Features
    'feat.label': 'Capabilities',
    'feat.title': 'Key Features',
    'feat.1': 'No Special Hardware',
    'feat.1d': 'Works with any webcam — no IR sensors.',
    'feat.2': '5 ML Algorithms',
    'feat.2d': 'MLP, SVM, KNN, RF, Gradient Boosting.',
    'feat.3': 'Training Insights',
    'feat.3d': 'Confusion matrices, PDF reports.',
    'feat.4': '100% Offline',
    'feat.4d': 'No cloud. No data leaves your device.',
    'feat.5': 'Customizable',
    'feat.5d': 'Dwell, confidence, smoothing, model.',
    'feat.6': 'Cross-Platform',
    'feat.6d': 'Linux + Windows standalone builds.',
    'feat.7': 'Multi-User',
    'feat.7d': 'Multi-participant data collection.',
    'feat.8': 'Adaptive',
    'feat.8d': 'Calibrate for personalized accuracy.',
    // Showcase
    'show.analytics.label': 'Analytics',
    'show.analytics.title': 'Training & Model Comparison',
    'show.analytics.desc': 'Compare 5 ML algorithms, export PDF reports, visualize feature importance and confusion matrices — all built-in.',
    'show.analytics.f1': 'PDF training reports',
    'show.analytics.f2': 'Model accuracy comparison bars',
    'show.analytics.f3': 'Weak zone identification',
    'show.grid.label': 'Interface',
    'show.grid.title': '6-Zone Typing Grid',
    'show.grid.desc': 'Large target zones minimize eye strain. Real-time dwell progress, confidence display, and live camera feed — all in one adaptive interface.',
    // Tech
    'tech.label': 'Built With',
    // CTA
    'cta.title': 'Ready to try it?',
    'cta.desc': 'Free, open-source, and completely offline. Download for Windows or Linux.',
    'cta.btn': 'Get Started',
    // About
    'about.title': 'About OptiType',
    'about.text': 'Developed as a graduation project by Mohamed Alzarzour at Karabük University, under the supervision of Dr. Ammar Mohammed Ali Al-Qadasi.',
    // Download
    'dl.title': 'Get OptiType',
    'dl.desc': 'Standalone application — no internet needed after install.',
    'dl.requirements': 'Requirements',
    'dl.source': 'View Source on GitHub',
    'dl.recommended': 'Recommended',
    // Docs
    'docs.title': 'Getting Started',
    'docs.subtitle': 'Complete guide for users and developers — everything you need to know about OptiType.',
    // Menu
    'menu.title': 'Menu',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkında',
    'nav.download': 'İndir',
    'nav.docs': 'Belgeler',
    'hero.badge': 'Makine Öğrenmesi Destekli · Özel Donanım Gerekmez',
    'hero.title1': 'Gözlerinizle',
    'hero.title2': 'yazın.',
    'hero.desc': 'OptiType, herhangi bir standart web kamerasını gerçek zamanlı yüz takibi ve makine öğrenmesi kullanarak göz kontrollü klavyeye dönüştürür — tamamen çevrimdışı, tamamen ücretsiz.',
    'hero.cta': 'Ücretsiz İndir',
    'hero.docs': 'Belgeler',
    'hero.tracking': 'İzleme Aktif',
    'demo.label': 'göz ile yazıldı',
    'stats.accuracy': 'Doğruluk',
    'stats.models': 'ML Modeli',
    'stats.zones': 'Bakış Bölgesi',
    'stats.latency': 'Gecikme',
    'how.label': 'İşlem Hattı',
    'how.title': 'Nasıl Çalışır',
    'how.desc': 'Dört işlem aşaması — hepsi cihazınızda gerçek zamanlı çalışır.',
    'how.s1': 'Yakalama',
    'how.s1d': 'Herhangi bir kameradan 30 FPS',
    'how.s2': 'Yüz Ağı',
    'how.s2d': '478 işaret + iris takibi',
    'how.s3': 'ML Sınıflandırma',
    'how.s3d': '8 özellik → 6 bölge',
    'how.s4': 'Yazma',
    'how.s4d': 'Bekleme → tuş vuruşları',
    'feat.label': 'Yetenekler',
    'feat.title': 'Temel Özellikler',
    'feat.1': 'Özel Donanım Yok',
    'feat.1d': 'Herhangi bir web kamerasıyla çalışır.',
    'feat.2': '5 ML Algoritması',
    'feat.2d': 'MLP, SVM, KNN, RF, Gradient Boosting.',
    'feat.3': 'Eğitim Analizleri',
    'feat.3d': 'Karmaşıklık matrisleri, PDF raporlar.',
    'feat.4': '%100 Çevrimdışı',
    'feat.4d': 'Bulut yok. Veri cihazınızdan çıkmaz.',
    'feat.5': 'Özelleştirilebilir',
    'feat.5d': 'Bekleme, güven, yumuşatma, model.',
    'feat.6': 'Çapraz Platform',
    'feat.6d': 'Linux + Windows bağımsız yapılar.',
    'feat.7': 'Çoklu Kullanıcı',
    'feat.7d': 'Çoklu katılımcı veri toplama.',
    'feat.8': 'Uyarlanabilir',
    'feat.8d': 'Kişiselleştirilmiş doğruluk için kalibrasyon.',
    'show.analytics.label': 'Analitik',
    'show.analytics.title': 'Eğitim ve Model Karşılaştırma',
    'show.analytics.desc': '5 ML algoritmasını karşılaştırın, PDF rapor çıktısı alın, özellik önemini ve karmaşıklık matrislerini görselleştirin.',
    'show.analytics.f1': 'PDF eğitim raporları',
    'show.analytics.f2': 'Model doğruluk karşılaştırma çubukları',
    'show.analytics.f3': 'Zayıf bölge tespiti',
    'show.grid.label': 'Arayüz',
    'show.grid.title': '6 Bölgeli Yazma Izgarası',
    'show.grid.desc': 'Büyük hedef bölgeleri göz yorgunluğunu azaltır. Gerçek zamanlı bekleme ilerlemesi, güven göstergesi ve canlı kamera önizlemesi.',
    'tech.label': 'Teknolojiler',
    'cta.title': 'Denemek ister misiniz?',
    'cta.desc': 'Ücretsiz, açık kaynaklı ve tamamen çevrimdışı. Windows veya Linux için indirin.',
    'cta.btn': 'Başla',
    'about.title': 'OptiType Hakkında',
    'about.text': 'Karabük Üniversitesi\'nde Dr. Ammar Mohammed Ali Al-Qadasi danışmanlığında Mohamed Alzarzour tarafından bitirme projesi olarak geliştirilmiştir.',
    'dl.title': 'OptiType İndir',
    'dl.desc': 'Bağımsız uygulama — kurulumdan sonra internet gerekmez.',
    'dl.requirements': 'Gereksinimler',
    'dl.source': 'GitHub\'da Kaynak Kodunu Görüntüle',
    'dl.recommended': 'Önerilen',
    'docs.title': 'Başlarken',
    'docs.subtitle': 'Kullanıcılar ve geliştiriciler için kapsamlı rehber — OptiType hakkında bilmeniz gereken her şey.',
    'menu.title': 'Menü',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
