/* ═══════════════════════════════════════════════════════════════
   i18n-data.js — RU/EN translation dictionaries for Дала Мұрасы.
   Pure data, no DOM logic. Loaded by both index.html and mobile.html.
   KZ is the baseline (already in the page HTML/inline JS) — these
   dictionaries provide ru/en overrides only.
   ═══════════════════════════════════════════════════════════════ */

const UI_I18N = {
  "ru": {
    "nav_exhibits": "Экспонаты",
    "nav_nomads": "Следы кочевников",
    "nav_quiz": "Викторина",
    "hero_title_a": "Казахское наследие в",
    "hero_title_em": "3D",
    "hero_title_b": "формате",
    "stat_exhibit": "Экспонат",
    "stat_3dmodel": "3D-модель",
    "stat_quizq": "Вопросов в викторине",
    "exhibits_h2_a": "Избранные",
    "exhibits_h2_em": "экспонаты",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "Все",
    "filt_home": "Быт",
    "filt_clothing": "Одежда",
    "filt_music": "Музыка",
    "filt_craft": "Ремёсла",
    "filt_jewelry": "Ювелирика",
    "filt_game": "Игры",
    "filt_weapon": "Оружие",
    "filt_ancient": "Древность",
    "vbadge_360": "360° · интерактив",
    "vctrl_history": "История",
    "exhibit_word": "Экспонат",
    "action_fallback": "Подробнее →",
    "quiz_fallback": "Викторина",
    "nomads_kicker": "◆ Следы кочевников · 14 областей + 3 города республиканского значения · 3 жуза",
    "nomads_h2_a": "Следы",
    "nomads_h2_em": "кочевников",
    "nomads_p": "Каждый уголок казахской земли — отдельное сказание. Нажмите на область или город на карте, чтобы узнать о батырах, памятниках и традициях региона. Старший, Средний, Младший жузы — три рукава одной реки. В 2022 году отделившиеся Жетысуская, Улытауская и Абайская области упомянуты в тексте материнских регионов.",
    "nomads_filt_all": "Все",
    "map_legend_capital": "Город респ. значения",
    "map_hint": "◆ нажмите на область или город",
    "mp_empty_title": "Выберите область или город",
    "mp_empty_text": "14 областей + 3 города республиканского значения — от Туркестана до Алтая. У каждого региона — свой батыр, своя легенда, свой памятник.",
    "mp_empty_small": "◆ Нажмите на регион",
    "badge_capital": "Столица республики",
    "badge_city": "Город респ. значения",
    "mp_block_batyrs": "◆ Батыры · ханы · личности",
    "mp_block_monuments": "◆ Памятники",
    "mp_block_tags": "◆ Традиции · искусство",
    "wiki_loading": "Загрузка фото Wikipedia…",
    "wiki_not_found": "фото не найдено",
    "wiki_load_error": "не удалось загрузить фото",
    "mp_source": "◆ фото: Wikipedia Commons · подробнее — нажмите на фото",
    "heritage_kicker": "◆ Мир · казахское и тюркское наследие сегодня",
    "heritage_h3_a": "Следы кочевников",
    "heritage_h3_em": "в мире",
    "heritage_p": "Казахское и тюркское наследие сегодня продолжает жить в десятках стран — в языке, традициях, искусстве. Тюркский мир — более 180 миллионов человек, свыше 40 языков.",
    "quiz_kicker_a": "ИНТЕРАКТИВ ·",
    "quiz_kicker_b": "ВИКТОРИН",
    "quiz_h2_a": "Викторина по",
    "quiz_h2_em": "экспонатам",
    "quiz_p": "Отдельная викторина для каждого экспоната. Ответьте на 5 вопросов об истории, материалах и традициях.",
    "quiz_count_quiz": "викторин",
    "quiz_count_q": "вопросов",
    "quiz_count_passed": "пройдено",
    "quiz_back": "Вернуться к экспонатам",
    "quiz_play_eyebrow": "ВИКТОРИНА",
    "quiz_word": "вопрос",
    "quiz_try_word": "попробуйте свои силы",
    "quiz_q_index": "Вопрос",
    "btn_next": "Далее →",
    "btn_finish": "Завершить →",
    "btn_start": "Начать →",
    "btn_retry": "Пройти снова →",
    "correct_word": "Верно!",
    "correct_answer_word": "Правильный ответ:",
    "result_perfect_title": "Отлично!",
    "result_good_title": "Хорошо!",
    "result_retry_title": "Изучите ещё раз",
    "result_perfect_msg": "Вы ответили верно на все вопросы!",
    "result_good_msg": "Молодец, большинство ответов верны.",
    "result_retry_msg": "Изучите историю экспоната и попробуйте снова.",
    "btn_retry2": "Пройти снова",
    "btn_other_quiz": "Другая викторина",
    "footer_tagline": "проект для молодёжи · открытая лицензия",
    "modal_close_label": "Закрыть",
    "modal_eyebrow_fallback": "Экспонат",
    "modal_link_fallback": "Открыть →",
    "zhuz_uly": "Старший жуз",
    "zhuz_orta": "Средний жуз",
    "zhuz_kishi": "Младший жуз",
    "tag_selected": "◆ Выбрано",
    "btn_back_short": "← Назад",
    "btn_see_result": "Показать результат →",
    "qm_result_perfect": "★ Отлично!",
    "qm_result_good": "Хороший результат!",
    "qm_result_review": "Изучите ещё раз!",
    "qm_result_retry": "Попробуйте ещё раз",
    "btn_back_quizzes": "← К викторинам",
    "nomads_sub_mobile": "14 областей + 3 города · 3 жуза",
    "nomads_intro_mobile": "Каждый уголок казахской земли — отдельное сказание. Нажмите на область или город на карте, чтобы узнать о батырах, памятниках и традициях региона.",
    "gh_mobile_kicker": "◆ Мир · казахское и тюркское наследие",
    "gh_mobile_p": "Тюркский мир — более 180 млн человек, 40+ языков. Наследие продолжает жить в десятках стран.",
    "quiz_sub_mobile": "30 викторин · 150 вопросов",
    "quiz_intro_mobile": "Отдельная викторина для каждого экспоната. Ответьте на 5 вопросов об истории, материалах и традициях.",
    "tab_exhibit": "Экспонаты",
    "tab_nomads": "Кочевники",
    "views_word": "просмотров"
  },
  "en": {
    "nav_exhibits": "Exhibits",
    "nav_nomads": "Traces of the Nomads",
    "nav_quiz": "Quiz",
    "hero_title_a": "Kazakh heritage in",
    "hero_title_em": "3D",
    "hero_title_b": "format",
    "stat_exhibit": "Exhibit",
    "stat_3dmodel": "3D model",
    "stat_quizq": "Quiz questions",
    "exhibits_h2_a": "Featured",
    "exhibits_h2_em": "exhibits",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "All",
    "filt_home": "Household",
    "filt_clothing": "Clothing",
    "filt_music": "Music",
    "filt_craft": "Craft",
    "filt_jewelry": "Jewellery",
    "filt_game": "Games",
    "filt_weapon": "Weapons",
    "filt_ancient": "Ancient",
    "vbadge_360": "360° · interactive",
    "vctrl_history": "History",
    "exhibit_word": "Exhibit",
    "action_fallback": "Learn more →",
    "quiz_fallback": "Quiz",
    "nomads_kicker": "◆ Traces of the Nomads · 14 regions + 3 cities of republican significance · 3 zhuz",
    "nomads_h2_a": "Traces of the",
    "nomads_h2_em": "Nomads",
    "nomads_p": "Every corner of the Kazakh land is its own legend. Click a region or city on the map to learn about local batyrs, monuments and traditions. The Uly, Orta and Kishi zhuz are three branches of one river. The Jetisu, Ulytau and Abai regions, which split off in 2022, are covered within the text of their parent regions.",
    "nomads_filt_all": "All",
    "map_legend_capital": "City of rep. significance",
    "map_hint": "◆ click a region or city",
    "mp_empty_title": "Select a region or city",
    "mp_empty_text": "14 regions + 3 cities of republican significance — from Turkistan to the Altai. Every region has its own batyr, its own legend, its own monument.",
    "mp_empty_small": "◆ Click a region",
    "badge_capital": "Capital of the Republic",
    "badge_city": "City of rep. significance",
    "mp_block_batyrs": "◆ Batyrs · khans · figures",
    "mp_block_monuments": "◆ Monuments",
    "mp_block_tags": "◆ Traditions · art",
    "wiki_loading": "Loading Wikipedia photo…",
    "wiki_not_found": "photo not found",
    "wiki_load_error": "failed to load photo",
    "mp_source": "◆ photos: Wikipedia Commons · click a photo for more",
    "heritage_kicker": "◆ World · Kazakh & Turkic heritage today",
    "heritage_h3_a": "Traces of the nomads",
    "heritage_h3_em": "around the world",
    "heritage_p": "Kazakh and Turkic heritage lives on today across dozens of countries — in language, tradition and art. The Turkic world spans over 180 million people and more than 40 languages.",
    "quiz_kicker_a": "INTERACTIVE ·",
    "quiz_kicker_b": "QUIZZES",
    "quiz_h2_a": "Exhibit",
    "quiz_h2_em": "quiz",
    "quiz_p": "A dedicated quiz for every exhibit. Answer 5 questions about its history, materials and traditions.",
    "quiz_count_quiz": "quizzes",
    "quiz_count_q": "questions",
    "quiz_count_passed": "completed",
    "quiz_back": "Back to exhibits",
    "quiz_play_eyebrow": "QUIZ",
    "quiz_word": "question",
    "quiz_try_word": "test yourself",
    "quiz_q_index": "Question",
    "btn_next": "Next →",
    "btn_finish": "Finish →",
    "btn_start": "Start →",
    "btn_retry": "Retry →",
    "correct_word": "Correct!",
    "correct_answer_word": "Correct answer:",
    "result_perfect_title": "Excellent!",
    "result_good_title": "Well done!",
    "result_retry_title": "Study up and try again",
    "result_perfect_msg": "You answered every question correctly!",
    "result_good_msg": "Well done, you got most of them right.",
    "result_retry_msg": "Read up on the exhibit's history and try again.",
    "btn_retry2": "Try again",
    "btn_other_quiz": "Another quiz",
    "footer_tagline": "a project made for young people · open licence",
    "modal_close_label": "Close",
    "modal_eyebrow_fallback": "Exhibit",
    "modal_link_fallback": "Open →",
    "zhuz_uly": "Uly zhuz",
    "zhuz_orta": "Orta zhuz",
    "zhuz_kishi": "Kishi zhuz",
    "tag_selected": "◆ Selected",
    "btn_back_short": "← Back",
    "btn_see_result": "View result →",
    "qm_result_perfect": "★ Excellent!",
    "qm_result_good": "Good result!",
    "qm_result_review": "Review it again!",
    "qm_result_retry": "Try again",
    "btn_back_quizzes": "← Back to quizzes",
    "nomads_sub_mobile": "14 regions + 3 cities · 3 zhuz",
    "nomads_intro_mobile": "Every corner of the Kazakh land is its own legend. Click a region or city on the map to learn about local batyrs, monuments and traditions.",
    "gh_mobile_kicker": "◆ World · Kazakh & Turkic heritage",
    "gh_mobile_p": "The Turkic world spans over 180 million people and 40+ languages. The heritage lives on across dozens of countries.",
    "quiz_sub_mobile": "30 quizzes · 150 questions",
    "quiz_intro_mobile": "A dedicated quiz for every exhibit. Answer 5 questions about its history, materials and traditions.",
    "tab_exhibit": "Exhibits",
    "tab_nomads": "Nomads",
    "views_word": "views"
  },
  "kz": {
    "nav_exhibits": "Экспонаттар",
    "nav_nomads": "Көшпенділер іздері",
    "nav_quiz": "Викторина",
    "hero_title_a": "Қазақ мұралары",
    "hero_title_em": "3Д",
    "hero_title_b": "форматында",
    "stat_exhibit": "Экспонат",
    "stat_3dmodel": "3D моделі",
    "stat_quizq": "Викторина сұрағы",
    "exhibits_h2_a": "Таңдаулы",
    "exhibits_h2_em": "экспонаттар",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "Барлығы",
    "filt_home": "Тұрмыс",
    "filt_clothing": "Киім",
    "filt_music": "Музыка",
    "filt_craft": "Қолөнер",
    "filt_jewelry": "Зергерлік",
    "filt_game": "Ойын",
    "filt_weapon": "Қару",
    "filt_ancient": "Ежелгі",
    "vbadge_360": "360° · интерактив",
    "vctrl_history": "Тарихы",
    "exhibit_word": "Экспонат",
    "action_fallback": "Толығырақ →",
    "quiz_fallback": "Викторина",
    "nomads_kicker": "◆ Traces of the Nomads · 14 облыс + 3 республикалық қала · 3 жүз",
    "nomads_h2_a": "Көшпенділер",
    "nomads_h2_em": "іздері",
    "nomads_p": "Қазақ жерінің әр түкпірі — жеке дастан. Картадан облысты немесе қаланы басып, өңірдің батырлары, ескерткіштері мен дәстүрлерімен танысыңыз. Ұлы, Орта, Кіші жүздер — үш арна, бір өзен. 2022 жылы бөлініп шыққан Жетісу, Ұлытау, Абай облыстары аналық облыстардың мәтінінде айтылған.",
    "nomads_filt_all": "Барлығы",
    "map_legend_capital": "Республикалық қала",
    "map_hint": "◆ облысты немесе қаланы басыңыз",
    "mp_empty_title": "Облысты немесе қаланы таңдаңыз",
    "mp_empty_text": "14 облыс + 3 республикалық қала — Түркістаннан Алтайға дейін. Әр өңірде — өз батыры, өз аңызы, өз ескерткіші.",
    "mp_empty_small": "◆ Click a region",
    "badge_capital": "Республика елордасы",
    "badge_city": "Республикалық қала",
    "mp_block_batyrs": "◆ Батырлар · хандар · тұлғалар",
    "mp_block_monuments": "◆ Ескерткіштер",
    "mp_block_tags": "◆ Дәстүрлер · өнер",
    "wiki_loading": "Wikipedia сурет жүктелуде…",
    "wiki_not_found": "сурет табылмады",
    "wiki_load_error": "сурет жүктелмеді",
    "mp_source": "◆ фото: Wikipedia Commons · толығырақ — суретті басыңыз",
    "heritage_kicker": "◆ World · Kazakh & Turkic heritage today",
    "heritage_h3_a": "Көшпенділер ізі",
    "heritage_h3_em": "әлемде",
    "heritage_p": "Қазақ пен түркі мұрасы бүгінде ондаған елде — тілінде, дәстүрінде, өнерінде жалғасын табуда. Түркі әлемі — 180 миллионнан астам адам, 40-тан аса тіл.",
    "quiz_kicker_a": "INTERACTIVE",
    "quiz_kicker_b": "QUIZZES",
    "quiz_h2_a": "Викторина",
    "quiz_h2_em": "экспонаттар",
    "quiz_p": "Әрбір экспонат үшін жеке викторина. Оның тарихы, материалы мен дәстүрі туралы 5–7 сұраққа жауап беріңіз.",
    "quiz_count_quiz": "викторина",
    "quiz_count_q": "сұрақ",
    "quiz_count_passed": "өтілді",
    "quiz_back": "Экспонаттарға оралу",
    "quiz_play_eyebrow": "ВИКТОРИНА",
    "quiz_word": "сұрақ",
    "quiz_try_word": "сынап көріңіз",
    "quiz_q_index": "Сұрақ",
    "btn_next": "Келесі →",
    "btn_finish": "Аяқтау →",
    "btn_start": "Бастау →",
    "btn_retry": "Қайта тапсыру →",
    "correct_word": "Дұрыс!",
    "correct_answer_word": "Дұрысы:",
    "result_perfect_title": "Керемет!",
    "result_good_title": "Жақсы!",
    "result_retry_title": "Мықтап оқыңыз",
    "result_perfect_msg": "Барлық сұраққа дұрыс жауап бердіңіз!",
    "result_good_msg": "Жарайсыз, көпшілігін дұрыс білдіңіз.",
    "result_retry_msg": "Экспонаттың тарихын оқып, қайта тапсыруға болады.",
    "btn_retry2": "Қайта тапсыру",
    "btn_other_quiz": "Басқа викторина",
    "footer_tagline": "жоба жастарға арналған · ашық лицензия",
    "modal_close_label": "Жабу",
    "modal_eyebrow_fallback": "Экспонат",
    "modal_link_fallback": "Ашу →",
    "zhuz_uly": "Ұлы жүз",
    "zhuz_orta": "Орта жүз",
    "zhuz_kishi": "Кіші жүз",
    "tag_selected": "◆ Таңдалды",
    "btn_back_short": "← Артқа",
    "btn_see_result": "Нәтижені көру →",
    "qm_result_perfect": "★ Керемет!",
    "qm_result_good": "Жақсы жауап!",
    "qm_result_review": "Тағы да көру!",
    "qm_result_retry": "Тағы бір рет ұрыныңыз",
    "btn_back_quizzes": "← Викториналарға",
    "nomads_sub_mobile": "14 облыс + 3 қала · 3 жүз",
    "nomads_intro_mobile": "Қазақ жерінің әр түкпірі — жеке дастан. Картадан облысты немесе қаланы басып, өңірдің батырлары, ескерткіштері мен дәстүрлерімен танысыңыз.",
    "gh_mobile_kicker": "◆ World · Kazakh & Turkic heritage",
    "gh_mobile_p": "Түркі әлемі — 180 млн адам, 40+ тіл. Мұра ондаған елде жалғасын табуда.",
    "quiz_sub_mobile": "30 викторина · 150 сұрақ",
    "quiz_intro_mobile": "Әрбір экспонат үшін жеке викторина. Оның тарихы, материалы мен дәстүрі туралы 5 сұраққа жауап беріңіз.",
    "tab_exhibit": "Экспонат",
    "tab_nomads": "Көшпелілер",
    "views_word": "қаралым"
  }
};

