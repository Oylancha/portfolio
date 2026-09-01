const translations = {
  en: {
    // Navigation
    "nav-projects": "Projects",
    "nav-about": "About",
    "nav-contact": "Contact",

    // Hero
    "hero-subtitle": "Developer & Creator",
    "hero-desc": "I build apps, games, and websites — turning ideas into digital experiences.",
    "hero-btn-projects": "<span class=\"btn__icon\">&#9654;</span> View Projects",
    "hero-btn-contact": "Get in Touch",
    "hero-scroll": "scroll",

    // Projects
    "sec-projects-label": "// projects",
    "sec-projects-title": "What I've Built",
    "sec-projects-desc": "A collection of projects spanning language learning, gaming, and web development.",

    // Project Tags
    "tag-lang-learning": "Language Learning",
    "tag-app": "App",
    "tag-game": "Game",
    "tag-interactive": "Interactive",
    "tag-website": "Website",
    "tag-business": "Business",
    "tag-personal": "Personal",

    // Project: NenanMott
    "proj-nenanmott-desc": "NenanMott is an independent capstone project engineered to address the systematic lack of digital educational infrastructure for the Chechen language. The primary objective was to design an offline-first, highly responsive mobile architecture capable of handling complex spaced-repetition algorithms (SRS), dynamic multimedia generation (Text-to-Speech), and cross-orthography mappings (Cyrillic to Latin), all while maintaining a seamless user experience.",

    // Project: RoadCafe
    "proj-roadcafe-desc": "An engaging road cafe game where players manage and build their own roadside cafe, serving customers and growing their business in a fun, interactive environment.",

    // Project: ikies.tr
    "proj-ikies-desc": "A modern, professional business website built during an internship. Designed with a clean, user-friendly interface to present the company's services and identity.",

    // Project: Bulat
    "proj-bulat-desc": "A personal website designed and developed for my father, showcasing his professional profile and work with an elegant, modern layout.",

    "proj-link-source": "Source",
    "proj-link-live": "Live Site",

    // About
    "sec-about-label": "// about",
    "sec-about-title": "About Me",
    "about-p1": "I'm a developer passionate about building things that matter - from language preservation tools to interactive games to clean, modern websites. I enjoy the full spectrum of development: designing interfaces, writing backend logic, and shipping polished products.",
    "about-p2": "When I'm not coding, I'm exploring new technologies, working on creative projects, or finding new ways to blend culture with tech.",

    "stat-projects": "Projects",
    "stat-domains": "Domains",
    "stat-ideas": "Ideas",
    "tech-title": "Tech I Work With",

    // Accordions
    "acc-edu-title": "Education & Languages",
    "acc-edu-h4-academic": "Academic Background",
    "acc-edu-li1": "<strong>MSc in Mechanical Engineering</strong> | Istanbul Beykent University (Currently Studying)",
    "acc-edu-li2": "<strong>BSc in Computer Engineering</strong> | Istanbul Beykent University (2022 – 2026)<br>Graduated with a 3.51 GPA.",
    "acc-edu-li3": "<strong>High School Diploma</strong> | MBOU Gymnasium N5, Russia (Graduated 2022)<br>Graduated with perfect grades. Awarded \"Student of the Year\" (2021). Winner of multiple regional Olympiads in English.",
    "acc-edu-h4-lang": "Languages",
    "acc-edu-lang1": "<strong>Russian:</strong> Native",
    "acc-edu-lang2": "<strong>Chechen:</strong> Native",
    "acc-edu-lang3": "<strong>English:</strong> C1 (Advanced)",
    "acc-edu-lang4": "<strong>Turkish:</strong> B1–B2 (Intermediate)",

    "acc-story-title": "My Story",
    "acc-story-p1": "I was born and raised in Urus-Martan, a small town in Chechnya. Growing up, I was always into a mix of studying and sports, but during my school years, I really went all-in on my education. Around middle school, I started learning English and made up my mind that I wanted to study abroad. That was also when my childhood interest in tech hit a whole new level. I spent way too much time researching hacking, exploring tech in general, and trying to teach myself some programming languages.",
    "acc-story-p2": "But then things took a turn. In high school, I actually started preparing to become an architect. My dad is an architect, so I was fully planning to get my bachelor's in it. I even made a bunch of 3D projects and artwork during that phase that I still keep around today. At the very last second, though, I changed my mind and pivoted to Computer Engineering.",
    "acc-story-p3": "In 2022, I made the move to Istanbul and started my bachelor's at Beykent University. I learned a ton of programming languages—C, C++, C#, Java, Assembly, SQL—and scored really well on their exams, even though my focus wasn't on building practical projects with them at the time. Outside of coding and studying, I got really into photography. I've spent countless hours editing in Adobe Lightroom and putting together videos in CapCut, always trying to level up my skills. On top of that, in 2025, I decided to get serious about my physique. I hit some big goals in the gym and I've been staying consistent with my strength training ever since.",

    "acc-hob-title": "Hobbies & Interests",
    "acc-hob-p": "When I'm not studying or working, I'm usually doing one of these:",
    "acc-hob-li1": "<strong>Photography & Video Editing:</strong> Taking photos and editing videos to try and get better at the craft.",
    "acc-hob-li2": "<strong>Pop-Science & Lectures:</strong> I'm a massive nerd for neurobiology, biology, physics, and engineering. I love reading books or putting on a good lecture about how things work.",
    "acc-hob-li3": "<strong>The Gym:</strong> Strength training has become a huge, consistent part of my routine.",
    "acc-hob-li4": "<strong>Exploring & Mapping:</strong> I love wandering around new places and actually adding locations, info, and details to Google Maps.",
    "acc-hob-li5": "<strong>Organizing:</strong> Files, physical items, literally anything. I just find it super satisfying to put things in perfect order.",

    // Contact
    "sec-contact-label": "// contact",
    "sec-contact-title": "Let's Connect",
    "sec-contact-desc": "Got a project idea or just want to say hi? Reach out!",
    "contact-github-val": "@Oylancha",
    "contact-li-val": "Connect with me",

    // Footer
    "footer-text": "Built by Islam",

    // Project Pages Common
    "proj-btn-back": "&larr; Back to Home",
    "proj-read-more": "Read More",
    "proj-sec-overview": "Project Overview",
    "proj-sec-features": "Key Features",
    "proj-sec-tech": "Technologies Used",

    // Project Pages Features (Placeholders)
    "proj-nenanmott-arch-title": "System Architecture & Data Flow",
    "proj-nenanmott-arch-p1": "The platform utilizes a robust, decoupled architecture separating local data processing and state management from external cloud and AI microservices. The Flutter client heavily relies on a local SQLite database for instantaneous data retrieval and offline capability.",
    "proj-nenanmott-arch-li1": "<strong>Local Processing:</strong> State changes immediately update local SRS metrics via the SpacedRepetitionService.",
    "proj-nenanmott-arch-li2": "<strong>Microservice Integration:</strong> Custom Hugging Face endpoint (mms-tts-che) is asynchronously pinged for TTS, returning an MP3 byte stream cached locally to prevent redundant calls.",
    "proj-nenanmott-arch-li3": "<strong>Cloud Synchronization:</strong> Encrypted SQLite database backups are pushed to Firebase Storage, linked to the user's Google Auth UID.",
    "proj-nenanmott-eng-title": "Engineering & Algorithmic Challenges",
    "proj-nenanmott-eng-li1": "<strong>Spaced Repetition System (SRS):</strong> Built a custom interval-based algorithm mathematically calculating optimal review times, graduating words through complex state layers (newWord -> learning -> reviewing -> learned).",
    "proj-nenanmott-eng-li2": "<strong>Orthographic Mapping:</strong> Implemented an AlphabetProvider that dynamically parses and maps dictionary entries between Cyrillic (Нохчийн) and Latin (Noxçiyn) representations in real-time.",
    "proj-nenanmott-eng-li3": "<strong>Acoustic Model Integration:</strong> Engineered a bridge to a Massively Multilingual Speech (MMS) model hosted on Hugging Face, handling raw byte-stream conversions, asynchronous file I/O, and concurrent audio playback.",
    "proj-nenanmott-future-title": "Future Research Focus",
    "proj-nenanmott-future-p1": "The next evolution of this project involves migrating the external Hugging Face TTS microservice to an on-device, lightweight local inference model for 100% offline capability. I also plan to develop a custom NLP lemmatizer to detect Chechen word roots and expand data pipelines for other Caucasian languages.",
    
    "proj-roadcafe-feat1": "Dynamic customer management and serving mechanics.",
    "proj-roadcafe-feat2": "Cafe upgrades and business expansion options.",
    
    "proj-ikies-feat1": "Fully responsive design across all devices.",
    "proj-ikies-feat2": "Optimized performance and fast load times for business users.",
    
    "proj-bulat-feat1": "Elegant portfolio layout showcasing architectural projects.",
    "proj-bulat-feat2": "Custom contact forms and professional biography section."
  },
  ru: {
    // Navigation
    "nav-projects": "Проекты",
    "nav-about": "Обо мне",
    "nav-contact": "Контакты",

    // Hero
    "hero-subtitle": "Разработчик & Творец",
    "hero-desc": "Я создаю приложения, игры и веб-сайты, превращая идеи в цифровой опыт.",
    "hero-btn-projects": "<span class=\"btn__icon\">&#9654;</span> Смотреть Проекты",
    "hero-btn-contact": "Связаться",
    "hero-scroll": "вниз",

    // Projects
    "sec-projects-label": "// проекты",
    "sec-projects-title": "Что я создал",
    "sec-projects-desc": "Коллекция проектов, охватывающая изучение языков, разработку игр и веб-разработку.",

    // Project Tags
    "tag-lang-learning": "Изучение языков",
    "tag-app": "Приложение",
    "tag-game": "Игра",
    "tag-interactive": "Интерактив",
    "tag-website": "Веб-сайт",
    "tag-business": "Бизнес",
    "tag-personal": "Личное",

    // Project Descriptions
    "proj-nenanmott-desc": "NenanMott is an independent capstone project engineered to address the systematic lack of digital educational infrastructure for the Chechen language. The primary objective was to design an offline-first, highly responsive mobile architecture capable of handling complex spaced-repetition algorithms (SRS), dynamic multimedia generation (Text-to-Speech), and cross-orthography mappings (Cyrillic to Latin), all while maintaining a seamless user experience.",
    "proj-roadcafe-desc": "Увлекательная игра о придорожном кафе, где игроки управляют и строят собственное кафе, обслуживая клиентов в веселой обстановке.",
    "proj-ikies-desc": "Современный бизнес-сайт, созданный во время стажировки. Разработан с чистым интерфейсом для представления услуг компании.",
    "proj-bulat-desc": "Личный веб-сайт, разработанный для моего отца, демонстрирующий его профессиональный профиль и работу в элегантном дизайне.",

    "proj-link-source": "Исходный код",
    "proj-link-live": "Сайт",

    // About
    "sec-about-label": "// обо мне",
    "sec-about-title": "Обо мне",
    "about-p1": "Я разработчик, увлеченный созданием значимых вещей - от инструментов для сохранения языков до интерактивных игр и современных веб-сайтов. Мне нравится весь спектр разработки: проектирование интерфейсов, написание бэкенд-логики и выпуск готовых продуктов.",
    "about-p2": "Когда я не программирую, я изучаю новые технологии, работаю над творческими проектами или ищу новые способы объединения культуры и технологий.",

    "stat-projects": "Проекты",
    "stat-domains": "Домены",
    "stat-ideas": "Идеи",
    "tech-title": "Технологии",

    // Accordions
    "acc-edu-title": "Образование и языки",
    "acc-edu-h4-academic": "Академическое образование",
    "acc-edu-li1": "<strong>Магистратура, Машинная Инженерия</strong> | Стамбульский университет Бейкент (В настоящее время)",
    "acc-edu-li2": "<strong>Бакалавриат, Компьютерная инженерия</strong> | Стамбульский университет Бейкент (2022 – 2026)<br>Окончил с GPA 3.51.",
    "acc-edu-li3": "<strong>Аттестат о среднем образовании</strong> | МБОУ Гимназия №5, Урус-Мартан, Чечня (2022)<br>Окончил с отличием. Звание «Ученик года» (2021). Победитель региональных олимпиад по английскому языку.",
    "acc-edu-h4-lang": "Языки",
    "acc-edu-lang1": "<strong>Русский:</strong> Родной",
    "acc-edu-lang2": "<strong>Чеченский:</strong> Родной",
    "acc-edu-lang3": "<strong>Английский:</strong> C1 (Продвинутый)",
    "acc-edu-lang4": "<strong>Турецкий:</strong> B1–B2 (Средний)",

    "acc-story-title": "Моя история",
    "acc-story-p1": "Я родился и вырос в Урус-Мартане, небольшом городе в Чечне. В детстве я совмещал учебу и спорт, но в школьные годы я полностью сосредоточился на образовании. В средней школе я начал изучать английский язык и решил, что хочу учиться за границей. Тогда же мой интерес к технологиям вышел на новый уровень. Я проводил слишком много времени, изучая хакинг, технологии в целом и пытаясь самостоятельно выучить некоторые языки программирования.",
    "acc-story-p2": "Но потом все изменилось. В старших классах я начал готовиться стать архитектором. Мой отец - архитектор, поэтому я планировал получить степень бакалавра в этой области. В то время я даже сделал множество 3D-проектов и рисунков, которые храню до сих пор. Однако в самый последний момент я передумал и переключился на компьютерную инженерию.",
    "acc-story-p3": "В 2022 году я переехал в Стамбул и поступил на бакалавриат в Университет Бейкент. Я выучил множество языков программирования - C, C++, C#, Java, Assembly, SQL - и отлично сдавал экзамены, хотя в то время моей целью не было создание практических проектов. Помимо программирования и учебы, я увлекся фотографией. Я провел бесчисленное количество часов, редактируя в Adobe Lightroom и монтируя видео в CapCut. Кроме того, в 2025 году я решил всерьез заняться своим телосложением. Я достиг больших целей в тренажерном зале и с тех пор продолжаю регулярно заниматься силовыми тренировками.",

    "acc-hob-title": "Хобби и интересы",
    "acc-hob-p": "Когда я не учусь и не работаю, я обычно занимаюсь одним из следующих дел:",
    "acc-hob-li1": "<strong>Фотография и монтаж видео:</strong> Делаю фотографии и редактирую видео, пытаясь стать лучше в этом ремесле.",
    "acc-hob-li2": "<strong>Научпоп и лекции:</strong> Я большой фанат нейробиологии, биологии, физики и инженерии. Люблю читать книги или слушать хорошие лекции о том, как всё устроено.",
    "acc-hob-li3": "<strong>Тренажерный зал:</strong> Силовые тренировки стали огромной, постоянной частью моей рутины.",
    "acc-hob-li4": "<strong>Исследование и картирование:</strong> Я люблю бродить по новым местам и добавлять локации, информацию и детали на Google Maps.",
    "acc-hob-li5": "<strong>Организация:</strong> Файлы, физические предметы, буквально что угодно. Я нахожу огромное удовлетворение в том, чтобы приводить всё в идеальный порядок.",

    // Contact
    "sec-contact-label": "// контакты",
    "sec-contact-title": "Давайте свяжемся",
    "sec-contact-desc": "Есть идея проекта или просто хотите сказать привет? Пишите!",
    "contact-github-val": "@Oylancha",
    "contact-li-val": "Связаться со мной",

    // Footer
    "footer-text": "Сделано Исламом",

    // Project Pages Common
    "proj-btn-back": "&larr; На главную",
    "proj-read-more": "Подробнее",
    "proj-sec-overview": "Обзор проекта",
    "proj-sec-features": "Ключевые особенности",
    "proj-sec-tech": "Используемые технологии",

    // Project Pages Features (Placeholders)
    "proj-nenanmott-arch-title": "System Architecture & Data Flow",
    "proj-nenanmott-arch-p1": "The platform utilizes a robust, decoupled architecture separating local data processing and state management from external cloud and AI microservices. The Flutter client heavily relies on a local SQLite database for instantaneous data retrieval and offline capability.",
    "proj-nenanmott-arch-li1": "<strong>Local Processing:</strong> State changes immediately update local SRS metrics via the SpacedRepetitionService.",
    "proj-nenanmott-arch-li2": "<strong>Microservice Integration:</strong> Custom Hugging Face endpoint (mms-tts-che) is asynchronously pinged for TTS, returning an MP3 byte stream cached locally to prevent redundant calls.",
    "proj-nenanmott-arch-li3": "<strong>Cloud Synchronization:</strong> Encrypted SQLite database backups are pushed to Firebase Storage, linked to the user's Google Auth UID.",
    "proj-nenanmott-eng-title": "Engineering & Algorithmic Challenges",
    "proj-nenanmott-eng-li1": "<strong>Spaced Repetition System (SRS):</strong> Built a custom interval-based algorithm mathematically calculating optimal review times, graduating words through complex state layers (newWord -> learning -> reviewing -> learned).",
    "proj-nenanmott-eng-li2": "<strong>Orthographic Mapping:</strong> Implemented an AlphabetProvider that dynamically parses and maps dictionary entries between Cyrillic (Нохчийн) and Latin (Noxçiyn) representations in real-time.",
    "proj-nenanmott-eng-li3": "<strong>Acoustic Model Integration:</strong> Engineered a bridge to a Massively Multilingual Speech (MMS) model hosted on Hugging Face, handling raw byte-stream conversions, asynchronous file I/O, and concurrent audio playback.",
    "proj-nenanmott-future-title": "Future Research Focus",
    "proj-nenanmott-future-p1": "The next evolution of this project involves migrating the external Hugging Face TTS microservice to an on-device, lightweight local inference model for 100% offline capability. I also plan to develop a custom NLP lemmatizer to detect Chechen word roots and expand data pipelines for other Caucasian languages.",
    
    "proj-roadcafe-feat1": "Динамичное управление клиентами и механика обслуживания.",
    "proj-roadcafe-feat2": "Возможности улучшения кафе и расширения бизнеса.",
    
    "proj-ikies-feat1": "Полностью адаптивный дизайн для всех устройств.",
    "proj-ikies-feat2": "Оптимизированная производительность и быстрая загрузка.",
    
    "proj-bulat-feat1": "Элегантный макет портфолио, демонстрирующий архитектурные проекты.",
    "proj-bulat-feat2": "Пользовательские формы связи и раздел профессиональной биографии."
  },
  tr: {
    // Navigation
    "nav-projects": "Projeler",
    "nav-about": "Hakkımda",
    "nav-contact": "İletişim",

    // Hero
    "hero-subtitle": "Geliştirici & Yaratıcı",
    "hero-desc": "Fikirleri dijital deneyimlere dönüştürerek uygulamalar, oyunlar ve web siteleri oluşturuyorum.",
    "hero-btn-projects": "<span class=\"btn__icon\">&#9654;</span> Projeleri Gör",
    "hero-btn-contact": "İletişime Geç",
    "hero-scroll": "kaydır",

    // Projects
    "sec-projects-label": "// projeler",
    "sec-projects-title": "Neler Geliştirdim",
    "sec-projects-desc": "Dil öğrenimi, oyun ve web geliştirme alanlarını kapsayan proje koleksiyonu.",

    // Project Tags
    "tag-lang-learning": "Dil Öğrenimi",
    "tag-app": "Uygulama",
    "tag-game": "Oyun",
    "tag-interactive": "İnteraktif",
    "tag-website": "Web Sitesi",
    "tag-business": "Kurumsal",
    "tag-personal": "Kişisel",

    // Project Descriptions
    "proj-nenanmott-desc": "NenanMott is an independent capstone project engineered to address the systematic lack of digital educational infrastructure for the Chechen language. The primary objective was to design an offline-first, highly responsive mobile architecture capable of handling complex spaced-repetition algorithms (SRS), dynamic multimedia generation (Text-to-Speech), and cross-orthography mappings (Cyrillic to Latin), all while maintaining a seamless user experience.",
    "proj-roadcafe-desc": "Oyuncuların eğlenceli ve interaktif bir ortamda kendi yol kenarı kafelerini yönettikleri ve inşa ettikleri ilgi çekici bir oyun.",
    "proj-ikies-desc": "Bir staj sırasında oluşturulan modern, profesyonel bir kurumsal web sitesi. Şirketin hizmetlerini ve kimliğini sunmak için temiz bir arayüzle tasarlandı.",
    "proj-bulat-desc": "Babam için tasarlanıp geliştirilen, zarif ve modern bir düzen ile profesyonel profilini ve çalışmalarını sergileyen kişisel bir web sitesi.",

    "proj-link-source": "Kaynak Kodu",
    "proj-link-live": "Canlı Site",

    // About
    "sec-about-label": "// hakkımda",
    "sec-about-title": "Benim Hakkımda",
    "about-p1": "Dil koruma araçlarından interaktif oyunlara ve modern web sitelerine kadar önemli şeyler inşa etme konusunda tutkulu bir geliştiriciyim. Geliştirmenin tüm aşamalarından keyif alıyorum: arayüzler tasarlamak, arka uç mantığı yazmak ve cilalanmış ürünler piyasaya sürmek.",
    "about-p2": "Kod yazmadığım zamanlarda yeni teknolojiler keşfediyor, yaratıcı projeler üzerinde çalışıyor veya kültür ile teknolojiyi harmanlamanın yeni yollarını buluyorum.",

    "stat-projects": "Proje",
    "stat-domains": "Alan",
    "stat-ideas": "Fikir",
    "tech-title": "Kullandığım Teknolojiler",

    // Accordions
    "acc-edu-title": "Eğitim ve Diller",
    "acc-edu-h4-academic": "Akademik Geçmiş",
    "acc-edu-li1": "<strong>Makine Mühendisliği Yüksek Lisans</strong> | İstanbul Beykent Üniversitesi (Devam Ediyor)",
    "acc-edu-li2": "<strong>Bilgisayar Mühendisliği Lisans</strong> | İstanbul Beykent Üniversitesi (2022 – 2026)<br>3.51 ortalama ile mezun oldu.",
    "acc-edu-li3": "<strong>Lise Diploması</strong> | MBOU Gymnasium N5, Rusya (2022)<br>Mükemmel notlarla mezun oldu. \"Yılın Öğrencisi\" (2021) seçildi. İngilizce alanında birçok bölgesel olimpiyat kazandı.",
    "acc-edu-h4-lang": "Diller",
    "acc-edu-lang1": "<strong>Rusça:</strong> Anadil",
    "acc-edu-lang2": "<strong>Çeçence:</strong> Anadil",
    "acc-edu-lang3": "<strong>İngilizce:</strong> C1 (İleri)",
    "acc-edu-lang4": "<strong>Türkçe:</strong> B1–B2 (Orta)",

    "acc-story-title": "Hikayem",
    "acc-story-p1": "Çeçenistan'ın küçük bir kasabası olan Urus-Martan'da doğup büyüdüm. Büyürken, her zaman eğitim ve sporun bir karışımına ilgi duydum, ancak okul yıllarımda kendimi tamamen eğitime adadım. Ortaokul civarında İngilizce öğrenmeye başladım ve yurtdışında okumaya karar verdim. Çocukluğumdan beri teknolojiye olan ilgim de o zamanlar yepyeni bir seviyeye ulaştı. Hacking araştırmalarına, genel olarak teknolojiyi keşfetmeye ve kendi kendime bazı programlama dillerini öğretmeye çok fazla zaman harcadım.",
    "acc-story-p2": "Ancak sonra işler değişti. Lisede aslında mimar olmaya hazırlanmaya başladım. Babam bir mimar, bu yüzden lisansımı bu alanda yapmayı tamamen planlamıştım. O dönemde hala sakladığım birçok 3D proje ve çizim bile yaptım. Yine de son saniyede fikrimi değiştirdim ve Bilgisayar Mühendisliği'ne yöneldim.",
    "acc-story-p3": "2022'de İstanbul'a taşındım ve lisans eğitimime Beykent Üniversitesi'nde başladım. C, C++, C#, Java, Assembly, SQL gibi bir ton programlama dili öğrendim ve o zamanlar bunlarla pratik projeler geliştirmeye odaklanmasam da sınavlarında gerçekten iyi notlar aldım. Kodlama ve çalışmanın dışında, fotoğrafçılığa gerçekten ilgi duydum. Adobe Lightroom'da düzenleme yaparak ve CapCut'ta videoları bir araya getirerek, becerilerimi her zaman bir üst seviyeye taşımaya çalışarak sayısız saat harcadım. Ayrıca 2025'te fiziğim konusunda ciddileşmeye karar verdim. Spor salonunda bazı büyük hedeflere ulaştım ve o zamandan beri güç antrenmanlarımla tutarlı kalıyorum.",

    "acc-hob-title": "Hobiler ve İlgi Alanları",
    "acc-hob-p": "Çalışmadığım veya kod yazmadığım zamanlarda genellikle şunlardan birini yapıyorum:",
    "acc-hob-li1": "<strong>Fotoğraf ve Video Düzenleme:</strong> Zanaatta daha iyi olmaya çalışmak için fotoğraf çekmek ve video düzenlemek.",
    "acc-hob-li2": "<strong>Pop-Bilim ve Dersler:</strong> Nörobiyoloji, biyoloji, fizik ve mühendislik konularında devasa bir ineğim. Kitap okumayı veya işlerin nasıl yürüdüğüne dair iyi bir ders dinlemeyi seviyorum.",
    "acc-hob-li3": "<strong>Spor Salonu:</strong> Güç antrenmanı, rutinimde çok büyük ve tutarlı bir parça haline geldi.",
    "acc-hob-li4": "<strong>Keşfetmek ve Haritalamak:</strong> Yeni yerlerde dolaşmayı ve Google Haritalar'a yerler, bilgiler ve detaylar eklemeyi seviyorum.",
    "acc-hob-li5": "<strong>Düzenleme:</strong> Dosyalar, fiziksel öğeler, kelimenin tam anlamıyla her şey. İşleri mükemmel bir düzene sokmayı süper tatmin edici buluyorum.",

    // Contact
    "sec-contact-label": "// iletişim",
    "sec-contact-title": "Hadi Bağlantı Kuralım",
    "sec-contact-desc": "Bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? Ulaşın!",
    "contact-github-val": "@Oylancha",
    "contact-li-val": "Benimle bağlantı kur",

    // Footer
    "footer-text": "İslam tarafından yapılmıştır",

    // Project Pages Common
    "proj-btn-back": "&larr; Ana Sayfaya Dön",
    "proj-read-more": "Devamını Oku",
    "proj-sec-overview": "Proje Genel Bakış",
    "proj-sec-features": "Temel Özellikler",
    "proj-sec-tech": "Kullanılan Teknolojiler",

    // Project Pages Features (Placeholders)
    "proj-nenanmott-arch-title": "System Architecture & Data Flow",
    "proj-nenanmott-arch-p1": "The platform utilizes a robust, decoupled architecture separating local data processing and state management from external cloud and AI microservices. The Flutter client heavily relies on a local SQLite database for instantaneous data retrieval and offline capability.",
    "proj-nenanmott-arch-li1": "<strong>Local Processing:</strong> State changes immediately update local SRS metrics via the SpacedRepetitionService.",
    "proj-nenanmott-arch-li2": "<strong>Microservice Integration:</strong> Custom Hugging Face endpoint (mms-tts-che) is asynchronously pinged for TTS, returning an MP3 byte stream cached locally to prevent redundant calls.",
    "proj-nenanmott-arch-li3": "<strong>Cloud Synchronization:</strong> Encrypted SQLite database backups are pushed to Firebase Storage, linked to the user's Google Auth UID.",
    "proj-nenanmott-eng-title": "Engineering & Algorithmic Challenges",
    "proj-nenanmott-eng-li1": "<strong>Spaced Repetition System (SRS):</strong> Built a custom interval-based algorithm mathematically calculating optimal review times, graduating words through complex state layers (newWord -> learning -> reviewing -> learned).",
    "proj-nenanmott-eng-li2": "<strong>Orthographic Mapping:</strong> Implemented an AlphabetProvider that dynamically parses and maps dictionary entries between Cyrillic (Нохчийн) and Latin (Noxçiyn) representations in real-time.",
    "proj-nenanmott-eng-li3": "<strong>Acoustic Model Integration:</strong> Engineered a bridge to a Massively Multilingual Speech (MMS) model hosted on Hugging Face, handling raw byte-stream conversions, asynchronous file I/O, and concurrent audio playback.",
    "proj-nenanmott-future-title": "Future Research Focus",
    "proj-nenanmott-future-p1": "The next evolution of this project involves migrating the external Hugging Face TTS microservice to an on-device, lightweight local inference model for 100% offline capability. I also plan to develop a custom NLP lemmatizer to detect Chechen word roots and expand data pipelines for other Caucasian languages.",
    
    "proj-roadcafe-feat1": "Dinamik müşteri yönetimi ve servis mekanikleri.",
    "proj-roadcafe-feat2": "Kafe yükseltmeleri ve iş genişletme seçenekleri.",
    
    "proj-ikies-feat1": "Tüm cihazlarda tamamen duyarlı tasarım.",
    "proj-ikies-feat2": "İş kullanıcıları için optimize edilmiş performans ve hızlı yükleme süreleri.",
    
    "proj-bulat-feat1": "Mimari projeleri sergileyen zarif portföy düzeni.",
    "proj-bulat-feat2": "Özel iletişim formları ve profesyonel biyografi bölümü."
  }
};
