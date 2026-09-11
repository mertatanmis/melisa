import { LanguageContent } from '../types';

// Constant values that don't change with language
export const constants = {
  email: 'info@ozdemirlawoffice.net'
};

export const content: Record<string, LanguageContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      location: 'Location',
      contact: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      eyebrow: 'Boutique Law Firm — Kuşadası, Türkiye',
      headline: 'English & Turkish legal counsel in Kuşadası.',
      subtitle: 'Advising international clients on property, residency, inheritance and commercial matters under Turkish law — in native-level English.',
      credentials: ['Av. Melisa Gül Özdemir', 'Aydın Bar Association', 'LL.M. University of Hull', 'LL.B. İzmir University of Economics'],
      indexTitle: 'Practice Areas',
      cta: 'Schedule Free Consultation',
      secondaryCta: 'Explore Our Services',
      stats: [
        { value: 'EN · TR', label: 'Native-Level Fluency' },
        { value: 'LL.M.', label: 'University of Hull, UK' },
        { value: '10', label: 'Practice Areas' },
        { value: '24/7', label: 'Emergency Legal Line' }
      ]
    },
    about: {
      eyebrow: 'The Firm',
      title: 'About Us',
      classOf: 'Class of',
      description: 'OZDEMIR Law Office is a unique legal practice in Kusadasi, distinguished by our native-level expertise in both English and Turkish legal systems. As a truly bilingual law firm, we offer seamless communication and comprehensive legal services to both local and international clients. Our natural fluency in both languages, combined with deep understanding of both legal systems, positions us uniquely to handle complex international cases while maintaining the personal touch of a boutique law firm.',
      education: {
        title: 'Education & Qualifications',
        degrees: [
          {
            level: 'Master of Laws (LL.M.)',
            university: 'University of Hull',
            location: 'Hull, United Kingdom',
            specialization: 'International Law (Human Rights, Conflict and Security)',
            graduationYear: '2024',
            achievements: []
          },
          {
            level: 'Bachelor of Laws (LL.B.)',
            university: 'Izmir University of Economics',
            location: 'Izmir, Turkey',
            specialization: 'Faculty of Law',
            graduationYear: '2022',
            achievements: []
          }
        ]
      },
      approach: {
        title: 'Our Approach',
        description: 'Our practice stands on three pillars: dual-language expertise, professional integrity, and client satisfaction. As native speakers of both English and Turkish, we bridge the cultural and legal gaps that often challenge international clients. Every case receives partner-level attention, ensuring our clients benefit from senior legal expertise throughout their journey with us. We maintain transparent communication in your preferred language, ensuring you\'re always well-informed about your legal matters.',
        pillars: ['Dual-Language Expertise', 'Professional Integrity', 'Client Satisfaction']
      },
      expertise: {
        title: 'Areas of Expertise',
        items: [
          'International Real Estate Law',
          'Cross-Border Commercial Transactions',
          'Immigration & Citizenship Law',
          'Corporate & Business Law',
          'Property Investment Advisory',
          'International Tax Planning',
          'Family & Inheritance Law',
          'Tourist Legal Protection',
          'Minor Criminal Cases',
          'Document Legalisation & Certification'
        ]
      },
      testimonials: {
        title: 'Client Testimonials',
        readMore: 'Read more',
        items: [
          {
            quote: 'Professional and efficient handling of tenant issues. Their expertise in property law made the resolution process smooth and effective.',
            author: 'Angela Dykes'
          },
          {
            quote: 'Excellent guidance throughout the sales contract process. Their attention to detail ensured a secure and compliant transaction.',
            author: 'Amanda Yöntem'
          },
          {
            quote: 'Thorough and professional service in document certification. Their expertise in international legal matters was invaluable.',
            author: 'Carole Margan'
          },
          {
            quote: 'When we lost my Mum who was living in Kusadasi, Turkey, we didn\'t know where to start with the legal process of gaining access to her things, or repatriating her for her funeral in the U.K. Luckily, we were put in contact with Melisa quickly, and we were so grateful that this was the case. Melisa worked tirelessly ensuring the legal process was as seamless as possible for us during a very difficult time. She was kind, personable and professional, and went above and beyond to answer any questions or queries we had. She was with us through every single stage, ensuring we understood what was happening; we always felt like she was really looking out for us to make things as easy as possible. We genuinely don\'t know how we would have coped in this difficult time without Melisa, and we highly recommend her to anyone looking for an excellent lawyer in Turkey who speaks both perfect English and Turkish. Thanks again Melisa, we really couldn\'t have done it without you and we\'ll always be grateful.',
            author: 'Matt Grant'
          },
          {
            quote: 'I cannot express how grateful I am about being introduced to Melisa to act on my behalf during the selling of my property in Turkey. Sadly I was unable to travel from the UK and relied on a recommendation from a fellow owner in Kusadasi. Melisa was very professional but also friendly and accessible. Nothing was ever too much trouble. Thank you so much for your hard work and patience with me during this process. Your support and kindness is something I will always remember with gratitude.',
            author: 'Carole Weatherall'
          },
          {
            quote: 'I want to thank Melisa Özdemir for all her hard work and help with the sale of my property in Kusadasi — engaging with the estate agent, acting under my power of attorney, and being so instrumental in getting me all the relevant documents translated and notarised that I required to complete the sale. I could not recommend her highly enough and would not hesitate to recommend her to anyone who needs the best solicitor in Kusadasi.',
            author: 'Maurice Dawson'
          },
          {
            quote: 'I just want to recommend Melisa — from the first contact by WhatsApp to meeting her, she has been very efficient and put my mind at ease. My timeline was very short but she accommodated me very quickly. Very approachable and friendly, but very professional. I would recommend her especially to people who need an English speaker — her English is impeccable.',
            author: 'Bernie Butler'
          }
        ]
      },
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Our Legal Services & Expertise',
      subtitle: 'Specialised counsel across eight practice areas — in English or Turkish, whichever you prefer.',
      viewDetails: 'View Details',
      keyFeatures: 'Key Features',
      scheduleConsultation: 'Schedule Consultation',
      items: [
        {
          title: 'Complimentary Legal Consultation',
          description: 'Begin your journey with a comprehensive 30-minute consultation. We\'ll analyse your case, outline strategic options, and provide preliminary guidance on the most effective path forward—all without any obligation.',
          features: [
            '30-minute one-on-one consultation',
            'Preliminary case analysis and assessment',
            'Strategic roadmap outlining potential legal options',
            'Transparent fee structure discussion',
            'No financial commitment required'
          ]
        },
        {
          title: 'International Real Estate & Property Law',
          description: 'Specialised guidance in international property transactions, including comprehensive due diligence, title deed transfers, and investment strategy. Our expertise spans both Turkish and international property regulations, ensuring full compliance and protection of your investments. We handle everything from initial property assessment to final contract execution.',
          features: [
            'Comprehensive title deed (Tapu) due diligence',
            'Purchase and sale agreement drafting and review',
            'Military clearance and foreign ownership checks',
            'Power of Attorney (POA) representation services',
            'Property valuation and price negotiation assistance',
            'Completion of conveyancing via Power of Attorney, or full conveyancing assistance',
            'Pre-purchase checks for burdens, liens, mortgages or other legal liabilities'
          ]
        },
        {
          title: 'Corporate & Business Advisory',
          description: 'Full-spectrum legal support for businesses, from company formation to complex commercial transactions. Our services include contract negotiations, regulatory compliance, corporate governance, and strategic business planning. We provide tailored solutions for both local enterprises and international companies establishing a presence in Turkey.',
          features: [
            'Company formation (LLC, JSC) and registration',
            'Drafting and reviewing commercial contracts',
            'Regulatory compliance and corporate governance',
            'Mergers, acquisitions, and joint ventures',
            'Employment law and workplace policy consulting'
          ]
        },
        {
          title: 'Residency & Citizenship Services',
          description: 'Expert guidance through Turkish citizenship and residency processes. We handle all aspects of immigration law, including residence permits, work permits, and citizenship applications through investment. Our team ensures compliance with current regulations whilst expediting your application process.',
          features: [
            'Turkish Citizenship by Investment application',
            'Short-term and long-term residence permits',
            'Work permit applications for foreign nationals',
            'Family reunification visa assistance',
            'Appeal support for rejected applications'
          ]
        },
        {
          title: 'Cross-Border Legal Solutions',
          description: 'Comprehensive legal services for international matters, leveraging our unique expertise in both Turkish and British legal systems. We specialize in cross-border contracts, international dispute resolution, and multi-jurisdictional cases, providing seamless legal solutions across borders.',
          features: [
            'International dispute resolution and arbitration',
            'Cross-border contract enforcement',
            'Recognition and enforcement of foreign judgments',
            'Legal opinion on Turkish and English law',
            'Representation in multi-jurisdictional litigation'
          ]
        },
        {
          title: 'Estate Planning & Inheritance Law',
          description: 'Strategic estate planning and inheritance services tailored to international clients. We handle complex cross-border inheritance cases, will preparation, asset protection, and succession planning, ensuring your legacy is protected across jurisdictions.',
          features: [
            'Drafting and registration of wills for foreigners',
            'Inheritance tax planning and optimization',
            'Probate and succession proceedings in Turkey',
            'Asset protection strategies',
            'Dispute resolution among heirs'
          ]
        },
        {
          title: 'Investment & Tax Advisory',
          description: 'Strategic legal counsel on investment structures and tax optimisation. Our services include investment planning, tax efficiency analysis, compliance assurance, and representation in tax-related matters. We help navigate both Turkish and international tax regulations to optimise your financial position.',
          features: [
            'Tax efficient investment structuring',
            'Double taxation treaty analysis',
            'VAT and corporate tax advisory',
            'Financial compliance and reporting support',
            'Representation in tax disputes and penalties'
          ]
        },
        {
          title: 'Tourist & Visitor Legal Protection',
          description: 'Dedicated legal support for international visitors, including 24/7 emergency assistance. We handle tourist-related legal matters, property purchases, dispute resolution, and provide rapid response services with our multilingual team. Our proactive approach helps prevent legal issues while ensuring swift resolution when needed.',
          features: [
            '24/7 Emergency legal assistance hotline',
            'Representation in police and court matters',
            'Consumer rights protection for tourists',
            'Accident and injury claim support',
            'Lost document replacement assistance'
          ]
        },
        {
          title: 'Document Legalisation & Certification',
          description: 'Certification and legalisation of documents intended for use abroad — for civil matters such as the recognition of a new-born child or parentage before foreign authorities, and for financial matters such as proof of funds or bank statement legalisation. We also obtain Turkish tax numbers for official purposes.',
          features: [
            'Certification of documents for use before foreign authorities',
            'Civil matters: newborn registration and parentage recognition',
            'Financial matters: proof of funds and bank statement legalisation',
            'Obtaining Turkish tax numbers for official purposes'
          ]
        }
      ],
    },
    location: {
      eyebrow: 'Where We Are',
      title: 'Our Location — Kusadasi',
      subtitle: 'Your Legal Partner in Turkey\'s Premier Tourist Destination',
      description: 'Located in the heart of Kusadasi, a premier tourist destination on Turkey\'s Aegean coast, our office serves both local and international clients. Our strategic location near the cruise port and major tourist areas makes us easily accessible to visitors and expatriates. Kusadasi, known for its beautiful marina, historic sites, and thriving real estate market, is home to a large international community, making our bilingual services particularly valuable.',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: 'Contact Us',
      subtitle: 'Tell us about your case — we respond within one business day.',
      formTitle: 'Send Us a Message',
      officeAddress: 'Office Address',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      address: 'Hacı Feyzullah Mah. İnönü Bulvarı. Kahramanlar Cd. Öztaş Plaza Kat:3 No:33 OZDEMIR Law Office',
      phone: '+90 506 685 2885',
      email: 'info@ozdemirlawoffice.net',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formPhone: 'Your Phone',
      formMessage: 'Your Message',
      formMessagePlaceholder: 'How can we help you?',
      formSubmit: 'Send Message',
      whatsapp: 'Contact on WhatsApp',
    },
    footer: {
      description: 'Your trusted bilingual legal partner in Kusadasi, offering native expertise in both English and Turkish legal matters.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      officeHours: 'Office Hours',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      allRightsReserved: 'All rights reserved.',
      weekdays: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      weekdayHours: '9:00 - 18:00',
      saturdayHours: '10:00 - 14:00',
      closed: 'Closed'
    },
    a11y: {
      toggleMenu: 'Toggle menu',
      close: 'Close',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      previousTestimonial: 'Previous testimonial',
      nextTestimonial: 'Next testimonial',
      goToSlide: 'Go to slide {n}',
      goToTestimonial: 'Go to testimonial {n}',
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      location: 'Konum',
      contact: 'İletişim',
      cta: 'Randevu Al',
    },
    hero: {
      eyebrow: 'Butik Hukuk Bürosu — Kuşadası, Türkiye',
      headline: 'Kuşadası\'nda İngilizce ve Türkçe hukuki danışmanlık.',
      subtitle: 'Uluslararası müvekkillere gayrimenkul, ikamet, miras ve ticari konularda, ana dil seviyesinde İngilizce hukuki danışmanlık.',
      credentials: ['Av. Melisa Gül Özdemir', 'Aydın Barosu', 'LL.M. Hull Üniversitesi', 'LL.B. İzmir Ekonomi Üniversitesi'],
      indexTitle: 'Uzmanlık Alanları',
      cta: 'Ücretsiz Danışmanlık Randevusu Al',
      secondaryCta: 'Hizmetlerimizi Keşfedin',
      stats: [
        { value: 'EN · TR', label: 'Ana Dil Seviyesinde' },
        { value: 'LL.M.', label: 'Hull Üniversitesi, İngiltere' },
        { value: '10', label: 'Uzmanlık Alanı' },
        { value: '7/24', label: 'Acil Hukuki Destek' }
      ]
    },
    about: {
      eyebrow: 'Büromuz',
      title: 'Hakkımızda',
      classOf: 'Mezuniyet',
      description: 'ÖZDEMİR Hukuk Bürosu, Kuşadası\'nda hem İngilizce hem de Türkçe\'yi ana dil seviyesinde kullanan benzersiz bir hukuk bürosudur. Her iki dilde ve hukuk sisteminde sahip olduğumuz doğal akıcılık, hem yerel hem de uluslararası müvekkillerimize kapsamlı hukuki hizmetler sunmamızı sağlıyor. İki dilli yapımız ve sınır ötesi hukuki konulardaki derin anlayışımız, karmaşık uluslararası davaları yönetirken butik bir hukuk bürosunun kişisel yaklaşımını korumamızı sağlıyor.',
      education: {
        title: 'Eğitim & Nitelikler',
        degrees: [
          {
            level: 'Yüksek Lisans (LL.M.)',
            university: 'Hull Üniversitesi',
            location: 'Hull, Birleşik Krallık',
            specialization: 'Uluslararası Hukuk (İnsan Hakları, Çatışma ve Güvenlik)',
            graduationYear: '2024',
            achievements: []
          },
          {
            level: 'Lisans (LL.B.)',
            university: 'İzmir Ekonomi Üniversitesi',
            location: 'İzmir, Türkiye',
            specialization: 'Hukuk Fakültesi',
            graduationYear: '2022',
            achievements: []
          }
        ]
      },
      approach: {
        title: 'Yaklaşımımız',
        description: 'Hukuk pratiğimiz üç temel üzerine kuruludur: çift dilli uzmanlık, mesleki dürüstlük ve müvekkil memnuniyeti. Her iki dili ana dil seviyesinde konuşmamız, uluslararası müvekkillerimizin sıkça karşılaştığı kültürel ve hukuki engelleri aşmalarına yardımcı oluyor. Her dava ortak düzeyinde ilgi görür, böylece müvekkillerimiz tercih ettikleri dilde kesintisiz iletişim kurarak süreç boyunca kıdemli hukuki uzmanlığımızdan faydalanır.',
        pillars: ['Çift Dilli Uzmanlık', 'Mesleki Dürüstlük', 'Müvekkil Memnuniyeti']
      },
      expertise: {
        title: 'Uzmanlık Alanlarımız',
        items: [
          'Uluslararası Gayrimenkul Hukuku',
          'Sınır Ötesi Ticari İşlemler',
          'Göçmenlik ve Vatandaşlık Hukuku',
          'Kurumsal ve İş Hukuku',
          'Gayrimenkul Yatırım Danışmanlığı',
          'Uluslararası Vergi Planlaması',
          'Aile ve Miras Hukuku',
          'Turist Hukuki Koruma',
          'Asliye Ceza Davaları',
          'Belge Tasdiki & Legalizasyon'
        ]
      },
      testimonials: {
        title: 'Müvekkil Görüşleri',
        readMore: 'Devamını oku',
        items: [
          {
            quote: 'Kiracı sorunlarının profesyonel ve etkili bir şekilde ele alınması. Gayrimenkul hukukundaki uzmanlıkları çözüm sürecini sorunsuz ve etkili hale getirdi.',
            author: 'Angela Dykes'
          },
          {
            quote: 'Satış sözleşmesi sürecinde mükemmel rehberlik. Detaylara gösterdikleri özen, güvenli ve uyumlu bir işlem sağladı.',
            author: 'Amanda Yöntem'
          },
          {
            quote: 'Belge tasdikinde kapsamlı ve profesyonel hizmet. Uluslararası hukuki konulardaki uzmanlıkları paha biçilemezdi.',
            author: 'Carole Margan'
          },
          {
            quote: 'Kuşadası, Türkiye\'de yaşayan annemizi kaybettiğimizde, eşyalarına erişmek veya cenaze için İngiltere\'ye geri göndermek gibi hukuki süreçlere nereden başlayacağımızı bilmiyorduk. Neyse ki hızlıca Melisa ile iletişime geçtik ve bunun için çok minnettarız. Melisa, bu zor dönemde hukuki sürecin bizim için mümkün olduğunca sorunsuz ilerlemesini sağlamak için yorulmadan çalıştı. Nazik, samimi ve profesyoneldi; tüm sorularımızı yanıtlamak için elinden gelenin fazlasını yaptı. Her aşamada yanımızdaydı, olan biteni anladığımızdan emin oldu; her zaman bizi gözettiğini ve her şeyi kolaylaştırmaya çalıştığını hissettik. Bu zor dönemde Melisa olmadan nasıl başa çıkardık bilmiyoruz ve Türkiye\'de hem kusursuz İngilizce hem Türkçe konuşan mükemmel bir avukat arayan herkese şiddetle tavsiye ederiz. Tekrar teşekkürler Melisa, sensiz bunu başaramazdık ve her zaman minnettar kalacağız.',
            author: 'Matt Grant'
          },
          {
            quote: 'Türkiye\'deki mülkümün satışında benim adıma hareket etmesi için Melisa ile tanıştırıldığım için ne kadar minnettar olduğumu anlatamam. Ne yazık ki İngiltere\'den seyahat edemedim ve Kuşadası\'ndaki bir mülk sahibinin tavsiyesine güvendim. Melisa çok profesyonel ama aynı zamanda samimi ve ulaşılabilirdi. Hiçbir şey asla sorun olmadı. Bu süreçte bana gösterdiği çaba ve sabır için çok teşekkür ederim. Desteği ve nezaketi her zaman şükranla hatırlanacak.',
            author: 'Carole Weatherall'
          },
          {
            quote: 'Kuşadası\'ndaki mülkümün satışında gösterdiği tüm çaba ve yardım için Melisa Özdemir\'e teşekkür etmek istiyorum — emlakçıyla iletişim kurması, vekaletnamemle hareket etmesi ve satışı tamamlamak için gereken tüm belgelerin tercümesini ve noter onayını sağlaması çok değerliydi. Onu yeterince övemem; Kuşadası\'nda en iyi avukata ihtiyacı olan herkese tereddüt etmeden tavsiye ederim.',
            author: 'Maurice Dawson'
          },
          {
            quote: 'Melisa\'yı tavsiye etmek istiyorum — WhatsApp\'taki ilk iletişimden yüz yüze görüşmeye kadar çok verimliydi ve içimi rahatlattı. Zaman çizelgem çok kısaydı ama beni çok hızlı kabul etti. Çok yaklaşılabilir ve samimi ama aynı zamanda çok profesyonel. Özellikle İngilizce konuşan birine ihtiyaç duyanlara tavsiye ederim — İngilizcesi kusursuz.',
            author: 'Bernie Butler'
          }
        ]
      },
    },
    services: {
      eyebrow: 'Ne Yapıyoruz',
      title: 'Hukuki Hizmetlerimiz & Uzmanlık Alanlarımız',
      subtitle: 'Sekiz uzmanlık alanında hukuki danışmanlık — tercihinize göre Türkçe veya İngilizce.',
      viewDetails: 'Detayları Gör',
      keyFeatures: 'Öne Çıkanlar',
      scheduleConsultation: 'Randevu Al',
      items: [
        {
          title: 'Ücretsiz Hukuki Danışmanlık',
          description: '30 dakikalık kapsamlı bir danışmanlık ile başlayın. Davanızı analiz eder, stratejik seçenekleri belirler ve en etkili yol haritası için ön rehberlik sağlarız—hiçbir yükümlülük olmadan.',
          features: [
            '30 dakikalık birebir görüşme',
            'Ön dava analizi ve değerlendirmesi',
            'Potansiyel hukuki seçenekleri belirleyen stratejik yol haritası',
            'Şeffaf ücret yapısı bilgilendirmesi',
            'Finansal taahhüt gerektirmez'
          ]
        },
        {
          title: 'Uluslararası Gayrimenkul & Emlak Hukuku',
          description: 'Kapsamlı durum tespiti, tapu devir işlemleri ve yatırım stratejisi dahil uluslararası gayrimenkul işlemlerinde uzman rehberlik. Uzmanlığımız hem Türk hem de uluslararası gayrimenkul düzenlemelerini kapsar, yatırımlarınızın tam uyumluluğunu ve korunmasını sağlar. İlk gayrimenkul değerlendirmesinden nihai sözleşme imzalanmasına kadar tüm süreci yönetiriz.',
          features: [
            'Kapsamlı tapu (due diligence) incelemesi',
            'Satış vaadi sözleşmesi hazırlama ve inceleme',
            'Askeri bölge ve yabancı mülkiyet kontrolleri',
            'Vekaletname ile temsil hizmetleri',
            'Gayrimenkul değerleme ve fiyat pazarlığı desteği',
            'Vekaletname ile satış işlemlerinin tamamlanması veya süreç boyunca tam destek',
            'Satın alma öncesi taşınmaz üzerindeki ipotek, haciz ve sair hukuki yükümlülüklerin incelenmesi'
          ]
        },
        {
          title: 'Kurumsal & Ticari Danışmanlık',
          description: 'Şirket kuruluşundan karmaşık ticari işlemlere kadar tam kapsamlı hukuki destek. Hizmetlerimiz sözleşme müzakereleri, yasal uyumluluk, kurumsal yönetişim ve stratejik iş planlamasını içerir. Hem yerel işletmeler hem de Türkiye\'de varlık kuran uluslararası şirketler için özelleştirilmiş çözümler sunarız.',
          features: [
            'Şirket (LTD, A.Ş.) kuruluşu ve tescili',
            'Ticari sözleşmelerin hazırlanması ve incelenmesi',
            'Yasal uyumluluk ve kurumsal yönetim',
            'Birleşme, devralma ve ortak girişimler',
            'İş hukuku ve işyeri politikası danışmanlığı'
          ]
        },
        {
          title: 'İkamet & Vatandaşlık Hizmetleri',
          description: 'Türk vatandaşlığı ve ikamet süreçlerinde uzman rehberlik. Oturma izinleri, çalışma izinleri ve yatırım yoluyla vatandaşlık başvuruları dahil göçmenlik hukukunun tüm yönlerini ele alırız. Ekibimiz, başvuru sürecinizi hızlandırırken mevcut düzenlemelere uygunluğu sağlar.',
          features: [
            'Yatırım yoluyla Türk Vatandaşlığı başvurusu',
            'Kısa ve uzun dönem ikamet izni başvuruları',
            'Yabancı uyruklular için çalışma izni',
            'Aile birleşimi vizesi desteği',
            'Reddedilen başvurular için itiraz desteği'
          ]
        },
        {
          title: 'Sınır Ötesi Hukuki Çözümler',
          description: 'Hem Türk hem de İngiliz hukuk sistemlerindeki benzersiz uzmanlığımızı kullanarak kapsamlı uluslararası hukuk hizmetleri. Sınır ötesi sözleşmeler, uluslararası anlaşmazlık çözümü ve çok yargı yetkili davalarda uzmanlaşarak, sınırlar arası kesintisiz hukuki çözümler sunarız.',
          features: [
            'Uluslararası tahkim ve uyuşmazlık çözümü',
            'Sınır ötesi sözleşmelerin uygulanması',
            'Yabancı mahkeme kararlarının tanınması ve tenfizi',
            'Türk ve İngiliz hukuku üzerine hukuki mütalaa',
            'Çok uluslu davalarda temsil'
          ]
        },
        {
          title: 'Miras Planlaması & Veraset Hukuku',
          description: 'Uluslararası müvekkiller için özelleştirilmiş stratejik miras planlaması ve veraset hizmetleri. Karmaşık sınır ötesi miras davaları, vasiyetname hazırlığı, varlık koruma ve veraset planlaması konularında, mirasınızın tüm yargı bölgelerinde korunmasını sağlarız.',
          features: [
            'Yabancılar için vasiyetname hazırlama ve tescili',
            'Veraset ve intikal vergisi planlaması',
            'Türkiye\'de veraset ilamı ve intikal işlemleri',
            'Varlık koruma stratejileri',
            'Mirasçılar arası uyuşmazlık çözümü'
          ]
        },
        {
          title: 'Yatırım & Vergi Danışmanlığı',
          description: 'Yatırım yapıları ve vergi optimizasyonu konusunda stratejik hukuki danışmanlık. Hizmetlerimiz yatırım planlaması, vergi verimliliği analizi, uyumluluk güvencesi ve vergi ile ilgili konularda temsili içerir. Finansal pozisyonunuzu optimize etmek için hem Türk hem de uluslararası vergi düzenlemelerinde yol gösteririz.',
          features: [
            'Vergi avantajlı yatırım yapılandırması',
            'Çifte vergilendirmeyi önleme anlaşmaları analizi',
            'KDV ve kurumlar vergisi danışmanlığı',
            'Finansal uyumluluk ve raporlama desteği',
            'Vergi uyuşmazlıkları ve cezalarında temsil'
          ]
        },
        {
          title: 'Turist & Ziyaretçi Hukuki Koruma',
          description: '7/24 acil yardım dahil uluslararası ziyaretçiler için özel hukuki destek. Turist ile ilgili hukuki konular, mülk alımları, anlaşmazlık çözümü konularını ele alır ve çok dilli ekibimizle hızlı müdahale hizmetleri sunarız. Proaktif yaklaşımımız, hukuki sorunları önlerken gerektiğinde hızlı çözüm sağlar.',
          features: [
            '7/24 Acil hukuki yardım hattı',
            'Karakol ve mahkeme süreçlerinde temsil',
            'Turistler için tüketici hakları koruması',
            'Kaza ve yaralanma tazminat desteği',
            'Kaybolan belge yenileme desteği'
          ]
        },
        {
          title: 'Belge Tasdiki & Legalizasyon',
          description: 'Yurt dışında kullanılacak belgelerin tasdiki ve legalizasyonu — yeni doğan çocuğun veya anne/baba tanımasının yabancı makamlar nezdinde bildirilmesi gibi medeni işlemler ile mal varlığı belgesi (proof of funds), banka dekontu legalizasyonu gibi mali işlemler için. Ayrıca gerekli işlemler için Türk vergi numarası temin ediyoruz.',
          features: [
            'Yabancı makamlara sunulacak belgelerin tasdiki',
            'Medeni işlemler: yeni doğan ve soybağı tanıma belgeleri',
            'Mali işlemler: mal varlığı belgesi ve banka dekontu legalizasyonu',
            'Resmi işlemler için Türk vergi numarası temini'
          ]
        }
      ],
    },
    location: {
      eyebrow: 'Neredeyiz',
      title: 'Konumumuz — Kuşadası',
      subtitle: 'Türkiye\'nin Önde Gelen Turizm Merkezinde Hukuk Ortağınız',
      description: 'Türkiye\'nin Ege kıyısındaki önde gelen turizm merkezi Kuşadası\'nın kalbinde yer alan ofisimiz, hem yerel hem de uluslararası müvekkillere hizmet vermektedir. Kruvaziyer limanı ve önemli turizm bölgelerine yakın stratejik konumumuz, ziyaretçiler ve yabancı yerleşimciler için kolay erişilebilirlik sağlıyor. Güzel marinası, tarihi mekanları ve gelişen gayrimenkul piyasasıyla tanınan Kuşadası, büyük bir uluslararası topluluğa ev sahipliği yapıyor ve bu da çift dilli hizmetlerimizi özellikle değerli kılıyor.',
    },
    contact: {
      eyebrow: 'Bize Ulaşın',
      title: 'İletişim',
      subtitle: 'Bize davanızdan bahsedin — bir iş günü içinde dönüş yaparız.',
      formTitle: 'Bize Mesaj Gönderin',
      officeAddress: 'Ofis Adresi',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'E-posta',
      address: 'Hacı Feyzullah Mah. İnönü Bulvarı. Kahramanlar Cd. Öztaş Plaza Kat:3 No:33 ÖZDEMİR Hukuk Bürosu',
      phone: '+90 506 685 2885',
      email: 'info@ozdemirlawoffice.net',
      formName: 'Adınız',
      formEmail: 'E-posta Adresiniz',
      formPhone: 'Telefon Numaranız',
      formMessage: 'Mesajınız',
      formMessagePlaceholder: 'Size nasıl yardımcı olabiliriz?',
      formSubmit: 'Mesaj Gönder',
      whatsapp: 'WhatsApp\'tan Ulaşın',
    },
    footer: {
      description: 'Kuşadası\'nda güvenilir hukuk ortağınız, İngiliz ve Türk hukuk uzmanlığıyla profesyonel hizmet.',
      quickLinks: 'Hızlı Bağlantılar',
      contactInfo: 'İletişim Bilgileri',
      officeHours: 'Çalışma Saatleri',
      privacyPolicy: 'Gizlilik Politikası',
      termsOfService: 'Kullanım Koşulları',
      cookiePolicy: 'Çerez Politikası',
      allRightsReserved: 'Tüm hakları saklıdır.',
      weekdays: 'Pazartesi - Cuma',
      saturday: 'Cumartesi',
      sunday: 'Pazar',
      weekdayHours: '9:00 - 18:00',
      saturdayHours: '10:00 - 14:00',
      closed: 'Kapalı'
    },
    a11y: {
      toggleMenu: 'Menüyü aç/kapat',
      close: 'Kapat',
      previousImage: 'Önceki görsel',
      nextImage: 'Sonraki görsel',
      previousTestimonial: 'Önceki yorum',
      nextTestimonial: 'Sonraki yorum',
      goToSlide: '{n}. slayta git',
      goToTestimonial: '{n}. yoruma git',
    }
  },
};