const CARD_I18N = {
  "yurt_low_quality_texture": {
    "ru": {
      "cat": "Жилище",
      "titleA": "Юрта",
      "titleB": "",
      "label": "юрта",
      "sub": "Традиционное кочевое жилище казахов · шанырак, кереге, уык",
      "desc": "Юрта — традиционное жилище кочевых казахов. Кереге, уык, шанырак — три основных элемента. Ни один гвоздь не используется — только дерево и войлок.",
      "facts": [
        [
          "Диаметр",
          "6–8 м"
        ],
        [
          "Уыков",
          "40–60"
        ],
        [
          "Опора",
          "шанырак"
        ],
        [
          "Материал",
          "войлок · дерево"
        ]
      ]
    },
    "en": {
      "cat": "Dwelling",
      "titleA": "Yurt",
      "titleB": "",
      "label": "yurt",
      "sub": "Traditional Kazakh nomadic dwelling · shanyrak, kerege, uyk",
      "desc": "The yurt is the traditional dwelling of nomadic Kazakhs. Kerege (lattice walls), uyk (roof poles) and shanyrak (crown ring) are the three main elements. Not a single nail is used — only wood and felt.",
      "facts": [
        [
          "Diameter",
          "6–8 m"
        ],
        [
          "Uyk poles",
          "40–60"
        ],
        [
          "Support",
          "shanyrak"
        ],
        [
          "Material",
          "felt · wood"
        ]
      ]
    }
  },
  "dombyra_by_sultan_elamanov": {
    "ru": {
      "cat": "Музыка",
      "titleA": "Домбра",
      "titleB": "",
      "label": "домбра · чёрное дерево",
      "sub": "Двухструнный щипковый инструмент · традиционный",
      "desc": "Домбра — душа казахского народа. Корпус из карагача или берёзы, струны — раньше из верблюжьих жил, позже из нити. Прикосновением пальцев кюйши инструмент передаёт звучание веков.",
      "facts": [
        [
          "Длина",
          "1 260 мм"
        ],
        [
          "Струны",
          "2 · нейлон"
        ],
        [
          "Лады",
          "19"
        ],
        [
          "Кюй",
          "3 отрывка · 07:40"
        ]
      ]
    },
    "en": {
      "cat": "Music",
      "titleA": "Dombra",
      "titleB": "",
      "label": "dombra · dark wood",
      "sub": "Two-string plucked instrument · traditional",
      "desc": "The dombra is the soul of the Kazakh people. Its body is carved from elm or birch, its strings once made of camel sinew, later of thread. At the touch of a kuishi's (master player's) fingers, it carries the sound of centuries.",
      "facts": [
        [
          "Length",
          "1,260 mm"
        ],
        [
          "Strings",
          "2 · nylon"
        ],
        [
          "Frets",
          "19"
        ],
        [
          "Kuy",
          "3 excerpts · 07:40"
        ]
      ]
    }
  },
  "kazakh_qobyz_kobyz": {
    "ru": {
      "cat": "Музыка",
      "titleA": "Кобыз",
      "titleB": "",
      "label": "кобыз · берёза",
      "sub": "Древний смычковый инструмент · спутник Коркыта",
      "desc": "Кобыз — инструмент Коркыт-ата. Полость, выдолбленная из дерева, обтянута козьей кожей. Две струны из конского волоса, смычок изогнут как лук. Его голос передаёт звучание человеческого голоса.",
      "facts": [
        [
          "Длина",
          "≈ 620 мм"
        ],
        [
          "Струны",
          "2 · конский волос"
        ],
        [
          "Материал",
          "берёза · козья кожа"
        ],
        [
          "Век",
          "IX–X вв."
        ]
      ]
    },
    "en": {
      "cat": "Music",
      "titleA": "Qobyz",
      "titleB": "",
      "label": "qobyz · birch",
      "sub": "Ancient bowed instrument · Korkyt's companion",
      "desc": "The qobyz is the instrument of Korkyt-ata. Its hollow body, carved from wood, is covered with goat hide. Two strings are drawn from horsehair, and the bow is curved like a hunting bow. Its voice carries the timbre of the human voice.",
      "facts": [
        [
          "Length",
          "≈ 620 mm"
        ],
        [
          "Strings",
          "2 · horsehair"
        ],
        [
          "Material",
          "birch · goat hide"
        ],
        [
          "Century",
          "9th–10th c."
        ]
      ]
    }
  },
  "kazakh_shapan": {
    "ru": {
      "cat": "Национальная одежда",
      "titleA": "Шапан",
      "titleB": "",
      "label": "шапан",
      "sub": "Длинная верхняя одежда · расшита золотой нитью и орнаментом",
      "desc": "Шапан — длинный верхний халат, который носят и мужчины, и женщины. Ткань: шёлк, бархат, шерсть. Край окантован тонкой нитью, петлями. Орнамент — «кошкар мюйиз» (бараний рог), «казтабан» (гусиная лапка).",
      "facts": [
        [
          "Длина",
          "≈ 130 см"
        ],
        [
          "Ткань",
          "шёлк · бархат"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Повод",
          "праздник · приём"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing",
      "titleA": "Shapan",
      "titleB": "",
      "label": "shapan",
      "sub": "Long outer robe · trimmed with gold thread and ornament",
      "desc": "The shapan is a long outer robe worn by both men and women. Fabric: silk, velvet, wool. The hem is trimmed with fine thread and loop fastenings. The ornament features ram's-horn and goose-foot motifs.",
      "facts": [
        [
          "Length",
          "≈ 130 cm"
        ],
        [
          "Fabric",
          "silk · velvet"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Occasion",
          "celebration · gathering"
        ]
      ]
    }
  },
  "taqiya_grey_m_kazakh_national_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Тақия (муж.)",
      "titleB": "",
      "label": "тақия · мужская",
      "sub": "Лёгкий мужской головной убор · серый бархат",
      "desc": "Тақия — лёгкий головной убор для летнего сезона. Шьётся из бархата, шёлка. Отделан орнаментом и петлями, внутри — тонкий каркас.",
      "facts": [
        [
          "Диаметр",
          "≈ 190 мм"
        ],
        [
          "Материал",
          "серый бархат"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Сезон",
          "лето · весна"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Taqiya (men's)",
      "titleB": "",
      "label": "taqiya · men's",
      "sub": "Light men's skullcap · grey velvet",
      "desc": "The taqiya is a light summer skullcap. It is sewn from velvet or silk, trimmed with ornament and looped stitching, with a thin frame inside to hold its shape.",
      "facts": [
        [
          "Diameter",
          "≈ 190 mm"
        ],
        [
          "Material",
          "grey velvet"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Season",
          "summer · spring"
        ]
      ]
    }
  },
  "taqiya_yellow_f_kazakh_traditional_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Тақия (жен.)",
      "titleB": "",
      "label": "тақия · девичья",
      "sub": "Праздничный головной убор девушек · жёлтая парча",
      "desc": "Девичья тақия — яркий головной убор с золотой вышивкой, который надевают на той (праздник). Сверху крепится перо филина — символ юной девушки.",
      "facts": [
        [
          "Диаметр",
          "≈ 180 мм"
        ],
        [
          "Материал",
          "жёлтая ткань"
        ],
        [
          "Вышивка",
          "золото · бисер"
        ],
        [
          "Перо",
          "филин"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Taqiya (girl's)",
      "titleB": "",
      "label": "taqiya · girl's",
      "sub": "Festive girls' headwear · gold-trimmed yellow",
      "desc": "The girl's taqiya is a brightly coloured, gold-embroidered headdress worn at celebrations. An owl feather is fixed on top — a symbol of a young unmarried woman.",
      "facts": [
        [
          "Diameter",
          "≈ 180 mm"
        ],
        [
          "Material",
          "yellow fabric"
        ],
        [
          "Embroidery",
          "gold thread · beads"
        ],
        [
          "Feather",
          "owl"
        ]
      ]
    }
  },
  "saukele_ethno_variant_traditional_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Саукеле",
      "titleB": "",
      "label": "саукеле · свадебный",
      "sub": "Свадебный головной убор невесты · высокий конус",
      "desc": "Саукеле — самый дорогой и торжественный головной убор, который казахская невеста надевает на свадьбу. Высота достигает 70 см. Украшен серебром, золотом, кораллами, лебединым пером.",
      "facts": [
        [
          "Высота",
          "≈ 70 см"
        ],
        [
          "Убранство",
          "серебро · золото"
        ],
        [
          "Камень",
          "коралл · агат"
        ],
        [
          "Повод",
          "свадьба"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Saukele",
      "titleB": "",
      "label": "saukele · ceremonial",
      "sub": "Bride's ceremonial headdress · tall cone",
      "desc": "The saukele is the most precious and ceremonial headdress a Kazakh bride wears at her wedding. It can reach up to 70 cm in height, adorned with silver, gold, coral and swan feathers.",
      "facts": [
        [
          "Height",
          "≈ 70 cm"
        ],
        [
          "Jewellery",
          "silver · gold"
        ],
        [
          "Stone",
          "coral · agate"
        ],
        [
          "Occasion",
          "wedding"
        ]
      ]
    }
  },
  "togyzqumalaq": {
    "ru": {
      "cat": "Национальная игра",
      "titleA": "Тогызкумалак",
      "titleB": "",
      "label": null,
      "sub": "Древняя логическая игра · доска, вырезанная из дерева",
      "desc": "Тогызкумалак — древняя казахская логическая игра. Деревянная доска с девятью лунками с каждой стороны. В центре — «казан», куда собираются выигранные шарики. Степные шахматы, развивающие ум и стратегическое мышление.",
      "facts": [
        [
          "Лунки",
          "2 × 9"
        ],
        [
          "Материал",
          "дерево"
        ],
        [
          "Казан",
          "2 (в центре)"
        ],
        [
          "Смысл",
          "ум · выдержка"
        ]
      ]
    },
    "en": {
      "cat": "National Game",
      "titleA": "Togyzqumalaq",
      "titleB": "",
      "label": null,
      "sub": "Ancient strategy game · carved wooden board",
      "desc": "Togyzqumalaq is an ancient Kazakh strategy game. A wooden board has nine pits on each side. In the centre is the qazan ('cauldron'), where won pebbles are collected. It is known as 'steppe chess', sharpening logic and strategy.",
      "facts": [
        [
          "Pits",
          "2 × 9"
        ],
        [
          "Material",
          "wood"
        ],
        [
          "Cauldron",
          "2 (centre)"
        ],
        [
          "Meaning",
          "mind · patience"
        ]
      ]
    }
  },
  "qamshy_kamshy": {
    "ru": {
      "cat": "Ремесло",
      "titleA": "Камча",
      "titleB": "",
      "label": "камча · плетение",
      "sub": "Плетёная кожаная камча · орудие табунщика",
      "desc": "Камча — знак в руке табунщика и батыра. Рукоять из дерева или рога, плетение — в восемь, шестнадцать прядей. Отделана орнаментом, серебряными накладками.",
      "facts": [
        [
          "Длина",
          "≈ 1 100 мм"
        ],
        [
          "Плетение",
          "8 · 16"
        ],
        [
          "Рукоять",
          "берёза · рог"
        ],
        [
          "Смысл",
          "статус · сила"
        ]
      ]
    },
    "en": {
      "cat": "Craft",
      "titleA": "Qamshy",
      "titleB": "",
      "label": "qamshy · braiding",
      "sub": "Braided leather whip · herdsman's tool",
      "desc": "The qamshy is a mark of status in the hand of a herdsman or batyr (warrior). The handle is wood or horn, the lash braided in eight or sixteen strands, trimmed with ornament and silver fittings.",
      "facts": [
        [
          "Length",
          "≈ 1,100 mm"
        ],
        [
          "Braid",
          "8 · 16"
        ],
        [
          "Handle",
          "birch · horn"
        ],
        [
          "Meaning",
          "status · strength"
        ]
      ]
    }
  },
  "sedlo": {
    "ru": {
      "cat": "Ремесло · конское снаряжение",
      "titleA": "Седло",
      "titleB": "",
      "label": null,
      "sub": "Традиционное казахское седло · пластины с позолотой",
      "desc": "Седло — спутник казахского воина. Деревянный каркас, обтянутый кожей, снаружи украшен позолоченными металлическими пластинами с ажурным орнаментом и вставками агата. XIX век. Западно-Казахстанский областной музей.",
      "facts": [
        [
          "Каркас",
          "дерево"
        ],
        [
          "Обшивка",
          "кожа"
        ],
        [
          "Убранство",
          "позолота · агат"
        ],
        [
          "Век",
          "XIX"
        ]
      ]
    },
    "en": {
      "cat": "Craft · Horse Tack",
      "titleA": "Saddle",
      "titleB": "",
      "label": null,
      "sub": "Traditional Kazakh saddle · gilded metal plates",
      "desc": "The saddle was the companion of the Kazakh warrior. A wooden frame covered in leather is decorated with gilded metal plates bearing openwork ornament and agate inlays. 19th century. West Kazakhstan Regional Museum.",
      "facts": [
        [
          "Frame",
          "wood"
        ],
        [
          "Cover",
          "leather"
        ],
        [
          "Decoration",
          "gilded metal · agate"
        ],
        [
          "Century",
          "19th"
        ]
      ]
    }
  },
  "saba": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Саба",
      "titleB": "",
      "label": null,
      "sub": "Кожаный сосуд для кумыса · дно в форме трёх «рогов»",
      "desc": "Саба — кожаный сосуд для жидкости. Дно квадратное, в форме трёх «рогов», закрученных внутрь. Горловина достаточно широкая, пробка деревянная. Снаружи выштампован растительный орнамент. Актюбинский областной историко-краеведческий музей.",
      "facts": [
        [
          "Материал",
          "кожа · дерево"
        ],
        [
          "Дно",
          "три «рога»"
        ],
        [
          "Пробка",
          "дерево"
        ],
        [
          "Орнамент",
          "растительный"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Saba",
      "titleB": "",
      "label": null,
      "sub": "Leather vessel for kumys · tri-horned base",
      "desc": "The saba is a leather vessel for liquids. Its base is square, shaped into three inward-curling 'horns'. The neck is wide, the stopper wooden. Plant ornament is stamped on the outer surface. Aktobe Regional History Museum.",
      "facts": [
        [
          "Material",
          "leather · wood"
        ],
        [
          "Base",
          "three horns"
        ],
        [
          "Stopper",
          "wood"
        ],
        [
          "Ornament",
          "floral"
        ]
      ]
    }
  },
  "astau_tabaq": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Астау",
      "titleB": "",
      "label": null,
      "sub": "Большое резное деревянное блюдо · для дастархана",
      "desc": "Астау — традиционное большое деревянное блюдо казахов, вырезанное вручную. На него подают бешбармак, мясо, плов. Вырезается из берёзы или ивы, край украшен орнаментом. Центральное блюдо дастархана (праздничного стола).",
      "facts": [
        [
          "Материал",
          "берёза · ива"
        ],
        [
          "Диаметр",
          "500–800 мм"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Традиция",
          "бешбармак"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Astau",
      "titleB": "",
      "label": null,
      "sub": "Large carved wooden tray · for the dastarkhan",
      "desc": "The astau is a traditional large hand-carved Kazakh wooden tray, used to serve beshbarmaq, meat or pilaf. Carved from birch or willow, its rim is decorated with ornament — the centrepiece of the dastarkhan (festive table).",
      "facts": [
        [
          "Material",
          "birch · willow"
        ],
        [
          "Diameter",
          "500–800 mm"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Tradition",
          "beshbarmaq"
        ]
      ]
    }
  },
  "torsyk_kymyz": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Торсык",
      "titleB": "",
      "label": null,
      "sub": "Кожаный сосуд для кумыса · с орнаментом «рог»",
      "desc": "Торсык — сосуд для хранения кумыса, сшитый из коричневой кожи. Две половины сшиты по краю мелким швом. По бокам вышит орнамент «рог», обведённый чёрным. Горловина узкая, пробка деревянная. Экспонат Западно-Казахстанского областного историко-краеведческого музея.",
      "facts": [
        [
          "Материал",
          "коричневая кожа"
        ],
        [
          "Пробка",
          "дерево"
        ],
        [
          "Орнамент",
          "рог"
        ],
        [
          "Музей",
          "Западный КО"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Torsyq",
      "titleB": "",
      "label": null,
      "sub": "Leather kumys flask · with horn-motif ornament",
      "desc": "The torsyq is a vessel for storing kumys, stitched from brown leather. Two halves are joined along the edge with fine stitching. A 'horn' ornament is embroidered on the sides, outlined in black. The neck is narrow, the stopper wooden. An exhibit of the West Kazakhstan Regional History Museum.",
      "facts": [
        [
          "Material",
          "brown leather"
        ],
        [
          "Stopper",
          "wood"
        ],
        [
          "Ornament",
          "horn"
        ],
        [
          "Museum",
          "West KZ"
        ]
      ]
    }
  },
  "asyk": {
    "ru": {
      "cat": "Национальная игра",
      "titleA": "Асык",
      "titleB": "",
      "label": "овечья кость",
      "sub": "Изготовлен из овечьей кости · древняя игра",
      "desc": "Асык — древняя детская игра из овечьей коленной кости. Развивает ловкость и смекалку казахских детей. Положения кости: тайпак, шинкиль, кара, сака.",
      "facts": [
        [
          "Материал",
          "овечья кость"
        ],
        [
          "Вес",
          "15–20 г"
        ],
        [
          "Виды",
          "сака · алшы · бюк"
        ],
        [
          "Возраст",
          "1000+ лет"
        ]
      ]
    },
    "en": {
      "cat": "National Game",
      "titleA": "Asyq",
      "titleB": "",
      "label": "sheep's anklebone",
      "sub": "Made from a sheep's anklebone · ancient game",
      "desc": "Asyq is an ancient children's game played with a sheep's anklebone. It sharpens the skill and wit of Kazakh children. The bone's positions are named taipaq, shinkil, qara and saqa.",
      "facts": [
        [
          "Material",
          "sheep bone"
        ],
        [
          "Weight",
          "15–20 g"
        ],
        [
          "Types",
          "saqa · alshy · buk"
        ],
        [
          "Age",
          "1000+ years"
        ]
      ]
    }
  },
  "besik": {
    "ru": {
      "cat": "Быт · воспитание",
      "titleA": "Бесик",
      "titleB": "",
      "label": "бесик · берёза",
      "sub": "Традиционная казахская резная деревянная колыбель",
      "desc": "Бесик — детская колыбель, вырезанная из берёзы или ивы, украшенная орнаментом. «Бесикке салу» (укладывание в колыбель), «тусау кесер» (разрезание пут) — первые обряды младенца. Песни и обычаи матерей передаются из поколения в поколение.",
      "facts": [
        [
          "Материал",
          "берёза · ива"
        ],
        [
          "Длина",
          "≈ 700 мм"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Обряд",
          "бесикке салу"
        ]
      ]
    },
    "en": {
      "cat": "Household · Upbringing",
      "titleA": "Besik",
      "titleB": "",
      "label": "besik · birch",
      "sub": "Traditional Kazakh carved wooden cradle",
      "desc": "The besik is a child's cradle carved from birch or willow and decorated with ornament. 'Besikke salu' (first placing the baby in the cradle) and 'tusau kesu' (cutting the toddling ropes) are the infant's first rites. Mothers' lullabies and customs are passed down through generations.",
      "facts": [
        [
          "Material",
          "birch · willow"
        ],
        [
          "Length",
          "≈ 700 mm"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Tradition",
          "besikke salu"
        ]
      ]
    }
  },
  "nomad_sabre": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Сабля",
      "titleB": "",
      "label": "сталь · кость",
      "sub": "Клинковое оружие казахского воина",
      "desc": "Сабля — древнее клинковое оружие казахского воина. Клинок выкован из стали, рукоять — из дерева и кости. Ножны обтянуты кожей, украшены серебром и орнаментом.",
      "facts": [
        [
          "Длина",
          "≈ 900 мм"
        ],
        [
          "Вес",
          "≈ 1.2 кг"
        ],
        [
          "Клинок",
          "сталь"
        ],
        [
          "Рукоять",
          "кость · серебро"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Sabre",
      "titleB": "",
      "label": "steel · bone",
      "sub": "Bladed weapon of the Kazakh warrior",
      "desc": "The sabre is the ancient bladed weapon of the Kazakh warrior. The blade is forged from steel, the hilt made of wood and bone. The scabbard is leather-bound and adorned with silver and ornament.",
      "facts": [
        [
          "Length",
          "≈ 900 mm"
        ],
        [
          "Weight",
          "≈ 1.2 kg"
        ],
        [
          "Blade",
          "steel"
        ],
        [
          "Hilt",
          "bone · silver"
        ]
      ]
    }
  },
  "balbal_tas": {
    "ru": {
      "cat": "Древнее наследие · статуя",
      "titleA": "Балбал",
      "titleB": "",
      "label": "камень · тюркская эпоха",
      "sub": "Древнетюркское изваяние · памятник воину",
      "desc": "Балбал — памятник тюркской эпохи, каменное изваяние в форме человека. Устанавливался в честь прославленного, знатного человека. Вместе с покойным погребали одежду, оружие, коня. Прообраз современных надгробий.",
      "facts": [
        [
          "Век",
          "VI–VIII вв."
        ],
        [
          "Материал",
          "камень"
        ],
        [
          "Высота",
          "≈ 1.5 м"
        ],
        [
          "Функция",
          "памятник"
        ]
      ]
    },
    "en": {
      "cat": "Ancient Heritage · Statue",
      "titleA": "Balbal",
      "titleB": "",
      "label": "stone · Turkic era",
      "sub": "Ancient Turkic statue · warrior's memorial",
      "desc": "The balbal is a Turkic-era monument — a stone figure carved in human form. It was erected to honour a renowned or noble person. Clothing, weapons and a horse were buried with the deceased. It is the forerunner of today's grave markers.",
      "facts": [
        [
          "Century",
          "6th–8th c."
        ],
        [
          "Material",
          "stone"
        ],
        [
          "Height",
          "≈ 1.5 m"
        ],
        [
          "Function",
          "memorial"
        ]
      ]
    }
  },
  "tamgaly_sun_man": {
    "ru": {
      "cat": "Древнее наследие · петроглиф",
      "titleA": "Солнцеголовый",
      "titleB": "",
      "label": "петроглиф · камень",
      "sub": "Петроглиф урочища Тамгалы · бронзовый век",
      "desc": "«Солнцеголовый человек» на скалах Тамгалы — знаменитый петроглиф бронзового века. Изображение бога Солнца, свидетель шаманских обрядов. Объект Всемирного наследия ЮНЕСКО (2004).",
      "facts": [
        [
          "Век",
          "XIV–XI вв. до н.э."
        ],
        [
          "Место",
          "Алматинская обл."
        ],
        [
          "ЮНЕСКО",
          "2004"
        ],
        [
          "Стиль",
          "петроглиф"
        ]
      ]
    },
    "en": {
      "cat": "Ancient Heritage · Petroglyph",
      "titleA": "Sun-Headed Man",
      "titleB": "",
      "label": "petroglyph · stone",
      "sub": "Petroglyph of Tamgaly · Bronze Age",
      "desc": "The 'sun-headed man' at Tamgaly is a famous Bronze Age petroglyph — a depiction of a sun deity and witness to shamanic rites. UNESCO World Heritage Site (2004).",
      "facts": [
        [
          "Century",
          "14th–11th c. BC"
        ],
        [
          "Location",
          "Almaty Region"
        ],
        [
          "UNESCO",
          "2004"
        ],
        [
          "Style",
          "petroglyph"
        ]
      ]
    }
  },
  "aibalta": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Айбалта",
      "titleB": "",
      "label": null,
      "sub": "Боевой топор с серебряной рукоятью · XIX в.",
      "desc": "Айбалта — боевое оружие казахского воина. Рукоять обшита серебром, лезвие в форме полумесяца. Отличительный знак батыра, использовалось и в бою, и на торжествах. Западно-Казахстанский областной музей.",
      "facts": [
        [
          "Рукоять",
          "обшита серебром"
        ],
        [
          "Лезвие",
          "полумесяц"
        ],
        [
          "Век",
          "XIX"
        ],
        [
          "Применение",
          "бой · церемония"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Aibalta",
      "titleB": "",
      "label": null,
      "sub": "War axe with silver-clad haft · 19th c.",
      "desc": "The aibalta was a Kazakh warrior's battle weapon. Its haft is clad in silver, the blade shaped like a crescent moon. A mark of distinction for a batyr, used both in battle and at ceremonies. West Kazakhstan Regional Museum.",
      "facts": [
        [
          "Haft",
          "silver-clad"
        ],
        [
          "Blade",
          "crescent"
        ],
        [
          "Century",
          "19th"
        ],
        [
          "Use",
          "battle · ceremony"
        ]
      ]
    }
  },
  "qalqan": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Щит",
      "titleB": "",
      "label": null,
      "sub": "Стальной щит · с латунной окантовкой · XVIII в.",
      "desc": "Щит — защитное оружие воина. Изготовлен из выпуклого стального листа, край окантован латунными пластинами. Снаружи — изображения людей, коней, животных и надписи в куфическом стиле. Внутренняя сторона обшита красной тканью и кожей. Национальный музей.",
      "facts": [
        [
          "Материал",
          "сталь · латунь"
        ],
        [
          "Диаметр",
          "≈ 50 см"
        ],
        [
          "Век",
          "XVIII"
        ],
        [
          "Орнамент",
          "куфи · животные"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Shield",
      "titleB": "",
      "label": null,
      "sub": "Steel shield · brass-rimmed · 18th c.",
      "desc": "The shield is a warrior's defensive weapon. It is made from a convex steel sheet, its rim trimmed with brass plates. The outer face bears images of people, horses and animals along with inscriptions in Kufic script. The inner side is lined with red fabric and leather. National Museum.",
      "facts": [
        [
          "Material",
          "steel · brass"
        ],
        [
          "Diameter",
          "≈ 50 cm"
        ],
        [
          "Century",
          "18th"
        ],
        [
          "Ornament",
          "Kufic · animals"
        ]
      ]
    }
  },
  "kubi": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Кюби",
      "titleB": "",
      "label": null,
      "sub": "Деревянный сосуд для сквашивания кумыса · трапециевидный",
      "desc": "Кюби — трапециевидный сосуд для приготовления кумыса. Изготовлен из тонких сосновых дощечек, скреплён тремя чёрными металлическими обручами. Внутри — писпек, деревянная мутовка для взбивания кумыса. Акмолинский областной музей.",
      "facts": [
        [
          "Материал",
          "сосна"
        ],
        [
          "Высота",
          "≈ 75 см"
        ],
        [
          "Диаметр",
          "16–25 см"
        ],
        [
          "Внутри",
          "мутовка 93 см"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Kubi",
      "titleB": "",
      "label": null,
      "sub": "Wooden churn for fermenting kumys · trapezoid shape",
      "desc": "The kubi is a trapezoid vessel for making kumys. It is built from thin pine staves bound with three black metal hoops. Inside is a pispek — a wooden churning staff used to stir the kumys. Akmola Regional Museum.",
      "facts": [
        [
          "Material",
          "pine"
        ],
        [
          "Height",
          "≈ 75 cm"
        ],
        [
          "Diameter",
          "16–25 cm"
        ],
        [
          "Contains",
          "93 cm churn-staff"
        ]
      ]
    }
  },
  "ojau": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Ожау",
      "titleB": "",
      "label": null,
      "sub": "Резной деревянный ковш для разлива кумыса · нач. XX в.",
      "desc": "Ожау — деревянный ковш для разлива кумыса. Вырезается из цельного куска дерева, ручка длинная, удобная для захвата. Длина 41,5 см, ширина 14,8 см. Акмолинский областной музей, начало XX века.",
      "facts": [
        [
          "Материал",
          "дерево"
        ],
        [
          "Длина",
          "41.5 см"
        ],
        [
          "Ширина",
          "14.8 см"
        ],
        [
          "Век",
          "нач. XX"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Ojau",
      "titleB": "",
      "label": null,
      "sub": "Carved wooden ladle for pouring kumys · early 20th c.",
      "desc": "The ojau is a wooden ladle for pouring kumys. It is carved from a single piece of wood with a long, easy-to-grip handle. Length 41.5 cm, width 14.8 cm. Akmola Regional Museum, early 20th century.",
      "facts": [
        [
          "Material",
          "wood"
        ],
        [
          "Length",
          "41.5 cm"
        ],
        [
          "Width",
          "14.8 cm"
        ],
        [
          "Century",
          "early 20th"
        ]
      ]
    }
  },
  "sandyq": {
    "ru": {
      "cat": "Быт · мебель",
      "titleA": "Сандык",
      "titleB": "",
      "label": null,
      "sub": "Традиционный казахский сундук · с золотой отделкой",
      "desc": "Сандык — деревянный сундук для хранения ценных вещей, вышивок, одежды казахской семьи. Снаружи обшит металлом, украшен орнаментом. Особое место занимает в приданом невесты — на свадьбе произносят пожелание «сандык толы» (полного сундука).",
      "facts": [
        [
          "Материал",
          "дерево · металл"
        ],
        [
          "Функция",
          "хранение"
        ],
        [
          "Традиция",
          "приданое"
        ],
        [
          "Орнамент",
          "растительный · геометрия"
        ]
      ]
    },
    "en": {
      "cat": "Household · Furniture",
      "titleA": "Sandyq",
      "titleB": "",
      "label": null,
      "sub": "Traditional Kazakh chest · gold-trimmed",
      "desc": "The sandyq is a wooden chest for storing a Kazakh family's valuables, embroidery and clothing. It is clad in metal and decorated with ornament. It holds special significance in a bride's dowry — at weddings, the blessing 'sandyq toly' ('may your chest be full') is spoken.",
      "facts": [
        [
          "Material",
          "wood · metal"
        ],
        [
          "Purpose",
          "storage"
        ],
        [
          "Tradition",
          "dowry"
        ],
        [
          "Ornament",
          "floral · geometric"
        ]
      ]
    }
  },
  "sazsyrnai": {
    "ru": {
      "cat": "Музыка · духовой",
      "titleA": "Сазсырнай",
      "titleB": "",
      "label": null,
      "sub": "Древний глиняный духовой инструмент · «Туркестан 1500»",
      "desc": "Сазсырнай — духовой инструмент, обожжённый из глины. Форма — большое яйцо, 12 звуковых отверстий. На лицевой стороне — изображение мавзолея Ходжи Ахмеда Ясави и каравана верблюдов, надпись «Туркестан 1500». Национальный музей.",
      "facts": [
        [
          "Материал",
          "глина"
        ],
        [
          "Отверстия",
          "12"
        ],
        [
          "Форма",
          "яйцо"
        ],
        [
          "Размер",
          "12 × 5 см"
        ]
      ]
    },
    "en": {
      "cat": "Music · Wind",
      "titleA": "Sazsyrnai",
      "titleB": "",
      "label": null,
      "sub": "Ancient clay wind instrument · 'Turkestan 1500'",
      "desc": "The sazsyrnai is a wind instrument fired from clay. Shaped like a large egg, it has 12 sound holes. Its front bears an image of the Mausoleum of Khoja Ahmed Yasawi and a camel caravan, with the inscription 'Turkestan 1500'. National Museum.",
      "facts": [
        [
          "Material",
          "clay"
        ],
        [
          "Holes",
          "12"
        ],
        [
          "Shape",
          "egg"
        ],
        [
          "Size",
          "12 × 5 cm"
        ]
      ]
    }
  },
  "shanqobyz": {
    "ru": {
      "cat": "Музыка · язычковый",
      "titleA": "Шанкобыз",
      "titleB": "",
      "label": null,
      "sub": "Древний язычковый инструмент · в деревянном футляре",
      "desc": "Шанкобыз — древний язычковый инструмент. Состоит из плоской металлической пластины с сужающимися концами и петлёй на конце. Деревянный футляр трапециевидной формы, с ручками и отверстием для шнурка. При игре ротовая полость служит резонатором. Акмолинский ОМ.",
      "facts": [
        [
          "Язычок",
          "металл"
        ],
        [
          "Футляр",
          "дерево"
        ],
        [
          "Техника",
          "резьба · аппликация"
        ],
        [
          "Дата",
          "2015"
        ]
      ]
    },
    "en": {
      "cat": "Music · Reed",
      "titleA": "Shan-qobyz",
      "titleB": "",
      "label": null,
      "sub": "Ancient metal jaw harp · in a wooden case",
      "desc": "The shan-qobyz is an ancient reed instrument, made of a flat metal plate with tapering ends and a loop at the tip. Its trapezoid wooden case has handles and a hole for a cord. When played, the mouth cavity acts as a resonator. Akmola Regional Museum.",
      "facts": [
        [
          "Reed",
          "metal"
        ],
        [
          "Case",
          "wood"
        ],
        [
          "Technique",
          "carving · appliqué"
        ],
        [
          "Date",
          "2015"
        ]
      ]
    }
  },
  "perstenj": {
    "ru": {
      "cat": "Ювелирика · кольцо",
      "titleA": "Клювовидное",
      "titleB": "кольцо",
      "label": null,
      "sub": "«Птичий клюв» · серебро, скань-зернь · XIX в.",
      "desc": "Кольцо с овальным кастом с заострённым концом, в котором закреплён небольшой камень. Каст украшен рельефным рисунком в технике скани и зерни. На лицевой стороне — плетёный орнамент-косичка, в центре — завитки из зерни. Костанайский областной музей.",
      "facts": [
        [
          "Материал",
          "серебро"
        ],
        [
          "Техника",
          "скань · зернь"
        ],
        [
          "Форма",
          "овал · заострённая"
        ],
        [
          "Век",
          "XIX"
        ]
      ]
    },
    "en": {
      "cat": "Jewellery · Ring",
      "titleA": "Beak-Shaped",
      "titleB": "Ring",
      "label": null,
      "sub": "'Bird's beak' · silver, filigree-granulation · 19th c.",
      "desc": "A ring with an oval, pointed-tip bezel holding a small stone. The bezel is decorated with a relief pattern using filigree and granulation. Its face bears a braided cord ornament, with granulated spirals at the centre. Kostanay Regional Museum.",
      "facts": [
        [
          "Material",
          "silver"
        ],
        [
          "Technique",
          "filigree · granulation"
        ],
        [
          "Shape",
          "oval · pointed"
        ],
        [
          "Century",
          "19th"
        ]
      ]
    }
  },
  "bilezik": {
    "ru": {
      "cat": "Ювелирика · браслет",
      "titleA": "Браслет",
      "titleB": "",
      "label": null,
      "sub": "Массивный открытый браслет · с тремя агатами",
      "desc": "Массивный браслет с небольшим разрывом. Поверхность украшена геометрическим орнаментом. Центральный акцент — три овальных агата, расположенных равномерно по кругу. Камни закреплены в выступающих оправах. Автор — Шапабаев Кайрат Булатович. Музей им. Шаймардана Сариева.",
      "facts": [
        [
          "Материал",
          "серебро · агат"
        ],
        [
          "Орнамент",
          "геометрия"
        ],
        [
          "Камни",
          "3 · агат"
        ],
        [
          "Автор",
          "К. Шапабаев"
        ]
      ]
    },
    "en": {
      "cat": "Jewellery · Bracelet",
      "titleA": "Bracelet",
      "titleB": "",
      "label": null,
      "sub": "Massive open bracelet · with three agates",
      "desc": "A massive open-ended bracelet. Its surface is decorated with geometric ornament. Three oval agates, evenly spaced around the band, form the central accent, set in raised mounts. Author: Kairat Bulatovich Shapabayev. Shaimardan Sariyev Museum.",
      "facts": [
        [
          "Material",
          "silver · agate"
        ],
        [
          "Ornament",
          "geometric"
        ],
        [
          "Stones",
          "3 · agate"
        ],
        [
          "Author",
          "K. Shapabayev"
        ]
      ]
    }
  },
  "kese": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Пиала",
      "titleB": "",
      "label": null,
      "sub": "Керамическая пиала · с синим и коричневым узором · XVIII–XIX вв.",
      "desc": "Внутренняя поверхность богато украшена коричневым и голубым орнаментом на белом фоне. Керамика, гончарный круг, обжиг. Высота 8 см, диаметр венчика 20,4 см. Историко-культурный комплекс «Шым-кала».",
      "facts": [
        [
          "Материал",
          "керамика"
        ],
        [
          "Высота",
          "8.2 см"
        ],
        [
          "Диаметр",
          "20.4 см"
        ],
        [
          "Век",
          "XVIII–XIX"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Kese Bowl",
      "titleB": "",
      "label": null,
      "sub": "Ceramic bowl · blue-and-brown pattern · 18th–19th c.",
      "desc": "The interior is richly decorated with brown and blue ornament on a white ground. Ceramic, thrown on a potter's wheel and fired. Height 8 cm, rim diameter 20.4 cm. 'Shym-qala' historical and cultural complex.",
      "facts": [
        [
          "Material",
          "ceramic"
        ],
        [
          "Height",
          "8.2 cm"
        ],
        [
          "Diameter",
          "20.4 cm"
        ],
        [
          "Century",
          "18th–19th"
        ]
      ]
    }
  },
  "korzhyn": {
    "ru": {
      "cat": "Быт · сумка",
      "titleA": "Коржын",
      "titleB": "",
      "label": null,
      "sub": "Парная переметная сумка · ручное ткачество с ковровым узором",
      "desc": "Коржын — традиционная дорожная сумка кочевых казахов. Парный мешок, перекидываемый через спину лошади или верблюда. Соткан из тёмно-красной шерстяной нити, в центре — ромбовидный медальон, вокруг — цветочный орнамент. Края украшены шерстяными кистями. Национальный музей Республики Казахстан.",
      "facts": [
        [
          "Материал",
          "шерстяная нить"
        ],
        [
          "Техника",
          "ручное ткачество"
        ],
        [
          "Датировка",
          "XIX–XX вв."
        ],
        [
          "Убранство",
          "орнамент · медальон · кисти"
        ]
      ]
    },
    "en": {
      "cat": "Household · Bag",
      "titleA": "Korzhyn",
      "titleB": "",
      "label": null,
      "sub": "Paired saddlebag · hand-woven carpet ornament",
      "desc": "The korzhyn is the traditional travel bag of nomadic Kazakhs — a pair of pouches slung across a horse's or camel's back. Woven from deep red wool thread, it bears a diamond-shaped medallion at the centre surrounded by floral ornament. Its ends are finished with wool tassels. National Museum of the Republic of Kazakhstan.",
      "facts": [
        [
          "Material",
          "wool thread"
        ],
        [
          "Technique",
          "hand-woven"
        ],
        [
          "Made",
          "19th–20th c."
        ],
        [
          "Detail",
          "ornament · medallion · tassels"
        ]
      ]
    }
  },
  "syrmaq": {
    "ru": {
      "cat": "Быт · ковёр",
      "titleA": "Сырмак",
      "titleB": "",
      "label": null,
      "sub": "Традиционный войлочный ковёр · техника мозаичной аппликации · три медальона",
      "desc": "Сырмак — традиционный казахский войлочный ковёр. Изготавливается методом мозаики: цветные куски войлока вырезают и сшивают между собой. Три ромбовидных медальона, вокруг — растительный мотив и орнамент «бараний рог». Национальный музей Республики Казахстан.",
      "facts": [
        [
          "Материал",
          "войлок (овечья шерсть)"
        ],
        [
          "Техника",
          "мозаичная аппликация"
        ],
        [
          "Цвет",
          "коричневый · белый · лиловый"
        ],
        [
          "Убранство",
          "3 медальона + кайма"
        ]
      ]
    },
    "en": {
      "cat": "Household · Carpet",
      "titleA": "Syrmaq",
      "titleB": "",
      "label": null,
      "sub": "Traditional felt carpet · mosaic-appliqué technique · three medallions",
      "desc": "The syrmaq is a traditional Kazakh felt carpet, made using a mosaic technique — coloured pieces of felt are cut out and stitched together. It features three diamond-shaped medallions surrounded by plant motifs and ram's-horn ornament. National Museum of the Republic of Kazakhstan.",
      "facts": [
        [
          "Material",
          "felt (sheep wool)"
        ],
        [
          "Technique",
          "mosaic appliqué"
        ],
        [
          "Colour",
          "brown · white · purple"
        ],
        [
          "Detail",
          "3 medallions + border"
        ]
      ]
    }
  },
  "dulyga": {
    "ru": {
      "cat": "Оружие · шлем",
      "titleA": "Дулыга",
      "titleB": "",
      "label": null,
      "sub": "Железный шлем с бармицей · защитный убор казахского воина",
      "desc": "Дулыга — железный защитный шлем казахского воина. Реконструкция выполнена современным мастером Алибаем Бериком Сатынбекулы по образцам XVIII-XIX веков. Куполовидная форма, наверху — острый металлический шпиль, налобная пластина, снизу — бармица (кольчужная сетка), сплетённая из тонких железных колец. Снаружи — орнамент в арабском каллиграфическом стиле. Музей декоративно-прикладного искусства им. Шаймардана Сариева.",
      "facts": [
        [
          "Материал",
          "железо + кожа"
        ],
        [
          "Автор",
          "Берик Алибай"
        ],
        [
          "Оригинал",
          "XVIII-XIX вв."
        ],
        [
          "Части",
          "купол + бармица + орнамент"
        ]
      ]
    },
    "en": {
      "cat": "Weapon · Helmet",
      "titleA": "Dulyga",
      "titleB": "",
      "label": null,
      "sub": "Iron helmet with mail aventail · Kazakh warrior's protective headgear",
      "desc": "The dulyga is the iron protective helmet of a Kazakh warrior. This reconstruction was forged by the contemporary master Alibai Berik Satynbekuly, based on 18th–19th-century originals. It has a domed shape with a pointed metal spike on top, a brow plate, and below it a mail aventail woven from thin iron rings to guard the neck. The exterior bears ornament in Arabic calligraphic style. Shaimardan Sariyev Museum of Decorative and Applied Art.",
      "facts": [
        [
          "Material",
          "iron + leather"
        ],
        [
          "Author",
          "Berik Alibai"
        ],
        [
          "Original",
          "18th-19th c."
        ],
        [
          "Parts",
          "dome + mail + ornament"
        ]
      ]
    }
  }
};

const META_I18N = {
  "yurt_low_quality_texture": {
    "ru": {
      "action": "3D-тур →",
      "quiz": "Викторина: что означает шанырак?"
    },
    "en": {
      "action": "3D tour →",
      "quiz": "Quiz: what does the shanyrak mean?"
    }
  },
  "dombyra_by_sultan_elamanov": {
    "ru": {
      "action": "Слушать кюй →",
      "quiz": "Викторина: кто автор кюя «Балбырауын»?"
    },
    "en": {
      "action": "Listen to the kuy →",
      "quiz": "Quiz: who composed the kuy 'Balbyrauyn'?"
    }
  },
  "kazakh_qobyz_kobyz": {
    "ru": {
      "action": "Слушать кюй Коркыта →",
      "quiz": "Викторина: кто считается отцом кобыза?"
    },
    "en": {
      "action": "Listen to Korkyt's kuy →",
      "quiz": "Quiz: who is regarded as the father of the qobyz?"
    }
  },
  "kazakh_shapan": {
    "ru": {
      "action": "Изучить орнамент →",
      "quiz": "Викторина: из каких тканей шьют шапан?"
    },
    "en": {
      "action": "Explore the ornament →",
      "quiz": "Quiz: what fabrics is a shapan sewn from?"
    }
  },
  "taqiya_grey_m_kazakh_national_headdress": {
    "ru": {
      "action": "Галерея орнаментов →",
      "quiz": "Викторина: в какой сезон носят мужскую тақия?"
    },
    "en": {
      "action": "Ornament gallery →",
      "quiz": "Quiz: in what season is a men's taqiya worn?"
    }
  },
  "taqiya_yellow_f_kazakh_traditional_headdress": {
    "ru": {
      "action": "Праздничные уборы →",
      "quiz": "Викторина: что крепится поверх девичьей тақия?"
    },
    "en": {
      "action": "Festive headwear →",
      "quiz": "Quiz: what is fixed on top of a girl's taqiya?"
    }
  },
  "saukele_ethno_variant_traditional_headdress": {
    "ru": {
      "action": "Свадебный обряд →",
      "quiz": "Викторина: сколько лет носят саукеле?"
    },
    "en": {
      "action": "Wedding ceremony →",
      "quiz": "Quiz: for how many years is the saukele worn?"
    }
  },
  "qamshy_kamshy": {
    "ru": {
      "action": "Мастерство плетения →",
      "quiz": "Викторина: сколько прядей максимум в плетении камчи?"
    },
    "en": {
      "action": "Braiding craftsmanship →",
      "quiz": "Quiz: what is the maximum number of strands in a qamshy braid?"
    }
  },
  "Asyk": {
    "ru": {
      "action": "Правила игры →",
      "quiz": "Викторина: как называется положение асыка «сака»?"
    },
    "en": {
      "action": "Game rules →",
      "quiz": "Quiz: which position of the asyq is called 'saqa'?"
    }
  },
  "besik": {
    "ru": {
      "action": "Обряд «бесикке салу» →",
      "quiz": "Викторина: когда младенца кладут в бесик?"
    },
    "en": {
      "action": "'Besikke salu' ritual →",
      "quiz": "Quiz: when is a baby first placed in the besik?"
    }
  },
  "nomad_sabre": {
    "ru": {
      "action": "Легенды батыров →",
      "quiz": "Викторина: из чего сделан клинок сабли?"
    },
    "en": {
      "action": "Legends of the batyrs →",
      "quiz": "Quiz: what is the sabre's blade made of?"
    }
  },
  "balbal_tas": {
    "ru": {
      "action": "Тюркская культура →",
      "quiz": "Викторина: кому устанавливали балбал?"
    },
    "en": {
      "action": "Turkic culture →",
      "quiz": "Quiz: who were balbal stones erected for?"
    }
  },
  "tamgaly_sun_man": {
    "ru": {
      "action": "Путешествие в Тамгалы →",
      "quiz": "Викторина: когда созданы петроглифы Тамгалы?"
    },
    "en": {
      "action": "Journey to Tamgaly →",
      "quiz": "Quiz: when were the Tamgaly petroglyphs created?"
    }
  },
  "astau_tabaq": {
    "ru": {
      "action": "Традиция дастархана →",
      "quiz": "Викторина: какое блюдо подают на астау?"
    },
    "en": {
      "action": "Dastarkhan tradition →",
      "quiz": "Quiz: what dish is served on the astau?"
    }
  },
  "torsyk_kymyz": {
    "ru": {
      "action": "История кумыса →",
      "quiz": "Викторина: какой напиток хранили в торсыке?"
    },
    "en": {
      "action": "History of kumys →",
      "quiz": "Quiz: what drink was stored in the torsyq?"
    }
  },
  "sedlo": {
    "ru": {
      "action": "Конское снаряжение →",
      "quiz": "Викторина: из каких частей состоит седло?"
    },
    "en": {
      "action": "Horse tack →",
      "quiz": "Quiz: what parts make up a saddle?"
    }
  },
  "aibalta": {
    "ru": {
      "action": "Оружие батыров →",
      "quiz": "Викторина: какой формы лезвие айбалты?"
    },
    "en": {
      "action": "Weapons of the batyrs →",
      "quiz": "Quiz: what shape is the aibalta's blade?"
    }
  },
  "qalqan": {
    "ru": {
      "action": "Куфическая вязь →",
      "quiz": "Викторина: из какого металла край щита?"
    },
    "en": {
      "action": "Kufic script →",
      "quiz": "Quiz: what metal trims the shield's rim?"
    }
  },
  "kubi": {
    "ru": {
      "action": "Мутовка для кумыса →",
      "quiz": "Викторина: сколькими металлическими обручами скреплён кюби?"
    },
    "en": {
      "action": "Kumys churn-staff →",
      "quiz": "Quiz: how many metal hoops bind the kubi?"
    }
  },
  "ojau": {
    "ru": {
      "action": "Обычай дастархана →",
      "quiz": "Викторина: для чего используется ожау?"
    },
    "en": {
      "action": "Dastarkhan custom →",
      "quiz": "Quiz: what is the ojau used for?"
    }
  },
  "sandyq": {
    "ru": {
      "action": "Традиция приданого →",
      "quiz": "Викторина: в каком важном обряде используется сандык?"
    },
    "en": {
      "action": "Dowry tradition →",
      "quiz": "Quiz: in what important ritual is the sandyq used?"
    }
  },
  "togyzqumalaq": {
    "ru": {
      "action": "Правила игры →",
      "quiz": "Викторина: сколько лунок на доске тогызкумалак?"
    },
    "en": {
      "action": "Game rules →",
      "quiz": "Quiz: how many pits are on a togyzqumalaq board?"
    }
  },
  "sazsyrnai": {
    "ru": {
      "action": "Слушать голос Туркестана →",
      "quiz": "Викторина: из какого материала сделан сазсырнай?"
    },
    "en": {
      "action": "Listen to the voice of Turkestan →",
      "quiz": "Quiz: what material is the sazsyrnai made from?"
    }
  },
  "shanqobyz": {
    "ru": {
      "action": "Слушать звучание →",
      "quiz": "Викторина: каким способом играют на шанкобызе?"
    },
    "en": {
      "action": "Listen to the sound →",
      "quiz": "Quiz: how is the shan-qobyz played?"
    }
  },
  "perstenj": {
    "ru": {
      "action": "Ювелирное искусство →",
      "quiz": "Викторина: для чего носили клювовидное кольцо?"
    },
    "en": {
      "action": "Jewellery craft →",
      "quiz": "Quiz: why was the beak-shaped ring worn?"
    }
  },
  "bilezik": {
    "ru": {
      "action": "Работы ювелира →",
      "quiz": "Викторина: сколько агатов в этом браслете?"
    },
    "en": {
      "action": "Jeweller's works →",
      "quiz": "Quiz: how many agates does this bracelet have?"
    }
  },
  "kese": {
    "ru": {
      "action": "Искусство керамики →",
      "quiz": "Викторина: к какому веку относится эта пиала?"
    },
    "en": {
      "action": "Art of ceramics →",
      "quiz": "Quiz: which century does this bowl belong to?"
    }
  },
  "korzhyn": {
    "ru": {
      "action": "Искусство ткачества →",
      "quiz": "Викторина: для чего использовался коржын?"
    },
    "en": {
      "action": "Art of weaving →",
      "quiz": "Quiz: what was the korzhyn used for?"
    }
  },
  "syrmaq": {
    "ru": {
      "action": "Мозаичная аппликация →",
      "quiz": "Викторина: какая техника лежит в основе сырмака?"
    },
    "en": {
      "action": "Mosaic appliqué →",
      "quiz": "Quiz: what technique is the syrmaq based on?"
    }
  },
  "dulyga": {
    "ru": {
      "action": "Оружие воина →",
      "quiz": "Викторина: из чего сделана бармица дулыги?"
    },
    "en": {
      "action": "Warrior's arms →",
      "quiz": "Quiz: what is the dulyga's aventail made of?"
    }
  }
};

const QUIZ_META_I18N = {
  "ru": {
    "yurt_low_quality_texture": {
      "cat": "Жилище",
      "label": "юрта"
    },
    "dombyra_by_sultan_elamanov": {
      "cat": "Музыка",
      "label": "домбра · чёрное дерево"
    },
    "kazakh_qobyz_kobyz": {
      "cat": "Музыка",
      "label": "кобыз · берёза"
    },
    "kazakh_shapan": {
      "cat": "Нац. одежда",
      "label": "шапан"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "cat": "Головной убор",
      "label": "тақия · мужская"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "cat": "Головной убор",
      "label": "тақия · девичья"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "cat": "Головной убор",
      "label": "саукеле · свадебный"
    },
    "qamshy_kamshy": {
      "cat": "Ремесло",
      "label": "камча · плетение"
    },
    "Asyk": {
      "cat": "Нац. игра",
      "label": "овечья кость"
    },
    "besik": {
      "cat": "Быт",
      "label": "бесик · берёза"
    },
    "nomad_sabre": {
      "cat": "Оружие",
      "label": "сталь · кость"
    },
    "balbal_tas": {
      "cat": "Древнее наследие",
      "label": "камень · тюркская эпоха"
    },
    "tamgaly_sun_man": {
      "cat": "Древнее наследие",
      "label": "петроглиф · камень"
    },
    "astau_tabaq": {
      "cat": "Быт",
      "label": "астау · дерево"
    },
    "torsyk_kymyz": {
      "cat": "Быт",
      "label": "сосуд для кумыса"
    },
    "sedlo": {
      "cat": "Ремесло",
      "label": "седло · кожа"
    },
    "aibalta": {
      "cat": "Оружие",
      "label": "айбалта · серебро"
    },
    "qalqan": {
      "cat": "Оружие",
      "label": "сталь · латунь"
    },
    "kubi": {
      "cat": "Быт",
      "label": "кюби для кумыса"
    },
    "ojau": {
      "cat": "Быт",
      "label": "деревянный ковш"
    },
    "sandyq": {
      "cat": "Быт",
      "label": "деревянный сундук"
    },
    "togyzqumalaq": {
      "cat": "Нац. игра",
      "label": "деревянная доска"
    },
    "sazsyrnai": {
      "cat": "Музыка",
      "label": "глиняный инструмент"
    },
    "shanqobyz": {
      "cat": "Музыка",
      "label": "варган · язычок"
    },
    "perstenj": {
      "cat": "Ювелирика",
      "label": "серебряное кольцо"
    },
    "bilezik": {
      "cat": "Ювелирика",
      "label": "серебряный браслет"
    },
    "kese": {
      "cat": "Быт",
      "label": "керамика"
    },
    "korzhyn": {
      "cat": "Быт",
      "label": "дорожная сумка"
    },
    "syrmaq": {
      "cat": "Быт",
      "label": "войлочный ковёр"
    },
    "dulyga": {
      "cat": "Оружие",
      "label": "шлем воина"
    }
  },
  "en": {
    "yurt_low_quality_texture": {
      "cat": "Dwelling",
      "label": "yurt"
    },
    "dombyra_by_sultan_elamanov": {
      "cat": "Music",
      "label": "dombra · dark wood"
    },
    "kazakh_qobyz_kobyz": {
      "cat": "Music",
      "label": "qobyz · birch"
    },
    "kazakh_shapan": {
      "cat": "National Clothing",
      "label": "shapan"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "cat": "Headwear",
      "label": "taqiya · men's"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "cat": "Headwear",
      "label": "taqiya · girl's"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "cat": "Headwear",
      "label": "saukele · ceremonial"
    },
    "qamshy_kamshy": {
      "cat": "Craft",
      "label": "qamshy · braiding"
    },
    "Asyk": {
      "cat": "National Game",
      "label": "sheep's anklebone"
    },
    "besik": {
      "cat": "Household",
      "label": "besik · birch"
    },
    "nomad_sabre": {
      "cat": "Weapon",
      "label": "steel · bone"
    },
    "balbal_tas": {
      "cat": "Ancient Heritage",
      "label": "stone · Turkic era"
    },
    "tamgaly_sun_man": {
      "cat": "Ancient Heritage",
      "label": "petroglyph · stone"
    },
    "astau_tabaq": {
      "cat": "Household",
      "label": "astau · wood"
    },
    "torsyk_kymyz": {
      "cat": "Household",
      "label": "kumys vessel"
    },
    "sedlo": {
      "cat": "Craft",
      "label": "saddle · leather"
    },
    "aibalta": {
      "cat": "Weapon",
      "label": "aibalta · silver"
    },
    "qalqan": {
      "cat": "Weapon",
      "label": "steel · brass"
    },
    "kubi": {
      "cat": "Household",
      "label": "kumys churn"
    },
    "ojau": {
      "cat": "Household",
      "label": "wooden ladle"
    },
    "sandyq": {
      "cat": "Household",
      "label": "wooden chest"
    },
    "togyzqumalaq": {
      "cat": "National Game",
      "label": "wooden board"
    },
    "sazsyrnai": {
      "cat": "Music",
      "label": "clay instrument"
    },
    "shanqobyz": {
      "cat": "Music",
      "label": "jaw harp · reed"
    },
    "perstenj": {
      "cat": "Jewellery",
      "label": "silver ring"
    },
    "bilezik": {
      "cat": "Jewellery",
      "label": "silver bracelet"
    },
    "kese": {
      "cat": "Household",
      "label": "ceramics"
    },
    "korzhyn": {
      "cat": "Household",
      "label": "travel bag"
    },
    "syrmaq": {
      "cat": "Household",
      "label": "felt carpet"
    },
    "dulyga": {
      "cat": "Weapon",
      "label": "warrior's helmet"
    }
  }
};

const REGION_I18N = {
  "almaty_obl": {
    "ru": {
      "era": "V в. до н.э. — наши дни",
      "legend": "У подножия Заилийского Алатау — земля Жетысу, сердце Старшего жуза. В 1969 году из кургана Иссык извлечён «Золотой человек» — сакский воин с 4000 золотых украшений. В 2022 году от области отделилась Жетысуская область.",
      "batyrs": [
        "Райымбек батыр (1705-1785)",
        "Суюнбай Аронулы",
        "Абылмансур (Абылай-хан)"
      ],
      "monuments": [
        "«Золотой человек» (Иссык)",
        "Мавзолей Райымбека",
        "Петроглифы Тамгалы (ЮНЕСКО)",
        "Курганы Заилийского Алатау"
      ],
      "tags": [
        "сакское наследие",
        "айтыс",
        "беркутчи",
        "конные скачки"
      ]
    },
    "en": {
      "era": "5th c. BC — present",
      "legend": "At the foot of the Trans-Ili Alatau lies Jetisu, the heartland of the Uly zhuz. In 1969 the Issyk kurgan yielded the 'Golden Man' — a Saka warrior adorned with 4,000 gold ornaments. In 2022, Jetisu Region split off from this territory.",
      "batyrs": [
        "Raiymbek Batyr (1705-1785)",
        "Suyunbai Aronuly",
        "Abylmansur (Abylai Khan)"
      ],
      "monuments": [
        "Issyk 'Golden Man'",
        "Raiymbek Mausoleum",
        "Tamgaly Petroglyphs (UNESCO)",
        "Trans-Ili Alatau kurgans"
      ],
      "tags": [
        "Saka heritage",
        "aitys",
        "eagle falconry",
        "horse racing"
      ]
    }
  },
  "akmola": {
    "ru": {
      "era": "VII-XIX вв.",
      "legend": "На реке Есиль в VII-XIV веках существовал средневековый город Бозок. Последний казахский хан Кенесары (1802-1847) сделал эту степь своим центром. В центре области — столица, Астана.",
      "batyrs": [
        "Кенесары Касымулы",
        "Ставка Абылай-хана",
        "Наурызбай батыр"
      ],
      "monuments": [
        "Городище Бозок",
        "Озёра Бурабая (Кокшетау)",
        "Ставка Абылай-хана",
        "Ботайская культура"
      ],
      "tags": [
        "национально-освободительное движение",
        "озёра",
        "охота"
      ]
    },
    "en": {
      "era": "7th-19th c.",
      "legend": "On the Esil River, the medieval town of Bozoq stood from the 7th to 14th centuries. Kenesary (1802-1847), the last Kazakh khan, made this steppe his base. At the region's centre lies the capital, Astana.",
      "batyrs": [
        "Kenesary Kasymuly",
        "Abylai Khan's headquarters",
        "Nauryzbai Batyr"
      ],
      "monuments": [
        "Bozoq settlement",
        "Burabai (Kokshetau) lakes",
        "Abylai Khan's headquarters",
        "Botai culture"
      ],
      "tags": [
        "national liberation",
        "lakes",
        "hunting"
      ]
    }
  },
  "aktobe": {
    "ru": {
      "era": "XIV-XIX вв.",
      "legend": "В западной степи Есет батыр Котибарулы (1667-1749) возглавил борьбу против джунгар. Мавзолей Абат-Байтак, построенный в XIV веке, — один из красивейших средневековых памятников Казахстана.",
      "batyrs": [
        "Есет батыр Котибарулы",
        "Айтеке би",
        "Тлеу батыр"
      ],
      "monuments": [
        "Мавзолей Абат-Байтак",
        "Ханская могила",
        "Регион Иргиз-Торгай"
      ],
      "tags": [
        "батыры",
        "суд биев",
        "скотоводство"
      ]
    },
    "en": {
      "era": "14th-19th c.",
      "legend": "On the western steppe, Yeset Batyr Kotibaruly (1667-1749) led the resistance against the Jungars. The Abat-Baitaq mausoleum, built in the 14th century, is one of Kazakhstan's finest medieval monuments.",
      "batyrs": [
        "Yeset Batyr Kotibaruly",
        "Aiteke Bi",
        "Tleu Batyr"
      ],
      "monuments": [
        "Abat-Baitaq Mausoleum",
        "Khan's tomb",
        "Irgiz-Torgai region"
      ],
      "tags": [
        "warriors",
        "biys' court",
        "cattle-herding"
      ]
    }
  },
  "atyrau": {
    "ru": {
      "era": "XIII-XIX вв.",
      "legend": "Каспийско-Уральский регион. В XIII-XVI веках Сарайшык был летней столицей Золотой Орды, здесь похоронены семь ханов. В XIX веке — очаг восстания Махамбета и Исатая 1836-1838 годов.",
      "batyrs": [
        "Махамбет Утемисулы",
        "Исатай Тайманулы",
        "хан Жанибек",
        "Тохтамыш"
      ],
      "monuments": [
        "Сарайшык (пантеон семи ханов)",
        "Музей Махамбета",
        "Атырауский областной музей",
        "гора Иманкара"
      ],
      "tags": [
        "Золотая Орда",
        "жырау",
        "айтыс",
        "национально-освободительное движение"
      ]
    },
    "en": {
      "era": "13th-19th c.",
      "legend": "The Caspian-Ural region. From the 13th to 16th centuries, Saraishyq was the summer capital of the Golden Horde, resting place of seven khans. In the 19th century, it became the cradle of the 1836-1838 Makhambet-Isatai uprising.",
      "batyrs": [
        "Makhambet Utemisuly",
        "Isatai Taimanuly",
        "Khan Janibek",
        "Tokhtamysh"
      ],
      "monuments": [
        "Saraishyq (pantheon of seven khans)",
        "Makhambet Museum",
        "Atyrau Regional Museum",
        "Mount Imankara"
      ],
      "tags": [
        "Golden Horde",
        "zhyrau poetry",
        "aitys",
        "national liberation"
      ]
    }
  },
  "east_kz": {
    "ru": {
      "era": "IV в. до н.э. — наши дни",
      "legend": "У подножия Алтая. Курганы Берел (IV-III вв. до н.э.) — вершина пазырыкской культуры. Найдены «Золотой воин», золотые фигуры, конское снаряжение. В 2022 году отделилась Абайская область (Шынгыстау, родина Абая).",
      "batyrs": [
        "Сакские вожди",
        "Кабанбай батыр",
        "зимовка Абылай-хана"
      ],
      "monuments": [
        "Курганы Берел",
        "Золотое одеяние",
        "Берег Иртыша",
        "озеро Маркаколь",
        "источники Рахмановские"
      ],
      "tags": [
        "пазырык-саки",
        "золотое искусство",
        "ледяной курган",
        "охота"
      ]
    },
    "en": {
      "era": "4th c. BC — present",
      "legend": "At the foot of the Altai Mountains. The Berel kurgans (4th-3rd c. BC) mark the peak of the Pazyryk culture — a 'Golden Warrior', gold figurines and horse harness were unearthed here. In 2022, Abai Region (Shyngystau, birthplace of Abai) split off.",
      "batyrs": [
        "Saka chieftains",
        "Kabanbay Batyr",
        "Abylai Khan's winter camp"
      ],
      "monuments": [
        "Berel kurgans",
        "Golden attire",
        "Irtysh riverbank",
        "Lake Markakol",
        "Rakhmanov springs"
      ],
      "tags": [
        "Pazyryk-Saka",
        "gold artistry",
        "frozen kurgan",
        "hunting"
      ]
    }
  },
  "mangystau": {
    "ru": {
      "era": "Средневековье — наши дни",
      "legend": "362 святых места. Бекет-ата (1750-1813) — «святой святых», наставник народа. Его подземная мечеть Огланды — почитаемое место паломничества и поныне. Гора Шеркала — удивительный природный памятник.",
      "batyrs": [
        "Бекет-ата",
        "Шопан-ата",
        "Караман-ата",
        "Есет батыр Котибарулы"
      ],
      "monuments": [
        "Подземная мечеть Бекет-ата",
        "Мавзолей Шопан-ата",
        "гора Шеркала",
        "комплекс Огланды",
        "Босжира"
      ],
      "tags": [
        "паломничество",
        "суфизм",
        "коневодство",
        "подземная мечеть"
      ]
    },
    "en": {
      "era": "Medieval era — present",
      "legend": "362 sacred sites. Beket-Ata (1750-1813) — the 'saint of saints' and mentor of the people. His underground mosque at Oglandy remains a revered place of pilgrimage today. Mount Sherkala is a striking natural landmark.",
      "batyrs": [
        "Beket-Ata",
        "Shopan-Ata",
        "Karaman-Ata",
        "Yeset Batyr Kotibaruly"
      ],
      "monuments": [
        "Beket-Ata underground mosque",
        "Shopan-Ata mausoleum",
        "Mount Sherkala",
        "Oglandy complex",
        "Bozzhyra"
      ],
      "tags": [
        "pilgrimage",
        "Sufism",
        "horse breeding",
        "underground mosque"
      ]
    }
  },
  "north_kz": {
    "ru": {
      "era": "IV тыс. до н.э. — XIX в.",
      "legend": "Древний город Кызылжар (Петропавловск) был северной ставкой Абылай-хана. В этом регионе — Ботайская культура (~5500 лет назад), место первого одомашнивания лошади в истории человечества.",
      "batyrs": [
        "Абылай-хан",
        "Жанибек батыр",
        "Мукан батыр"
      ],
      "monuments": [
        "Ставка Абылай-хана",
        "Место Ботайской культуры",
        "Айыртау (Ыбырай Алтынсарин)",
        "город Кызылжар"
      ],
      "tags": [
        "одомашнивание лошади",
        "степная охота",
        "айтыс"
      ]
    },
    "en": {
      "era": "4th mill. BC — 19th c.",
      "legend": "The ancient town of Qyzylzhar (Petropavl) served as Abylai Khan's northern headquarters. This region is home to the Botai culture (~5500 years ago), the site of humanity's first horse domestication.",
      "batyrs": [
        "Abylai Khan",
        "Janibek Batyr",
        "Muqan Batyr"
      ],
      "monuments": [
        "Abylai Khan's headquarters",
        "Botai culture site",
        "Ayyrtau (Ybyrai Altynsarin)",
        "Town of Qyzylzhar"
      ],
      "tags": [
        "horse domestication",
        "steppe hunting",
        "aitys"
      ]
    }
  },
  "pavlodar": {
    "ru": {
      "era": "XIX-XX вв.",
      "legend": "На берегу Иртыша горы Баянаула — родина казахских просветителей и учёных. Здесь родились Машхур Жусуп Копеев (1858-1931), Султанмахмут Торайгыров (1893-1920), Каныш Сатпаев.",
      "batyrs": [
        "Машхур Жусуп Копеев",
        "Султанмахмут Торайгыров",
        "Каныш Сатпаев"
      ],
      "monuments": [
        "Национальный парк Баянаул",
        "Берег Иртыша",
        "Музей Машхур Жусупа",
        "Каменный музей К. Сатпаева"
      ],
      "tags": [
        "просвещение",
        "поэзия",
        "наука",
        "горная культура"
      ]
    },
    "en": {
      "era": "19th-20th c.",
      "legend": "On the banks of the Irtysh, the Bayanaul mountains are the homeland of Kazakh enlighteners and scholars. Mashhur Zhusup Kopeyev (1858-1931), Sultanmakhmut Toraighyrov (1893-1920) and Kanysh Satpayev were all born here.",
      "batyrs": [
        "Mashhur Zhusup Kopeyev",
        "Sultanmakhmut Toraighyrov",
        "Kanysh Satpayev"
      ],
      "monuments": [
        "Bayanaul National Park",
        "Irtysh riverbank",
        "Mashhur Zhusup Museum",
        "K. Satpayev stone museum"
      ],
      "tags": [
        "enlightenment",
        "poetry",
        "science",
        "mountain culture"
      ]
    }
  },
  "karagandy": {
    "ru": {
      "era": "X-XIX вв.",
      "legend": "Сердце Сарыарки. Касым-хан (1445-1521) издал свод законов «Қасқа жолы». Богенбай батыр — соратник Абылай-хана. В 2022 году отделилась Улытауская область (с мавзолеями Жошы-хана и Алаша-хана).",
      "batyrs": [
        "Богенбай батыр (1690-1775)",
        "Касым-хан",
        "Қаз дауысты Казыбек би",
        "Наурызбай батыр"
      ],
      "monuments": [
        "Мавзолей Богенбая",
        "Место ставки Касым-хана",
        "Петроглифы Найзатас",
        "Мавзолей Домбауыл (в Улытау)",
        "Мавзолей Алаша-хана"
      ],
      "tags": [
        "суд биев",
        "свод законов",
        "батыры",
        "древний мавзолей"
      ]
    },
    "en": {
      "era": "10th-19th c.",
      "legend": "The heart of Saryarka. Qasym Khan (1445-1521) issued the 'Qasqa Zholy' code of law. Bogenbai Batyr was Abylai Khan's close companion. In 2022, Ulytau Region (with the mausoleums of Jochi Khan and Alasha Khan) split off.",
      "batyrs": [
        "Bogenbai Batyr (1690-1775)",
        "Qasym Khan",
        "Qaz Dauysty Qazybek Bi",
        "Naurizbai Batyr"
      ],
      "monuments": [
        "Bogenbai Mausoleum",
        "Site of Qasym Khan's headquarters",
        "Naizatas petroglyphs",
        "Dombauyl Mausoleum (Ulytau)",
        "Alasha Khan Mausoleum"
      ],
      "tags": [
        "biys' court",
        "law code",
        "warriors",
        "ancient mausoleum"
      ]
    }
  },
  "kostanay": {
    "ru": {
      "era": "XIX-XX вв.",
      "legend": "Торгайская степь — родина Ыбырая Алтынсарина (1841-1889), казахского просветителя, педагога и писателя. Он открыл первую казахско-русскую школу. Торгайское восстание 1916 года началось под руководством Амангельды Иманова.",
      "batyrs": [
        "Ыбырай Алтынсарин",
        "Амангельды Иманов",
        "Кейки батыр"
      ],
      "monuments": [
        "Музей Ы. Алтынсарина",
        "река Торгай",
        "заповедник Наурзум",
        "мавзолей Нарбозы"
      ],
      "tags": [
        "просвещение",
        "степное образование",
        "восстание 1916 года"
      ]
    },
    "en": {
      "era": "19th-20th c.",
      "legend": "The Torgai steppe is the birthplace of Ybyrai Altynsarin (1841-1889), a Kazakh enlightener, educator and writer who opened the first Kazakh-Russian school. The 1916 Torgai uprising began under Amangeldy Imanov's leadership.",
      "batyrs": [
        "Ybyrai Altynsarin",
        "Amangeldy Imanov",
        "Keiki Batyr"
      ],
      "monuments": [
        "Y. Altynsarin Museum",
        "Torgai River",
        "Naurzum Nature Reserve",
        "Narbozy Mausoleum"
      ],
      "tags": [
        "enlightenment",
        "steppe education",
        "1916 uprising"
      ]
    }
  },
  "kyzylorda": {
    "ru": {
      "era": "VIII-XX вв.",
      "legend": "Берег Сырдарьи — священная земля Коркыт-ата (VIII-IX вв.). «Книга деда Коркута» — один из древнейших письменных памятников тюркского мира. Сегодня здесь — космодром Байконур, эпоха космоса.",
      "batyrs": [
        "Коркыт-ата",
        "Бухар жырау Калкаманулы",
        "Турар Рыскулов"
      ],
      "monuments": [
        "Мавзолей Коркыт-ата",
        "река Сырдарья",
        "космодром Байконур",
        "городище Жанкент"
      ],
      "tags": [
        "жырау",
        "дастан",
        "космос",
        "орошаемое земледелие"
      ]
    },
    "en": {
      "era": "8th-20th c.",
      "legend": "On the banks of the Syr Darya lies the sacred land of Korkyt-Ata (8th-9th c.). The 'Book of Dede Korkut' is one of the oldest written monuments of the Turkic world. Today it is home to the Baikonur Cosmodrome, gateway to the space age.",
      "batyrs": [
        "Korkyt-Ata",
        "Bukhar Zhyrau Kalkamanuly",
        "Turar Ryskulov"
      ],
      "monuments": [
        "Korkyt-Ata Mausoleum",
        "Syr Darya River",
        "Baikonur Cosmodrome",
        "Jankent settlement"
      ],
      "tags": [
        "zhyrau poetry",
        "epic tales",
        "space",
        "irrigated farming"
      ]
    }
  },
  "turkistan_obl": {
    "ru": {
      "era": "V-XVI вв.",
      "legend": "Духовная столица тюркского мира. Мавзолей Ходжи Ахмеда Ясави (1093-1166) построен по указу Амира Темура в 1389-1405 годах, объект ЮНЕСКО. Отрар — узел Великого Шёлкового пути, родина аль-Фараби. Арыстан-баб — наставник Ясави.",
      "batyrs": [
        "Ходжа Ахмед Ясави",
        "Абу Наср аль-Фараби",
        "Аз-Тауке хан",
        "Тауекел хан",
        "Есим хан"
      ],
      "monuments": [
        "Мавзолей Ясави (ЮНЕСКО)",
        "Мавзолей Арыстан-баб",
        "Городище Отрар",
        "Культобе",
        "Окшы-ата"
      ],
      "tags": [
        "зикр",
        "суфизм",
        "ЮНЕСКО",
        "поэзия"
      ]
    },
    "en": {
      "era": "5th-16th c.",
      "legend": "The spiritual capital of the Turkic world. The Mausoleum of Khoja Ahmed Yasawi (1093-1166) was built on Amir Temur's orders in 1389-1405, a UNESCO site. Otrar was a hub of the Great Silk Road and the birthplace of al-Farabi. Arystan-bab was Yasawi's mentor.",
      "batyrs": [
        "Khoja Ahmed Yasawi",
        "Abu Nasr al-Farabi",
        "Az-Tauke Khan",
        "Tauekel Khan",
        "Esim Khan"
      ],
      "monuments": [
        "Yasawi Mausoleum (UNESCO)",
        "Arystan-bab Mausoleum",
        "Otrar settlement",
        "Kultobe",
        "Oqshy-ata"
      ],
      "tags": [
        "dhikr",
        "Sufism",
        "UNESCO",
        "poetry"
      ]
    }
  },
  "west_kz": {
    "ru": {
      "era": "1801-1845, XIX в.",
      "legend": "Букеевская Орда (1801-1845) — эпоха последнего казахского хана Жангира. Жангир-хан — реформатор: открыл первую школу, мечеть, базар, библиотеку. Курмангазы Сагырбайулы (1818-1889) — классик казахского кюя, автор «Балбырауын».",
      "batyrs": [
        "Жангир-хан",
        "Букей-хан",
        "Курмангазы Сагырбайулы",
        "Дина Нурпеисова"
      ],
      "monuments": [
        "Ханский дворец (Орда)",
        "Мечеть Жангира",
        "Ханский лес",
        "Родина Курмангазы"
      ],
      "tags": [
        "просвещение",
        "кюй",
        "дипломатия",
        "торговля"
      ]
    },
    "en": {
      "era": "1801-1845, 19th c.",
      "legend": "The Bukey Horde (1801-1845) was the era of Jangir, the last khan of this line. Khan Jangir was a reformer — he opened the first school, mosque, market and library. Kurmangazy Sagyrbayuly (1818-1889), the classical master of the kuy, composed 'Balbyrauyn' here.",
      "batyrs": [
        "Khan Jangir",
        "Khan Bukey",
        "Kurmangazy Sagyrbayuly",
        "Dina Nurpeisova"
      ],
      "monuments": [
        "Khan's palace (Orda)",
        "Jangir Mosque",
        "Khan's Forest",
        "Kurmangazy's birthplace"
      ],
      "tags": [
        "enlightenment",
        "kuy music",
        "diplomacy",
        "trade"
      ]
    }
  },
  "jambyl": {
    "ru": {
      "era": "VI-XII вв.",
      "legend": "Тараз — «город купцов» на Великом Шёлковом пути. Мавзолей Айша-биби (XI в.) — жемчужина казахской архитектуры. Легенда об Айше и ханзаде Карахане — тюркская версия «Ромео и Джульетты».",
      "batyrs": [
        "Карахан",
        "хан Токтамыс",
        "Байдибек би",
        "Жамбыл Жабаев"
      ],
      "monuments": [
        "Мавзолей Айша-биби",
        "Мавзолей Бабаджа-хатун",
        "мечеть Карахана",
        "дворец Акыртас"
      ],
      "tags": [
        "торговля",
        "архитектура",
        "поэзия",
        "Шёлковый путь"
      ]
    },
    "en": {
      "era": "6th-12th c.",
      "legend": "Taraz was the 'city of merchants' on the Great Silk Road. The Aisha-Bibi mausoleum (11th c.) is a gem of Kazakh architecture. The legend of Aisha and prince Karakhan is the Turkic version of 'Romeo and Juliet'.",
      "batyrs": [
        "Karakhan",
        "Khan Toktamys",
        "Baidibek Bi",
        "Zhambyl Zhabayev"
      ],
      "monuments": [
        "Aisha-Bibi Mausoleum",
        "Babaja-khatun Mausoleum",
        "Karakhan Mosque",
        "Akyrtas Palace"
      ],
      "tags": [
        "trade",
        "architecture",
        "poetry",
        "Silk Road"
      ]
    }
  }
};

const CITY_I18N = {
  "astana": {
    "ru": {
      "era": "1832 → 1997 столица",
      "legend": "На берегу Есиля в Средние века стоял город Бозок. В 1832 году — крепость Акмола, в 1961 — Целиноград, в 1998 — Астана, в 2019 — Нур-Султан, в 2022 — снова Астана. Сегодня — центр проектов Улы Дала.",
      "batyrs": [
        "Кенесары Касымулы",
        "Наурызбай батыр",
        "Нурсултан Назарбаев"
      ],
      "monuments": [
        "Байтерек",
        "мечеть Хазрет Султан",
        "городище Бозок",
        "Хан Шатыр",
        "Национальный музей"
      ],
      "tags": [
        "столица",
        "дипломатия",
        "архитектура",
        "выставки"
      ],
      "badgeCapital": "Столица республики"
    },
    "en": {
      "era": "1832 → 1997 capital",
      "legend": "The medieval town of Bozoq once stood on the banks of the Esil. In 1832 it was the Akmola fortress; in 1961, Tselinograd; in 1998, Astana; in 2019, Nur-Sultan; and since 2022, Astana again. Today it is the hub of the country's flagship projects.",
      "batyrs": [
        "Kenesary Kasymuly",
        "Naurizbai Batyr",
        "Nursultan Nazarbayev"
      ],
      "monuments": [
        "Baiterek Tower",
        "Hazrat Sultan Mosque",
        "Bozoq settlement",
        "Khan Shatyr",
        "National Museum"
      ],
      "tags": [
        "capital",
        "diplomacy",
        "architecture",
        "exhibitions"
      ],
      "badgeCapital": "Capital of the Republic"
    }
  },
  "almaty_c": {
    "ru": {
      "era": "XIX-XXI вв.",
      "legend": "У подножия Заилийского Алатау. Выросла из крепости Верный, основанной в XIX веке. В 1929-1997 годах — столица Казахской ССР. Сегодня — главный центр культуры и науки. Рядом — древний сакский курган Иссык.",
      "batyrs": [
        "Райымбек батыр",
        "Абылмансур (Абылай-хан)",
        "Суюнбай Аронулы",
        "Г. Мустафин"
      ],
      "monuments": [
        "Мавзолей Райымбека",
        "Медеу — высокогорный каток",
        "Кок-Тобе",
        "памятник Абаю",
        "Национальный музей"
      ],
      "tags": [
        "айтыс",
        "конные скачки",
        "горная культура",
        "музеи"
      ],
      "badgeCity": "Город республиканского значения"
    },
    "en": {
      "era": "19th-21st c.",
      "legend": "At the foot of the Trans-Ili Alatau. It grew from the Verny fortress, founded in the 19th century. From 1929 to 1997 it was the capital of the Kazakh SSR. Today it is the country's main centre of culture and science, near the ancient Saka kurgan of Issyk.",
      "batyrs": [
        "Raiymbek Batyr",
        "Abylmansur (Abylai Khan)",
        "Suyunbai Aronuly",
        "G. Mustafin"
      ],
      "monuments": [
        "Raiymbek Mausoleum",
        "Medeu high-altitude ice rink",
        "Kok-Tobe",
        "Abai Monument",
        "National Museum"
      ],
      "tags": [
        "aitys",
        "horse racing",
        "mountain culture",
        "museums"
      ],
      "badgeCity": "City of republican significance"
    }
  },
  "shymkent": {
    "ru": {
      "era": "XII в. — наши дни",
      "legend": "Древний город (XII в.), южные ворота Великого Шёлкового пути. Близость к Туркестану — прямой путь к памятникам ЮНЕСКО. В 2018 году получил статус города республиканского значения.",
      "batyrs": [
        "Байдибек би",
        "Толе би (в окрестностях)",
        "Турар Рыскулов"
      ],
      "monuments": [
        "Городище Южное",
        "Музей Турара Рыскулова",
        "древний базар",
        "Коныртобе"
      ],
      "tags": [
        "торговля",
        "айтыс",
        "Шёлковый путь",
        "культура"
      ],
      "badgeCity": "Город республиканского значения"
    },
    "en": {
      "era": "12th c. — present",
      "legend": "An ancient city (12th c.), the southern gateway of the Great Silk Road. Its proximity to Turkistan gives direct access to UNESCO monuments. In 2018 it was granted the status of a city of republican significance.",
      "batyrs": [
        "Baidibek Bi",
        "Tole Bi (nearby)",
        "Turar Ryskulov"
      ],
      "monuments": [
        "Ontustik ancient settlement",
        "Turar Ryskulov Museum",
        "ancient bazaar",
        "Konyrtobe"
      ],
      "tags": [
        "trade",
        "aitys",
        "Silk Road",
        "culture"
      ],
      "badgeCity": "City of republican significance"
    }
  }
};

const REGION_NAMES_I18N = {
  "ru": {
    "almaty_obl": "Алматинская область",
    "akmola": "Акмолинская область",
    "aktobe": "Актюбинская область",
    "atyrau": "Атырауская область",
    "east_kz": "Восточный Казахстан",
    "mangystau": "Мангистауская область",
    "north_kz": "Северный Казахстан",
    "pavlodar": "Павлодарская область",
    "karagandy": "Карагандинская область",
    "kostanay": "Костанайская область",
    "kyzylorda": "Кызылординская область",
    "turkistan_obl": "Туркестанская область",
    "west_kz": "Западный Казахстан",
    "jambyl": "Жамбылская область"
  },
  "en": {
    "almaty_obl": "Almaty Region",
    "akmola": "Akmola Region",
    "aktobe": "Aktobe Region",
    "atyrau": "Atyrau Region",
    "east_kz": "East Kazakhstan",
    "mangystau": "Mangystau Region",
    "north_kz": "North Kazakhstan",
    "pavlodar": "Pavlodar Region",
    "karagandy": "Karagandy Region",
    "kostanay": "Kostanay Region",
    "kyzylorda": "Kyzylorda Region",
    "turkistan_obl": "Turkistan Region",
    "west_kz": "West Kazakhstan",
    "jambyl": "Jambyl Region"
  }
};

const CITY_NAMES_I18N = {
  "ru": {
    "astana": "Астана",
    "almaty_c": "Алматы",
    "shymkent": "Шымкент"
  },
  "en": {
    "astana": "Astana",
    "almaty_c": "Almaty",
    "shymkent": "Shymkent"
  }
};

const NEIGHBOR_I18N = {
  "ru": {
    "РЕСЕЙ": "РОССИЯ",
    "ҚЫТАЙ": "КИТАЙ",
    "ҚЫРҒЫЗСТАН": "КЫРГЫЗСТАН",
    "ӨЗБЕКСТАН": "УЗБЕКИСТАН",
    "ТҮРІКМЕНСТАН": "ТУРКМЕНИСТАН",
    "КАСПИЙ ТЕҢІЗІ": "КАСПИЙСКОЕ МОРЕ"
  },
  "en": {
    "РЕСЕЙ": "RUSSIA",
    "ҚЫТАЙ": "CHINA",
    "ҚЫРҒЫЗСТАН": "KYRGYZSTAN",
    "ӨЗБЕКСТАН": "UZBEKISTAN",
    "ТҮРІКМЕНСТАН": "TURKMENISTAN",
    "КАСПИЙ ТЕҢІЗІ": "CASPIAN SEA"
  }
};

const ZLABEL_I18N = {
  "ru": {
    "uly": "Старший жуз",
    "orta": "Средний жуз",
    "kishi": "Младший жуз"
  },
  "en": {
    "uly": "Uly zhuz",
    "orta": "Orta zhuz",
    "kishi": "Kishi zhuz"
  }
};

const TAQIYA_I18N = {
  "ru": {
    "taqiya_grey_m_kazakh_national_headdress": "Тақия (муж.)",
    "taqiya_yellow_f_kazakh_traditional_headdress": "Тақия (жен.)"
  },
  "en": {
    "taqiya_grey_m_kazakh_national_headdress": "Taqiya (men's)",
    "taqiya_yellow_f_kazakh_traditional_headdress": "Taqiya (girl's)"
  }
};

const HERITAGE_I18N = {
  "ru": [
    {
      "name": "Казахстан",
      "role": "Родина",
      "share": [
        "Домбра",
        "Выездка коня",
        "Айтыс",
        "Наурыз",
        "Каменные балбалы",
        "Соколиная охота с беркутом"
      ]
    },
    {
      "name": "Киргизия",
      "role": "Тюркский родственник",
      "share": [
        "Эпос «Манас»",
        "Комуз",
        "Кокпар",
        "Юрта",
        "Скотоводство"
      ]
    },
    {
      "name": "Узбекистан",
      "role": "Общая земля",
      "share": [
        "Туркестанский путь",
        "Домбра",
        "Свадебные традиции",
        "Города Шёлкового пути"
      ]
    },
    {
      "name": "Туркменистан",
      "role": "Тюркский родственник",
      "share": [
        "Ахалтекинская лошадь",
        "Туркменский ковёр",
        "Дутар",
        "Тюбетейка"
      ]
    },
    {
      "name": "Турция",
      "role": "Тюркский мир",
      "share": [
        "Семья тюркских языков",
        "Саз",
        "Дастан",
        "Конная культура",
        "Тюркский совет"
      ]
    },
    {
      "name": "Азербайджан",
      "role": "Тюркский родственник",
      "share": [
        "Мугам",
        "Тар",
        "Дастан",
        "Наурыз",
        "Огузский язык"
      ]
    },
    {
      "name": "Монголия",
      "role": "Великая степь",
      "share": [
        "Наследие Чингисхана",
        "Моринхур",
        "Соколиная охота",
        "Наадам",
        "Древнетюркская письменность"
      ]
    },
    {
      "name": "Синьцзян (КНР)",
      "role": "Казахская диаспора",
      "share": [
        "1,5 млн казахов",
        "Беркутчи",
        "Домбра",
        "Наурыз",
        "Ой-толгау"
      ]
    },
    {
      "name": "Россия (Татарстан · Саха · Тыва · Башкортостан)",
      "role": "Тюркский родственник",
      "share": [
        "Тюркские языки",
        "Кюй",
        "Хомус (варган)",
        "Эпосы",
        "Наурыз"
      ]
    },
    {
      "name": "Иран",
      "role": "Тюркская диаспора",
      "share": [
        "Туркмены",
        "Азербайджанцы",
        "Ковёр",
        "Дастан",
        "Огузский язык"
      ]
    },
    {
      "name": "Афганистан",
      "role": "Казахская диаспора",
      "share": [
        "Казахские аулы",
        "Наурыз",
        "Тюбетейка",
        "Домбра"
      ]
    },
    {
      "name": "Венгрия",
      "role": "Древний родственник",
      "share": [
        "Мадьяры",
        "Конная культура",
        "История племён",
        "Туранское движение",
        "Семь племён"
      ]
    }
  ],
  "en": [
    {
      "name": "Kazakhstan",
      "role": "Homeland",
      "share": [
        "Dombra",
        "Horse training",
        "Aitys",
        "Nauryz",
        "Stone balbals",
        "Eagle falconry"
      ]
    },
    {
      "name": "Kyrgyzstan",
      "role": "Turkic kin",
      "share": [
        "Epic of Manas",
        "Komuz",
        "Kokpar",
        "Yurt",
        "Livestock herding"
      ]
    },
    {
      "name": "Uzbekistan",
      "role": "Shared land",
      "share": [
        "Turkistan route",
        "Dombra",
        "Wedding traditions",
        "Silk Road cities"
      ]
    },
    {
      "name": "Turkmenistan",
      "role": "Turkic kin",
      "share": [
        "Akhal-Teke horse",
        "Turkmen carpet",
        "Dutar",
        "Skullcap"
      ]
    },
    {
      "name": "Turkey",
      "role": "Turkic world",
      "share": [
        "Turkic language family",
        "Saz",
        "Epic tales",
        "Equestrian culture",
        "Turkic Council"
      ]
    },
    {
      "name": "Azerbaijan",
      "role": "Turkic kin",
      "share": [
        "Mugham",
        "Tar",
        "Epic tales",
        "Nauryz",
        "Oghuz language"
      ]
    },
    {
      "name": "Mongolia",
      "role": "Great Steppe",
      "share": [
        "Genghis Khan's legacy",
        "Morin khuur",
        "Eagle falconry",
        "Naadam",
        "Old Turkic script"
      ]
    },
    {
      "name": "Xinjiang (PRC)",
      "role": "Kazakh diaspora",
      "share": [
        "1.5 million Kazakhs",
        "Eagle hunters",
        "Dombra",
        "Nauryz",
        "Oi-tolgau"
      ]
    },
    {
      "name": "Russia (Tatarstan · Sakha · Tuva · Bashkortostan)",
      "role": "Turkic kin",
      "share": [
        "Turkic languages",
        "Kuy music",
        "Khomus (jaw harp)",
        "Epics",
        "Nauryz"
      ]
    },
    {
      "name": "Iran",
      "role": "Turkic diaspora",
      "share": [
        "Turkmens",
        "Azeris",
        "Carpet",
        "Epic tales",
        "Oghuz language"
      ]
    },
    {
      "name": "Afghanistan",
      "role": "Kazakh diaspora",
      "share": [
        "Kazakh villages",
        "Nauryz",
        "Skullcap",
        "Dombra"
      ]
    },
    {
      "name": "Hungary",
      "role": "Ancient kin",
      "share": [
        "Magyars",
        "Equestrian culture",
        "Tribal history",
        "Turanism movement",
        "Seven tribes"
      ]
    }
  ]
};

/* Phase 2 — long-form content: extended histories, quiz questions, action modals. */
const HISTORY_I18N = {
  "ru": {
    "yurt_low_quality_texture": "Юрта (киіз үй) — тысячелетнее жилище кочевых казахов. Её истоки уходят к лёгким переносным жилищам андроновской культуры бронзового века, а привычная нам форма окончательно сложилась к XIII веку. Три главных элемента конструкции: кереге (раздвижные решётчатые стены), уыки (гнутые жерди-стропила) и шанырак (верхний круг-купол). К головкам кереге крепится более 60 уыков, сходящихся к шаныраку, — и ни единого гвоздя. Дверь всегда обращена к закату солнца: свет, приходящий с востока, символизирует начало жизни. Внутреннее пространство строго разделено: төр (почётное место) — напротив входа, мужская половина — справа, женская — слева. Шанырак — символ родного очага и продолжения рода. Юрту можно собрать всего за 40 минут. В 2014 году искусство изготовления и установки казахской юрты включено в список нематериального культурного наследия ЮНЕСКО. Изображение шанырака присутствует и на государственном гербе Казахстана.",
    "dombyra_by_sultan_elamanov": "Домбра — душа казахского народа, её истории более 4000 лет. Наскальные рисунки в пещере Майтобе в Алматинской области доказывают существование подобных инструментов уже во II тысячелетии до н.э. В средневековых легендах домбра неразрывно связана с именем Коркыт-ата. Главная особенность инструмента — искусство кюя: способность двумя струнами передать целую историю или человеческое чувство. В XIX веке сложились две исполнительские школы: западная — имена Курмангазы, Дины, Даулеткерея, кюи «Балбыраун», «Сарыарка», «Аксак кулан»; восточная — имена Таттимбета, Абыла, Тюркеша, лирический, певучий стиль. Корпус вырезают из карагача или берёзы, струны раньше делали из верблюжьего волоса, затем из нитей, сегодня — из нейлона. Длина инструмента около 1260 мм, 19 ладов. До наших дней сохранилось 62 кюя. 1 июля 2010 года учреждён Национальный день домбры. В 2014 году искусство игры на домбре включено в список ЮНЕСКО.",
    "kazakh_qobyz_kobyz": "Кобыз — древнейший смычковый инструмент тюркского мира, его происхождение относят примерно к IX веку. В казахском фольклоре считается, что кобыз изобрёл Коркыт-ата: согласно легенде, спасаясь от смерти, он пытался продлить жизнь звуками кобыза. Инструмент вырезается из цельного куска дерева (берёзы, клёна), нижняя часть обтягивается козьей кожей. Две струны свиваются из конского волоса — от 60 до 100 тонких волосков. Смычок дугообразный, также натянут конским волосом. Звук кобыза точно передаёт человеческий голос, стон верблюдицы, стенание ветра. Издревле это инструмент бақсы — шаманов, которые таинственным звучанием призывали духов и лечили больных. В советское время исполнительство на кобызе пришло в упадок, и лишь в XX веке Ыкылас Дукенулы возродил традицию. Сегодня в Национальной консерватории есть кафедра кобыза. Кюи Коркыта «Жер ұйығы» и «Ушардын уласуы» исполняются и поныне.",
    "kazakh_shapan": "Шапан — длинная верхняя одежда казахских мужчин и женщин, восходящая к средневековой тюрко-персидской традиции. Ткань выбирали в зависимости от достатка: шёлк, бархат, плотное сукно, шерсть. Изнутри простёгивали шерстью, пухом или хлопком, а самые ценные шапаны подбивали мехом чёрной кошки. Края отделывали тонким шнуром, петлями, золотной нитью. Орнамент традиционно включает мотивы бараньего рога, гусиной лапки, верблюжьего следа, древа жизни. Цвет указывал на социальный статус: белый шапан носили старейшины рода, голубой — младшие по положению, чёрный — старшие, а красно-бордовый предназначался для богатых и биев. Вручение шапана — «шапан жабу» — одна из высших форм почёта у казахов. Сегодня этим обычаем чествуют новоизбранных президентов и деятелей искусства. Это одеяние, достойное праздника, собрания или дорогого гостя.",
    "taqiya_grey_m_kazakh_national_headdress": "Тюбетейка (тақия) — лёгкий круглый головной убор для тёплого сезона. Её происхождение восходит к древней тюрко-персидской традиции: подобные образы встречаются на средневековых миниатюрах. Шьют её из бархата, шёлка-шайы, плотной ткани или атласа, изнутри укрепляют тонким каркасом, сохраняющим форму. Мужские тюбетейки чаще всего серого, чёрного, тёмно-синего или бордового цвета. Снаружи их тщательно украшают вышивкой белой и золотной нитью — бараний рог, гусиная лапка, древо жизни. Тюбетейка не является унисекс-убором: мужчины носят её открыто (зимой поверх надевают шапку или тымак), а женщины — только под кимешеком или платком. В разных регионах свои стили: на юге — высокие конусовидные, на западе — плоские, на востоке — с богатой вышивкой. Сегодня тюбетейка — современный национальный аксессуар, который молодёжь носит на праздниках и в дни национальных торжеств.",
    "taqiya_yellow_f_kazakh_traditional_headdress": "Девичья тюбетейка — символ юной девушки-подростка и невесты на выданье. От мужской она отличается яркими цветами, золотной вышивкой и нарядными бусинами. Ткань — жёлтый, красный, голубой или зелёный бархат либо шёлк. Сверху крепится одно или два перо филина — считалось, что перо защищает от дурного глаза. Потерять его считалось дурным знаком. Снизу свисают серебряные и золотые подвески, бусины, шашбау (накосные украшения). Убор надевали на праздники, свадебные проводы невесты, национальные торжества. После замужества девичью тюбетейку сменял кимешек — символ женского статуса. Её также надевают на тусау кесер — обряд «разрезания пут» маленького ребёнка. В современных казахских торжествах дизайнеры возрождают тюбетейку, создавая новые стили — она популярна на фестивалях и свадебных церемониях.",
    "saukele_ethno_variant_traditional_headdress": "Саукеле — самый дорогой и самый высокий головной убор, который казахская невеста надевала на свадьбу. Он сформировался в XIV-XVIII веках. Высота достигает 70 см, а иногда и целого метра. Основа — плотная кожа или войлочный конус, обтянутый снаружи красным бархатом. Убор украшали серебром, золотом, жемчугом, сердоликом, костяными вставками. На макушке крепилось длинное лебединое перо — право носить его имели лишь дочери ханов. По бокам свисали длинные шашбау — подвески из нитей жемчуга, спускавшиеся до груди и позвякивавшие при каждом движении невесты. Саукеле обычно изготавливал собственный мастер каждой знатной семьи, и убор демонстрировал её богатство. После свадьбы молодая женщина носила саукеле ещё 3-5 лет (порой вплоть до рождения ребёнка), а затем меняла его на скромный жаулык — платок замужней женщины. Сегодня саукеле — один из самых ценных экспонатов Национального музея, стоимость отдельных образцов оценивается в миллионы долларов.",
    "qamshy_kamshy": "Камча — неизменный спутник табунщика и батыра, символ власти, глубокий знак казахской культуры. Рукоять вытачивают из берёзы, рога горного козла-теке, иногда из кости, длиной около 30-40 см. Плеть плетут из кожи телёнка или быка, используя 8, 16 или 32 тонких ремешка. Высшим мастерством считалось плетение в 64 ремешка. Общая длина камчи — 1-1,5 метра. Рукоять отделывают серебряными накладками и орнаментом. Существуют разные виды: для верховой езды (тонкая), боевая (жёсткая), свадебная (нарядно украшенная), детская (лёгкая). Выражение «у него большая камча» говорят о человеке, наделённом властью. Вручение камчи с пожеланием «сүйінші» на торжествах — знак большого уважения. Камча служила и родовым знаком: у каждого жуза и рода был свой стиль плетения. В современном казахском спорте возрождаются состязания с камчой и игры на меткость.",
    "Asyk": "Асык — древняя детская игра с использованием бараньих альчиков, уходящая корнями в скифо-сакскую эпоху. Подобные игры в разных вариациях существуют у тюркских, монгольских и персидских народов. У асыка четыре стороны — сака (верхняя, гладкая), алшы (выпуклая), бук (вогнутая) — каждая имеет своё значение в игре. На протяжении тысячелетий казахские дети знали десятки вариантов игры: «Хан талапай», «Атбакыл», «Бес тас», «Уш табан», «Андыма-анды». Сака-асык — «царь» игры, и за право обладать им дети устраивали настоящие состязания. Игра в асыки развивает у ребёнка логику, стратегическое мышление, точность и навыки общения. В древних обрядах асык использовали даже в гадании. Сегодня в казахстанских школах вводятся уроки игры в асыки, а на национальных фестивалях проводятся турниры. В 2017 году игра в асыки включена в список нематериального культурного наследия ЮНЕСКО.",
    "besik": "Бесик — одна из самых почитаемых вещей в казахской семье, детская колыбель. Её вырезают из берёзы, ивы или даже можжевельника — эти деревья считались «живыми». Колыбель украшают резьбой и серебряными накладками, длина составляет около 700 мм. Важнейшая деталь — «шумек» в нижней части, специальное отверстие для отвода естественных нужд младенца, к которому крепится курдючный хвостик ягнёнка. С колыбелью связано несколько важных обрядов: «бесікке салу» — первое укладывание младенца в колыбель на пятый день его жизни, которое совершают бабушки; «тусау кесер» — разрезание символических пут на ножках ребёнка, когда он начинает ходить; «шильдехана» — праздник в честь сорокадневного младенца. Колыбель накрывают кошачьей шкуркой и оберегом-тумаром — для защиты от дурного глаза. Колыбельные «алди-алди» казахские матери исполняли веками, и эта традиция также включена в список ЮНЕСКО.",
    "nomad_sabre": "Сабля — клинковое оружие казахского воина, чья история восходит к древней сакской эпохе. В VII-VIII веках сабля широко применялась в казахской степи дулатами и кипчаками. Клинок ковали из высококачественной стали — часто дамасской или хорасанской. Рукоять изготавливали из берёзы, рога или кости, порой украшали слоновой костью. Длина клинка — около 90 см, вес — 1-1,2 кг. Ножны обтягивали кожей, а их концы отделывали серебром и золотом. Саблю передавали батыры по наследству из поколения в поколение. В годы джунгарского нашествия (1723-1750) батыры Абылай, Абулмансур, Райымбек, Богенбай, Кабанбай и Наурызбай сражались этими саблями в трагический период «Актабан шубырынды», отвоёвывая свободу народа. В XIX веке сабля оставалась главным оружием в войске хана Кенесары. Сегодня такие сабли хранятся в музеях и как фамильные реликвии.",
    "balbal_tas": "Балбал тас — каменные изваяния в облике человека, созданные в эпоху древних тюрков (VI-IX века). Слово «балбал» происходит от тюркского «баба» — «великий предок, защитник». Такие изваяния ставились на могилах прославленных воинов, ханов и биев. Сотни подобных памятников найдены в Казахстане, Монголии, на Алтае, в Тянь-Шане и Южной Сибири. У некоторых изваяний руки держат чашу — символ вечного пира в загробном мире. На других закреплены изображения сабли, камчи, поясной пряжки. Вместе с покойным хоронили его оружие, коня, порой жену и скот — считалось, что он продолжает пользоваться своим имуществом в ином мире. Древние тюрки почитали каменные изваяния как священные, приносили им жертвы и устраивали поминальные трапезы в честь духа умершего. Современные казахские надгробные памятники — прямое продолжение традиции балбал тасов. Они хранятся в национальных музеях и под открытым небом в этно-мемориалах.",
    "tamgaly_sun_man": "Петроглифы Тамгалы — древний памятник наскального искусства в Алматинской области, в 170 км к северо-западу от Алматы. Найдено свыше 5000 наскальных изображений, самые ранние из которых относятся к бронзовому веку (XIV-XI века до н.э.). Одно из самых знаменитых изображений — «солнцеголовый человек» (Solar-headed deity): голова в виде диска, испускающего лучи, руки широко раскинуты. Это, предположительно, образ Бога-Солнца из древней тюрко-иранской мифологии — Митры или Дингира. В этом месте некогда проводились древние шаманские обряды — поблизости найдены жертвенные площадки и захоронения. В 2004 году Тамгалы включён в список Всемирного культурного наследия ЮНЕСКО — один из трёх объектов такого статуса в Казахстане. Сегодня здесь действует археологический музей под открытым небом, для туристов проводятся экскурсии.",
    "astau_tabaq": "Астау (или тегене) — сердце казахского дастархана, большое деревянное блюдо. Его вырезают из цельного куска берёзы, ивы или ели. Диаметр — 50-80 см, глубина — 15-20 см. Край обычно украшен резьбой в виде бараньего рога, древа жизни, солнца и звёзд. При изготовлении мастер 3-6 месяцев сушит дерево, а затем вручную, без станков, выдалбливает форму специальным резцом. Самые большие блюда называют «астау патша» — «царь-астау», их делают для больших торжеств на 30-40 человек. На дастархан из астау подают бешбармак (мясо с тестом), казы, плов, кебаб. Поднести гостю голову или сердце бешбармака — старшему в знак почёта — особый обряд «бас ұсыну». Существует традиция дарить астау отдельной семье — «астау беру», свадебный подарок. В старину у каждой семьи было своё астау, передававшееся по наследству. У современных казахов астау по-прежнему занимает почётное место на праздновании бешбармака.",
    "torsyk_kymyz": "Торсык — кожаный бурдюк коричневого цвета для хранения кумыса, воды или шубата. Его происхождение восходит к скифо-сакской эпохе — фрагменты подобных кожаных сосудов найдены при раскопках. Изготовление — сложный процесс: с кожи взрослого телёнка или быка тщательно счищают шерсть, обрабатывают кислым молоком, после чего два края сшивают мелким плотным швом. Снаружи поверхность украшают тиснёными штампами — орнаментом в виде рога, растительными и цепными мотивами. Горловина узкая, закрывается деревянной пробкой. Особенность торсыка в том, что кумыс продолжает естественно бродить внутри и остаётся прохладным даже в жаркий день. В Западном Казахстане, особенно в Атырауской и Западно-Казахстанской областях, до сих пор работают мастера, изготавливающие такие кожаные сосуды. Данный экспонат происходит из Западно-Казахстанского областного историко-краеведческого музея, это подлинный образец XIX века.",
    "sedlo": "Седло (ер-тоқым, или просто «ер») — неотъемлемый спутник воина и охотника, вершина тысячелетней кочевой культуры. Оно использовалось ещё в древнюю сакскую эпоху. Деревянный каркас (арчак) вытачивали из твёрдой берёзы, обтягивали кожей, шерстью, порой изнутри войлоком. Снаружи седло обтягивали кожей и наносили орнамент. В древности седло предназначалось исключительно для воинов-мужчин, но в XVIII-XIX веках появились и изящные женские сёдла — тонкие и нарядные. Данное седло XIX века из фондов Западно-Казахстанского областного музея украшено ажурными пластинами из позолоченного металла, в центральной части — вставками красного сердолика. Такие сёдла принадлежали только ханам, биям или богатым семьям. Конская упряжь включает более 30 деталей: подпругу, нагрудник, узду, поводья, стремена, нагрудный ремень. Современные казахи демонстрируют такие сёдла на торжественных церемониях и по сей день.",
    "aibalta": "Айбалта — боевое оружие казахского воина, известное со времён древних тюрков. Название образовано от слов «ай» (полумесяц) и «балта» (топор) — по форме лезвия. Головка имеет форму полумесяца, лезвие длиной 15-25 см. Рукоять из дерева или рога, длиной 60-80 см, вес — 1-2 кг. В древности оружие применялось преимущественно в бою — в ближней схватке или на скаку одним ударом можно было сразить противника. Рукоять отделывали серебром, серебряными накладками и кольцами. У некоторых айбалт в рукояти есть отверстие для тонкого шнура — чтобы оружие не выскользнуло из руки в бою. В XVIII-XIX веках айбалта была не только оружием, но и знаком отличия биев и богатых людей, а в сказаниях выступала как волшебное оружие. В западноказахском фольклоре встречаются образы «Абылая с айбалтой», «Наурызбая с айбалтой». Данный экспонат XIX века происходит из Западно-Казахстанского областного историко-краеведческого музея.",
    "qalqan": "Щит (қалқан) — защитное оружие воина, тысячелетнее древнее наследие. Представленный щит XVIII века — один из ценных экспонатов Национального музея. Он изготовлен из выпуклого (сферического) стального листа диаметром примерно 50-60 см. Край и центральная часть отделаны пластинами из латуни. На поверхности тщательно выгравированы изображения пеших и конных воинов, диких животных (архара, барса), а также надписи в стиле куфи — арабской каллиграфии. Куфические надписи содержат аяты из Корана, обращённые к воину («Власть принадлежит Аллаху...»), и защитные молитвы. Внутренняя сторона обшита красной тканью и мягкой кожей — для смягчения ударов. Такие роскошные щиты принадлежали лишь ханским особам и биям и редко выносились в настоящий бой — чаще их демонстрировали на парадах и торжествах. Вершина мастерства тюркских, казахских и среднеазиатских ювелиров и оружейников.",
    "kubi": "Кубы — деревянный сосуд для приготовления кумыса. Он имеет форму трапеции (узкий верх, широкое основание), высота — 60-80 см. Изготавливается из тонких сосновых дощечек-клёпок, скреплённых тремя-четырьмя металлическими обручами тёмного цвета. Внутри находится писпек — деревянный инструмент с длинной рукоятью (около 90 см), на нижнем конце которого закреплён специальный резной кружок-мешалка. Процесс приготовления кумыса таков: кобылье молоко заливают в кубы, добавляют закваску, а затем в течение дня взбивают писпеком 1000-2000 раз. Благодаря этому механическому воздействию молоко сбраживается, и получается свежий кумыс — «тың қымыз». Иногда изготавливали кубы в полтора-два раза крупнее обычного — для больших торжеств. В семьях Акмолинской, Карагандинской и Павлодарской областей такие сосуды использовались в быту вплоть до середины XX века. Современные казахи в кумысном хозяйстве по-прежнему пользуются кубы.",
    "ojau": "Ожау — деревянный половник для разлива кумыса, айрана, шубата по чашам и мискам. Вырезается из цельного куска дерева (берёзы, ивы, чёрного дерева). Длина — 30-50 см, глубина черпака — 6-10 см. Рукоять длинная, удобная для захвата, иногда украшена тонкой резьбой. У кочевников большая часть утвари делалась именно из такого дерева — она не скользит, не бьётся, лёгкая и удобная для перевозки. Ожау играет важную роль в застольном этикете: его всегда держит в руках старший, разливающий кумыс в порядке старшинства. На больших торжествах одновременно работают десятки ожау. Некоторые мастера украшают ожау резьбой и особым крючком снизу — чтобы вешать его на стену. Данный экспонат начала XX века происходит из музея Акмолинской области (в окрестностях Астаны). Сегодня ожау используется на этнофестивалях и в национальной кухне.",
    "sandyq": "Сундук (сандық) — деревянный предмет мебели, в котором казахская семья хранила самые ценные вещи. Он играл важную роль и в кочевых переходах — его навьючивали на верблюда для долгого пути. Материал — берёза, ива, чёрная береза, порой кедр. Длина — 80-120 см, высота — 40-60 см. Снаружи сундук оковывали тонким металлом — не только для прочности, но и ради узорной красоты. В центре и по бокам крепились серебряные и латунные пластины с резьбой и гравировкой. Внутри хранили жасау — приданое, которое девушка забирала в новый дом, расшитый шапан, кимешек, серебряные украшения, книги, семейные реликвии. Пожелание «сандық толы болсын» произносили во время обряда вручения приданого — в значении «пусть твоя семья будет в достатке». В старину сундуки изготавливали особые мастера, а сам механизм открывания и запирания считался настоящим искусством. У некоторых сундуков сложные замки открывались тремя-четырьмя разными ключами. У современных казахов сундук остаётся символом древней культуры.",
    "togyzqumalaq": "Тогызкумалак — древняя степная логическая игра, известная у казахов, киргизов и туркмен. «Тогыз» + «құмалақ» переводится как «девять шариков». Игра восходит к семейству манкала, зародившемуся в Африке 4-5 тысяч лет назад и распространившемуся по Великому Шёлковому пути. Доска для тогызкумалака вырезается из дерева, иногда из камня. С каждой стороны — по девять лунок, а в центре — два больших «казана» для сбора выигранных шариков. В начале игры в каждой лунке лежит по 9 шариков, всего их 162. Игроки по очереди берут шарики из лунки и раскладывают их по кругу по часовой стрелке. Есть непростые правила: «отау» — создание особой ловчей лунки, «түсім» — захват шариков соперника. Партия обычно длится 30-60 минут, но между гроссмейстерами может растянуться на 3-4 часа. В 1949 году была основана республиканская федерация Казахстана по этой игре. Сегодня проводятся чемпионаты мира, игра официально входит в программу Азиатских игр. В школах введены уроки тогызкумалака.",
    "sazsyrnai": "Саз сырнай — древний духовой инструмент из обожжённой глины, изготавливавшийся на земле древнего Туркестана. Его происхождение относится к бронзовому веку — II-I тысячелетию до н.э. Форма напоминает крупное яйцо, с 6-12 звуковыми отверстиями. В старину это был преимущественно инструмент пастухов и детей — на нём играли летом на джайляу, пася скот. Иногда его использовали и в религиозных обрядах — считалось, что глиняный инструмент напрямую связан с природой. Диапазон звучания ограничен, но тембр чистый и своеобразный. Современные гончарные мастера возрождают саз сырнай, придавая ему разные формы — барана, верблюда, птицы, шанырака. Экземпляр, хранящийся в Национальном музее, создан в честь 1500-летия Туркестана (2000 год) — на нём изображены мавзолей Ходжи Ахмеда Ясави и караван верблюдов, а также надпись «Туркестан 1500». Сегодня саз сырнай используют этномузыканты в стилях этно-джаз и world music.",
    "shanqobyz": "Шанкобыз (варган) — древний язычковый инструмент, известный у тюркских, монгольских, финно-угорских народов и даже у американских индейцев. Его происхождение относится к периоду 4-5 тысяч лет назад в Азии. Изготавливается из металлической (реже деревянной) пластины с тонким гибким язычком посередине. Техника игры: инструмент плотно зажимают между передними зубами и приводят язычок в движение пальцем. Ротовая полость служит резонатором — изменяя положение языка, губ и дыхания, музыкант извлекает разнообразные мелодии. Инструмент применялся в древних шаманских обрядах, трансовых медитациях, ночных игрищах. В казахских преданиях ночная игра на шанкобызе считалась «призывом духов». Юноша нередко исполнял на шанкобызе собственную мелодию, чтобы выразить любовь избраннице. В начале XX века инструмент почти был забыт, но сегодня национальные музыканты возрождают традицию. Экспонат Акмолинского областного музея — современная реплика 2015 года, изготовленная по традиционной технике. В мире варган популярен в стилях этно-джаз и world music.",
    "perstenj": "Перстень «Птичий клюв» — работа костанайских ювелиров XIX века, высокий образец казахского национального ювелирного искусства. Каст (гнездо для камня) овальной формы с заострёнными концами, напоминающими птичий клюв, — отсюда и название. Материал — высокопробное серебро, в гнездо вставлен небольшой камень (агат, сердолик или бирюза). Техники отделки: скань (плетение из тонкой серебряной нити), зернь (напайка мелких серебряных шариков), плетёный узор по краю. По древним казахским представлениям перстни служили не просто украшением, а оберегом-тумаром: камень защищал владельца от дурного глаза и болезней. Каждый камень наделялся собственным значением: агат — авторитет, сердолик — благополучие дома, бирюза — удачу в пути. В Костанайской, Актюбинской и Западно-Казахстанской областях существовали целые ювелирные династии, секреты которых передавались только по наследству. Данное изделие хранится в Костанайском областном историко-краеведческом музее.",
    "bilezik": "Браслет (білезік) — украшение, которое казахские женщины носили с глубокой древности. Браслеты, найденные в древних курганах, датируются VII-V веками до н.э. (сакская эпоха). Материалы разнообразны: серебро, золото, сплав серебра с золотом; цветные камни — сердолик, жемчуг, бирюза, агат. Представленное изделие — работа современного казахского ювелира Шапабаева Кайрата Булатовича. Браслет массивный, разомкнутой формы (без застёжки, легко надевается на руку), поверхность украшена геометрическим орнаментом — треугольниками, ромбами, кругами. Центральный акцент — три овальных агатовых камня, равномерно расположенных по окружности браслета. Камни закреплены в выступающих оправах. Согласно древней тюркской традиции браслет также служил оберегом — считалось, что если увидеть браслет на правой руке, это приносит счастье. Его дарили девушкам как свадебный подарок или в праздничные дни. Экспонат хранится в Музее декоративно-прикладного искусства имени Шаймардана Сариева — обладателе одной из крупнейших ювелирных коллекций Казахстана.",
    "kese": "Пиала (кесе) — керамическое изделие XVIII-XIX веков, происходящее из городов на Великом Шёлковом пути: Отрара, Тараза, Сайрама. Средневековый Отрар (Фараб) был одним из крупнейших центров гончарного ремесла Центральной Азии — здесь родился Аль-Фараби, а сам древний город процветал в V-XVI веках. Процесс изготовления керамики: собирали местную глину, придавали форму на гончарном круге, затем обжигали в специальной печи при температуре 800-1000°C. Особая техника данной пиалы — «роспись по белому фону глазури»: по белой глазури наносился орнамент кобальтовыми и коричневыми минеральными красками. Мотивы орнамента — растительные (древо жизни), геометрические фигуры, порой надписи в стиле куфи. Пиалы обычно использовались для кумыса, чая, талкана. Данное изделие — экспонат историко-культурного комплекса «Old Shymkent» («Шым қала»), музея-заповедника под открытым небом близ Шымкента. Оно возрождает дух средневековых городов Отрара, Сайрама и Испиджаба.",
    "korzhyn": "Коржын — традиционная дорожная сумка кочевых казахов, парная переметная сума, которую вешали на коня или верблюда. Известна со времён древней сакской эпохи — фрагменты подобных тканых сумок найдены в Пазырыкских курганах. Материал — толстая шерстяная нить (овечья, верблюжья), порой окрашенная растительными красителями. Техники изготовления — терме и каражаки — старинные сложные способы плетения, позволяющие создавать многоцветный узор. Форма прямоугольная, в месте сгиба — узкая перемычка-«шея» для перекидывания через седло или плечо. Орнамент на обеих сторонах одинаков — символ равновесия. Наиболее распространённые узоры: ромбовидный медальон (символ солнца, мира, семьи), бараний рог (символ изобилия), звёзды, цветы, цепочки. Цветовая палитра: густо-красный (в центре, доминирующий), белый, чёрный, зелёный, лиловый, жёлтый — все из натуральных красителей (марена, куркума, лист инжира). По краям — нитяные кисточки, считавшиеся оберегом от сглаза. Внутрь укладывали дорожную еду, посуду, мелкие вещи, порой книги. Коржын был важной частью приданого невесты — его передавали новому дому как родовую реликвию. У современных казахов коржын стал элементом дизайна: сумки, предметы интерьера, аксессуары для национальных праздников. Данный экспонат хранится в собрании Национального музея Республики Казахстан.",
    "syrmaq": "Сырмак — самый сложный и красивый вид традиционного казахского войлочного ковра. Его основа — войлок (плотная свалянная овечья или верблюжья шерсть), а техника исполнения — «мозаика», или аппликация из вырезанных узоров. Процесс изготовления таков: сначала свойлачивают два полотна разного цвета (обычно тёмно-коричневое и белое). Затем мастерица вырезает из каждого одинаковые по рисунку фрагменты орнамента. Кусочки соединяют друг с другом мелким плотным швом — так возникают ромбовидные медальоны, растительные мотивы, узор бараньего рога. На изготовление одного сырмака уходит от 3 до 6 месяцев. Три ромбических медальона в центре толкуются как символ трёх жузов или членов рода. Сложный узор ветвей внутри медальона — «древо жизни», отголосок древней тюрко-иранской мифологии. Окружающий его орнамент бараньего рога — символ изобилия, отсылка к скотоводству как главному источнику богатства. Цветовая палитра данного сырмака: густо-коричневый (доминирующий), белый (внутри медальонов), местами лиловые и красные акценты. Сырмак стелили на почётное место в юрте, а порой он входил в приданое невесты. В старинных казахских аулах у каждой семьи был свой сырмак — со своим оберегом и своей историей. Современные мастерицы, особенно в Туркестанской области, сохраняют эту традицию, создавая сырмаки, подходящие и для современного интерьера. Ремесло готовится к включению в список нематериального культурного наследия ЮНЕСКО.",
    "dulyga": "Дулыга — железный защитный шлем казахского воина. Его истоки восходят к железным шлемам сакской, гуннской и тюркской эпох — VII-V векам до н.э. Подобные железные и бронзовые шлемы найдены в Пазырыкских курганах. В XVIII-XIX веках, в эпоху казахских войн, дулыга оставалась главным средством защиты головы: во время джунгарского нашествия (1723-1750) батыры Абылай, Кабанбай, Наурызбай и Богенбай выходили в бой именно в таких шлемах. Представленный экспонат — точная реконструкция современного мастера Алибая Берика Сатынбекулы, выполненная на основе подлинных образцов XVIII-XIX веков. Конструкция сложна: верхняя часть куполообразная, выкована из цельного железного листа, на макушке закреплено острое металлическое навершие (для устрашения противника либо для крепления перьев или бунчука). На лбу — узкая налобная пластина, защищающая глаза воина. Снаружи нанесён орнамент в стиле арабской каллиграфии — аяты из Корана и защитные молитвы (сура «Ан-Наср»). В нижней части — бармица (кольчужная сетка) из тонких (диаметром 5-8 мм) железных колец, защищающая затылок, шею и плечи от удара саблей. В одной бармице может быть 15-20 тысяч колец — на её изготовление у мастера уходило несколько месяцев. В старину бармица была доступна лишь ханам и знатным батырам — настолько дорогой была эта вещь. Алибай Берик Сатынбекулы — современный кузнец, возрождающий древнюю традицию обработки железа. В его мастерской полностью воссоздаётся снаряжение казахского воина XVIII-XIX веков. Экспонат хранится в Музее декоративно-прикладного искусства имени Шаймардана Сариева."
  },
  "en": {
    "yurt_low_quality_texture": "The yurt (kiiz úi) is the thousand-year-old dwelling of the nomadic Kazakhs. Its roots trace back to the light portable shelters of the Bronze Age Andronovo culture, while the form we know today was fully established by the 13th century. Three main elements make up its structure: the kerege (folding lattice walls), the uyk (curved roof poles), and the shanyrak (the crown-shaped roof ring). More than 60 uyks run from the tops of the kerege to the shanyrak — and not a single nail is used anywhere. The door always faces the sunset, while the light entering from the east is said to mark the beginning of life. The interior is carefully divided: the tör (place of honor) sits opposite the entrance, the men's side is to the right, and the women's side to the left. The shanyrak stands for the family hearth and the continuity of the lineage. A yurt can be assembled in as little as 40 minutes. In 2014, the craft of making and raising the Kazakh yurt was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. An image of the shanyrak also appears on the state emblem of Kazakhstan.",
    "dombyra_by_sultan_elamanov": "The dombra is the soul of the Kazakh people, with a history spanning more than 4,000 years. Rock carvings in the Maitobe cave in Almaty Region prove that similar instruments already existed in the 2nd millennium BCE, and medieval legends link the instrument to Korkyt-ata. What sets the dombra apart is the art of the küi — the ability to convey an entire story or a deeply personal feeling through just two strings. Two performing schools emerged in the 19th century: the Western school, associated with Kurmangazy, Dina, and Dauletkerei, with küis such as \"Balbyrauyn,\" \"Saryarka,\" and \"Aksak Kulan\"; and the Eastern school, associated with Tattimbet, Abyl, and Turkesh, marked by a lyrical, flowing style. The body is carved from elm or birch; the strings were once made from camel hair, later from thread, and today from nylon. The instrument measures about 1,260 mm in length and has 19 frets. Some 62 küis have survived to this day. On July 1, 2010, National Dombra Day was established, and in 2014 the art of dombra playing was inscribed on the UNESCO list.",
    "kazakh_qobyz_kobyz": "The kobyz is the oldest bowed string instrument of the Turkic world, its origins reaching back to roughly the 9th century. Kazakh folklore credits its invention to Korkyt-ata: according to legend, fleeing from death, he sought to prolong life through the sound of the kobyz. The instrument is carved from a single piece of wood (birch or maple), its lower body covered with goat hide. Its two strings are twisted from horsehair — anywhere from 60 to 100 fine strands — and the bow, too, is strung with horsehair. The kobyz's voice can render the human cry, the moan of a mourning camel, or the wail of the wind with striking precision. It was long the instrument of baqsy shamans, who used its otherworldly tone to summon spirits and heal the sick. Performance on the kobyz declined during the Soviet era, until Ykhlas Dukenuly revived it in the 20th century. Today the National Conservatory has its own kobyz department, and Korkyt's küis \"Zher Uiygy\" and \"Ushardyn Ulasuy\" are still performed.",
    "kazakh_shapan": "The shapan is the long outer robe worn by Kazakh men and women, rooted in the medieval Turkic-Persian tradition. The fabric reflected the wearer's means: silk, velvet, fine wool, or dense cloth. It was quilted inside with wool, down, or cotton, while the finest shapans were lined with black cat fur. The edges were trimmed with fine cord, loops, and gold thread, and the embroidery typically featured the ram's horn, goose foot, camel footprint, and tree-of-life motifs. Color signaled social standing: white shapans were worn by clan elders, pale blue by those of lower rank, black by elders, and deep crimson-red was reserved for the wealthy and the biys (judges). Presenting a shapan — \"shapan zhabu\" — remains one of the highest honors in Kazakh culture, a tradition still observed today when newly inaugurated presidents and celebrated artists are honored with the gift of a robe. It is the garment befitting a wedding, a gathering, or an honored guest.",
    "taqiya_grey_m_kazakh_national_headdress": "The taqiya is a light, round skullcap worn during the warm season. Its origins lie in the ancient Turkic-Persian tradition, and similar shapes appear in medieval miniatures. It is sewn from velvet, shayi silk, fine cloth, or satin, with a thin internal frame that holds its shape. Men's taqiyas are usually grey, black, dark blue, or maroon. They are meticulously embroidered on the outside with white and gold thread in motifs such as the ram's horn, goose foot, and tree of life. The taqiya is not a unisex garment: men wear it bare-headed (topping it with a hat or tymak in winter), while women wear it only beneath a kimeshek or headscarf. Regional styles vary — tall and conical in the south, flat in the west, richly embroidered in the east. Today the taqiya is a modern national accessory worn by young people at national holidays and celebrations.",
    "taqiya_yellow_f_kazakh_traditional_headdress": "The girl's taqiya is a symbol of a young girl approaching marriageable age. It differs from the men's version in its bright colors, gold embroidery, and ornate beading. The fabric is yellow, red, pale blue, or green velvet or silk. One or two owl feathers are fastened to the top — the owl feather was believed to ward off the evil eye, and losing it was considered a bad omen. Silver, gold, beads, and shashbau (braid ornaments) hang from beneath it. It was worn at weddings, at a bride's farewell ceremony, and at national celebrations. After marriage, the girl's taqiya gave way to the kimeshek, the symbol of a married woman's status; it is also worn by a young child at the tusau keser, the \"rope-cutting\" first-steps ceremony. At today's Kazakh celebrations, designers are reviving the taqiya with new styles, making it a popular sight at festivals and wedding ceremonies.",
    "saukele_ethno_variant_traditional_headdress": "The saukele is the most costly and the tallest headdress worn by a Kazakh bride at her wedding, a form that took shape between the 14th and 18th centuries. It can stand up to 70 cm tall, occasionally reaching a full meter. Its base is thick leather or felt shaped into a cone and covered in red velvet, then adorned with silver, gold, pearls, carnelian, and bone inlays. A long swan feather was fixed at the crown — a privilege reserved for the daughters of khans. Long shashbau ornaments of strung pearls hung from either side, reaching down to the chest and chiming softly with the bride's every movement. Each noble family traditionally had its own master craftsman make the saukele, and the headdress served as a display of the family's wealth. After the wedding, the young bride wore it for another three to five years, sometimes until the birth of her first child, before exchanging it for the zhaulyq, the modest headscarf of a married woman. Today the saukele is among the most valuable pieces in the National Museum's collection, with individual examples valued in the millions of dollars.",
    "qamshy_kamshy": "The qamshy (whip) was the constant companion of the herdsman and the batyr, a symbol of authority and a profound emblem of Kazakh culture. Its handle, about 30–40 cm long, is turned from birch, mountain goat horn, or occasionally bone. The lash is braided from calf or bullock hide, using 8, 16, or 32 fine strips — the finest craftsmen braided as many as 64. The whip's overall length is 1 to 1.5 meters, and the handle is often trimmed with silver fittings and ornament. Several types exist: a slender whip for riding, a stiff whip for battle, an ornately decorated whip for weddings, and a light whip for children. To say a man \"has a large qamshy\" is to say he holds power over the people. Presenting a qamshy as a \"süiinshi\" gift at a celebration is a mark of great respect, and it also served as a clan emblem, with each zhuz and clan favoring its own braiding style. Qamshy races and skill contests are seeing a revival in contemporary Kazakh sport.",
    "Asyk": "Asyk is an ancient children's game played with sheep anklebones, its roots reaching back before the Scythian-Saka era. Related games in various forms exist among Turkic, Mongolian, and Persian peoples. The asyk bone has four sides — saqa (the flat top), alshy (the convex side), and buk (the concave side) — each carrying its own meaning in play. Over thousands of years, Kazakh children have known dozens of game variants, including \"Khan Talapai,\" \"Atbaqyl,\" \"Bes Tas,\" \"Ush Taban,\" and \"Andyma-Andy.\" The saqa-asyk is the \"king\" of the game, and children would compete fiercely to win it. Through asyk, a child learns logic, strategy, precision, and social interaction; in ancient rituals it was even used for fortune-telling. Today, asyk lessons are being introduced in Kazakhstan's schools, and tournaments are held at national festivals. In 2017, the game of asyk was inscribed on UNESCO's Intangible Cultural Heritage list.",
    "besik": "The besik, or cradle, is one of the most sacred objects in a Kazakh household. It is carved from birch, willow, or even juniper — woods regarded as \"living.\" It is decorated with carving and silver fittings and measures about 700 mm in length. Its most important feature is the shumek, a special fitting in the lower part that channels the infant's waste, fitted with a lamb's tail. Several important rituals surround the cradle: besikke salu, when grandmothers first place the baby into the cradle on the fifth day of life; tusau keser, the cutting of symbolic ties around a child's ankles when they begin to walk; and shildekhana, a celebration held for a forty-day-old infant. A cat's pelt and a protective amulet, the tumar, are placed over the cradle to ward off the evil eye. The lullabies known as \"äldi-äldi,\" sung by Kazakh mothers, developed over centuries and are themselves inscribed on the UNESCO list.",
    "nomad_sabre": "The sabre was the bladed weapon of the Kazakh warrior, its history reaching back to the ancient Saka era. In the 7th and 8th centuries, the Dulat and Qypshaq tribes made wide use of the sabre across the Kazakh steppe. Blades were forged from high-quality steel, often Damascus or Khorasan steel, with handles made of birch, horn, or bone, sometimes inlaid with ivory. The blade measured about 90 cm and weighed 1 to 1.2 kg, while the leather-covered scabbard was fitted with silver and gold at its ends. A sabre was typically handed down within a family from one generation of warriors to the next. During the Dzungar invasions (1723–1750), the batyrs Abylai, Abulmansur, Raiymbek, Bogenbai, Kabanbai, and Nauryzbai fought with such sabres through the tragic era of the \"Aqtaban Shubyryndy\" (Great Disaster), winning back the country's freedom. In the 19th century, the sabre remained the principal weapon of Khan Kenesary's army. Today such sabres are preserved in museums and as family heirlooms.",
    "balbal_tas": "Balbal tas are stone figures carved in human likeness during the era of the ancient Turks (6th–9th centuries). The word \"balbal\" derives from the Turkic \"baba,\" meaning \"great ancestor, protector.\" They were erected at the graves of renowned warriors, khans, and biys. Hundreds of such monuments have been found across Kazakhstan, Mongolia, the Altai, the Tian Shan, and southern Siberia. Some figures hold a cup in their hands, representing an eternal feast in the world of the dead; others bear carved images of a sabre, a whip, or a belt buckle. The deceased was buried together with his weapons, his horse, and sometimes his wife and livestock, in the belief that he would continue to use his possessions in the afterlife. The ancient Turks regarded these stone figures as sacred, offering sacrifices and holding memorial feasts in honor of the departed's spirit. Kazakh gravestones today are a modern echo of the balbal tas tradition, and such monuments are preserved both in national museums and in open-air ethnographic memorials.",
    "tamgaly_sun_man": "The Tamgaly petroglyphs are an ancient rock-art site in Almaty Region, located 170 km northwest of the city of Almaty. More than 5,000 rock carvings have been discovered there, the earliest dating to the Bronze Age (14th–11th centuries BCE). One of the most famous images is the \"Sun-Headed Man\" (Solar-headed deity) — a figure whose round head radiates rays of light, arms spread wide. It is thought to depict a Sun deity from ancient Turkic-Iranian mythology, possibly Mithra or Dingir. The site once hosted ancient shamanic rituals, and sacrificial platforms and burial grounds have been found nearby. In 2004, Tamgaly was inscribed on UNESCO's World Heritage List, one of only three sites in Kazakhstan to hold this status. Today an open-air archaeological museum operates on the site, offering guided tours to visitors.",
    "astau_tabaq": "The astau, or tegene, is the centerpiece of the Kazakh dastarkhan, a large wooden serving bowl carved from a single piece of birch, willow, or spruce. It measures 50–80 cm in diameter and 15–20 cm deep, its rim typically carved with the ram's horn, tree-of-life, and sun-and-star motifs. To make one, a craftsman dries the wood for three to six months before hollowing it out entirely by hand with a special chisel, without machinery. The largest bowls, known as \"astau patsha\" (king astau), were made for great feasts of 30–40 guests. Dishes such as besbarmaq (meat with pasta), qazy, plov, and kebab are served from the astau. Offering the besbarmaq's intestine to an elder — the \"bas usynu\" ritual — is a gesture of deep respect. There is also a tradition of gifting an astau to a newly formed household, known as \"astau beru.\" In earlier times, each family owned its own astau, passed down through generations as an heirloom, and to this day the astau holds pride of place at Kazakh besbarmaq feasts.",
    "torsyk_kymyz": "The torsyk is a brown leather flask used to store kumys, water, or shubat. Its origins reach back to the Scythian-Saka era, when fragments of similar leather vessels have been found in excavations. Making one is an intricate process: the skin of an adult calf or bullock is carefully cleaned, treated with sour milk, and then the two edges are joined with a fine, tight seam. The exterior is stamped with decorative patterns — horn motifs, plant designs, and chain-link ornament. The neck is narrow and stoppered with a wooden plug. A distinctive quality of the torsyk is that kumys continues to ferment naturally inside it and stays cool even on a hot day. Craftsmen who make such leather vessels still work today in Western Kazakhstan, particularly in Atyrau and West Kazakhstan regions. This particular piece comes from the West Kazakhstan Regional History and Local Studies Museum and is a genuine 19th-century example.",
    "sedlo": "The saddle (er-toqym, or simply \"er\") was the inseparable companion of the warrior and the hunter, a pinnacle of the thousand-year-old nomadic culture, in use since the ancient Saka era. Its wooden frame was carved from hard birch and covered with leather, wool, and sometimes felt on the inside, then finished on the outside with tooled leather and ornament. In ancient times, saddles were made exclusively for male warriors, but by the 18th and 19th centuries slender, ornate saddles for women also appeared. This 19th-century saddle from the West Kazakhstan Regional Museum's collection is decorated with openwork panels of gilded metal and set with red carnelian stones at its center. Such saddles belonged only to khans, biys, or wealthy families. A full set of tack includes more than 30 parts — girth, breast strap, bridle, reins, stirrups, and chest strap. Kazakhs still display such saddles at ceremonial events today.",
    "aibalta": "The aibalta was a battle weapon of the Kazakh warrior, known since the era of the ancient Turks. Its name combines \"ai\" (crescent moon) and \"balta\" (axe), describing the shape of its blade. The head is crescent-shaped, with a blade 15–25 cm long, and the wooden or horn handle measures 60–80 cm, with the whole weapon weighing 1–2 kg. In earlier times it was used mainly in warfare — in close combat, or from horseback, capable of felling an opponent with a single blow. The handle was often finished in silver, with silver fittings and rings; some aibaltas have a hole bored through the handle for a cord, so the weapon would not slip from the warrior's grip in battle. By the 18th and 19th centuries, the aibalta had become not just a weapon but a mark of status for biys and the wealthy, and it appears as an enchanted weapon in folk tales. Western Kazakh folklore speaks of figures such as \"Abylai of the aibalta\" and \"Nauryzbai of the aibalta.\" This 19th-century piece comes from the West Kazakhstan Regional History and Local Studies Museum.",
    "qalqan": "The qalqan, or shield, was a warrior's defensive weapon and a thousand-year-old legacy. This particular 18th-century shield is one of the National Museum's prized exhibits. It is made from a convex, dome-shaped steel sheet roughly 50–60 cm in diameter, with its rim and center trimmed in brass plating. Its surface is finely engraved with figures of warriors on foot and on horseback, wild animals such as argali and snow leopards, and inscriptions in the Kufic calligraphic style. The Kufic script includes Qur'anic verses addressed to the warrior (\"Sovereignty belongs to Allah...\") along with protective prayers. The inner face is lined with red cloth and soft leather to cushion the impact of blows. Such ornate shields belonged only to khans' families and biys and were rarely carried into actual battle, appearing instead at parades and celebrations. It represents the pinnacle of craftsmanship among Turkic, Kazakh, and Central Asian metalworkers.",
    "kubi": "The kubi is a wooden vessel used for churning kumys. It is trapezoidal in shape, narrower at the top and wider at the base, standing 60–80 cm tall, built from thin pine staves bound together with three or four dark metal hoops. Inside sits the pispek, a wooden implement with a long handle about 90 cm in length, ending in a carved wooden disc used for churning. To make kumys, mare's milk is poured into the kubi, a starter culture is added, and the mixture is churned with the pispek anywhere from 1,000 to 2,000 times a day. This mechanical churning ferments the milk into fresh \"tyng qymyz.\" Some kubis were made one and a half to two times the standard size for major celebrations. Families in the Akmola, Karaganda, and Pavlodar regions kept such vessels in everyday use until well into the mid-20th century, and Kazakh kumys producers still rely on the kubi today.",
    "ojau": "The ojau is a wooden ladle used to pour kumys, ayran, and shubat into bowls and cups. It is carved from a single piece of wood — birch, willow, or ebony — measuring 30–50 cm in length, with a bowl 6–10 cm deep. Its handle is long and easy to grip, sometimes finished with delicate carving. Among the nomads, most tableware was made from wood of this kind, since it neither slips nor shatters and is light and easy to pack for travel. The ojau plays an important role in dastarkhan etiquette: it is always held by the eldest at the table, who pours kumys in order of age and seniority, and at large celebrations dozens of ojaus may be in use at once. Some craftsmen carve the ojau with ornament and fit it with a small hook so it can be hung on a wall. This early 20th-century example comes from a museum in the Akmola region, near Astana; today the ojau appears at ethnographic festivals and in the national cuisine.",
    "sandyq": "The sandyq, or chest, is a wooden piece of furniture in which a Kazakh family kept its most valued possessions. It also played a key role during nomadic migrations, loaded onto a camel for the long journey. It was made of birch, willow, black birch, or occasionally cedar, measuring 80–120 cm long and 40–60 cm high. The exterior was clad in thin sheet metal, both for durability and for decorative effect, with silver and brass panels bearing carved and engraved designs set into the center and sides. Inside were kept the jasau (a bride's dowry for her new household), an embroidered shapan, a kimeshek, silver jewelry, books, and family heirlooms. The wish \"sandyq toly bolsyn\" — \"may your chest be full\" — was spoken during the dowry-giving ceremony, meaning \"may your family live in abundance.\" In earlier times, chests were made by specialized craftsmen, and the mechanism for opening and locking one was itself considered a fine art; some chests had complex locks requiring three or four different keys to open. Among Kazakhs today, the sandyq remains a symbol of this ancient tradition.",
    "togyzqumalaq": "Togyzqumalaq is an ancient strategic steppe game known among the Kazakh, Kyrgyz, and Turkmen peoples. Its name, \"togyz\" plus \"qumalaq,\" means \"nine pebbles.\" It belongs to the mancala family of games, which originated in Africa some 4,000–5,000 years ago and spread along the Great Silk Road. The board is carved from wood, occasionally stone, with nine pits on each side and two large \"kazan\" pits in the center for collecting captured pebbles. At the start of play, each pit holds nine pebbles, 162 in total. Players take turns lifting the contents of a pit and distributing them counter-clockwise. The rules include intricacies such as \"otau,\" creating a special capturing pit, and \"tusim,\" capturing an opponent's pebbles. A typical game lasts 30 to 60 minutes, though matches between grandmasters can stretch to three or four hours. Kazakhstan's national federation for the game was founded in 1949. Today world championships are held, and the game holds official status at the Asian Games; togyzqumalaq lessons have also been introduced in schools.",
    "sazsyrnai": "The saz syrnai is an ancient wind instrument fired from clay on the land of ancient Turkistan, its origins reaching back to the Bronze Age, the 2nd–1st millennia BCE. Shaped like a large egg with 6 to 12 finger holes, it was traditionally an instrument of shepherds and children, played in summer pastures while tending livestock. It was occasionally used in religious rites as well, the clay instrument being thought to connect directly with nature. Its range is limited, but its tone is clear and distinctive. Contemporary potters have revived the saz syrnai, shaping it into forms such as sheep, camels, birds, and the shanyrak. The example held at the National Museum was made to mark the 1,500th anniversary of Turkistan in 2000, decorated with the Mausoleum of Khoja Ahmed Yasawi, a camel caravan, and the inscription \"Turkistan 1500.\" Today ethno-musicians play the saz syrnai in ethno-jazz and world music styles.",
    "shanqobyz": "The shan-qobyz, or jaw harp, is an ancient reed instrument known among Turkic, Mongolian, and Finno-Ugric peoples, and even among Native American cultures. It originated in Asia some 4,000 to 5,000 years ago. It is made from a metal — occasionally wooden — plate with a thin, flexible tongue set in the middle. To play it, the instrument is held firmly between the front teeth while a finger sets the tongue in motion; the mouth cavity acts as a resonator, and changes in tongue position, lip shape, and breath produce a variety of melodies. It was used in ancient shamanic rituals, trance meditation, and nighttime gatherings. In Kazakh tradition, playing the shanqobyz at night was believed to \"call the spirits,\" and a young man might play his own melody on it to express love for a chosen girl. The instrument was nearly forgotten in the early 20th century but is being revived today by national musicians. The example in the Akmola Regional Museum is a modern replica made in 2015 using traditional technique. Around the world, the jaw harp remains popular in ethno-jazz and world music.",
    "perstenj": "The \"Bird's Beak\" ring is a 19th-century work by jewelers of Kostanai, a superb example of Kazakh national jewelry craft. Its bezel, the setting that holds the stone, is oval with pointed ends resembling a bird's beak, giving the piece its name. It is made of fine silver, set with a small stone — agate, carnelian, or turquoise. The decorative techniques include filigree (fine silver wire work), granulation (tiny silver beads soldered to the surface), and a plaited-braid border pattern. In traditional Kazakh belief, rings were more than ornament — they served as tumar, protective amulets, with the stone believed to shield its wearer from the evil eye and illness. Each stone carried its own meaning: agate for authority, carnelian for a prosperous household, turquoise for a safe journey. Whole dynasties of jewelers once worked in the Kostanai, Aktobe, and West Kazakhstan regions, passing their secrets down only within the family. This piece is held in the Kostanai Regional History and Local Studies Museum.",
    "bilezik": "The bilezik, or bracelet, has been worn by Kazakh women since deep antiquity. Bracelets recovered from ancient burial mounds date as far back as the 7th–5th centuries BCE, the Saka era. Materials vary widely: silver, gold, silver-gold alloys, and colored stones such as carnelian, pearl, turquoise, and agate. This particular piece is the work of the contemporary Kazakh jeweler Shapabayev Kairat Bulatuly. It is a substantial, open-form bracelet — unclasped, so it slips easily onto the wrist — its surface decorated with a geometric pattern of triangles, rhombuses, and circles. Its central focus is three oval agate stones set evenly around the band, held in raised mounts. According to ancient Turkic tradition, the bracelet also served as a tumar, a talisman: seeing a bracelet on the right hand was believed to bring good fortune. It was given as a wedding gift or presented to young women on festive occasions. The piece is part of the collection at the Shaimardan Sariev Museum of Decorative and Applied Arts, home to one of Kazakhstan's largest jewelry collections.",
    "kese": "The kese, or piala, is an 18th–19th-century ceramic vessel originating from cities along the Great Silk Road — Otrar, Taraz, and Sairam. Medieval Otrar (Farab) was one of Central Asia's great centers of pottery craft; it was the birthplace of Al-Farabi, and the ancient city itself flourished from the 5th to the 16th centuries. Making such ceramics involved gathering local clay, shaping it on a potter's wheel, and firing it in a special kiln at 800–1,000°C. This particular piece employs a distinctive \"painted white-glaze\" technique, in which cobalt-blue and brown mineral pigments are applied over a white glaze. Its motifs include plant designs such as the tree of life, geometric figures, and occasionally Kufic inscriptions. Such pialas were typically used for drinking kumys, tea, or talkan. This example is an exhibit of the \"Old Shymkent\" (Shym Qala) historical-cultural complex, an open-air ethnographic museum near Shymkent, and it evokes the spirit of the medieval cities of Otrar, Sairam, and Isfijab.",
    "korzhyn": "The korzhyn is the traditional travel bag of the nomadic Kazakhs, a pair of saddlebags slung across a horse or camel. It has been in use since the ancient Saka era, and fragments of similar woven bags have been found in the Pazyryk burial mounds. It is made from thick woolen thread, spun from sheep or camel wool and sometimes dyed with plant-based pigments, using intricate old weaving techniques such as terme and qazhaki that allow for richly colored patterns. The bag is rectangular, with a narrow strap or \"neck\" at the fold used to sling it over a horse or a person's shoulder, and the ornament is mirrored on both sides as a symbol of balance. Its most common motifs include the diamond-shaped medallion (representing the sun, the world, and the family), the ram's horn (a symbol of abundance), along with stars, flowers, and chain patterns. Its color palette — deep red as the dominant tone, with white, black, green, purple, and yellow — comes entirely from natural dyes such as madder root, turmeric, and fig leaves. Thread tassels at the corners were believed to ward off the evil eye. The korzhyn carried travel food, tableware, small belongings, and sometimes books, and it formed an important part of a bride's dowry, handed down to her new household as a family heirloom. Among Kazakhs today, the korzhyn has become a design element, appearing in bags, interior decor, and accessories for national celebrations. This example is held in the collection of the National Museum of the Republic of Kazakhstan.",
    "syrmaq": "The syrmaq is the most elaborate and beautiful form of traditional Kazakh felt carpet. Its base is felt, densely pressed sheep or camel wool, and its defining technique is a mosaic-style appliqué. To make one, two sheets of felt in different colors — typically dark brown and white — are pressed first. The craftswoman then cuts matching pieces of ornament from each sheet and joins them together with a fine, tight seam, producing diamond-shaped medallions, plant motifs, and ram's-horn patterns. A single syrmaq can take three to six months to complete. The three diamond medallions at its center are interpreted as a symbol of the three zhuzes, or of the members of a clan, while the intricate branching pattern within each medallion represents the tree of life, an echo of ancient Turkic-Iranian mythology. The surrounding ram's-horn motif symbolizes abundance, a reference to livestock herding as the foundation of wealth. This particular syrmaq's palette is dominated by deep brown, with white inside the medallions and touches of purple and red elsewhere. A syrmaq was traditionally laid at the place of honor in a yurt and sometimes formed part of a bride's dowry. In the old Kazakh villages, every family had its own syrmaq, carrying its own protective meaning and its own history. Contemporary craftswomen, especially in Turkistan Region, continue this tradition, making syrmaqs suited to modern interiors, and the craft is being prepared for nomination to UNESCO's Intangible Cultural Heritage list.",
    "dulyga": "The dulyga was the iron protective helmet of the Kazakh warrior. Its origins trace back to the iron helmets of the Saka, Hun, and Turkic eras, the 7th–5th centuries BCE, and similar iron and bronze helmets have been recovered from the Pazyryk burial mounds. Through the 18th and 19th centuries, during the era of Kazakh wars, the dulyga remained the principal means of head protection: during the Dzungar invasions (1723–1750), the batyrs Abylai, Kabanbai, Nauryzbai, and Bogenbai rode into battle wearing helmets of this kind. This particular exhibit is a precise reconstruction by the contemporary master Alibai Berik Satynbekuly, based on genuine 18th–19th-century originals. Its construction is intricate: the domed upper section is forged from a single sheet of iron, topped with a sharp metal spike, used either to intimidate the enemy or to mount feathers or a standard. A narrow browplate at the front shields the warrior's eyes. The exterior bears ornament in the Arabic calligraphic style — Qur'anic verses and protective prayers, including the Surah \"An-Nasr.\" The lower edge carries a barmitsa, a mail curtain woven from fine iron rings 5–8 mm in diameter, protecting the neck, nape, and shoulders from a sabre strike. A single barmitsa could contain 15,000 to 20,000 rings, taking a craftsman several months to complete; in earlier times, such mail was so costly that only khans and the most distinguished batyrs possessed it. Alibai Berik Satynbekuly is a contemporary blacksmith reviving the ancient tradition of ironworking, and his workshop fully recreates the equipment of the 18th–19th-century Kazakh warrior. The piece is held in the Shaimardan Sariev Museum of Decorative and Applied Arts."
  }
};

const QUIZ_I18N = {
  "ru": {
    "yurt_low_quality_texture": {
      "questions": [
        {
          "q": "Как называется верхняя круглая часть юрты?",
          "a": [
            "Кереге",
            "Уык",
            "Шанырак",
            "Босага"
          ],
          "exp": "Шанырак — верхний обод юрты, символ связи с небом."
        },
        {
          "q": "В какую сторону открывается дверь юрты?",
          "a": [
            "На юг",
            "На восток",
            "На закат (запад)",
            "На север"
          ],
          "exp": "По традиции дверь открывается на закат (запад) — это священное направление."
        },
        {
          "q": "Сколько уыков обычно бывает в юрте?",
          "a": [
            "20-25",
            "40-60",
            "80-100",
            "10-15"
          ],
          "exp": "Количество уыков — 40-60, иногда больше, в зависимости от размера юрты."
        },
        {
          "q": "Когда юрта была включена в список наследия ЮНЕСКО?",
          "a": [
            "2010",
            "2014",
            "2018",
            "2020"
          ],
          "exp": "В 2014 году юрта была включена в список нематериального культурного наследия человечества ЮНЕСКО."
        },
        {
          "q": "Сколько примерно времени занимает сборка юрты?",
          "a": [
            "5-10 мин",
            "40 мин",
            "2-3 часа",
            "1 день"
          ],
          "exp": "Опытные мастера могут установить юрту примерно за 40 минут."
        }
      ]
    },
    "dombyra_by_sultan_elamanov": {
      "questions": [
        {
          "q": "Сколько струн у домбры?",
          "a": [
            "1",
            "2",
            "3",
            "4"
          ],
          "exp": "Традиционная домбра — двухструнный щипковый инструмент."
        },
        {
          "q": "Кто автор кюя «Балбырауын»?",
          "a": [
            "Дауылеткерей",
            "Таттимбет",
            "Курмангазы",
            "Абыл"
          ],
          "exp": "«Балбырауын» — произведение знаменитого кюйши Курмангазы."
        },
        {
          "q": "Из какого дерева делают корпус (шанак) домбры?",
          "a": [
            "Дуб",
            "Вяз или берёза",
            "Сосна",
            "Кедр"
          ],
          "exp": "Традиционный корпус вырезают из вяза или берёзы."
        },
        {
          "q": "Какова длина традиционной домбры?",
          "a": [
            "≈ 800 мм",
            "≈ 1000 мм",
            "≈ 1260 мм",
            "≈ 1500 мм"
          ],
          "exp": "Длина стандартной домбры — около 1260 мм."
        },
        {
          "q": "Когда отмечается День домбры?",
          "a": [
            "9 мая",
            "1 июля",
            "22 марта",
            "30 августа"
          ],
          "exp": "С 2010 года 1 июля отмечается как Национальный день домбры."
        }
      ]
    },
    "kazakh_qobyz_kobyz": {
      "questions": [
        {
          "q": "Кто считается «отцом» кобыза?",
          "a": [
            "Абыл",
            "Коркыт-ата",
            "Курмангазы",
            "Асан-Кайгы"
          ],
          "exp": "По легенде, кобыз изобрёл Коркыт-ата."
        },
        {
          "q": "Из чего делают струны кобыза?",
          "a": [
            "Нейлон",
            "Металлическая нить",
            "Конский волос (из гривы)",
            "Верблюжья шерсть"
          ],
          "exp": "Традиционные струны кобыза делают из конского волоса (гривы)."
        },
        {
          "q": "Из чего вырезан корпус кобыза?",
          "a": [
            "Из дерева, обтянутого козьей кожей",
            "Металл",
            "Пластик",
            "Бархат"
          ],
          "exp": "Корпус вырезается из цельного куска дерева и обтягивается козьей кожей."
        },
        {
          "q": "Кто возродил искусство игры на кобызе в XX веке?",
          "a": [
            "Ыхлас Дукенулы",
            "Дина Нурпеисова",
            "Мукан Толебаев",
            "Нургиса Тлендиев"
          ],
          "exp": "Ыхлас Дукенулы возродил искусство игры на кобызе в советскую эпоху."
        },
        {
          "q": "В чьих руках кобыз находился в древности?",
          "a": [
            "У батыров",
            "У бақсы (шаманов)",
            "У детей",
            "У ханов"
          ],
          "exp": "В древности кобыз был священным инструментом бақсы (шаманов)."
        }
      ]
    },
    "kazakh_shapan": {
      "questions": [
        {
          "q": "Что означает «шапан жабу»?",
          "a": [
            "Готовиться к тою",
            "Преподнести подарок (халат) почётному гостю",
            "Готовиться к зимовке",
            "Читать молитву"
          ],
          "exp": "«Шапан жабу» — традиция преподносить почётному гостю подарок (халат)."
        },
        {
          "q": "Какой узор чаще всего встречается на шапане?",
          "a": [
            "Цветок",
            "Бараний рог (қошқар мүйіз)",
            "Звезда",
            "Крест"
          ],
          "exp": "Самый распространённый узор — «бараний рог», символ изобилия."
        },
        {
          "q": "Из каких тканей шьют шапан?",
          "a": [
            "Только хлопок",
            "Шёлк, бархат, шерсть",
            "Только кожа",
            "Полиэстер"
          ],
          "exp": "Традиционный шапан шьют из шёлка, бархата, шерсти."
        },
        {
          "q": "Кому в старину был свойственен чёрный шапан?",
          "a": [
            "Людям преклонного возраста",
            "Ребёнку",
            "Богачам и биям",
            "Жениху"
          ],
          "exp": "Чёрный цвет был характерен для халатов пожилых людей."
        },
        {
          "q": "Что кладут внутрь шапана?",
          "a": [
            "Шерсть, пух или вату",
            "Солому",
            "Древесную стружку",
            "Резину"
          ],
          "exp": "Для тепла внутрь подкладывают шерсть, пух или вату и простёгивают."
        }
      ]
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "questions": [
        {
          "q": "В какое время года обычно носят тақию?",
          "a": [
            "Зима",
            "Осень",
            "Лето и весна",
            "Новый год"
          ],
          "exp": "Тақия — лёгкий головной убор, предназначенный в основном для лета."
        },
        {
          "q": "Какого цвета обычно мужская тақия?",
          "a": [
            "Ярко-жёлтая",
            "Серая, чёрная, тёмно-синяя",
            "Розовая",
            "Зелёная"
          ],
          "exp": "Мужская тақия чаще бывает серой, чёрной, тёмно-синей, коричневой."
        },
        {
          "q": "Что вставляют внутрь тақии?",
          "a": [
            "Металл",
            "Тонкий каркас (арматуру)",
            "Шерсть",
            "Кожу"
          ],
          "exp": "Чтобы сохранить форму, внутрь вставляют тонкий каркас (арматуру)."
        },
        {
          "q": "Что надевают поверх тақии зимой?",
          "a": [
            "Ничего",
            "Тымак или қалпак",
            "Платок",
            "Кепку"
          ],
          "exp": "Зимой поверх тақии надевают тымак или қалпак."
        },
        {
          "q": "Из какой ткани сделана тақия?",
          "a": [
            "Кожа",
            "Бархат, шёлк, ткань",
            "Полиэстер",
            "Джинса"
          ],
          "exp": "Традиционную тақию шьют из бархата, шёлка, ткани, атласа."
        }
      ]
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "questions": [
        {
          "q": "Что крепится на верхушке девичьей тақии?",
          "a": [
            "Цветок",
            "Перо совы (үкі)",
            "Крест",
            "Колокольчик"
          ],
          "exp": "Перо совы (үкі) — символ чистоты и красоты."
        },
        {
          "q": "Что заменяет девичью тақию после замужества?",
          "a": [
            "Платок",
            "Тымак",
            "Кимешек",
            "Ничего"
          ],
          "exp": "Кимешек — головной убор замужней женщины."
        },
        {
          "q": "Какого цвета девичья тақия?",
          "a": [
            "Только чёрная",
            "Яркая — жёлтая, красная, голубая",
            "Белая",
            "Сиреневая"
          ],
          "exp": "Тақия девушки яркая — жёлтая, красная, голубая, зелёная."
        },
        {
          "q": "Что символизирует перо совы?",
          "a": [
            "Богатство",
            "Чистоту и красоту",
            "Возраст",
            "Ханскую власть"
          ],
          "exp": "Перо совы — символ чистоты и красоты, оберегает от сглаза."
        },
        {
          "q": "Когда носят девичью тақию?",
          "a": [
            "Каждый день",
            "На тоях и праздниках",
            "На похоронах",
            "Во время учёбы"
          ],
          "exp": "Тақию девушки в основном надевают на тои, собрания, праздники."
        }
      ]
    },
    "saukele_ethno_variant_traditional_headdress": {
      "questions": [
        {
          "q": "На каком тое надевают сәукеле?",
          "a": [
            "На тусау кесер",
            "На проводах невесты (узату той)",
            "На Наурыз",
            "На наречении именем ребёнка"
          ],
          "exp": "Сәукеле — самый дорогой головной убор невесты на проводах (узату той)."
        },
        {
          "q": "Какова примерная высота сәукеле?",
          "a": [
            "20 см",
            "50 см",
            "70 см",
            "1 м"
          ],
          "exp": "Высота сәукеле достигает 70 см, иногда до 1 м."
        },
        {
          "q": "Какое перо крепят на верх сәукеле?",
          "a": [
            "Верблюжье",
            "Конскую гриву",
            "Перо лебедя",
            "Куриное"
          ],
          "exp": "Только дочери ханов могли носить перо лебедя."
        },
        {
          "q": "Сколько лет носят сәукеле после замужества?",
          "a": [
            "1 год",
            "3-5 лет",
            "10 лет",
            "Всю жизнь"
          ],
          "exp": "После свадьбы её носят 3-5 лет, затем меняют на «жаулық»."
        },
        {
          "q": "Какими камнями украшают сәукеле?",
          "a": [
            "Изумруд",
            "Кораллы, сердолик",
            "Жанжан",
            "Топаз"
          ],
          "exp": "Сәукеле украшают серебром, золотом, кораллами, сердоликом (ақық), перьями лебедя."
        }
      ]
    },
    "qamshy_kamshy": {
      "questions": [
        {
          "q": "Сколько плетей (прядей) максимум может быть у камчи?",
          "a": [
            "4",
            "8",
            "32",
            "64"
          ],
          "exp": "С самым высоким мастерством изготавливали и 64-прядные камчи."
        },
        {
          "q": "Из чего делают рукоять камчи?",
          "a": [
            "Пластик",
            "Берёза, рог или кость",
            "Металл",
            "Резина"
          ],
          "exp": "Рукоять делают из берёзы, рога (горного козла), иногда из кости."
        },
        {
          "q": "О ком говорят «камшысы улкен» (его камча велика)?",
          "a": [
            "О ребёнке",
            "О человеке, управляющем народом",
            "О пастухе",
            "Об ученике"
          ],
          "exp": "«Камшысы улкен» — говорят о влиятельном человеке, который управляет народом."
        },
        {
          "q": "Из какого материала плетение камчи?",
          "a": [
            "Нейлон",
            "Кожа (телёнка, быка)",
            "Хлопок",
            "Резина"
          ],
          "exp": "Плетение из кожи — из шкуры телёнка, быка."
        },
        {
          "q": "Какова общая длина камчи?",
          "a": [
            "30 см",
            "60 см",
            "1-1.5 м",
            "3 м"
          ],
          "exp": "Длина традиционной камчи — 1-1.5 метра."
        }
      ]
    },
    "Asyk": {
      "questions": [
        {
          "q": "Из кости какого животного делают асык?",
          "a": [
            "Верблюда",
            "Лошади",
            "Овцы",
            "Телёнка"
          ],
          "exp": "Асык — древняя детская игра, использующая бабку (астрагал) овцы."
        },
        {
          "q": "Как называется верхняя плоская сторона асыка из четырёх?",
          "a": [
            "Плоская верхняя",
            "Изогнутая",
            "Кривая",
            "Нижняя"
          ],
          "exp": "Сака — верхняя плоская сторона асыка, «царь игры»."
        },
        {
          "q": "Когда игра асык вошла в список ЮНЕСКО?",
          "a": [
            "2010",
            "2015",
            "2017",
            "2020"
          ],
          "exp": "В 2017 году игра асык вошла в список нематериального наследия ЮНЕСКО."
        },
        {
          "q": "В какую из этих игр НЕ играют асыками?",
          "a": [
            "Хан талапай",
            "Атбакыл",
            "Бес тас",
            "Тогызкумалак"
          ],
          "exp": "Тогызкумалак — отдельная игра, в которую играют камешками на доске."
        },
        {
          "q": "Чему учит ребёнка игра в асык?",
          "a": [
            "Только силе",
            "Логике, тактике, точности",
            "Пению",
            "Верховой езде"
          ],
          "exp": "Асык развивает логику, стратегию, точность и общение."
        }
      ]
    },
    "besik": {
      "questions": [
        {
          "q": "Из какого дерева делают бесик?",
          "a": [
            "Дуб",
            "Берёза, ива, можжевельник",
            "Кедр",
            "Сосна"
          ],
          "exp": "Бесик вырезают из берёзы, ивы, иногда из можжевельника."
        },
        {
          "q": "Когда проводится обряд «бесикке салу» (укладывание в колыбель)?",
          "a": [
            "В момент рождения",
            "Когда ребёнку исполняется пять дней",
            "В год",
            "На тусау кесер"
          ],
          "exp": "Младенца впервые кладут в бесик, когда ему исполняется пять дней."
        },
        {
          "q": "Что такое «тусау кесер»?",
          "a": [
            "Дарение колыбели",
            "Разрезание верёвки на ногах ребёнка",
            "Наречение именем",
            "Проведение тоя"
          ],
          "exp": "Обряд разрезания верёвки на ногах ребёнка, когда он начинает ходить."
        },
        {
          "q": "Для чего в бесике нужен «шумек»?",
          "a": [
            "Для игры",
            "Для сбора испражнений",
            "Для еды",
            "Для лампы"
          ],
          "exp": "Шумек — специальное приспособление для сбора детских испражнений."
        },
        {
          "q": "Когда проводится праздник «шилдехана»?",
          "a": [
            "В день рождения",
            "Когда ребёнку 40 дней",
            "В 1 год",
            "При поступлении в школу"
          ],
          "exp": "«Шилдехана» — праздник, устраиваемый для 40-дневного младенца."
        }
      ]
    },
    "nomad_sabre": {
      "questions": [
        {
          "q": "Из чего изготавливали клинок сабли?",
          "a": [
            "Медь",
            "Сталь",
            "Серебро",
            "Дерево"
          ],
          "exp": "Клинок ковали из высококачественной стали (дамасской, хорасанской)."
        },
        {
          "q": "Из какого материала рукоять сабли?",
          "a": [
            "Дерево и кость",
            "Только металл",
            "Пластик",
            "Резина"
          ],
          "exp": "Рукоять делают из берёзы, рога или кости."
        },
        {
          "q": "Какова средняя длина сабли?",
          "a": [
            "≈ 50 см",
            "≈ 90 см",
            "≈ 150 см",
            "≈ 200 см"
          ],
          "exp": "Длина традиционного казахского клинка — около 90 см."
        },
        {
          "q": "Кто из батыров выступил против джунгарского нашествия?",
          "a": [
            "Абылай",
            "Чингисхан",
            "Аттила",
            "Улугбек"
          ],
          "exp": "Абылай хан, Богенбай, Кабанбай, Наурызбай — герои, выступившие против джунгар."
        },
        {
          "q": "Из какого материала ножны сабли?",
          "a": [
            "Ткань",
            "Кожа",
            "Только дерево",
            "Кожа + серебряные украшения"
          ],
          "exp": "Ножны (саксай) обтягивали кожей и украшали серебром."
        }
      ]
    },
    "balbal_tas": {
      "questions": [
        {
          "q": "В каких веках изготавливались балбалы?",
          "a": [
            "III-V вв.",
            "VI-IX вв.",
            "X-XII вв.",
            "XV-XVII вв."
          ],
          "exp": "Балбалы изготавливались в древнюю тюркскую эпоху — в VI-IX веках."
        },
        {
          "q": "Что означает слово «балбал»?",
          "a": [
            "Камень",
            "Баба (предок)",
            "Батыр",
            "Аруақ (дух)"
          ],
          "exp": "«Балбал» происходит от тюркского слова «баба» — старший предок, защитник."
        },
        {
          "q": "Кому устанавливали балбал?",
          "a": [
            "Ребёнку",
            "Знаменитым воинам и биям",
            "Всем людям",
            "Девушкам"
          ],
          "exp": "Устанавливались на могилах знаменитых воинов, ханов и биев."
        },
        {
          "q": "Что хоронили вместе с покойным?",
          "a": [
            "Ничего",
            "Оружие, его коня",
            "Только еду",
            "Книги"
          ],
          "exp": "Вместе с покойным хоронили его оружие, коня, скот."
        },
        {
          "q": "Где сейчас находят балбалы?",
          "a": [
            "Только в Казахстане",
            "Монголия, Алтай, Тянь-Шань",
            "Только в Европе",
            "В Африке"
          ],
          "exp": "Найдены в Монголии, на Алтае, Тянь-Шане и на юге Сибири."
        }
      ]
    },
    "tamgaly_sun_man": {
      "questions": [
        {
          "q": "Когда созданы петроглифы Тамгалы?",
          "a": [
            "V-III вв. до н.э.",
            "XIV-XI вв. до н.э.",
            "I-II вв. н.э.",
            "X-XII вв."
          ],
          "exp": "Петроглифы Тамгалы относятся к бронзовому веку — XIV-XI векам до н.э."
        },
        {
          "q": "Когда Тамгалы включили в список ЮНЕСКО?",
          "a": [
            "1998",
            "2004",
            "2010",
            "2015"
          ],
          "exp": "В 2004 году Тамгалы был включён в список Всемирного наследия ЮНЕСКО."
        },
        {
          "q": "В какой области находится Тамгалы?",
          "a": [
            "Алматинская",
            "Астана",
            "Атырауская",
            "Акмолинская"
          ],
          "exp": "Скалы Тамгалы находятся в Алматинской области, в 170 км от города."
        },
        {
          "q": "Сколько всего петроглифов найдено здесь?",
          "a": [
            "≈ 500",
            "≈ 1 000",
            "≈ 5 000",
            "≈ 10 000"
          ],
          "exp": "В комплексе Тамгалы найдено более 5 000 петроглифов."
        },
        {
          "q": "Чьим изображением может быть «Солнцеголовый человек»?",
          "a": [
            "Хана",
            "Бога Солнца (Митры)",
            "Батыра",
            "Земледельца"
          ],
          "exp": "Образ Бога Солнца (Митры) в древней ирано-тюркской мифологии."
        }
      ]
    },
    "astau_tabaq": {
      "questions": [
        {
          "q": "Из какого дерева делают астау?",
          "a": [
            "Дуб",
            "Берёза, ива, ель",
            "Кедр",
            "Кокос"
          ],
          "exp": "Астау вырезают из цельного куска берёзы, ивы или ели."
        },
        {
          "q": "Какое блюдо главное для астау?",
          "a": [
            "Плов",
            "Бешбармак",
            "Пицца",
            "Суп (сорпа)"
          ],
          "exp": "На астау обычно подают бешбармак (мясо + тесто)."
        },
        {
          "q": "Какой диаметр у астау?",
          "a": [
            "20-30 см",
            "50-80 см",
            "150-200 см",
            "более 1 м"
          ],
          "exp": "Диаметр традиционного астау — 50-80 см."
        },
        {
          "q": "Что означает «бас ұсыну» (подношение головы)?",
          "a": [
            "Чтение молитвы",
            "Преподнесение куска мяса старшему",
            "Приветствие",
            "Открывание двери"
          ],
          "exp": "Преподнесение головы барана старшему — высшая форма уважения."
        },
        {
          "q": "Сколько времени тратит мастер на изготовление астау?",
          "a": [
            "1 день",
            "3-6 месяцев",
            "1 год",
            "5 лет"
          ],
          "exp": "Мастер тратит 3-6 месяцев на сушку дерева и вырезание."
        }
      ]
    },
    "torsyk_kymyz": {
      "questions": [
        {
          "q": "Какой напиток в основном хранили в торсыке?",
          "a": [
            "Вода",
            "Кумыс",
            "Масло",
            "Мёд"
          ],
          "exp": "Торсык — кожаный сосуд, предназначенный в основном для хранения кумыса, шубата."
        },
        {
          "q": "Из какого материала делают торсык?",
          "a": [
            "Дерево",
            "Кожа (коричневая, шкура быка/телёнка)",
            "Глина",
            "Металл"
          ],
          "exp": "Шьётся из коричневой кожи — шкуры телёнка, быка."
        },
        {
          "q": "Из чего пробка торсыка?",
          "a": [
            "Металл",
            "Дерево",
            "Пластик",
            "Резина"
          ],
          "exp": "Горлышко узкое, пробка сделана из дерева."
        },
        {
          "q": "Какой узор встречается на торсыке?",
          "a": [
            "Крест",
            "Узор «рог»",
            "Цветок",
            "Никакого"
          ],
          "exp": "На боках штампуют узор «мүйіз» (рог) и оформляют чёрным цветом."
        },
        {
          "q": "К какой эпохе восходит происхождение торсыка?",
          "a": [
            "XX в.",
            "XV в.",
            "Скифо-сакская эпоха",
            "Каменный век"
          ],
          "exp": "Известен со времён скифо-сакской эпохи, подобные фрагменты найдены при раскопках."
        }
      ]
    },
    "sedlo": {
      "questions": [
        {
          "q": "Из чего сделан каркас седла?",
          "a": [
            "Металл",
            "Пластик",
            "Дерево (ленчик)",
            "Серебро"
          ],
          "exp": "Деревянный каркас (ленчик) вырезают из твёрдой берёзы."
        },
        {
          "q": "Кто пользовался этим седлом XIX века?",
          "a": [
            "Никто",
            "Только дети",
            "Ханы и бии",
            "Простые люди"
          ],
          "exp": "Такое роскошное седло принадлежало только ханам, биям или богатым семьям."
        },
        {
          "q": "Из скольких частей состоит седло?",
          "a": [
            "5",
            "10",
            "Более 30",
            "100"
          ],
          "exp": "Седло состоит более чем из 30 частей: подпруга, нагрудник, узда, поводья, стремена и другие."
        },
        {
          "q": "Чем украшено это седло XIX века?",
          "a": [
            "Дерево",
            "Пластины из жёлтого металла (позолоченные)",
            "Пластик",
            "Только кожа"
          ],
          "exp": "Оно украшено ажурными пластинами из жёлтого металла с позолотой."
        },
        {
          "q": "Когда появилось седло?",
          "a": [
            "XX в.",
            "XV в.",
            "Со времён древних саков",
            "В каменном веке"
          ],
          "exp": "Кочевники использовали седло ещё со времён древних саков."
        }
      ]
    },
    "aibalta": {
      "questions": [
        {
          "q": "Какой формы головка айбалты?",
          "a": [
            "Круглая",
            "Полумесяц",
            "Квадратная",
            "Треугольная"
          ],
          "exp": "Головка в форме полумесяца — отсюда и название «ай + балта» («луна-топор»)."
        },
        {
          "q": "Из чего сделана рукоять айбалты?",
          "a": [
            "Только дерево",
            "Дерево, обшитое серебром",
            "Только металл",
            "Пластик"
          ],
          "exp": "Рукоять деревянная, снаружи обшита серебром."
        },
        {
          "q": "В XVIII-XIX вв. в чьих руках айбалта была знаком отличия?",
          "a": [
            "У детей",
            "У биев и батыров",
            "У мастеров похоронного обряда",
            "У земледельцев"
          ],
          "exp": "В руках биев и батыров она также служила знаком отличия."
        },
        {
          "q": "Каков примерный вес айбалты?",
          "a": [
            "200-500 г",
            "1-2 кг",
            "10 кг",
            "20 кг"
          ],
          "exp": "Вес традиционной айбалты — 1-2 кг."
        },
        {
          "q": "Какова длина лезвия айбалты?",
          "a": [
            "5 см",
            "15-25 см",
            "50 см",
            "1 м"
          ],
          "exp": "Длина лезвия айбалты составляет 15-25 см."
        }
      ]
    },
    "qalqan": {
      "questions": [
        {
          "q": "Из какого металла край щита?",
          "a": [
            "Серебро",
            "Латунь (жёлтая медь)",
            "Железо",
            "Золото"
          ],
          "exp": "Край окаймлён пластинами из латуни (жёлтой меди)."
        },
        {
          "q": "Каков примерный диаметр щита?",
          "a": [
            "20 см",
            "50-60 см",
            "1 м",
            "2 м"
          ],
          "exp": "Диаметр выпуклого щита составляет примерно 50-60 см."
        },
        {
          "q": "Что означают надписи в стиле куфи?",
          "a": [
            "Сказки",
            "Аяты из Корана",
            "Сообщения",
            "Ничего"
          ],
          "exp": "Надписи куфи — это аяты из Корана и защитные молитвы."
        },
        {
          "q": "К какому веку относится щит?",
          "a": [
            "XV",
            "XVIII",
            "XX",
            "XI"
          ],
          "exp": "Этот щит — экспонат XVIII века, хранится в Национальном музее."
        },
        {
          "q": "Чем обтянута внутренняя сторона щита?",
          "a": [
            "Дерево",
            "Красная ткань и кожа",
            "Металл",
            "Ничем"
          ],
          "exp": "Внутренняя сторона обтянута красной тканью и мягкой кожей."
        }
      ]
    },
    "kubi": {
      "questions": [
        {
          "q": "Для приготовления какого напитка используется кюбі?",
          "a": [
            "Чай",
            "Кумыс",
            "Вода",
            "Бульон"
          ],
          "exp": "Кюбі — сосуд трапециевидной формы для приготовления кумыса."
        },
        {
          "q": "Сколькими металлическими обручами скрепляется кюбі?",
          "a": [
            "1",
            "2",
            "3-4",
            "10"
          ],
          "exp": "Скрепляется тремя-четырьмя обручами из тёмного металла."
        },
        {
          "q": "Какова длина пестика (піспек) внутри кюбі?",
          "a": [
            "20 см",
            "90 см",
            "2 м",
            "5 м"
          ],
          "exp": "Піспек — деревянный инструмент с длинной ручкой (около 90 см)."
        },
        {
          "q": "Сколько раз в день нужно взбивать кумыс?",
          "a": [
            "10-20",
            "100",
            "1 000-2 000",
            "10 000"
          ],
          "exp": "Взбивают 1000-2000 раз в день — чтобы молоко забродило."
        },
        {
          "q": "Какова высота кюбі?",
          "a": [
            "20 см",
            "40 см",
            "60-80 см",
            "2 м"
          ],
          "exp": "Высота традиционного кюбі — 60-80 см."
        }
      ]
    },
    "ojau": {
      "questions": [
        {
          "q": "Для чего используется ожау?",
          "a": [
            "Резать еду",
            "Разливать кумыс, айран",
            "Черпать воду",
            "Рубить дерево"
          ],
          "exp": "Ожау — это ковш для разливания кумыса, айрана, шубата и других напитков."
        },
        {
          "q": "Из какого материала сделан ожау?",
          "a": [
            "Металл",
            "Пластик",
            "Цельный кусок дерева",
            "Кожа"
          ],
          "exp": "Вырезается из цельного куска дерева (берёзы, ивы, черного дерева)."
        },
        {
          "q": "Какова длина ожау?",
          "a": [
            "5 см",
            "30-50 см",
            "1 м",
            "2 м"
          ],
          "exp": "Длина ожау составляет 30-50 см."
        },
        {
          "q": "У кого за дастарханом находится ожау?",
          "a": [
            "У детей",
            "У старших",
            "У гостей",
            "У кого угодно"
          ],
          "exp": "Ожау всегда в руках старшего — он разливает напитки по старшинству."
        },
        {
          "q": "Почему древние кочевники использовали деревянную посуду?",
          "a": [
            "Она дорогая",
            "Не скользит, не бьётся, лёгкая",
            "Лучше металла",
            "Просто по привычке"
          ],
          "exp": "Она не скользит, не бьётся, лёгкая — удобно собирать в дорогу при перекочёвке."
        }
      ]
    },
    "sandyq": {
      "questions": [
        {
          "q": "В каком важном обряде используется сандык?",
          "a": [
            "На празднике Наурыз",
            "При передаче приданого",
            "На похоронах",
            "На обряде тұсау кесу"
          ],
          "exp": "Он играет важную роль при передаче приданого — отсюда пожелание «сандық толы» («пусть сундук будет полон»)."
        },
        {
          "q": "Из какого материала изготовлен сандык?",
          "a": [
            "Только металл",
            "Дерево с металлической обшивкой",
            "Пластик",
            "Кожа"
          ],
          "exp": "Изготавливается из дерева, снаружи обшивается тонким железом."
        },
        {
          "q": "Какова примерная длина сандыка?",
          "a": [
            "20 см",
            "40 см",
            "80-120 см",
            "3 м"
          ],
          "exp": "Длина традиционного сандыка составляет 80-120 см."
        },
        {
          "q": "Что означает пожелание «сандық толы»?",
          "a": [
            "Устроить праздник",
            "Пусть твоя семья будет в достатке",
            "Долгая жизнь",
            "Найти друзей"
          ],
          "exp": "Это пожелание: «пусть твоя семья будет в достатке, пусть тебя ждёт богатство»."
        },
        {
          "q": "Для чего в старину сандык брали в перекочёвку?",
          "a": [
            "Хранить посуду",
            "Перевозить ценности семьи",
            "Готовить еду",
            "Собирать воду"
          ],
          "exp": "Во время перекочёвки его грузили на верблюда — в нём перевозили ценные вещи семьи."
        }
      ]
    },
    "togyzqumalaq": {
      "questions": [
        {
          "q": "Сколько лунок на доске тогызкумалак?",
          "a": [
            "9",
            "16",
            "18",
            "20"
          ],
          "exp": "С каждой стороны по девять лунок — всего 18."
        },
        {
          "q": "Сколько шариков в каждой лунке в начале игры?",
          "a": [
            "5",
            "7",
            "9",
            "11"
          ],
          "exp": "В начале игры в каждой лунке по 9 шариков, всего 162."
        },
        {
          "q": "Как называется большая лунка в центре?",
          "a": [
            "Ұя",
            "Тұзак",
            "Казан",
            "Отау"
          ],
          "exp": "Большая лунка в центре называется «казан» — в неё собираются выигранные шарики."
        },
        {
          "q": "Что такое «отау»?",
          "a": [
            "Начало игры",
            "Создание правильной лунки-ловушки",
            "Пустая лунка",
            "Завершение игры"
          ],
          "exp": "«Отау» — приём создания правильной лунки-ловушки раньше соперника."
        },
        {
          "q": "Когда была основана федерация тогызкумалак?",
          "a": [
            "1900",
            "1949",
            "1980",
            "2010"
          ],
          "exp": "В 1949 году была основана республиканская федерация Казахстана."
        }
      ]
    },
    "sazsyrnai": {
      "questions": [
        {
          "q": "Из какого материала сделан сазсырнай?",
          "a": [
            "Дерево",
            "Металл",
            "Обожжённая глина",
            "Кожа"
          ],
          "exp": "Сазсырнай изготавливается из обожжённой глины."
        },
        {
          "q": "Сколько отверстий для звука у сазсырная?",
          "a": [
            "3",
            "6-12",
            "20",
            "50"
          ],
          "exp": "Форма яйцевидная, отверстий для звука 6-12."
        },
        {
          "q": "К какой годовщине приурочен этот экспонат?",
          "a": [
            "1000-летие",
            "1500-летие",
            "2000-летие",
            "5000-летие"
          ],
          "exp": "Изготовлен в честь 1500-летия Туркестана (в 2000 г.)."
        },
        {
          "q": "Чьим инструментом был сазсырнай в старину?",
          "a": [
            "Только ханов",
            "Пастухов и детей",
            "Только служителей культа",
            "Батыров"
          ],
          "exp": "В основном инструмент пастухов и детей, иногда использовался в религиозных обрядах."
        },
        {
          "q": "На что похожа форма сазсырная?",
          "a": [
            "Квадрат",
            "Большое яйцо",
            "Цветок",
            "Лошадь"
          ],
          "exp": "Форма похожа на большое яйцо, отверстий для звука — 12."
        }
      ]
    },
    "shanqobyz": {
      "questions": [
        {
          "q": "Как играют на шанкобызе?",
          "a": [
            "На нём есть струны",
            "Резонансом рта",
            "Дуют",
            "Ударяют"
          ],
          "exp": "Язычок приводится в движение пальцем, а полость рта служит резонатором."
        },
        {
          "q": "Из чего сделан язычок шанкобыза?",
          "a": [
            "Дерево",
            "Металлическая пластина",
            "Кожа",
            "Верблюжья шерсть"
          ],
          "exp": "Язычок изготавливается из металлической пластины."
        },
        {
          "q": "Чьим инструментом был шанкобыз в старину?",
          "a": [
            "Детей",
            "Бақсы, шаманов",
            "Только женщин",
            "Земледельцев"
          ],
          "exp": "Использовался в древних шаманских обрядах, в транс-медитации."
        },
        {
          "q": "В каком стиле шанкобыз используют в мире сегодня?",
          "a": [
            "Классика",
            "Этно-джаз, world music",
            "Рок",
            "Кантри"
          ],
          "exp": "Сегодня он популярен в мире в стиле этно-джаз, world music."
        },
        {
          "q": "Из чего изготовлен корпус инструмента?",
          "a": [
            "Пластик",
            "Дерево (трапециевидной формы)",
            "Металл",
            "Кожа"
          ],
          "exp": "Деревянный корпус трапециевидной формы, с отверстием для шнурка."
        }
      ]
    },
    "perstenj": {
      "questions": [
        {
          "q": "Почему «клювовидное кольцо» получило такое название?",
          "a": [
            "Похоже на птицу",
            "Острый кончик напоминает клюв птицы",
            "Оно делает птиц",
            "Название местности"
          ],
          "exp": "Кончик каста острый, по форме напоминает «птичий клюв»."
        },
        {
          "q": "Чем считалось кольцо по древним казахским поверьям?",
          "a": [
            "Просто украшение",
            "Тумар (амулет)",
            "Деньги",
            "Символ власти"
          ],
          "exp": "Считалось, что кольцо-тумар (амулет) защищает от дурного глаза."
        },
        {
          "q": "Из какого материала это кольцо?",
          "a": [
            "Золото",
            "Серебро",
            "Медь",
            "Железо"
          ],
          "exp": "Оно сделано из серебра, в оправу вставлен небольшой камень."
        },
        {
          "q": "Какими техниками украшено кольцо?",
          "a": [
            "Только гравировка",
            "Скань + зернь",
            "Пайка",
            "Штамповка"
          ],
          "exp": "Техниками скани (плетение серебряной нитью) и зерни (мелкие шарики)."
        },
        {
          "q": "Откуда происходит это кольцо?",
          "a": [
            "Астана",
            "Костанайский ОКМ",
            "Алматы",
            "Атырау"
          ],
          "exp": "Из Костанайского областного историко-краеведческого музея."
        }
      ]
    },
    "bilezik": {
      "questions": [
        {
          "q": "Сколько агатовых камней на этом браслете?",
          "a": [
            "1",
            "2",
            "3",
            "5"
          ],
          "exp": "Центральный акцент — три овальных агата, равномерно расположенных по браслету."
        },
        {
          "q": "Кто автор браслета?",
          "a": [
            "Древний мастер",
            "Современный ювелир К. Шапабаев",
            "Неизвестен",
            "Дина Нурпеисова"
          ],
          "exp": "Работа современного ювелира Шапабаева Кайрата Булатовича."
        },
        {
          "q": "Какой формы браслет?",
          "a": [
            "Замкнутая",
            "Открытая (полукольцо)",
            "В форме кольца",
            "Пристёгивающаяся"
          ],
          "exp": "Массивный, слегка разомкнутый — так его легко надеть на руку."
        },
        {
          "q": "Какой тип орнамента на браслете?",
          "a": [
            "Цветочный",
            "Геометрический — треугольник, ромб",
            "Изображения животных",
            "Абстракция"
          ],
          "exp": "Поверхность украшена геометрическим орнаментом — треугольники, ромбы."
        },
        {
          "q": "К какому периоду относятся древнейшие браслеты?",
          "a": [
            "XIX в.",
            "X в.",
            "Сакская эпоха (VII-V вв. до н.э.)",
            "Каменный век"
          ],
          "exp": "Браслеты, найденные в древних курганах, датируются VII-V вв. до н.э."
        }
      ]
    },
    "kese": {
      "questions": [
        {
          "q": "К какому веку относится эта чаша?",
          "a": [
            "X-XI",
            "XVIII-XIX",
            "XX",
            "V-VI"
          ],
          "exp": "Чаша датируется XVIII-XIX веками."
        },
        {
          "q": "Из какого материала чаша?",
          "a": [
            "Металл",
            "Керамика",
            "Дерево",
            "Кожа"
          ],
          "exp": "Керамика — форма создана на гончарном круге и обожжена в печи."
        },
        {
          "q": "Откуда происходит эта чаша?",
          "a": [
            "Астана",
            "Отрар, Тараз, Сайрам (Великий шёлковый путь)",
            "Москва",
            "Париж"
          ],
          "exp": "Из городов на Великом шёлковом пути — Отрар, Тараз, Сайрам."
        },
        {
          "q": "Какие цвета использованы на чаше?",
          "a": [
            "Только белый",
            "Голубой и коричневый (на белом фоне)",
            "Только чёрный",
            "Разноцветная"
          ],
          "exp": "По белой глазури нанесён голубой и коричневый узор."
        },
        {
          "q": "Какова высота этой чаши?",
          "a": [
            "3 см",
            "8,2 см",
            "20 см",
            "50 см"
          ],
          "exp": "Высота этой чаши — 8,2 см."
        }
      ]
    },
    "korzhyn": {
      "questions": [
        {
          "q": "Для чего использовался коржын?",
          "a": [
            "Для еды",
            "Дорожная сумка, перекидываемая через седло коня или верблюда",
            "Чтобы сидеть в кругу семьи",
            "Свадебный шатёр"
          ],
          "exp": "Коржын — традиционная парная переметная сумка, которую вешали на коня или верблюда."
        },
        {
          "q": "Из какого материала изготовлен коржын?",
          "a": [
            "Кожа",
            "Шерстяная нить",
            "Пластик",
            "Дерево"
          ],
          "exp": "Коржын вручную ткут из толстой шерстяной нити."
        },
        {
          "q": "Какой орнамент в центре коржына?",
          "a": [
            "Солнце",
            "Ромбовидный медальон",
            "Звезда",
            "Отсутствует"
          ],
          "exp": "В центре — ромбовидный медальон, символ солнца, мира, семьи."
        },
        {
          "q": "Что находится на концах коржына?",
          "a": [
            "Металлическое кольцо",
            "Кистевые подвески (тумар)",
            "Камень",
            "Ничего"
          ],
          "exp": "На концах — кистевые подвески, играющие роль оберега от сглаза."
        },
        {
          "q": "В каком важном обряде используется коржын?",
          "a": [
            "Наурыз",
            "Проводы невесты (приданое)",
            "Тұсау кесу",
            "Ни в одном"
          ],
          "exp": "Коржын считался важной частью приданого невесты на проводах."
        }
      ]
    },
    "syrmaq": {
      "questions": [
        {
          "q": "Какая основная техника изготовления сырмака?",
          "a": [
            "Ткачество",
            "Аппликация (мозаика)",
            "Вышивка",
            "Дубление"
          ],
          "exp": "Сырмак создаётся сшиванием цветных фрагментов войлока мелким швом (техника мозаики)."
        },
        {
          "q": "Из какого материала делают сырмак?",
          "a": [
            "Хлопок",
            "Войлок, валяный из овечьей или верблюжьей шерсти",
            "Шёлк",
            "Кожа"
          ],
          "exp": "Основа сырмака — войлок, плотная ткань, свалянная из овечьей или верблюжьей шерсти."
        },
        {
          "q": "Какой орнамент в центре сырмака?",
          "a": [
            "Солнце",
            "Три ромбовидных медальона",
            "Звезда",
            "Отсутствует"
          ],
          "exp": "В центре — три ромбовидных медальона, символ трёх жузов или членов рода."
        },
        {
          "q": "Сколько времени уходит на изготовление одного сырмака?",
          "a": [
            "1 день",
            "1-2 недели",
            "3-6 месяцев",
            "5 лет"
          ],
          "exp": "Мастеру может понадобиться 3-6 месяцев на один сырмак."
        },
        {
          "q": "Что символизирует орнамент «бараньи рога» на сырмаке?",
          "a": [
            "Войну",
            "Изобилие (богатство скотоводства)",
            "Смерть",
            "Ничего"
          ],
          "exp": "«Кошкар мюйз» — символ изобилия, отсылка к главному богатству скотоводов."
        }
      ]
    },
    "dulyga": {
      "questions": [
        {
          "q": "Что такое дулыга?",
          "a": [
            "Обувь",
            "Железный защитный головной убор (шлем)",
            "Калоши",
            "Вышитый платок"
          ],
          "exp": "Дулыга — железный защитный головной убор казахского воина."
        },
        {
          "q": "Кто автор этого шлема?",
          "a": [
            "Абылай хан",
            "Алибай Берик Сатынбекулы (современный мастер)",
            "Коркыт ата",
            "Есет батыр"
          ],
          "exp": "Это реконструкция — современный мастер Алибай Берик Сатынбекулы выковал его по образцу XVIII-XIX вв."
        },
        {
          "q": "Что такое бармица?",
          "a": [
            "Деревянная рукоять",
            "Защита затылка, сплетённая из железных колец",
            "Пуговица",
            "Вышитый лист"
          ],
          "exp": "Бармица — защита затылка и шеи, сплетённая из тонких железных колец."
        },
        {
          "q": "В каком стиле выполнены надписи на шлеме?",
          "a": [
            "Латиница",
            "Арабская каллиграфия (куфи)",
            "Кириллица",
            "Ни в одном"
          ],
          "exp": "Снаружи — орнамент в стиле арабской каллиграфии: аяты из Корана и защитные молитвы."
        },
        {
          "q": "Сколько примерно железных колец в одной бармице?",
          "a": [
            "100",
            "1000",
            "15-20 тысяч",
            "1 миллион"
          ],
          "exp": "В одной бармице может быть около 15-20 тысяч железных колец, на её изготовление уходят месяцы."
        }
      ]
    }
  },
  "en": {
    "yurt_low_quality_texture": {
      "questions": [
        {
          "q": "What is the round top part of the yurt called?",
          "a": [
            "Kerege",
            "Uyk",
            "Shanyrak",
            "Bosaga"
          ],
          "exp": "The shanyrak is the yurt's upper ring — a symbol of the connection with the sky."
        },
        {
          "q": "Which direction does the yurt's door open toward?",
          "a": [
            "South",
            "East",
            "Toward the sunset (west)",
            "North"
          ],
          "exp": "By tradition the door opens toward the sunset (west) — a sacred direction."
        },
        {
          "q": "How many uyks (roof poles) does a yurt usually have?",
          "a": [
            "20-25",
            "40-60",
            "80-100",
            "10-15"
          ],
          "exp": "The number of uyks is 40-60, sometimes more, depending on the size of the yurt."
        },
        {
          "q": "When was the yurt added to the UNESCO heritage list?",
          "a": [
            "2010",
            "2014",
            "2018",
            "2020"
          ],
          "exp": "In 2014 it was added to UNESCO's Representative List of the Intangible Cultural Heritage of Humanity."
        },
        {
          "q": "About how long does it take to assemble a yurt?",
          "a": [
            "5-10 min",
            "40 min",
            "2-3 hours",
            "1 day"
          ],
          "exp": "Experienced craftsmen can put up a yurt in about 40 minutes."
        }
      ]
    },
    "dombyra_by_sultan_elamanov": {
      "questions": [
        {
          "q": "How many strings does the dombra have?",
          "a": [
            "1",
            "2",
            "3",
            "4"
          ],
          "exp": "The traditional dombra is a two-stringed plucked instrument."
        },
        {
          "q": "Who composed the kuy \"Balbyrauyn\"?",
          "a": [
            "Dauletkerey",
            "Tattimbet",
            "Kurmangazy",
            "Abyl"
          ],
          "exp": "\"Balbyrauyn\" is a work by the famous kuishi (kuy composer) Kurmangazy."
        },
        {
          "q": "What wood is the dombra's body (shanaq) made from?",
          "a": [
            "Oak",
            "Elm or birch",
            "Pine",
            "Cedar"
          ],
          "exp": "The traditional body is carved from elm or birch."
        },
        {
          "q": "What is the length of a traditional dombra?",
          "a": [
            "≈ 800 mm",
            "≈ 1000 mm",
            "≈ 1260 mm",
            "≈ 1500 mm"
          ],
          "exp": "A standard dombra is about 1260 mm long."
        },
        {
          "q": "When is Dombra Day celebrated?",
          "a": [
            "May 9",
            "July 1",
            "March 22",
            "August 30"
          ],
          "exp": "Since 2010, July 1 has been marked as National Dombra Day."
        }
      ]
    },
    "kazakh_qobyz_kobyz": {
      "questions": [
        {
          "q": "Who is considered the \"father\" of the qobyz?",
          "a": [
            "Abyl",
            "Korkyt-ata",
            "Kurmangazy",
            "Asan-Kaigy"
          ],
          "exp": "According to legend, the qobyz was invented by Korkyt-ata."
        },
        {
          "q": "What are the qobyz's strings made from?",
          "a": [
            "Nylon",
            "Metal wire",
            "Horsehair (mane)",
            "Camel wool"
          ],
          "exp": "Traditional qobyz strings are drawn from horsehair (mane)."
        },
        {
          "q": "What is the qobyz's body carved from?",
          "a": [
            "Wood, covered with goat skin",
            "Metal",
            "Plastic",
            "Velvet"
          ],
          "exp": "The body is carved from a single piece of wood and covered with goat skin."
        },
        {
          "q": "Who revived the art of qobyz playing in the 20th century?",
          "a": [
            "Ykhlas Dukenuly",
            "Dina Nurpeisova",
            "Mukan Tolebayev",
            "Nurgisa Tlendiyev"
          ],
          "exp": "Ykhlas Dukenuly revived the art of qobyz playing during the Soviet era."
        },
        {
          "q": "In ancient times, who held the qobyz?",
          "a": [
            "Warriors",
            "Baksy (shamans)",
            "Children",
            "Khans"
          ],
          "exp": "In ancient times, the qobyz was the sacred instrument of baksy (shamans)."
        }
      ]
    },
    "kazakh_shapan": {
      "questions": [
        {
          "q": "What does \"shapan zhabu\" mean?",
          "a": [
            "Preparing for a feast",
            "Presenting a robe as a gift to an honored guest",
            "Preparing for winter",
            "Reciting a prayer"
          ],
          "exp": "\"Shapan zhabu\" is the tradition of presenting an honored guest with a gift robe."
        },
        {
          "q": "What ornament often appears on the shapan?",
          "a": [
            "A flower",
            "Ram's horn (qoshqar muyiz)",
            "A star",
            "A cross"
          ],
          "exp": "The most common motif is the ram's horn, a symbol of abundance."
        },
        {
          "q": "What fabrics is the shapan made from?",
          "a": [
            "Cotton only",
            "Silk, velvet, wool",
            "Leather only",
            "Polyester"
          ],
          "exp": "A traditional shapan is sewn from silk, velvet, and wool."
        },
        {
          "q": "In old times, who typically wore a black shapan?",
          "a": [
            "Elders",
            "Children",
            "The wealthy and biys",
            "The groom"
          ],
          "exp": "Black was typical for the robes of elders."
        },
        {
          "q": "What is put inside the shapan?",
          "a": [
            "Wool, down, or cotton",
            "Straw",
            "Sawdust",
            "Rubber"
          ],
          "exp": "For warmth, wool, down, or cotton is quilted inside."
        }
      ]
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "questions": [
        {
          "q": "In what season is the taqiya mainly worn?",
          "a": [
            "Winter",
            "Autumn",
            "Summer and spring",
            "New Year"
          ],
          "exp": "The taqiya is a light headwear, mainly meant for summer."
        },
        {
          "q": "What color is a men's taqiya usually?",
          "a": [
            "Bright yellow",
            "Grey, black, dark blue",
            "Pink",
            "Green"
          ],
          "exp": "Men's taqiyas are usually grey, black, dark blue, or brown."
        },
        {
          "q": "What is placed inside the taqiya?",
          "a": [
            "Metal",
            "A thin stiffener (frame)",
            "Wool",
            "Leather"
          ],
          "exp": "To keep its shape, a thin stiffener (frame) is inserted inside."
        },
        {
          "q": "In winter, what is worn over the taqiya?",
          "a": [
            "Nothing",
            "A tymaq (fur hat) or qalpaq (felt hat)",
            "A headscarf",
            "A flat cap"
          ],
          "exp": "In winter, a tymaq (fur hat) or qalpaq (felt hat) is worn over the taqiya."
        },
        {
          "q": "What fabric is the taqiya made of?",
          "a": [
            "Leather",
            "Velvet, silk, cloth",
            "Polyester",
            "Denim"
          ],
          "exp": "A traditional taqiya is made from velvet, silk, cloth, or satin."
        }
      ]
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "questions": [
        {
          "q": "What is attached on top of a girl's taqiya?",
          "a": [
            "A flower",
            "An owl feather (uki)",
            "A cross",
            "A bell"
          ],
          "exp": "The owl feather (uki) is a symbol of purity and beauty."
        },
        {
          "q": "After marriage, what replaces the girl's taqiya?",
          "a": [
            "A headscarf",
            "A tymaq",
            "A kimeshek",
            "Nothing"
          ],
          "exp": "The kimeshek is the headwear of a married woman."
        },
        {
          "q": "What color is a girl's taqiya?",
          "a": [
            "Black only",
            "Bright — yellow, red, sky blue",
            "White",
            "Purple"
          ],
          "exp": "A girl's taqiya is brightly colored — yellow, red, sky blue, or green."
        },
        {
          "q": "What does the owl feather symbolize?",
          "a": [
            "Wealth",
            "Purity and beauty",
            "Age",
            "Royal power"
          ],
          "exp": "The owl feather is a symbol of purity and beauty, and protects against the evil eye."
        },
        {
          "q": "When is a girl's taqiya worn?",
          "a": [
            "Every day",
            "At celebrations and holidays",
            "At funerals",
            "While studying"
          ],
          "exp": "A girl's taqiya is mainly worn at celebrations, gatherings, and holidays."
        }
      ]
    },
    "saukele_ethno_variant_traditional_headdress": {
      "questions": [
        {
          "q": "At what celebration is the saukele worn?",
          "a": [
            "At the \"first steps\" ceremony",
            "At the bride's send-off feast",
            "At Nauryz",
            "At a baby-naming"
          ],
          "exp": "The saukele is the bride's most precious headwear at the send-off feast (uzatu toi)."
        },
        {
          "q": "What is the approximate height of the saukele?",
          "a": [
            "20 cm",
            "50 cm",
            "70 cm",
            "1 m"
          ],
          "exp": "The saukele's height reaches up to 70 cm, sometimes up to 1 m."
        },
        {
          "q": "What feather is placed on top of the saukele?",
          "a": [
            "Camel's",
            "Horse mane",
            "Swan feather",
            "Chicken feather"
          ],
          "exp": "Only khans' daughters could wear a swan feather."
        },
        {
          "q": "How many years is the saukele worn after marriage?",
          "a": [
            "1 year",
            "3-5 years",
            "10 years",
            "For life"
          ],
          "exp": "After marriage it is worn for 3-5 years, then replaced with a \"zhaulyq\"."
        },
        {
          "q": "What stones adorn the saukele?",
          "a": [
            "Emerald",
            "Coral, carnelian",
            "Janzhan",
            "Topaz"
          ],
          "exp": "The saukele is adorned with silver, gold, coral, carnelian (aqyq), and swan feathers."
        }
      ]
    },
    "qamshy_kamshy": {
      "questions": [
        {
          "q": "What is the maximum number of braids a qamshy can have?",
          "a": [
            "4",
            "8",
            "32",
            "64"
          ],
          "exp": "With the greatest skill, whips with as many as 64 braids were even made."
        },
        {
          "q": "What is the qamshy's handle made from?",
          "a": [
            "Plastic",
            "Birch, horn, or bone",
            "Metal",
            "Rubber"
          ],
          "exp": "The handle is made from birch, horn (ibex horn), or sometimes bone."
        },
        {
          "q": "Who is described by the phrase \"his qamshy is big\"?",
          "a": [
            "A child",
            "Someone who rules the people",
            "A herder",
            "A student"
          ],
          "exp": "\"His qamshy is big\" is said of an influential person who leads the people."
        },
        {
          "q": "What material is the qamshy's braiding made of?",
          "a": [
            "Nylon",
            "Leather (calfskin, oxhide)",
            "Cotton",
            "Rubber"
          ],
          "exp": "The braiding is leather, woven from calfskin or oxhide."
        },
        {
          "q": "What is the total length of a qamshy?",
          "a": [
            "30 cm",
            "60 cm",
            "1-1.5 m",
            "3 m"
          ],
          "exp": "A traditional qamshy is 1-1.5 meters long."
        }
      ]
    },
    "Asyk": {
      "questions": [
        {
          "q": "From which animal's bone is the asyk made?",
          "a": [
            "Camel",
            "Horse",
            "Sheep",
            "Calf"
          ],
          "exp": "Asyk is an ancient children's game using a sheep's anklebone (astragalus)."
        },
        {
          "q": "Which of the asyk's four sides is called \"saqa\"?",
          "a": [
            "The flat top side",
            "The curved side",
            "The crooked side",
            "The bottom side"
          ],
          "exp": "Saqa is the flat top side of the asyk, the \"king of the game\"."
        },
        {
          "q": "When was the asyk game added to the UNESCO list?",
          "a": [
            "2010",
            "2015",
            "2017",
            "2020"
          ],
          "exp": "In 2017 the asyk game was added to UNESCO's Intangible Cultural Heritage list."
        },
        {
          "q": "Which of these games is NOT played with asyks?",
          "a": [
            "Khan Talapai",
            "Atbaqyl",
            "Bes Tas",
            "Togyzqumalaq"
          ],
          "exp": "Togyzqumalaq is a separate game played with pebbles on a board."
        },
        {
          "q": "What does the asyk game teach children?",
          "a": [
            "Only strength",
            "Logic, tactics, precision",
            "Singing",
            "Horse riding"
          ],
          "exp": "Asyk develops logic, strategy, precision, and social skills."
        }
      ]
    },
    "besik": {
      "questions": [
        {
          "q": "What wood is the cradle (besik) made from?",
          "a": [
            "Oak",
            "Birch, willow, juniper",
            "Cedar",
            "Pine"
          ],
          "exp": "The besik is carved from birch, willow, or sometimes juniper."
        },
        {
          "q": "When is the \"besikke salu\" (placing in the cradle) ceremony held?",
          "a": [
            "Right after birth",
            "At five days old",
            "At one year old",
            "At the \"first steps\" ceremony"
          ],
          "exp": "A baby is first placed in the besik at five days old."
        },
        {
          "q": "What is \"tusau keser\" (cutting the ties)?",
          "a": [
            "Giving a cradle",
            "Cutting a rope tied around the child's legs",
            "Naming the child",
            "Holding a feast"
          ],
          "exp": "A ceremony of cutting a rope tied around a child's legs when he begins to walk."
        },
        {
          "q": "What is the \"shumek\" in the cradle for?",
          "a": [
            "For play",
            "For collecting waste",
            "For food",
            "For a lamp"
          ],
          "exp": "The shumek is a special device for collecting a baby's waste."
        },
        {
          "q": "When is the \"shildehana\" celebration held?",
          "a": [
            "On the day of birth",
            "At 40 days old",
            "At 1 year old",
            "When starting school"
          ],
          "exp": "\"Shildekhana\" is a celebration held for a 40-day-old baby."
        }
      ]
    },
    "nomad_sabre": {
      "questions": [
        {
          "q": "What was the sabre's blade made from?",
          "a": [
            "Copper",
            "Steel",
            "Silver",
            "Wood"
          ],
          "exp": "The blade was forged from high-quality steel (Damascus, Khorasan)."
        },
        {
          "q": "What material is the sabre's handle made from?",
          "a": [
            "Wood and bone",
            "Metal only",
            "Plastic",
            "Rubber"
          ],
          "exp": "The handle is made of birch wood, horn, or bone."
        },
        {
          "q": "What is the average length of the sabre?",
          "a": [
            "≈ 50 cm",
            "≈ 90 cm",
            "≈ 150 cm",
            "≈ 200 cm"
          ],
          "exp": "A traditional Kazakh sabre is about 90 cm long."
        },
        {
          "q": "Which hero rose up against the Dzungar invasion?",
          "a": [
            "Abylai",
            "Genghis Khan",
            "Attila",
            "Ulugh Beg"
          ],
          "exp": "Abylai Khan, Bogenbai, Kabanbai, and Nauryzbai were heroes who rose up against the Dzungars."
        },
        {
          "q": "What material is the sabre's scabbard made from?",
          "a": [
            "Fabric",
            "Leather",
            "Wood only",
            "Leather + silver ornaments"
          ],
          "exp": "The scabbard (saqsai) was covered in leather and decorated with silver."
        }
      ]
    },
    "balbal_tas": {
      "questions": [
        {
          "q": "In which centuries were balbal stones made?",
          "a": [
            "3rd-5th c.",
            "6th-9th c.",
            "10th-12th c.",
            "15th-17th c."
          ],
          "exp": "Balbal stones were made in the ancient Turkic era — the 6th-9th centuries."
        },
        {
          "q": "What does the word \"balbal\" mean?",
          "a": [
            "Stone",
            "Ancestor (grandfather)",
            "Hero",
            "Spirit"
          ],
          "exp": "\"Balbal\" comes from the Turkic word \"baba\" — an elder ancestor, a protector."
        },
        {
          "q": "For whom were balbal stones erected?",
          "a": [
            "A child",
            "Famous warriors and biys",
            "Everyone",
            "Girls"
          ],
          "exp": "They were placed at the graves of famous warriors, khans, and biys."
        },
        {
          "q": "What was buried together with the deceased?",
          "a": [
            "Nothing",
            "Weapons and his horse",
            "Food only",
            "Books"
          ],
          "exp": "The deceased was buried together with his weapons, horse, and livestock."
        },
        {
          "q": "Where have balbal stones been found?",
          "a": [
            "Kazakhstan only",
            "Mongolia, Altai, Tian Shan",
            "Europe only",
            "Africa"
          ],
          "exp": "They have been found in Mongolia, the Altai, the Tian Shan, and southern Siberia."
        }
      ]
    },
    "tamgaly_sun_man": {
      "questions": [
        {
          "q": "When were the Tamgaly petroglyphs made?",
          "a": [
            "5th-3rd c. BC",
            "14th-11th c. BC",
            "1st-2nd c. AD",
            "10th-12th c. AD"
          ],
          "exp": "The Tamgaly petroglyphs date to the Bronze Age — the 14th-11th centuries BC."
        },
        {
          "q": "When was Tamgaly added to the UNESCO list?",
          "a": [
            "1998",
            "2004",
            "2010",
            "2015"
          ],
          "exp": "In 2004, Tamgaly was inscribed on the UNESCO World Heritage List."
        },
        {
          "q": "In which region is Tamgaly located?",
          "a": [
            "Almaty",
            "Astana",
            "Atyrau",
            "Akmola"
          ],
          "exp": "The Tamgaly rocks are located in the Almaty region, 170 km from the city."
        },
        {
          "q": "How many petroglyphs have been found there in total?",
          "a": [
            "≈ 500",
            "≈ 1,000",
            "≈ 5,000",
            "≈ 10,000"
          ],
          "exp": "More than 5,000 petroglyphs have been found at the Tamgaly complex."
        },
        {
          "q": "Whose image might the \"Sun-headed man\" be?",
          "a": [
            "A khan",
            "The Sun god (Mithra)",
            "A hero",
            "A farmer"
          ],
          "exp": "It may be the image of the Sun god (Mithra) from ancient Iranian-Turkic mythology."
        }
      ]
    },
    "astau_tabaq": {
      "questions": [
        {
          "q": "What wood is the astau made from?",
          "a": [
            "Oak",
            "Birch, willow, spruce",
            "Cedar",
            "Coconut"
          ],
          "exp": "The astau is carved from a single piece of birch, willow, or spruce."
        },
        {
          "q": "What is the main dish served on the astau?",
          "a": [
            "Pilaf",
            "Beshbarmak",
            "Pizza",
            "Broth"
          ],
          "exp": "Beshbarmak (meat and dough) is usually served on the astau."
        },
        {
          "q": "What is the diameter of the astau?",
          "a": [
            "20-30 cm",
            "50-80 cm",
            "150-200 cm",
            "over 1 m"
          ],
          "exp": "A traditional astau is 50-80 cm in diameter."
        },
        {
          "q": "What is \"bas usynu\" (offering the head)?",
          "a": [
            "Reciting a prayer",
            "Offering a cut of meat to an elder",
            "Greeting",
            "Opening the door"
          ],
          "exp": "Presenting a sheep's head to an elder is the highest form of respect."
        },
        {
          "q": "How long does it take a craftsman to make an astau?",
          "a": [
            "1 day",
            "3-6 months",
            "1 year",
            "5 years"
          ],
          "exp": "A craftsman spends 3-6 months drying the wood and carving it."
        }
      ]
    },
    "torsyk_kymyz": {
      "questions": [
        {
          "q": "What drink was mainly stored in the torsyk?",
          "a": [
            "Water",
            "Kumis",
            "Fat/oil",
            "Honey"
          ],
          "exp": "The torsyk is a leather vessel mainly used to store kumis and shubat."
        },
        {
          "q": "What material is the torsyk made from?",
          "a": [
            "Wood",
            "Leather (brown, ox/calf hide)",
            "Clay",
            "Metal"
          ],
          "exp": "It is sewn from brown leather — calfskin or oxhide."
        },
        {
          "q": "What is the torsyk's stopper made from?",
          "a": [
            "Metal",
            "Wood",
            "Plastic",
            "Rubber"
          ],
          "exp": "The neck is narrow, and the stopper is made of wood."
        },
        {
          "q": "What ornament appears on the torsyk?",
          "a": [
            "A cross",
            "A horn motif",
            "A flower",
            "None"
          ],
          "exp": "A \"horn\" (muyiz) motif is stamped on the sides and finished in black."
        },
        {
          "q": "To which era does the torsyk's origin go back?",
          "a": [
            "20th c.",
            "15th c.",
            "The Scythian-Saka era",
            "The Stone Age"
          ],
          "exp": "Known since the Scythian-Saka era; similar fragments have been found in excavations."
        }
      ]
    },
    "sedlo": {
      "questions": [
        {
          "q": "What is the saddle's frame made of?",
          "a": [
            "Metal",
            "Plastic",
            "Wood (the frame)",
            "Silver"
          ],
          "exp": "The wooden frame is carved from solid birch."
        },
        {
          "q": "Who used this 19th-century saddle?",
          "a": [
            "No one",
            "Only children",
            "Khans and biys",
            "Ordinary people"
          ],
          "exp": "Such an ornate saddle belonged only to khans, biys, or wealthy families."
        },
        {
          "q": "How many parts make up the saddle?",
          "a": [
            "5",
            "10",
            "More than 30",
            "100"
          ],
          "exp": "The saddle consists of more than 30 parts: girth, breast-strap, bridle, reins, stirrups, and more."
        },
        {
          "q": "What decorates this 19th-century saddle?",
          "a": [
            "Wood",
            "Yellow-metal (gilded) plates",
            "Plastic",
            "Leather only"
          ],
          "exp": "It is decorated with openwork gilded yellow-metal plates."
        },
        {
          "q": "When did the saddle first appear?",
          "a": [
            "20th century",
            "15th century",
            "Since the ancient Saka era",
            "In the Stone Age"
          ],
          "exp": "Nomads have used the saddle since the ancient Saka era."
        }
      ]
    },
    "aibalta": {
      "questions": [
        {
          "q": "What shape is the head of the aibalta?",
          "a": [
            "Round",
            "Crescent moon",
            "Square",
            "Triangle"
          ],
          "exp": "The head is shaped like a crescent moon — hence the name \"ai + balta\" (\"moon-axe\")."
        },
        {
          "q": "What is the aibalta's handle made of?",
          "a": [
            "Wood only",
            "Wood covered in silver",
            "Metal only",
            "Plastic"
          ],
          "exp": "The handle is wood, covered in silver on the outside."
        },
        {
          "q": "In the 18th–19th centuries, whose hands did the aibalta mark as a sign of status?",
          "a": [
            "Children's",
            "Biys' and batyrs'",
            "Funeral craftsmen's",
            "Farmers'"
          ],
          "exp": "In the hands of biys and batyrs it also served as a mark of distinction."
        },
        {
          "q": "What is the approximate weight of an aibalta?",
          "a": [
            "200-500 g",
            "1-2 kg",
            "10 kg",
            "20 kg"
          ],
          "exp": "A traditional aibalta weighs about 1-2 kg."
        },
        {
          "q": "How long is the aibalta's blade?",
          "a": [
            "5 cm",
            "15-25 cm",
            "50 cm",
            "1 m"
          ],
          "exp": "The aibalta's blade is 15-25 cm long."
        }
      ]
    },
    "qalqan": {
      "questions": [
        {
          "q": "What metal is the shield's rim made of?",
          "a": [
            "Silver",
            "Brass (yellow copper)",
            "Iron",
            "Gold"
          ],
          "exp": "The rim is trimmed with brass (yellow copper) plates."
        },
        {
          "q": "What is the shield's approximate diameter?",
          "a": [
            "20 cm",
            "50-60 cm",
            "1 m",
            "2 m"
          ],
          "exp": "The convex shield is roughly 50-60 cm in diameter."
        },
        {
          "q": "What do the Kufic inscriptions represent?",
          "a": [
            "Fairy tales",
            "Verses from the Quran",
            "Messages",
            "Nothing"
          ],
          "exp": "The Kufic inscriptions are verses from the Quran and protective prayers."
        },
        {
          "q": "Which century does the shield date from?",
          "a": [
            "15th",
            "18th",
            "20th",
            "11th"
          ],
          "exp": "This shield is an 18th-century exhibit, held at the National Museum."
        },
        {
          "q": "What covers the inside of the shield?",
          "a": [
            "Wood",
            "Red cloth and leather",
            "Metal",
            "Nothing"
          ],
          "exp": "The inside is lined with red cloth and soft leather."
        }
      ]
    },
    "kubi": {
      "questions": [
        {
          "q": "What drink is the kubi (churn) used to prepare?",
          "a": [
            "Tea",
            "Kumis",
            "Water",
            "Broth"
          ],
          "exp": "The kubi is a trapezoid-shaped vessel used to prepare kumis."
        },
        {
          "q": "How many metal hoops secure the kubi?",
          "a": [
            "1",
            "2",
            "3-4",
            "10"
          ],
          "exp": "It is bound with three or four dark-metal hoops."
        },
        {
          "q": "How long is the plunger (pispek) inside the kubi?",
          "a": [
            "20 cm",
            "90 cm",
            "2 m",
            "5 m"
          ],
          "exp": "The pispek is a long-handled wooden tool, about 90 cm long."
        },
        {
          "q": "How many times a day must kumis be churned?",
          "a": [
            "10-20",
            "100",
            "1,000-2,000",
            "10,000"
          ],
          "exp": "It is churned 1,000-2,000 times a day to ferment the milk."
        },
        {
          "q": "How tall is a kubi?",
          "a": [
            "20 cm",
            "40 cm",
            "60-80 cm",
            "2 m"
          ],
          "exp": "A traditional kubi stands 60-80 cm tall."
        }
      ]
    },
    "ojau": {
      "questions": [
        {
          "q": "What is the ojau used for?",
          "a": [
            "Chopping food",
            "Pouring kumis, ayran",
            "Drawing water",
            "Cutting wood"
          ],
          "exp": "The ojau is a ladle for pouring kumis, ayran, shubat, and similar drinks."
        },
        {
          "q": "What material is the ojau made of?",
          "a": [
            "Metal",
            "Plastic",
            "A single piece of wood",
            "Leather"
          ],
          "exp": "It is carved from a single piece of wood (birch, willow, or blackwood)."
        },
        {
          "q": "How long is an ojau?",
          "a": [
            "5 cm",
            "30-50 cm",
            "1 m",
            "2 m"
          ],
          "exp": "An ojau is 30-50 cm long."
        },
        {
          "q": "At the dastarkhan, who holds the ojau?",
          "a": [
            "Children",
            "The elders",
            "Guests",
            "Anyone"
          ],
          "exp": "The ojau always stays in the elder's hands — they pour for everyone in order of seniority."
        },
        {
          "q": "Why did ancient nomads use wooden vessels?",
          "a": [
            "They were expensive",
            "Non-slip, unbreakable, lightweight",
            "Better than metal",
            "Just out of habit"
          ],
          "exp": "Wood doesn't slip, doesn't crack, and is light — easy to pack when moving camp."
        }
      ]
    },
    "sandyq": {
      "questions": [
        {
          "q": "In which important ceremony is the sandyq (chest) used?",
          "a": [
            "At Nauryz celebrations",
            "When giving the dowry",
            "At funerals",
            "At the tusau kesu (first-steps) ceremony"
          ],
          "exp": "It plays a key role in the dowry-giving ceremony — hence the blessing \"sandyq toly\" (\"may your chest be full\")."
        },
        {
          "q": "What material is the sandyq made from?",
          "a": [
            "Metal only",
            "Wood with metal cladding",
            "Plastic",
            "Leather"
          ],
          "exp": "It is made of wood and clad on the outside with thin iron sheeting."
        },
        {
          "q": "What is the approximate length of a sandyq?",
          "a": [
            "20 cm",
            "40 cm",
            "80-120 cm",
            "3 m"
          ],
          "exp": "A traditional sandyq is 80-120 cm long."
        },
        {
          "q": "What does the blessing \"sandyq toly\" mean?",
          "a": [
            "Throw a feast",
            "May your family be prosperous",
            "Long life",
            "Make friends"
          ],
          "exp": "It is a wish that reads: \"may your family be prosperous, may wealth find you\"."
        },
        {
          "q": "Why was the sandyq taken along during migration in the old days?",
          "a": [
            "To store dishes",
            "To carry the family's valuables",
            "To cook food",
            "To collect water"
          ],
          "exp": "During migration it was loaded onto a camel, carrying the family's precious belongings."
        }
      ]
    },
    "togyzqumalaq": {
      "questions": [
        {
          "q": "How many pits are on a togyzqumalaq board?",
          "a": [
            "9",
            "16",
            "18",
            "20"
          ],
          "exp": "Nine pits on each side — 18 in total."
        },
        {
          "q": "How many stones start in each pit?",
          "a": [
            "5",
            "7",
            "9",
            "11"
          ],
          "exp": "At the start, each pit holds 9 stones, 162 in total."
        },
        {
          "q": "What is the large central pit called?",
          "a": [
            "Uya",
            "Tuzaq",
            "Kazan",
            "Otau"
          ],
          "exp": "The large central pit is called the \"kazan\" — it collects the stones a player has won."
        },
        {
          "q": "What is \"otau\"?",
          "a": [
            "Starting the game",
            "Setting up a proper trap pit",
            "An empty pit",
            "Ending the game"
          ],
          "exp": "\"Otau\" is the technique of setting up a correct trap pit before your opponent does."
        },
        {
          "q": "When was the togyzqumalaq federation founded?",
          "a": [
            "1900",
            "1949",
            "1980",
            "2010"
          ],
          "exp": "Kazakhstan's republican federation was founded in 1949."
        }
      ]
    },
    "sazsyrnai": {
      "questions": [
        {
          "q": "What is the sazsyrnai made of?",
          "a": [
            "Wood",
            "Metal",
            "Fired clay",
            "Leather"
          ],
          "exp": "The sazsyrnai is made of fired clay."
        },
        {
          "q": "How many sound holes does the sazsyrnai have?",
          "a": [
            "3",
            "6-12",
            "20",
            "50"
          ],
          "exp": "Egg-shaped in form, it has 6-12 sound holes."
        },
        {
          "q": "Which anniversary was this exhibit made for?",
          "a": [
            "1,000th",
            "1,500th",
            "2,000th",
            "5,000th"
          ],
          "exp": "It was made to mark the 1,500th anniversary of Turkestan (in 2000)."
        },
        {
          "q": "Whose instrument was the sazsyrnai traditionally?",
          "a": [
            "Only khans'",
            "Shepherds' and children's",
            "Only clergy's",
            "Batyrs'"
          ],
          "exp": "Mainly an instrument of shepherds and children, sometimes used in religious rites."
        },
        {
          "q": "What does the sazsyrnai's shape resemble?",
          "a": [
            "A square",
            "A large egg",
            "A flower",
            "A horse"
          ],
          "exp": "Its shape resembles a large egg, with 12 sound holes."
        }
      ]
    },
    "shanqobyz": {
      "questions": [
        {
          "q": "How is the shanqobyz played?",
          "a": [
            "It has strings",
            "Using mouth resonance",
            "By blowing",
            "By striking"
          ],
          "exp": "The tongue is plucked with a finger while the mouth cavity acts as a resonator."
        },
        {
          "q": "What is the shanqobyz's tongue made of?",
          "a": [
            "Wood",
            "A metal plate",
            "Leather",
            "Camel wool"
          ],
          "exp": "The tongue is made from a metal plate."
        },
        {
          "q": "Whose instrument was the shanqobyz traditionally?",
          "a": [
            "Children's",
            "Baksy (shamans')",
            "Women's only",
            "Farmers'"
          ],
          "exp": "It was used in ancient shamanic rites and trance meditation."
        },
        {
          "q": "In what style is the shanqobyz used worldwide today?",
          "a": [
            "Classical",
            "Ethno-jazz, world music",
            "Rock",
            "Country"
          ],
          "exp": "Today it is popular worldwide in ethno-jazz and world music."
        },
        {
          "q": "What is the instrument's body made of?",
          "a": [
            "Plastic",
            "Wood (trapezoid-shaped)",
            "Metal",
            "Leather"
          ],
          "exp": "The wooden body is trapezoid-shaped, with a hole for a cord."
        }
      ]
    },
    "perstenj": {
      "questions": [
        {
          "q": "Why is the \"beak ring\" called that?",
          "a": [
            "It looks like a bird",
            "Its pointed tip resembles a bird's beak",
            "It creates birds",
            "It's named after a place"
          ],
          "exp": "The tip of the bezel is pointed, shaped like a \"bird's beak\"."
        },
        {
          "q": "What was a ring believed to be in old Kazakh tradition?",
          "a": [
            "Just an ornament",
            "A tumar (amulet)",
            "Money",
            "A symbol of power"
          ],
          "exp": "The ring was believed to serve as a tumar (amulet), protecting against the evil eye."
        },
        {
          "q": "What material is this ring made of?",
          "a": [
            "Gold",
            "Silver",
            "Copper",
            "Iron"
          ],
          "exp": "It is made of silver, with a small stone set into it."
        },
        {
          "q": "What techniques decorate the ring?",
          "a": [
            "Engraving only",
            "Filigree + granulation",
            "Soldering",
            "Stamping"
          ],
          "exp": "It uses filigree (woven silver wire) and granulation (tiny beads) techniques."
        },
        {
          "q": "Where does this ring come from?",
          "a": [
            "Astana",
            "Kostanay Regional Museum",
            "Almaty",
            "Atyrau"
          ],
          "exp": "From the Kostanay Regional Museum of History and Local Lore."
        }
      ]
    },
    "bilezik": {
      "questions": [
        {
          "q": "How many agate stones does this bracelet have?",
          "a": [
            "1",
            "2",
            "3",
            "5"
          ],
          "exp": "The centerpiece is three oval agate stones, evenly spaced around the bracelet."
        },
        {
          "q": "Who made this bracelet?",
          "a": [
            "An ancient craftsman",
            "Modern jeweler K. Shapabayev",
            "Unknown",
            "Dina Nurpeisova"
          ],
          "exp": "It is the work of contemporary jeweler Kairat Bulatovich Shapabayev."
        },
        {
          "q": "What shape is the bracelet?",
          "a": [
            "A closed loop",
            "Open (semi-circular)",
            "Ring-shaped",
            "A clasp-on attachment"
          ],
          "exp": "It is massive and slightly open, making it easy to slip onto the wrist."
        },
        {
          "q": "What type of ornament is on the bracelet?",
          "a": [
            "Floral",
            "Geometric — triangles, rhombuses",
            "Animal figures",
            "Abstract"
          ],
          "exp": "The surface is decorated with a geometric pattern — triangles and rhombuses."
        },
        {
          "q": "How old are the earliest bracelets of this kind?",
          "a": [
            "19th century",
            "10th century",
            "The Saka era (7th-5th c. BC)",
            "The Stone Age"
          ],
          "exp": "Bracelets found in ancient burial mounds date back to the 7th-5th centuries BC."
        }
      ]
    },
    "kese": {
      "questions": [
        {
          "q": "Which century does this bowl date from?",
          "a": [
            "10th-11th",
            "18th-19th",
            "20th",
            "5th-6th"
          ],
          "exp": "The bowl dates to the 18th-19th centuries."
        },
        {
          "q": "What material is the bowl made of?",
          "a": [
            "Metal",
            "Ceramic",
            "Wood",
            "Leather"
          ],
          "exp": "Ceramic — shaped on a potter's wheel and fired in a kiln."
        },
        {
          "q": "Where does this bowl come from?",
          "a": [
            "Astana",
            "Otrar, Taraz, Sayram (Silk Road)",
            "Moscow",
            "Paris"
          ],
          "exp": "From cities along the Great Silk Road — Otrar, Taraz, Sayram."
        },
        {
          "q": "What colors appear on the bowl?",
          "a": [
            "White only",
            "Blue and brown (on a white background)",
            "Black only",
            "Multicolored"
          ],
          "exp": "A blue and brown pattern is painted over a white glaze."
        },
        {
          "q": "How tall is this bowl?",
          "a": [
            "3 cm",
            "8.2 cm",
            "20 cm",
            "50 cm"
          ],
          "exp": "This bowl stands 8.2 cm tall."
        }
      ]
    },
    "korzhyn": {
      "questions": [
        {
          "q": "What was the korzhyn used for?",
          "a": [
            "Eating food",
            "A travel bag slung over a horse or camel",
            "Sitting with the family",
            "A wedding tent"
          ],
          "exp": "The korzhyn is a traditional pair of saddlebags slung over a horse or camel."
        },
        {
          "q": "What material is the korzhyn made of?",
          "a": [
            "Leather",
            "Wool yarn",
            "Plastic",
            "Wood"
          ],
          "exp": "The korzhyn is hand-woven from thick wool yarn."
        },
        {
          "q": "What ornament appears in the center of the korzhyn?",
          "a": [
            "A sun",
            "A rhombus-shaped medallion",
            "A star",
            "None"
          ],
          "exp": "At the center is a rhombus-shaped medallion, symbolizing the sun, the world, and the family."
        },
        {
          "q": "What is at the ends of the korzhyn?",
          "a": [
            "A metal ring",
            "Yarn tassels (amulets)",
            "A stone",
            "Nothing"
          ],
          "exp": "The ends have yarn tassels that serve as amulets against the evil eye."
        },
        {
          "q": "In which important ceremony is the korzhyn used?",
          "a": [
            "Nauryz",
            "The bride's send-off (dowry)",
            "Tusau kesu",
            "None"
          ],
          "exp": "The korzhyn was considered an important part of the bride's dowry at her send-off."
        }
      ]
    },
    "syrmaq": {
      "questions": [
        {
          "q": "What is the main technique used to make a syrmaq?",
          "a": [
            "Weaving",
            "Cut-out applique (mosaic)",
            "Embroidery",
            "Tanning"
          ],
          "exp": "A syrmaq is made by stitching colored felt pieces together with fine seams (a mosaic technique)."
        },
        {
          "q": "What material is a syrmaq made from?",
          "a": [
            "Cotton",
            "Felt pressed from sheep or camel wool",
            "Silk",
            "Leather"
          ],
          "exp": "The base of a syrmaq is felt — a dense fabric pressed from sheep or camel wool."
        },
        {
          "q": "What ornament appears in the center of the syrmaq?",
          "a": [
            "A sun",
            "Three rhombus medallions",
            "A star",
            "None"
          ],
          "exp": "At the center are three rhombus medallions, symbolizing the three zhuzes or clan members."
        },
        {
          "q": "How long does it take to make one syrmaq?",
          "a": [
            "1 day",
            "1-2 weeks",
            "3-6 months",
            "5 years"
          ],
          "exp": "A craftsperson may need 3-6 months to complete one syrmaq."
        },
        {
          "q": "What does the \"ram's horn\" ornament on the syrmaq symbolize?",
          "a": [
            "War",
            "Abundance (livestock wealth)",
            "Death",
            "Nothing"
          ],
          "exp": "The ram's-horn motif symbolizes abundance, referencing the herders' greatest source of wealth."
        }
      ]
    },
    "dulyga": {
      "questions": [
        {
          "q": "What is a dulyga?",
          "a": [
            "Footwear",
            "An iron protective helmet",
            "Galoshes",
            "An embroidered headscarf"
          ],
          "exp": "A dulyga is the iron protective helmet of a Kazakh warrior."
        },
        {
          "q": "Who made this helmet?",
          "a": [
            "Abylai Khan",
            "Alibai Berik Satynbekuly (a modern craftsman)",
            "Korkyt Ata",
            "Esset Batyr"
          ],
          "exp": "It is a reconstruction — modern craftsman Alibai Berik Satynbekuly forged it based on an 18th-19th century pattern."
        },
        {
          "q": "What is a barmitsa?",
          "a": [
            "A wooden handle",
            "A neck guard woven from iron rings",
            "A button",
            "An embroidered leaf"
          ],
          "exp": "A barmitsa is a neck and nape guard woven from thin iron rings."
        },
        {
          "q": "In what style are the inscriptions on the helmet?",
          "a": [
            "Latin script",
            "Arabic calligraphy (Kufic)",
            "Cyrillic",
            "None"
          ],
          "exp": "On the outside is an ornament in Arabic calligraphy style — verses from the Quran and protective prayers."
        },
        {
          "q": "About how many iron rings are in one barmitsa?",
          "a": [
            "100",
            "1,000",
            "15,000-20,000",
            "1 million"
          ],
          "exp": "One barmitsa may contain roughly 15,000-20,000 iron rings, taking months to make."
        }
      ]
    }
  }
};

const ACTION_I18N = {
  "ru": {
    "dombyra_by_sultan_elamanov": {
      "eyebrow": "Слушать кюй",
      "title": "«Балбырауын» — Курмангазы Сагырбайулы",
      "body": "<p>«Балбырауын» — вершина казахских кюев для домбры. Произведение Курмангазы, созданное в XIX веке, передаёт ритмичное колебание настроения через две струны домбры. Название кюя «балбырау» означает «изящное, грациозное движение».</p><p><b>Слушайте:</b> плеер ниже или найдите на YouTube.</p>",
      "linkLabel": "Искать на YouTube →"
    },
    "kazakh_qobyz_kobyz": {
      "eyebrow": "Слушать звучание кобыза",
      "title": "Коркыт ата — «Жер бауыры»",
      "body": "<p>По легенде, Коркыт ата, спасаясь от смерти, играл на кобызе и тем продлевал себе жизнь. «Жер бауыры» — его самый знаменитый кюй: он изображает дыхание земли, голос матери-земли. Звук кобыза точно передаёт человеческий голос — таинство, заставляющее трепетать душу.</p>",
      "linkLabel": "Слушать на YouTube →"
    },
    "sazsyrnai": {
      "eyebrow": "Древний звук",
      "title": "Сазсырнай — мелодия глиняного звука",
      "body": "<p>Сазсырнай — глиняный инструмент, дошедший до нас со II тысячелетия до н. э. Спутник пастухов и детей, а порой и участник религиозных обрядов. Его звучание естественное, чистое — ощущается прямая связь с землёй.</p>",
      "linkLabel": "Слушать на YouTube →"
    },
    "shanqobyz": {
      "eyebrow": "Резонанс",
      "title": "Шанкобыз — резонанс ротовой полости",
      "body": "<p>Шанкобыз — один из древнейших инструментов тюркского мира. Металлический язычок приводится в движение пальцем, а полость рта играет роль резонатора. Разнообразные мелодии извлекаются языком, губами и дыханием исполнителя. Использовался в шаманских обрядах и медитации-трансе.</p>",
      "linkLabel": "Слушать на YouTube →"
    },
    "togyzqumalaq": {
      "eyebrow": "Играть",
      "title": "Тогызкумалак — играть онлайн",
      "body": "<p>Тогызкумалак — казахская степная логическая игра. С каждой стороны по 9 лунок, а в центре — «казан». Она закаляет ум и выдержку. В начале XX века была создана федерация, и сегодня проводятся мировые чемпионаты.</p><p><b>Играть онлайн:</b> изучите правила и сразитесь с компьютером или другим игроком.</p>",
      "linkLabel": "Играть онлайн →"
    },
    "Asyk": {
      "eyebrow": "Правила игры",
      "title": "Игры в асык — 5 основных видов",
      "body": "<ul class=\"modal-list\"><li><b>Хан талапай</b> — дети встают в круг и асыками выигрывают «хана» в центре.</li><li><b>Атбакыл</b> — точным броском своего асыка с расстояния сбивают асык соперника.</li><li><b>Бес тас</b> — подбросить и поймать одной рукой 5 асыков (любимая игра девочек).</li><li><b>Уш табан</b> — набивать удары по своему асыку, пока он не станет «сака» («хозяином»).</li><li><b>Аандыма-анды</b> — найти спрятанный асык.</li></ul><p>В 2017 году включена в список нематериального культурного наследия ЮНЕСКО.</p>",
      "linkLabel": "Смотреть видео игры →"
    },
    "nomad_sabre": {
      "eyebrow": "Легенды батыров",
      "title": "Абылай хан и казахская сабля",
      "body": "<p>В борьбе против джунгарского нашествия в XVIII веке Абылай хан, а также батыры Абылмансур, Райымбек, Богенбай, Кабанбай и Наурызбай освобождали землю саблей. «Актабан шубырынды» — самая скорбная страница казахской истории войн. В те годы сабля была для воина не просто спутником, а священным оружием, ведущим его душу.</p><p>В войске хана Кенесары (1837-1847) сабля оставалась главным оружием.</p>",
      "linkLabel": "Wikipedia — Абылай хан →"
    },
    "aibalta": {
      "eyebrow": "Тюркское оружие",
      "title": "Айбалта — спутник воина",
      "body": "<p>Айбалта («ай» + «балта» = «топор в форме полумесяца») — боевое оружие тюрко-монгольских воинов. В XVIII-XIX веках использовалась биями и батырами также как знак отличия. Рукоять деревянная, обшитая серебром; лезвие в форме полумесяца длиной 15-25 см. Вес — 1-2 кг.</p><p>В сказаниях встречаются имена «Наурызбай с айбалтой», «Абылай с айбалтой».</p>",
      "linkLabel": "Wikipedia — Айбалта →"
    },
    "qalqan": {
      "eyebrow": "Куфическое письмо",
      "title": "Надписи на калкане и куфическая каллиграфия",
      "body": "<p>На внешней стороне калкана — надписи в стиле куфи: аяты из Корана и защитные молитвы. Куфи — древняя арабская каллиграфия, возникшая в VIII веке и позже распространившаяся по всему исламскому миру. Её геометрический характер позволял наносить надпись на поверхность щита с величавой пропорциональностью.</p><p>Этот калкан XVIII века — один из ценных экспонатов Национального музея.</p>",
      "linkLabel": "О куфи (на англ.) →"
    },
    "yurt_low_quality_texture": {
      "eyebrow": "3D-тур",
      "title": "Путешествие внутрь юрты",
      "body": "<p>Вращая 3D-модель выше, вы можете увидеть внешнюю часть юрты. Чтобы подробнее изучить её внутренние части, выберите одно из действий ниже.</p><ul class=\"modal-list\"><li><b>Шанырак</b> — верхний круг, символ связи с небом</li><li><b>Кереге</b> — решётчатые стены (11-12 звеньев)</li><li><b>Уык</b> — жерди-стропила (40-60 штук)</li><li><b>Босага</b> — пространство у двери, всегда обращённое на закат</li></ul>",
      "linkLabel": "Фотогалерея →"
    },
    "kazakh_shapan": {
      "eyebrow": "Орнамент",
      "title": "Орнаменты и ткани шапана",
      "body": "<p>Орнамент шапана — сплав тюркской и иранской традиций. Самые распространённые виды узоров:</p><ul class=\"modal-list\"><li><b>Кошкар мюиз</b> (бараний рог) — символ изобилия</li><li><b>Казтабан</b> (гусиный след) — жизнь, подобная бурному потоку</li><li><b>Туйе табан</b> (верблюжий след) — выдержка, стойкость</li><li><b>Омир агашы</b> (древо жизни) — единство, преемственность поколений</li></ul><p>Ткани: шёлк, бархат, шерсть, бархатная ткань. Цвет указывал на социальный статус.</p>",
      "linkLabel": "Галерея шапанов →"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "eyebrow": "Виды головных уборов",
      "title": "Мужская такия — региональные особенности",
      "body": "<p>У каждого региона свой стиль такии:</p><ul class=\"modal-list\"><li><b>Юг</b> — высокая, конусовидная форма</li><li><b>Запад</b> — плоская, округлая</li><li><b>Восток</b> — расшитая, объёмная</li><li><b>Центр</b> — лёгкая, средней высоты</li></ul><p>Ткань: бархат, шёлк-шаи, материя, атлас. Внутри — тонкий каркас (арматура).</p>",
      "linkLabel": "Галерея мужских такия →"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "eyebrow": "Свадебные головные уборы",
      "title": "Девичья такия — с пером үкі",
      "body": "<p>Девичья такия — символ девушки, вступающей в пору юности. От мужской такии отличается яркими цветами, узорной вышивкой золотой нитью, нарядными бусинами. Ткань: жёлтый, красный, голубой, зелёный бархат или шёлк.</p><p><b>Перо үкі (филина)</b> — самая священная часть девичьего головного убора. Символ чистоты, красоты и защиты от зла. Потеря пера үкі считалась дурным предзнаменованием.</p>",
      "linkLabel": "Галерея девичьих такия →"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "eyebrow": "Той узату (проводы невесты)",
      "title": "Саукеле — корона казахской невесты",
      "body": "<p>Саукеле — самый дорогой и высокий головной убор, который надевает девушка на свадебном торжестве проводов. Высота достигает 70 см, а порой и 1 метра. Изготавливался потомственными мастерами и порой оценивался в миллионы тенге.</p><p><b>Той узату</b> — обряд переезда девушки из дома отца в очаг семьи жениха. В этот день она надевает саукеле, а лицо закрывает белым покрывалом. После свадьбы саукеле носят ещё 3-5 лет, а затем меняют на кимешек-жаулык.</p>",
      "linkLabel": "Wikipedia — Саукеле →"
    },
    "qamshy_kamshy": {
      "eyebrow": "Искусство мастеров",
      "title": "Мастерство плетения камчи",
      "body": "<p>Плетение камчи (қамшы) — одно из древних ремёсел казахов. Плетётся из кожи в 8, 16, 32 и даже 64 пряди. Мастер размягчает тонкие кожаные полоски в воде, а затем поочерёдно переплетает их.</p><ul class=\"modal-list\"><li><b>8 прядей</b> — простая камча для повседневного использования</li><li><b>16 прядей</b> — нарядная, для подарка</li><li><b>32-64 пряди</b> — вершина мастерства, музейный экспонат</li></ul><p>Рукоять — из берёзы, рога горного козла или кости. Украшается серебряными накладками и орнаментом.</p>",
      "linkLabel": "Галерея камчи →"
    },
    "sedlo": {
      "eyebrow": "Конская упряжь",
      "title": "Седло и упряжь — полное снаряжение",
      "body": "<p>Сёдельный набор — спутник воина и охотника, состоящий из более чем 30 частей:</p><ul class=\"modal-list\"><li><b>Ер (седло)</b> — деревянный каркас, кожаное покрытие</li><li><b>Айыл (подпруга)</b> — ремень, закрепляющий седло на лошади</li><li><b>Сағалдырық (удила)</b> — часть, вставляемая в рот лошади</li><li><b>Жүген (уздечка)</b> — система управления лошадью</li><li><b>Тізгін (повод)</b> — ремень, прикреплённый к уздечке</li><li><b>Үзеңгі (стремя)</b> — опора для ноги</li><li><b>Төстік (нагрудник)</b> — чтобы седло не съезжало на грудь лошади</li></ul>",
      "linkLabel": "Галерея сёдел →"
    },
    "besik": {
      "eyebrow": "Традиция",
      "title": "Обряд «Бесікке салу» (укладывание в колыбель)",
      "body": "<p>Когда ребёнку исполняется 5 дней, проводится праздник «укладывания в колыбель». Это один из важнейших обрядов в жизни матери и ребёнка. Порядок проведения:</p><ul class=\"modal-list\"><li>Старшая бабушка совершает ритуалы колыбели</li><li>В колыбель кладут обереги — священные предметы: амулет, лоскут ткани, кость</li><li>Поётся колыбельная «Әлди-әлди»</li><li>Ребёнку показывают луну и солнце над колыбелью — обряд «Ай, күн көр» (увидеть луну и солнце)</li></ul><p>Затем следуют обряды «тұсау кесер» (разрезание пут на ногах) и «шілдехана» (праздник сорокового дня).</p>",
      "linkLabel": "Смотреть видео обряда →"
    },
    "astau_tabaq": {
      "eyebrow": "Дастархан (праздничный стол)",
      "title": "Дастархан с бешбармаком",
      "body": "<p>Бешбармак — шаңырак (сердце) казахского дастархана. Порядок подачи на подносе (астау):</p><ul class=\"modal-list\"><li>Баранья (или конская) голова — подаётся самому старшему</li><li>Мясо — делится на 4 части: тазовая кость, грудинка, позвонки, рёбра</li><li>Тесто — раскладывается тонко нарезанными пластинами</li><li>Добавляются лук и наваристый бульон</li></ul><p><b>«Бас ұсыну» (подношение головы)</b> — высшая форма почёта. Когда старшему подносят голову, он по определённому порядку разделяет её и раздаёт всем присутствующим.</p>",
      "linkLabel": "Галерея бешбармака →"
    },
    "torsyk_kymyz": {
      "eyebrow": "Культура кумыса",
      "title": "Кумыс — напиток кочевников",
      "body": "<p>Кумыс — национальный казахский напиток из перебродившего кобыльего молока. Его история насчитывает тысячи лет: он был основной пищей скифо-сакских, тюркских и монгольских кочевников.</p><p><b>Приготовление:</b> кобылье молоко заливают в чистый кубi (бурдюк-маслобойку), добавляют закваску (из старого кумыса) и перемешивают мутовкой 1000-2000 раз в день. Через 24-48 часов брожения кумыс готов. Хранится в торсыке (кожаной фляге) в прохладном месте.</p><p>Богатый пробиотиками, освежающий, тонизирующий напиток.</p>",
      "linkLabel": "Галерея кумыса →"
    },
    "kubi": {
      "eyebrow": "Традиционная кубi",
      "title": "Процесс приготовления кумыса в кубi",
      "body": "<p>Кубi — деревянный сосуд, предназначенный для приготовления кумыса. Процесс:</p><ol class=\"modal-list\"><li>Кубi моют и очищают, смазывая бараньим жиром</li><li>Наливают чистое кобылье молоко (примерно 30-40 л)</li><li>Добавляют закваску (остаток предыдущего кумыса, «қор»)</li><li>Перемешивают мутовкой 1000-2000 раз в день</li><li>Выжидают 24-48 часов</li><li>Перебродивший кумыс переливают в торсык</li></ol><p>Благодаря механическому перемешиванию распространяются бактерии, и лактоза превращается в молочную кислоту.</p>",
      "linkLabel": "Видео процесса →"
    },
    "ojau": {
      "eyebrow": "Традиция дастархана",
      "title": "Деревянный ковш — традиция разлива кумыса",
      "body": "<p>За дастарханом ожау (ковш) — в руках старшего. Он «главный разливающий»: в установленном порядке разливает кумыс, айран, шубат.</p><ul class=\"modal-list\"><li><b>Первым</b> — самому старшему гостю по возрасту</li><li><b>Вторым</b> — хозяину дома</li><li><b>Третьим</b> — по старшинству далее</li><li><b>Последними</b> — маленьким детям</li></ul><p>Ковш никогда не ставят на землю — его всегда держат в одной руке. Существует поверье: «Если сосуд упадёт на землю — угощение пропадёт впустую».</p>",
      "linkLabel": "Галерея деревянной посуды →"
    },
    "sandyq": {
      "eyebrow": "Приданое",
      "title": "Приданое в сундуке — наследие невесты",
      "body": "<p>На проводах невесты (ұзату той) мать наполняет сундук дочери — «жасау» (приданое). В сундуке:</p><ul class=\"modal-list\"><li>Расшитый халат, кимешек, платки</li><li>Серебряные браслеты, кольца, серьги, амулеты</li><li>Книга (часто — Коран)</li><li>Семейная реликвия — подарок от матери</li><li>Предметы быта — посуда, узорчатые ткани</li></ul><p><b>«Сандық ашу» (открытие сундука)</b> — обряд открытия сундука невесты в доме новой семьи. Его содержимое оценивают матери и старшие сёстры.</p>",
      "linkLabel": "Галерея сундуков →"
    },
    "kese": {
      "eyebrow": "Отрарская школа",
      "title": "Средневековое гончарное искусство — Отрар, Тараз, Сайрам",
      "body": "<p>Вдоль Великого Шёлкового пути средневековые города Отрар (Фараб), Тараз, Сайрам и Испиджаб были центрами керамического искусства. Отрар — родина Аль-Фараби, один из крупнейших культурных центров мира в X-XIII веках.</p><p><b>Изготовление керамики:</b> глину собирают → очищают → формуют на гончарном круге → обжигают в печи при температуре 800-1000°C → украшают глазурью и красками. Древние мастера добавляли в глину особые примеси (кварц, полевой шпат), делая глазурь на чаше гладкой и блестящей.</p>",
      "linkLabel": "Википедия — Отырар →"
    },
    "balbal_tas": {
      "eyebrow": "Наследие древних тюрков",
      "title": "Балбал таши и памятники Кюльтегина",
      "body": "<p>Балбалы — каменные изваяния древнетюркской эпохи VI-IX веков. Они стояли на могилах прославленных воинов и правителей. Слово «балбал» означает «баба» — предок, покровитель.</p><p>Самые известные примеры — обнаруженные на территории Монголии памятники <b>Кюльтегину</b> и <b>Тоньюкуку</b> (VIII в.). Надпись Кюльтегина — важнейший образец древнетюркской письменной культуры, повествующий об истории Тюркского каганата.</p>",
      "linkLabel": "Википедия — Кюльтегин →"
    },
    "tamgaly_sun_man": {
      "eyebrow": "Экскурсия ЮНЕСКО",
      "title": "Наскальные рисунки Тамгалы — 5000 петроглифов",
      "body": "<p>Тамгалы находится в Алматинской области, в 170 км к северо-западу от Алматы. В 2004 году включён в список Всемирного наследия ЮНЕСКО. Обнаружено более 5000 наскальных изображений.</p><p><b>Сюжеты древних рисунков:</b></p><ul class=\"modal-list\"><li>Солнцеголовые божества (около 10 фигур)</li><li>Охотники и дикие животные</li><li>Всадники-воины</li><li>Танцы и религиозные обряды</li><li>Сцены выпаса скота</li></ul>",
      "linkLabel": "Официальный сайт ЮНЕСКО →"
    },
    "perstenj": {
      "eyebrow": "Искусство серебра",
      "title": "Техники скани и зерни казахских ювелиров",
      "body": "<p>Три важнейшие техники казахских ювелиров:</p><ul class=\"modal-list\"><li><b>Скань</b> — создание узора из тонкой серебряной проволоки</li><li><b>Зернь</b> — напайка мельчайших серебряных шариков на поверхность</li><li><b>Шеке</b> — окантовка цветной эмалью</li></ul><p><b>Камень-оберег</b>: каждый камень, вставляемый в кольцо, имеет своё значение:</p><ul class=\"modal-list\"><li>Агат — авторитет, смелость</li><li>Сердолик — домашний уют, семья</li><li>Бирюза — дорога, путешествие</li><li>Коралл — любовь, привязанность</li></ul>",
      "linkLabel": "Галерея ювелирных изделий →"
    },
    "bilezik": {
      "eyebrow": "Современный ювелир",
      "title": "Шапабаев Кайрат Булатулы — произведения",
      "body": "<p>Шапабаев Кайрат Булатулы — современный казахский ювелир, возрождающий древние тюркские традиции. Его стиль — массивность и геометрическая чёткость. Он черпает вдохновение из истоков тюрко-монгольского искусства, связывая его с современностью.</p><p>Этот браслет — одно из его произведений: три агатовых камня, геометрический орнамент, открытая форма. Он напоминает браслеты древних кочевых ханым (знатных женщин).</p>",
      "linkLabel": "Работы автора →"
    }
  },
  "en": {
    "dombyra_by_sultan_elamanov": {
      "eyebrow": "Listen to the kui",
      "title": "«Balbyrauyn» — Kurmangazy Sagyrbayuly",
      "body": "<p>«Balbyrauyn» is the pinnacle of Kazakh dombra kuis. Composed by Kurmangazy in the 19th century, it conveys the rhythmic swaying of mood through the dombra's two strings. The kui's name, «balbyrau», means «a graceful, flowing movement».</p><p><b>Listen:</b> use the player below or search on YouTube.</p>",
      "linkLabel": "Search on YouTube →"
    },
    "kazakh_qobyz_kobyz": {
      "eyebrow": "Listen to the sound of the qobyz",
      "title": "Korkyt Ata — «Zher Bauyry»",
      "body": "<p>According to legend, Korkyt Ata fled death by playing the qobyz, prolonging his own life through it. «Zher Bauyry» is his most famous kui: it depicts the breathing of the earth, the voice of Mother Earth. The qobyz's sound conveys the human voice with uncanny precision — a mystery that makes the soul tremble.</p>",
      "linkLabel": "Listen on YouTube →"
    },
    "sazsyrnai": {
      "eyebrow": "An ancient sound",
      "title": "Sazsyrnai — the melody of clay",
      "body": "<p>The sazsyrnai is a clay wind instrument dating back to the 2nd millennium BCE. A companion of shepherds and children, and sometimes part of religious rites. Its sound is natural and pure — one that feels directly connected to the earth.</p>",
      "linkLabel": "Listen on YouTube →"
    },
    "shanqobyz": {
      "eyebrow": "Resonance",
      "title": "Shanqobyz — resonance of the mouth",
      "body": "<p>The shanqobyz is one of the most ancient instruments of the Turkic world. A metal tongue is set vibrating by the finger, while the player's mouth cavity acts as a resonator. Varied melodies are shaped through the tongue, lips, and breath of the performer. It was used in shamanic rites and trance meditation.</p>",
      "linkLabel": "Listen on YouTube →"
    },
    "togyzqumalaq": {
      "eyebrow": "Play",
      "title": "Togyzqumalaq — play online",
      "body": "<p>Togyzqumalaq is a Kazakh steppe logic game. Each side has 9 pits, with a «kazan» (cauldron) in the middle. It sharpens the mind and builds composure. A federation was founded in the early 20th century, and world championships are held today.</p><p><b>Play online:</b> learn the rules and compete against the computer or another player.</p>",
      "linkLabel": "Play online →"
    },
    "Asyk": {
      "eyebrow": "Rules of the game",
      "title": "Asyk games — 5 main types",
      "body": "<ul class=\"modal-list\"><li><b>Khan talapai</b> — children stand in a circle and use their asyks to win the «khan» in the center.</li><li><b>Atbaqyl</b> — knock down an opponent's asyk with a precise throw of your own from a distance.</li><li><b>Bes tas</b> — toss and catch 5 asyks with one hand (a favorite among girls).</li><li><b>Ush taban</b> — strike your own asyk repeatedly until it becomes a «saqa» («champion»).</li><li><b>Andyma-andy</b> — find the hidden asyk.</li></ul><p>In 2017, it was added to the UNESCO Representative List of the Intangible Cultural Heritage.</p>",
      "linkLabel": "Watch a game video →"
    },
    "nomad_sabre": {
      "eyebrow": "Legends of the batyrs",
      "title": "Abylai Khan and the Kazakh sabre",
      "body": "<p>Fighting the Dzungar invasions in the 18th century, Abylai Khan, together with batyrs Abylmansur, Raiymbek, Bogenbai, Kabanbai, and Nauryzbai, freed the land with their sabres. «Aqtaban Shubyryndy» is the most sorrowful chapter of the Kazakh wars of that era. In those years, the sabre was not merely a warrior's companion but a sacred weapon that guided his soul.</p><p>In the army of Khan Kenesary (1837-1847), the sabre remained the principal weapon.</p>",
      "linkLabel": "Wikipedia — Abylai Khan →"
    },
    "aibalta": {
      "eyebrow": "Turkic weaponry",
      "title": "Aibalta — a warrior's companion",
      "body": "<p>The aibalta («ai» + «balta» = «crescent-moon axe») was a battle weapon of Turkic-Mongol warriors. In the 18th-19th centuries it was also carried by bis and batyrs as a mark of distinction. The shaft is wood bound in silver; the crescent-shaped blade measures 15-25 cm. It weighs 1-2 kg.</p><p>In legends, figures are described as «Nauryzbai with the aibalta» or «Abylai with the aibalta».</p>",
      "linkLabel": "Wikipedia — Aibalta →"
    },
    "qalqan": {
      "eyebrow": "Kufic script",
      "title": "Inscriptions on the qalqan and Kufic calligraphy",
      "body": "<p>The outer face of the qalqan (shield) bears inscriptions in the Kufic style — verses from the Quran and protective prayers. Kufic is an ancient Arabic calligraphic script that emerged in the 8th century and later spread across the entire Islamic world. Its geometric character allowed the inscription to be rendered across the shield's surface with grand proportion.</p><p>This 18th-century qalqan is one of the prized exhibits of the National Museum.</p>",
      "linkLabel": "About Kufic script →"
    },
    "yurt_low_quality_texture": {
      "eyebrow": "3D tour",
      "title": "A journey inside the yurt",
      "body": "<p>Rotate the 3D model above to see the outer structure of the yurt. To explore its interior parts more closely, choose one of the actions below.</p><ul class=\"modal-list\"><li><b>Shanyraq</b> — the upper circular opening, a symbol of the link with the sky</li><li><b>Kerege</b> — the lattice wall frames (11-12 sections)</li><li><b>Uyq</b> — the roof poles (40-60 pieces)</li><li><b>Bosaga</b> — the threshold area, always facing the sunset</li></ul>",
      "linkLabel": "Photo gallery →"
    },
    "kazakh_shapan": {
      "eyebrow": "Ornament",
      "title": "Shapan ornaments and fabrics",
      "body": "<p>The ornament of the shapan blends Turkic and Iranian traditions. The most widespread patterns are:</p><ul class=\"modal-list\"><li><b>Qoshqar müyiz</b> (ram's horn) — a symbol of abundance</li><li><b>Qaztaban</b> (goose foot) — life as a rushing current</li><li><b>Tüye taban</b> (camel foot) — patience and endurance</li><li><b>Ömir agashy</b> (tree of life) — unity and continuity of generations</li></ul><p>Fabrics: silk, velvet, wool, and velveteen. Colour indicated social status.</p>",
      "linkLabel": "Shapan gallery →"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "eyebrow": "Types of headwear",
      "title": "Men's taqiya — regional variations",
      "body": "<p>Every region has its own style of taqiya:</p><ul class=\"modal-list\"><li><b>South</b> — a tall, conical shape</li><li><b>West</b> — flat and rounded</li><li><b>East</b> — richly embroidered and voluminous</li><li><b>Centre</b> — light, of medium height</li></ul><p>Fabric: velvet, shai silk, cloth, satin. A thin frame (stiffener) is fitted inside.</p>",
      "linkLabel": "Men's taqiya gallery →"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "eyebrow": "Wedding headwear",
      "title": "Girl's taqiya — with üki (eagle-owl) feathers",
      "body": "<p>A girl's taqiya is a symbol of a young woman entering maidenhood. It differs from the men's taqiya through its bright colours, gold-thread embroidery, and ornate beadwork. Fabric: yellow, red, sky-blue, or green velvet or silk.</p><p><b>The üki feather (eagle-owl plume)</b> is the most sacred part of a girl's headdress. It symbolises purity, beauty, and protection from evil. Losing an üki feather was considered a grave omen.</p>",
      "linkLabel": "Girls' taqiya gallery →"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "eyebrow": "The uzatu wedding feast",
      "title": "Saukele — the crown of a Kazakh bride",
      "body": "<p>The saukele is the most expensive and tallest headdress a girl wears at her farewell wedding feast. Its height reaches 70 cm, and sometimes even a full metre. It was crafted by hereditary master artisans and could be valued at millions of tenge.</p><p><b>Toi uzatu</b> is the ceremony of a girl's move from her father's home to the hearth of her husband's family. On that day she wears the saukele, her face covered with a white veil. After the wedding, the saukele is worn for another 3-5 years, then exchanged for the kimeshek-zhaulyq.</p>",
      "linkLabel": "Wikipedia — Saukele →"
    },
    "qamshy_kamshy": {
      "eyebrow": "Craft of Masters",
      "title": "The Craft of Braiding a Kamshy (Whip)",
      "body": "<p>Braiding the kamshy (whip) is one of the ancient Kazakh crafts. It is woven from leather in 8, 16, 32, or even 64 strands. The craftsman softens thin leather strips in water, then weaves them together in turn.</p><ul class=\"modal-list\"><li><b>8 strands</b> — a simple, everyday whip</li><li><b>16 strands</b> — decorative, given as a gift</li><li><b>32-64 strands</b> — the pinnacle of craftsmanship, a museum piece</li></ul><p>The handle is made of birch, mountain goat horn, or bone. It is adorned with silver fittings and ornamentation.</p>",
      "linkLabel": "Kamshy Gallery →"
    },
    "sedlo": {
      "eyebrow": "Horse Tack",
      "title": "Saddle and Tack — Complete Gear",
      "body": "<p>The saddle set is a warrior's and hunter's companion, made up of more than 30 parts:</p><ul class=\"modal-list\"><li><b>Er (saddle)</b> — a wooden frame with a leather cover</li><li><b>Ayil (girth)</b> — the strap that secures the saddle to the horse</li><li><b>Sagaldyryk (bit)</b> — the piece placed in the horse's mouth</li><li><b>Zhugen (bridle)</b> — the system for steering the horse</li><li><b>Tizgin (reins)</b> — the strap attached to the bridle</li><li><b>Uzengi (stirrup)</b> — support for the foot</li><li><b>Tostik (breast strap)</b> — keeps the saddle from sliding onto the horse's chest</li></ul>",
      "linkLabel": "Saddle Gallery →"
    },
    "besik": {
      "eyebrow": "Tradition",
      "title": "The 'Besikke Salu' (Cradling) Ceremony",
      "body": "<p>When a baby turns 5 days old, the 'besikke salu' (cradling) celebration is held — one of the most important rites in the life of mother and child. The order of the ceremony:</p><ul class=\"modal-list\"><li>The eldest grandmother performs the cradle rituals</li><li>Protective items — an amulet, a scrap of cloth, a bone — are placed in the cradle as talismans</li><li>The lullaby 'Aldi-aldi' is sung</li><li>The moon and sun are shown over the cradle — the 'Ai, kün kör' (see the moon and sun) rite</li></ul><p>Afterward come the 'tusau keser' (cutting the leg-binding cord) and 'shildehana' (40-day celebration) ceremonies.</p>",
      "linkLabel": "Watch the Ceremony Video →"
    },
    "astau_tabaq": {
      "eyebrow": "Dastarkhan (Feast Table)",
      "title": "Beshbarmak Feast",
      "body": "<p>Beshbarmak is the shanyrak — the heart — of the Kazakh dastarkhan (feast table). The order of serving on the platter (astau):</p><ul class=\"modal-list\"><li>The sheep's (or horse's) head — presented to the eldest</li><li>Meat — divided into 4 parts: pelvic bone, brisket, spine, ribs</li><li>Dough — laid out in thinly cut sheets</li><li>Onion and rich broth are added</li></ul><p><b>'Bas usynu' (presenting the head)</b> — the highest form of respect. When the head is presented to the eldest, he divides it in a set order and shares it among everyone present.</p>",
      "linkLabel": "Beshbarmak Gallery →"
    },
    "torsyk_kymyz": {
      "eyebrow": "Kumys Culture",
      "title": "Kumys — the Nomads' Drink",
      "body": "<p>Kumys is the Kazakh national drink made from fermented mare's milk. It has a history spanning thousands of years, serving as a staple food of the Scythian-Saka, Turkic, and Mongol nomads.</p><p><b>Preparation:</b> mare's milk is poured into a clean kubi (churn), a starter culture (from old kumys) is added, and it is stirred with a plunger 1,000-2,000 times a day. After 24-48 hours of fermentation, the kumys is ready. It is kept cool in a torsyk (leather flask).</p><p>A drink rich in probiotics — refreshing and invigorating.</p>",
      "linkLabel": "Kumys Gallery →"
    },
    "kubi": {
      "eyebrow": "Traditional Kubi (Churn)",
      "title": "The Process of Making Kumys in a Kubi",
      "body": "<p>The kubi is a wooden vessel used for making kumys. The process:</p><ol class=\"modal-list\"><li>The kubi is washed and cleaned, then rubbed with sheep fat</li><li>Fresh mare's milk is poured in (about 30-40 liters)</li><li>A starter culture (leftover from the previous batch, 'kor') is added</li><li>It is stirred with a plunger 1,000-2,000 times a day</li><li>It is left to ferment for 24-48 hours</li><li>The fermented kumys is transferred into a torsyk</li></ol><p>The mechanical stirring spreads the bacteria, converting lactose into lactic acid.</p>",
      "linkLabel": "Process Video →"
    },
    "ojau": {
      "eyebrow": "Dastarkhan Tradition",
      "title": "The Wooden Ladle — Kumys-Pouring Tradition",
      "body": "<p>At the dastarkhan, the ozhau (ladle) stays in the hands of the eldest. He is the 'chief pourer,' serving kumys, ayran, and shubat in a set order.</p><ul class=\"modal-list\"><li><b>First</b> — to the eldest guest</li><li><b>Second</b> — to the host</li><li><b>Third</b> — in order of age thereafter</li><li><b>Last</b> — to the young children</li></ul><p>The vessel is never set down on the ground — it is always held in one hand. There is a belief: 'If the vessel falls to the ground, the offering goes to waste.'</p>",
      "linkLabel": "Wooden Vessel Gallery →"
    },
    "sandyq": {
      "eyebrow": "Dowry-Giving",
      "title": "The Dowry Chest — a Bride's Legacy",
      "body": "<p>At the bride's send-off (uzatu toi), the mother fills her daughter's chest — the 'zhasau' (dowry). Inside the chest:</p><ul class=\"modal-list\"><li>An embroidered robe, kimeshek headdress, and scarves</li><li>Silver bracelets, rings, earrings, and amulets</li><li>A book (often the Quran)</li><li>A family heirloom — a gift from the mother</li><li>Household items — dishware and patterned fabric</li></ul><p><b>'Sandyq ashu' (opening the chest)</b> — the ceremony of opening the bride's chest at her new family's home. Its contents are appraised by the mothers and elder sisters.</p>",
      "linkLabel": "Chest Gallery →"
    },
    "kese": {
      "eyebrow": "Otrar School",
      "title": "Medieval Pottery Art — Otrar, Taraz, Sairam",
      "body": "<p>Along the Great Silk Road, the medieval cities of Otrar (Farab), Taraz, Sairam, and Isfijab were centers of ceramic art. Otrar, the birthplace of Al-Farabi, was one of the world's major cultural centers in the 10th-13th centuries.</p><p><b>Making ceramics:</b> clay is gathered → purified → shaped on a potter's wheel → fired in a kiln at 800-1,000°C → decorated with glaze and paint. Ancient craftsmen added special additives (quartz, feldspar) to the clay, making the glaze on the bowl smooth and glossy.</p>",
      "linkLabel": "Wikipedia — Otyrar →"
    },
    "balbal_tas": {
      "eyebrow": "Ancient Turkic Heritage",
      "title": "Balbal Stones and the Kültegin Monuments",
      "body": "<p>Balbal stones are stone sculptures of the ancient Turkic era, from the 6th-9th centuries. They stood at the graves of renowned warriors and rulers. The word 'balbal' means 'baba' — ancestor, protector.</p><p>The most famous examples are the <b>Kültegin</b> and <b>Tonyukuk</b> monuments (8th c.), found in Mongolia. The Kültegin inscription is the most important surviving example of ancient Turkic written culture, recounting the history of the Turkic Khaganate.</p>",
      "linkLabel": "Wikipedia — Kültegin →"
    },
    "tamgaly_sun_man": {
      "eyebrow": "UNESCO Tour",
      "title": "The Tamgaly Petroglyphs — 5,000 Rock Carvings",
      "body": "<p>Tamgaly is located in Almaty Region, 170 km northwest of Almaty. It was inscribed on the UNESCO World Heritage List in 2004. More than 5,000 rock carvings have been found there.</p><p><b>Themes of the ancient images:</b></p><ul class=\"modal-list\"><li>Sun-headed deities (about 10 figures)</li><li>Hunters and wild animals</li><li>Mounted warriors</li><li>Dancing and religious rites</li><li>Livestock-herding scenes</li></ul>",
      "linkLabel": "Official UNESCO Website →"
    },
    "perstenj": {
      "eyebrow": "Silver Craft",
      "title": "Filigree and Granulation Techniques of Kazakh Jewelers",
      "body": "<p>The three most important techniques of Kazakh jewelers:</p><ul class=\"modal-list\"><li><b>Filigree</b> — creating a pattern from thin silver wire</li><li><b>Granulation</b> — soldering microscopic silver beads onto the surface</li><li><b>Sheke</b> — edging with colored enamel</li></ul><p><b>Protective stones</b>: each stone set into a ring carries its own meaning:</p><ul class=\"modal-list\"><li>Agate — authority, courage</li><li>Carnelian — home comfort, family</li><li>Turquoise — journey, travel</li><li>Coral — love, affection</li></ul>",
      "linkLabel": "Jewelry Gallery →"
    },
    "bilezik": {
      "eyebrow": "Contemporary Jeweler",
      "title": "Shapabayev Kairat Bulatuly — Works",
      "body": "<p>Shapabayev Kairat Bulatuly is a contemporary Kazakh jeweler who revives ancient Turkic traditions. His style is defined by massiveness and geometric precision. He draws inspiration from the roots of Turkic-Mongol art, connecting it to the present day.</p><p>This bracelet is one of his works: three agate stones, geometric ornamentation, an open form. It resembles the bracelets worn by noblewomen (khanym) of the ancient nomads.</p>",
      "linkLabel": "Artist's Works →"
    }
  }
};

/* ─── language state + tiny translate helper (used by both pages) ─── */
let LANG = (function(){ try { return localStorage.getItem('dm_lang') || 'kz'; } catch(e){ return 'kz'; } })();
function t(key){
  return (UI_I18N[LANG] && UI_I18N[LANG][key]) || (UI_I18N.kz && UI_I18N.kz[key]) || key;
}
